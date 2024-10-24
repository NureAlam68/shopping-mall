import PropTypes from 'prop-types';

const Product = ({product, handleSelectedProduct}) => {
    const {name, image, description, price, category, isFeatured} = product
    return (
        <div className="card bg-base-100 border">
      <figure className="p-6">
        <img
          className="h-[220px] rounded-[16px]"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="text-[24px] font-semibold">{name}</h2>
        <p className="text-base text-[#878787] font-normal mb-4">
          {description}
        </p>
        <hr />
        <div className="mt-5">
          <h3 className="text-[18px] font-medium">
            ${price}
          </h3>
          <p className="text-base mt-2 text-[#282828CC] font-normal">
              Category: {category}
          </p>
          <p className="text-base text-[#282828CC] font-normal">
              {isFeatured? "Featured" : "Not Featured"}
          </p>
        </div>
        <hr />
        <div className="card-actions mt-6">
          <button onClick={() => handleSelectedProduct(product)}
            className="px-6 py-[13px] bg-sky-300 text-[18px] font-semibold rounded-[50px]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleSelectedProduct: PropTypes.func.isRequired
}

export default Product;