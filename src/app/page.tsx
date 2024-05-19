'use client'
import { useState } from 'react'
import { useAccount, useEnsName, useConnect, useDisconnect } from 'wagmi'
import { walletConnect, injected } from '@wagmi/connectors'
import { Box, Text, Button, VStack } from '@chakra-ui/react'
import { useReadProTokenBalanceOf } from '../generated'
// import { usePool, PoolState } from '../hooks/useUniswapPoolData' // Adjust the import path as necessary
import { Token, WETH9 } from '@uniswap/sdk-core'

const BURN_ADDRESS: any = '0x000000000000000000000000000000000000dEaD'

function Profile(): any {
    const { address }: any = useAccount()
    const { data: ensName, error, status }: any = useEnsName({ address })

    if (status === 'loading') return <div>Loading ENS name...</div>
    if (status === 'error') return <div>Error fetching ENS name: {error.message}</div>
    return <div>ENS Name: {ensName || 'No ENS name'}</div>
}

export default function HomePage(): any {
    const { connect }: any = useConnect({
        connectors: [
            injected(),
            walletConnect({
                options: {
                    projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
                    rpc: {
                        1: 'https://eth.llamarpc.com', // Replace with your RPC URL
                        8453: 'https://mainnet.base.org', // Base chain RPC URL
                    },
                    qrcode: true,
                },
            }),
        ],
    })
    const { disconnect }: any = useDisconnect()
    const { isConnected, address }: any = useAccount()
    const [status, setStatus]: any = useState('')

    const { data: proBalance, isError, isLoading }: any = useReadProTokenBalanceOf({
        args: address ? [address] : undefined,
        chainId: 8453, // Ensure we're using the correct chain ID
        enabled: !!address,
    })

    // Example tokens, replace with actual tokens and fee amount
    const tokenA: any = new Token(8453, '0xTokenA', 18, 'TOKENA', 'Token A')
    const tokenB: any = WETH9[8453]
    const feeAmount: any = 3000

    // const [poolState, pool]: any = usePool(tokenA, tokenB, feeAmount)

    const handleButtonClick: any = async () => {
        if (!isConnected) {
            setStatus('Connect your wallet first.')
            return
        }

        setStatus('Processing...')

        try {
            // Add your transaction logic here
            setStatus('Transaction completed successfully.')
        } catch (error: any) {
            setStatus('Transaction failed. ' + error.message)
        }
    }

    return (
        <Box textAlign="center" py={10}>
            <VStack spacing={4}>
                {isConnected ? (
                    <>
                        <Text>Connected as {address}</Text>
                        <Profile />
                        {isLoading ? (
                            <Text>Loading PRO Balance...</Text>
                        ) : isError ? (
                            <Text>Error fetching balance</Text>
                        ) : (
                            <Text>PRO Balance: {proBalance?.toString() || '0'}</Text>
                        )}
                        <Button onClick={disconnect} colorScheme="red">Disconnect</Button>
                    </>
                ) : (
                    <>
                        <Button onClick={() => connect({ connector: injected() })} colorScheme="teal">Connect with MetaMask</Button>
                        <Button onClick={() => connect({ connector: walletConnect({
                                options: {
                                    projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
                                    rpc: {
                                        1: 'https://eth.llamarpc.com', // Replace with your RPC URL
                                        8453: 'https://mainnet.base.org', // Base chain RPC URL
                                    },
                                    qrcode: true,
                                },
                            }) })} colorScheme="teal">Connect with WalletConnect</Button>
                    </>
                )}
                <Button
                    onClick={handleButtonClick}
                    fontSize="24px"
                    fontWeight="bold"
                    color="white"
                    bg="#ff6347"
                    border="5px solid #ff4500"
                    borderRadius="50%"
                    p="20px 40px"
                    _hover={{ bg: "#ff4500", transform: "scale(1.1)", boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)" }}
                    _active={{ transform: "scale(0.9)", boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.2)" }}
                >
                    GM
                </Button>
                {status && <Text mt={4}>{status}</Text>}
            </VStack>
        </Box>
    )
}
