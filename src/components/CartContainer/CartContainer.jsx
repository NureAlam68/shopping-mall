import PropTypes from 'prop-types';
import About from '../About/About';
import Cart from '../Cart/Cart';
import './CartContainer.css'

const CartContainer = ({handleActive, isActive}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Cart container</h1>
            <div className="flex justify-around mt-6">
                <div onClick={() => handleActive("cart")} className={`${isActive.cart? "btn active" : "btn"}`}>Cart</div>
                <div onClick={() => handleActive("about")} className={`${isActive.cart? "btn" : "active btn"}`}>About</div>
            </div>
            {
                isActive.cart ? <Cart></Cart> : <About></About>
            }
        </div>
    );
};

CartContainer.propTypes = {
    handleActive: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired
}

export default CartContainer;