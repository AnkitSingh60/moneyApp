import './App.css';
import 'antd/dist/antd.css';
import { Routes, Route,} from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./store"
import Home from './components/Home';
import Cart from './components/Cart';



function App() {
  return (
    <>
    <Provider store={store}>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    </Routes>
    </Provider>
    </>
  );
}

export default App;





