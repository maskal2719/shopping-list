import logo from './logo.svg';
import './style.css';

export const Header = () => {
    return (
        <div>
            <header>
                <img style={{width:'50px'}} src={logo} alt='logo'/>
                <span className='title'>Header</span>
            </header>
        </div>
    )
}