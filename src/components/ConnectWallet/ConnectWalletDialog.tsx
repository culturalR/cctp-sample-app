import CloseIcon from '@mui/icons-material/Close'
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material'

import IconMetaMask from 'assets/icon-metamask.png'
import IconWalletConnect from 'assets/icon-walletconnect.svg'
import ConnectWalletDialogButton from 'components/ConnectWallet/ConnectWalletDialogButton'
import { injected, walletconnect } from 'components/Wallet/Connectors'

import type { SxProps } from '@mui/material'
import type { AbstractConnector } from '@web3-react/abstract-connector'

interface Props {
  handleClose: () => void
  handleConnect: (connector: AbstractConnector) => void
  open: boolean
  sx?: SxProps
}

const ConnectWalletDialog: React.FC<Props> = ({
  handleClose,
  handleConnect,
  open,
  sx = {},
}) => {
  return (
    <Dialog fullWidth={true} onClose={handleClose} open={open}>
      <DialogTitle>Connect wallet</DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-4">
          <ConnectWalletDialogButton
            onClick={() => handleConnect(injected)}
            subtitle="Connect using MetaMask"
            title="MetaMask"
            imgSrc={IconMetaMask}
          />
          <ConnectWalletDialogButton
            onClick={() => handleConnect(walletconnect)}
            subtitle="Scan with WalletConnect"
            title="WalletConnect"
            imgSrc={IconWalletConnect}
          />
        </div>
      </DialogContent>

      <IconButton className="absolute right-3 top-3" onClick={handleClose}>
        <CloseIcon />
      </IconButton>
    </Dialog>
  )
}

export default ConnectWalletDialog
