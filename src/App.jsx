import './App.css'
import ClientesPage from './pages/clientes/ClientesPage'
import CreateClientePage from './pages/clientes/CreateClientePage'
import EditClientePage from './pages/clientes/EditClientePage'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/clientes/create" element={<CreateClientePage />} />
        <Route path="/clientes/edit/:id" element={<EditClientePage />} />
        <Route path="*" element={<Navigate to="/clientes" replace />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App