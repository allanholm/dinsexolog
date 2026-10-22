import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import PriceBanner from './components/PriceBanner';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <Hero/>
      <PriceBanner/>
      <Footer/>
    </div>
  );
}

export default App;
