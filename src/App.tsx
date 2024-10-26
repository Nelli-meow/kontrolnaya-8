import './App.css'
import Header from "./components/Header/Header.tsx";
import MainPage from "./containers/MainPage/MainPage.tsx";
import {Route, Routes} from "react-router-dom";
import NewQuote from "./containers/NewQuote/NewQuote.tsx";
import EditQuote from './containers/EditQuote/EditQuote.tsx';

const App = () => {

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/quotes" element={<MainPage/>}/>
            <Route path="/add-quote" element={<NewQuote/>}/>
          <Route path="/quotes/:idQuote/edit" element={<EditQuote/>}/>
          <Route path="*" element={<p className="text-center m-5">Page is not found :(</p>}/>
        </Routes>
    </>
  )
};

export default App
