

import './styles/style.scss';
import TopContainer from './components/topContainer';
import Info from './components/Info';
import Portfolio from './components/portfolio'
import Footer from './components/footer'



function App() {
  return (
    <main>
      <div className="container">
      <TopContainer/>
  
     <Info/>
  
     <Portfolio/>
     <Footer/>
      </div>
    </main>
  );
}

export default App;
