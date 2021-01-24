import './subtotal.css';

import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../context/reducer';
import { useStateValue } from '../../context/StateProvider';

const Subtotal = () => {
    const [{bag}, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>Subtotal ({bag?.length} items:) <strong>{value}</strong></p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(bag)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
