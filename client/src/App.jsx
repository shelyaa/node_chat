import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import Rooms from './components/Rooms';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  const username = localStorage.getItem('username');

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={username ? '/rooms' : '/login'} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:roomId" element={<ChatRoom />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
