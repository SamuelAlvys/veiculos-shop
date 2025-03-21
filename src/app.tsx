import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/header';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/"/>
          <Route path="/dashboard"/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
