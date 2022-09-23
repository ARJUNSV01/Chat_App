
import { Button } from '@chakra-ui/react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path="/" element={<HomePage/>} />
       <Route  path="/chats" element={<ChatPage/>} />
     </Routes>
    </div>
  );
}

export default App;
