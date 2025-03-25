import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './components/pages/home';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
