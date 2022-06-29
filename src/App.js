import "./App.css";
import Header from "./components/header/Header";
import "./App.css";
import Main from "./components/main/Main";
import HeaderContainer from "./components/header/HeaderContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BuyContainer from "./components/buy/BuyContainer";
import { useEffect } from "react";
import { SetPizzaThunkCreator } from "./redux/cards-reducer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="content">
        <div className="container">
          <HeaderContainer />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/buy' element ={<BuyContainer/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
