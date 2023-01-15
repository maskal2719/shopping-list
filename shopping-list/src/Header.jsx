import logo from './logo.svg';
import './style.css';

export const Header = () => {
    return (
        <div>
            <header>
                <img style={{width:'40px'}} src={logo} alt='logotip'/>
                <span className='title'>Header</span>
            </header>
        </div>
    )
}