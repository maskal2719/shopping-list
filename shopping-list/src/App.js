import logo from './logo.svg';
import './App.css';
import {Header} from './Header';
import {Footer} from "./Footer";

function App() {
    return (
        <div>
            <img src={logo} alt='logo'/>
            <Header/>
            <Footer/>
        </div>
    );
}

export default App;