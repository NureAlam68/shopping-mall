import PropTypes from 'prop-types';

const Cart = ({selectedProducts}) => {
    return (
        <div className='mt-6 p-2'>
            {
                selectedProducts.map((product, idx) => <div
                className='border mt-4 rounded-md'
                 key={idx}>
                    <div className='flex p-4 items-center justify-between text-[18px]'>
                        <img className='w-[130px] h-[75px] rounded' src={product.image} alt="" />
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <button className='btn bg-sky-400'>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

Cart.propTypes = {
    selectedProducts: PropTypes.array.isRequired
}

export default Cart;