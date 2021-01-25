import './checkout.css';
import Subtotal from '../subtotal/Subtotal';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import { useStateValue } from '../../context/StateProvider';

const Checkout = () => {
    const [{bag},,] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
                <div>
                    <h2 className='checkout__title'>Your shopping Bag</h2>
                    {bag.map(element => (
                        <CheckoutProduct id={element.id} image={element.image} title={element.title} price={element.price} rating={element.rating}/>
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
