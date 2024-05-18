// page.tsx

'use client'

import { useState } from 'react'
import { useAccount, useEnsName } from 'wagmi'

// import { useSigner, useProvider } from 'wagmi'
import { Box, Text, Button } from '@chakra-ui/react'

const PRO_ADDRESS = '0xef743df8eda497bcf1977393c401a636518dd630' // Replace with your actual PRO token address
const UNISWAP_ROUTER_ADDRESS = '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD' // Replace with your actual Uniswap router address
const BURN_ADDRESS = '0x000000000000000000000000000000000000dEaD'

function Profile() {
    const { address } = useAccount()
    const { data, error, status } = useEnsName({ address })
    if (status === 'pending') return <div>Loading ENS name</div>
    if (status === 'error')
        return <div>Error fetching ENS name: {error.message}</div>
    return <div>ENS name: {data}</div>
}

export default function HomePage() {
  // const { data: signer } = useSigner()
  // const provider = useProvider()
  const [status, setStatus] = useState('')

  const handleButtonClick = async () => {
    // if (!signer) {
    //   setStatus('Connect your wallet first.')
    //   return
    // }

    setStatus('Processing...')

    try {
      // const contract = new ethers.Contract(UNISWAP_ROUTER_ADDRESS, ERC20_ABI, signer)
      //
      // // Market buy 5 USD worth of PRO
      // const proRate = await get_rate_pro()
      // const amountProToBuy = ethers.utils.parseUnits((5 / proRate).toFixed(18), 18)
      // await contract.swapExactETHForTokens(0, [ethers.constants.AddressZero, PRO_ADDRESS], signer.getAddress(), Date.now() + 1000 * 60 * 10, { value: ethers.utils.parseEther('0.005') })
      //
      // // Place $10 ($5 ETH and $5 PRO) into a Uniswap v3 LP position
      // const ethAmount = ethers.utils.parseEther('0.005')
      // const proAmount = ethers.utils.parseUnits('5', 18)
      // await contract.addLiquidity(PRO_ADDRESS, ethers.constants.AddressZero, proAmount, ethAmount, 0, 0, signer.getAddress(), Date.now() + 1000 * 60 * 10)
      //
      // // Send LP tokens to burn address
      // const lpTokenAddress = await contract.getPair(PRO_ADDRESS, ethers.constants.AddressZero)
      // const lpContract = new ethers.Contract(lpTokenAddress, ERC20_ABI, signer)
      // const lpBalance = await lpContract.balanceOf(signer.getAddress())
      // await lpContract.transfer(BURN_ADDRESS, lpBalance)

      setStatus('Transaction completed successfully.')
    } catch (error) {
      setStatus('Transaction failed. ' + error.message)
    }
  }

  return (
      <Box textAlign="center" py={10}>
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
      </Box>
  )
}
