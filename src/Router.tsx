import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { History } from './pages/History';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/history" element={<History />}></Route>
      </Route>
        { /* 
          Exemplo: De como aplicar layout em outras rotas,
          é só adicionar outro Route encadeado. Tudo que 
          começar com /admin agora vai aplicar AdminLayout
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/products" element={<Products />}></Route>
          </Route>
          localhost:3000/admin/products
        */ }
    </Routes>
  );
}