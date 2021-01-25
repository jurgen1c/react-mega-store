import { useStateValue } from '../../context/StateProvider';
import './product.css';

const Product = ({id, title, image, price, rating}) => {

    const [state, dispatch] = useStateValue();

    const addToBag = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div key={`container${id}`} className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (<span>⭐</span>))}
                </div>
            </div>
            <img src={image} alt='' />
            <button onClick={addToBag}>Add to Shopping Bag</button>
        </div>
    )
}

export default Product
