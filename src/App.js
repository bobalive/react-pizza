import './App.css';
import Header from './components/header/Header';
import  './App.css'
import Main  from './components/main/Main';
import HeaderContainer from './components/header/HeaderContainer';

function App() {
  return (
    <div className='content'>
      <div className='container'>

      <HeaderContainer/>
      <Main/>
      </div>
      
    </div>
  );
}

export default App;
