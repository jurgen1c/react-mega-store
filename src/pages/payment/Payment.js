import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { useEffect, useState } from 'react';
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import './payment.css'

import CheckoutProduct from '../../components/checkoutProduct/CheckoutProduct';
import { getBasketTotal } from '../../context/reducer';
import axios from '../../axios';
import { db } from '../../firebase';

const Payment = () => {
    const [{user, bag}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const[error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(bag) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [bag])

    const handlesubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {payment_method: {
            card: elements.getElement(CardElement)
        }}).then(({paymentIntent}) => {
            //Payment intent = payment confirmation
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                bag: bag,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BAG',
            })

            history.replace('/orders');
        })
    }
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout (<Link to='/checkout'>{bag?.length} items</Link>)</h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user ? user.email : 'Guest'},</p>
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
                        <form onSubmit={handlesubmit}>
                            <CardElement onChange={handleChange}/>
                            <div>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(bag)}
                                    displayType={'text'}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeeded}><span>{processing ? <p>Processing</p> : 'Buy Now'}</span></button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
