import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import {Footer} from "./Footer";
import {Main} from "./Main";

function App() {
    return (
        <div>
            <img style={{width:'100px'}} src={logo} alt='logo'/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;