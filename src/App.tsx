import './App.css'
import Header from "./components/Header/Header.tsx";
import MainPage from "./containers/MainPage/MainPage.tsx";
import {Route, Routes} from "react-router-dom";
import NewQuote from "./containers/NewQuote/NewQuote.tsx";

const App = () => {

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/quotes" element={<MainPage/>}/>
            <Route path="/add-quote" element={<NewQuote/>}/>
        </Routes>
    </>
  )
};

export default App
