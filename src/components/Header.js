
const Header = () => {
    return (
        <div className='header'>
            <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            <div className='header__search'>
                <input className='header__searchInput' type='text'/>
            </div>
            <div className='headerNav'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello Guest</span>
                </div>
                <div className='header__option'></div>
                <div className='header__option'></div>
            </div>
        </div>
    )
}

export default Header
