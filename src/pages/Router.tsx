import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import AppLayout from 'layouts/AppLayout'

import MainnetSend from './Mainnet/MainnetSend'
import Redeem from './Redeem/Redeem'
import TestnetSend from './Testnet/TestnetSend'
import Transactions from './Transactions/Transactions'

export interface RouteConfig {
  path: string
  label: string
  component: React.ComponentType
  nav: boolean
}

export const routes: RouteConfig[] = [
  // Mainnet routes
  {
    path: '/mainnet',
    label: 'Mainnet Transfer',
    component: MainnetSend,
    nav: true,
  },
  {
    path: '/mainnet/redeem',
    label: 'Mainnet Redeem',
    component: Redeem,
    nav: false,
  },
  // Testnet routes
  {
    path: '/testnet',
    label: 'Testnet Transfer',
    component: TestnetSend,
    nav: true,
  },
  {
    path: '/testnet/redeem',
    label: 'Testnet Redeem',
    component: Redeem,
    nav: false,
  },
  // Shared routes
  {
    path: '/transactions',
    label: 'Transactions',
    component: Transactions,
    nav: false,
  },
  // Root redirect
  {
    path: '/',
    label: 'Root',
    component: () => <Navigate to="/mainnet" replace />,
    nav: false,
  },
]

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => {
        const Page = route.component
        return <Route key={route.path} path={route.path} element={<Page />} />
      })}
    </Routes>
  )
}

function Router() {
  return (
    <BrowserRouter>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </BrowserRouter>
  )
}

export default Router
