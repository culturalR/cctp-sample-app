import { screen } from '@testing-library/react'

import { render } from 'tests/renderer'

import MainnetSend from './MainnetSend'

describe('MainnetSend', () => {
  it('renders mainnet send page', () => {
    render(<MainnetSend />)

    expect(screen.getByText(/Transfer USDC across Mainnet chains/i)).toBeInTheDocument()
    expect(screen.getByText(/Mainnet Mode/i)).toBeInTheDocument()
  })
})
