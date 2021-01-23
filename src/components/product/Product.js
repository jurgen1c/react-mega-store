import './product.css';

const Product = ({id, title, image, price, rating}) => {
    return (
        <div className='product'>
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
            <button>Add to Shopping Bag</button>
        </div>
    )
}

export default Product
