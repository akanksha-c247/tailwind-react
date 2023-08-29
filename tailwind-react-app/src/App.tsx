
import './App.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Expert } from './components/Expert';
import { NewsLatter } from './components/NewsLatter';
import { Plans } from './components/Plans';
import Footer from './components/footer';

function App() {
  return (
  <>
  <Header/>
  <Banner/>
  <Expert/>
  <NewsLatter/>
  <Plans/>
  <Footer/>
  </>
  );
}

export default App;
