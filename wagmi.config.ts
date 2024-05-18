import { defineConfig } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { erc20Abi } from 'viem'
import { mainnet, sepolia, base } from 'wagmi/chains'

export default defineConfig({
  out: 'src/generated.ts',
  contracts: [
    {
      name: 'erc20',
      abi: erc20Abi,
    },
    {
      name: 'ProToken',
      abi: erc20Abi,
      address: {
        [base.id]: '0xEF743df8eDa497bCf1977393c401A636518DD630',
      },
    },
  ],
  plugins: [
    react(),
  ],
})
