import { useState, useEffect, useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Interface } from '@ethersproject/abi'
import { Token, FeeAmount } from '@uniswap/sdk-core'
import { computePoolAddress, Pool } from '@uniswap/v3-sdk'
import { useMultipleContractSingleData } from '../lib/hooks/multicall'
import IUniswapV3PoolStateJSON from '@uniswap/v3-core/artifacts/contracts/interfaces/pool/IUniswapV3PoolState.sol/IUniswapV3PoolState.json'
import JSBI from 'jsbi'

const POOL_STATE_INTERFACE: any = new Interface(IUniswapV3PoolStateJSON.abi)

export enum PoolState {
    LOADING,
    NOT_EXISTS,
    EXISTS,
    INVALID,
}

class PoolCache {
    static MAX_ENTRIES: any = 128
    static pools: any[] = []
    static addresses: any[] = []

    static getPoolAddress(factoryAddress: any, tokenA: any, tokenB: any, fee: any): any {
        if (this.addresses.length > this.MAX_ENTRIES) {
            this.addresses = this.addresses.slice(0, this.MAX_ENTRIES / 2)
        }

        const addressA: any = tokenA.address
        const addressB: any = tokenB.address
        const key: any = `${factoryAddress}:${addressA}:${addressB}:${fee.toString()}`
        const found: any = this.addresses.find((address) => address.key === key)
        if (found) return found.address

        const address: any = {
            key,
            address: computePoolAddress({ factoryAddress, tokenA, tokenB, fee }),
        }
        this.addresses.unshift(address)
        return address.address
    }

    static getPool(tokenA: any, tokenB: any, fee: any, sqrtPriceX96: any, liquidity: any, tick: any): any {
        if (this.pools.length > this.MAX_ENTRIES) {
            this.pools = this.pools.slice(0, this.MAX_ENTRIES / 2)
        }

        const found: any = this.pools.find(
            (pool) =>
                pool.token0 === tokenA &&
                pool.token1 === tokenB &&
                pool.fee === fee &&
                JSBI.EQ(pool.sqrtRatioX96, sqrtPriceX96) &&
                JSBI.EQ(pool.liquidity, liquidity) &&
                pool.tickCurrent === tick
        )
        if (found) return found

        const pool: any = new Pool(tokenA, tokenB, fee, sqrtPriceX96, liquidity, tick)
        this.pools.unshift(pool)
        return pool
    }
}

export function usePools(poolKeys: any): any {
    const { chainId }: any = useWeb3React()

    const poolTokens: any = useMemo(() => {
        if (!chainId) return new Array(poolKeys.length)
        return poolKeys.map(([currencyA, currencyB, feeAmount]: any) => {
            if (currencyA && currencyB && feeAmount) {
                const tokenA: any = currencyA.wrapped
                const tokenB: any = currencyB.wrapped
                if (tokenA.equals(tokenB)) return undefined
                return tokenA.sortsBefore(tokenB) ? [tokenA, tokenB, feeAmount] : [tokenB, tokenA, feeAmount]
            }
            return undefined
        })
    }, [chainId, poolKeys])

    const poolAddresses: any = useMemo(() => {
        const v3CoreFactoryAddress: any = chainId && V3_CORE_FACTORY_ADDRESSES[chainId]
        if (!v3CoreFactoryAddress) return new Array(poolTokens.length)
        return poolTokens.map((value: any) => value && PoolCache.getPoolAddress(v3CoreFactoryAddress, ...value))
    }, [chainId, poolTokens])

    const slot0s: any = useMultipleContractSingleData(poolAddresses, POOL_STATE_INTERFACE, 'slot0')
    const liquidities: any = useMultipleContractSingleData(poolAddresses, POOL_STATE_INTERFACE, 'liquidity')

    return useMemo(() => {
        return poolKeys.map((_key: any, index: any) => {
            const tokens: any = poolTokens[index]
            if (!tokens) return [PoolState.INVALID, null]
            const [token0, token1, fee]: any = tokens

            if (!slot0s[index]) return [PoolState.INVALID, null]
            const { result: slot0, loading: slot0Loading, valid: slot0Valid }: any = slot0s[index]

            if (!liquidities[index]) return [PoolState.INVALID, null]
            const { result: liquidity, loading: liquidityLoading, valid: liquidityValid }: any = liquidities[index]

            if (!tokens || !slot0Valid || !liquidityValid) return [PoolState.INVALID, null]
            if (slot0Loading || liquidityLoading) return [PoolState.LOADING, null]
            if (!slot0 || !liquidity) return [PoolState.NOT_EXISTS, null]
            if (!slot0.sqrtPriceX96 || slot0.sqrtPriceX96.eq(0)) return [PoolState.NOT_EXISTS, null]

            try {
                const pool: any = PoolCache.getPool(token0, token1, fee, slot0.sqrtPriceX96, liquidity[0], slot0.tick)
                return [PoolState.EXISTS, pool]
            } catch (error: any) {
                console.error('Error when constructing the pool', error)
                return [PoolState.NOT_EXISTS, null]
            }
        })
    }, [liquidities, poolKeys, slot0s, poolTokens])
}

export function usePool(currencyA: any, currencyB: any, feeAmount: any): any {
    const poolKeys: any = useMemo(() => [[currencyA, currencyB, feeAmount]], [currencyA, currencyB, feeAmount])
    return usePools(poolKeys)[0]
}
