import Layout from './components/Home/Layout.js'
import './styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage.js';
import CarList from './pages/AdminPage.js';
import Parcheggio from './pages/Parking.js';
import Home from './pages/Home.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout>
          <Home />
        </Layout>} />
        <Route path="/UserPage" element={
          <Layout>
            {<UserPage/>}
          </Layout>} />
        <Route path="/AdminPage" element={
          <Layout>
            {<CarList />}
          </Layout>
        } />
        <Route path="/parking" element={
          <Layout>
            {<Parcheggio />}
          </Layout>} />

      </Routes>
    </BrowserRouter>

  )
}


export default App;
