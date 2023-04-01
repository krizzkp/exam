import logo from './logo.svg';
import './App.css';
import View from './components/View';
import Navbar from './components/Navbar';
import Addproducts from './components/Addproducts';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <View/>
     <Addproducts/>
    </div>
  );
}

export default App;
