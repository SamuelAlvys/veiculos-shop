import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" />
          <Route path="/dashboard"/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
