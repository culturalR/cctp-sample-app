import { screen } from '@testing-library/react'

import { render } from 'tests/renderer'

import TestnetSend from './TestnetSend'

describe('TestnetSend', () => {
  it('renders testnet send page', () => {
    render(<TestnetSend />)

    expect(screen.getByText(/Transfer USDC across Testnet chains/i)).toBeInTheDocument()
    expect(screen.getByText(/Testnet Mode/i)).toBeInTheDocument()
  })
})
