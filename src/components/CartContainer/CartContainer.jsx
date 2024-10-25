import PropTypes from 'prop-types';
import About from '../About/About';
import Cart from '../Cart/Cart';
import './CartContainer.css'

const CartContainer = ({handleActive, isActive, selectedProducts}) => {
    return (
        <div className='w-2/5 border rounded-[16px] mt-10'>
            <div className="flex justify-around mt-6">
                <div onClick={() => handleActive("cart")} className={`${isActive.cart? "btn active" : "btn"}`}>Cart</div>
                <div onClick={() => handleActive("about")} className={`${isActive.cart? "btn" : "active btn"}`}>About</div>
            </div>
            {
                isActive.cart ? <Cart selectedProducts={selectedProducts}></Cart> : <About></About>
            }
        </div>
    );
};

CartContainer.propTypes = {
    handleActive: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
    selectedProducts: PropTypes.array.isRequired
}

export default CartContainer;