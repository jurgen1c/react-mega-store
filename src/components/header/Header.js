import './header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase';

const Header = () => {
    const [{bag, user}, dispatch] = useStateValue();

    const handleAuth = () => {
        auth.signOut();
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
            </Link>
            <div className='header__search'>
                <input className='header__searchInput' type='text'/>
                <SearchIcon className='header__searchIcon'/>
            </div>
            <div className='headerNav'>
                <Link to={ !user && '/login'}>
                    <div onClick={handleAuth} className='header__option'>
                        <span className='header__optionLineOne'>Hello {user ? user.email : 'Guest'}</span>
                        <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orders</span>
                </div>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'> Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'>{bag?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
