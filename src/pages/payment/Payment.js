import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider'
import './payment.css'

import CheckoutProduct from '../../components/checkoutProduct/CheckoutProduct';

const Payment = () => {
    const [{user, bag}, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout (<Link to='/checkout'>{bag?.length} items</Link>)</h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items & Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {bag.map(item => (
                            <CheckoutProduct 
                                id={item.id} 
                                title={item.title} 
                                image={item.image} 
                                price={item.price} 
                                rating={item.rating} 
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        {/* Stripe */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
