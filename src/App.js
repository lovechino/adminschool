import logo from './logo.svg';
import './App.css';
import Login from './Screen/Login';
import PrivateContext from './Screen/Private';
import { BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './Routes/ProtectedRoute';
import Navigation from "./Routes/index"

function App() {
  return (
    // <PrivateContext></PrivateContext>
    <BrowserRouter>
      <Navigation/>
    </BrowserRouter>
    
    
  );
}

export default App;
