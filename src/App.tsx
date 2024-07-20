
import './App.css'
import { green } from "@ant-design/colors"
import { ConfigProvider } from 'antd'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { AppContextProvider } from './context'
// Create a new router instance
const router = createRouter({ routeTree })
// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <AppContextProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: green[5],
            colorPrimaryBg: green[1]
          }
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </AppContextProvider>
  )
}

export default App
