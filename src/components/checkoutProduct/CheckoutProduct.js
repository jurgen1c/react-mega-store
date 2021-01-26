import { useStateValue } from '../../context/StateProvider'
import './checkoutProduct.css'

const CheckoutProduct = ({ id, image, title, price, rating, hideButton}) => {
    const [state, dispatch] = useStateValue();

    const removeFromBag = () => {
        dispatch({
            type: 'REMOVE_FROM_BAG',
            id: id,
        })
    }
    return (
        <div key={`container${id}`} className='checkoutProduct'>
            <img className='CP__image' src={image} alt='' />
            <div className='CP__info'>
                <p className='CP__title'>{title}</p>
                <p className='CP__price'>
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className='CP__rating'>
                    {Array(rating).fill().map((_, i) => (<span>⭐</span>))}
                </div>
                {!hideButton && (<button onClick={removeFromBag}>Remove from Bag</button>)}
            </div>
        </div>
    )
}

export default CheckoutProduct
