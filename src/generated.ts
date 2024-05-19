import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const proTokenAbi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const proTokenAddress = {
  8453: '0xEF743df8eDa497bCf1977393c401A636518DD630',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const proTokenConfig = {
  address: proTokenAddress,
  abi: proTokenAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link proTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useReadProToken = /*#__PURE__*/ createUseReadContract({
  abi: proTokenAbi,
  address: proTokenAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useReadProTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: proTokenAbi,
  address: proTokenAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useReadProTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: proTokenAbi,
  address: proTokenAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useReadProTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: proTokenAbi,
  address: proTokenAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useReadProTokenName = /*#__PURE__*/ createUseReadContract({
  abi: proTokenAbi,
  address: proTokenAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useReadProTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: proTokenAbi,
  address: proTokenAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useReadProTokenTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: proTokenAbi,
  address: proTokenAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link proTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useWriteProToken = /*#__PURE__*/ createUseWriteContract({
  abi: proTokenAbi,
  address: proTokenAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useWriteProTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: proTokenAbi,
  address: proTokenAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useWriteProTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: proTokenAbi,
  address: proTokenAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useWriteProTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: proTokenAbi,
    address: proTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link proTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useSimulateProToken = /*#__PURE__*/ createUseSimulateContract({
  abi: proTokenAbi,
  address: proTokenAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useSimulateProTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: proTokenAbi,
    address: proTokenAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useSimulateProTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: proTokenAbi,
    address: proTokenAddress,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link proTokenAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useSimulateProTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: proTokenAbi,
    address: proTokenAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link proTokenAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useWatchProTokenEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: proTokenAbi,
  address: proTokenAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link proTokenAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useWatchProTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: proTokenAbi,
    address: proTokenAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link proTokenAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF743df8eDa497bCf1977393c401A636518DD630)
 */
export const useWatchProTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: proTokenAbi,
    address: proTokenAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useReadErc20 = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const useReadErc20Allowance = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc20BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const useReadErc20Decimals = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc20Name = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc20Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc20TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc20Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWriteErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc20Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useWriteErc20Transfer = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc20TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const useSimulateErc20 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc20Approve = /*#__PURE__*/ createUseSimulateContract({
  abi: erc20Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateErc20Transfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc20Abi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc20TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc20Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const useWatchErc20Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc20Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc20ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc20TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc20Abi,
    eventName: 'Transfer',
  })
