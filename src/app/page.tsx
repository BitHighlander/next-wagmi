'use client'

import { useState } from 'react'
import { useAccount, useEnsName, useConnect, useDisconnect } from 'wagmi'
import { walletConnect, injected } from '@wagmi/connectors'
import { Box, Text, Button, VStack } from '@chakra-ui/react'
import { useReadProTokenBalanceOf } from '../generated'

const BURN_ADDRESS = '0x000000000000000000000000000000000000dEaD'

function Profile() {
    const { address } = useAccount()
    const { data: ensName, error, status } = useEnsName({ address })

    if (status === 'loading') return <div>Loading ENS name...</div>
    if (status === 'error') return <div>Error fetching ENS name: {error.message}</div>
    return <div>ENS Name: {ensName || 'No ENS name'}</div>
}

export default function HomePage() {
    const { connect } = useConnect({
        connectors: [
            injected(),
            walletConnect({
                options: {
                    projectId: '3fcc6bba6f1de962d911bb5b5c3dba68',
                    rpc: {
                        1: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Replace with your RPC URL
                        8453: 'https://mainnet.base.org', // Base chain RPC URL
                    },
                    qrcode: true,
                },
            }),
        ],
    })
    const { disconnect } = useDisconnect()
    const { isConnected, address } = useAccount()
    const { chain } = useAccount()
    const [status, setStatus] = useState('')

    // Read the PRO token balance using the generated hook
    const { data: proBalance, isError, isLoading } = useReadProTokenBalanceOf({
        args: address ? [address] : undefined,
        chainId: chain?.id, // Ensure we're using the correct chain ID
        enabled: !!address,
    })

    const handleButtonClick = async () => {
        if (!isConnected) {
            setStatus('Connect your wallet first.')
            return
        }

        setStatus('Processing...')

        try {
            // Add your transaction logic here

            setStatus('Transaction completed successfully.')
        } catch (error) {
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
                                        1: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID', // Replace with your RPC URL
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
