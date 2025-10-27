import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from "./components/Layout.jsx"
import {BrowserRouter,Routes,  Route} from "react-router"
import DetailPage from "./pages/DetailPage.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="/details" element={<DetailPage />} />
    </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
