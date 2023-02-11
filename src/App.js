import './App.css';
import ChatPage from './pages/ChatPage';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={user ? <Navigate to="/home" /> : <Home />} />
          <Route path="/home" element={!user ? <Navigate to="/" /> : <ChatPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
