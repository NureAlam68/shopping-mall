import PropTypes from 'prop-types';

const Navbar = ({selectedProducts}) => {
  return (
    <div className="py-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            </div>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src="https://img.icons8.com/?size=48&id=ffqDATCT07Hk&format=png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li className="text-[20px]">
              <a>Cart-{selectedProducts.length}</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-sky-400 text-[20px]">$ 500</a>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  selectedProducts: PropTypes.array.isRequired
}

export default Navbar;
