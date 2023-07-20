import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import App from './App'
import { UserProvider } from './components/contexts/user.context'
import { CartProvider } from './components/contexts/cart.context'

import './index.css'
import { CategoriesProvider } from './components/contexts/categories.context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals()
