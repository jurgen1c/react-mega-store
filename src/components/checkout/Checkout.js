import './checkout.css';
import Subtotal from '../subtotal/Subtotal';

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
                <div>
                    <h2 className='checkout__title'>Your shopping BaG</h2>
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
