import { useEffect, useState } from "react";
import Product from "../Product/Product";
import PropTypes from 'prop-types';

const AllProducts = ({handleSelectedProduct}) => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])


    return (
        <div className="w-3/5 mt-10">
            <div className="grid grid-cols-2 gap-6">
            {
                products.map(product => <Product key={product.id} product={product} handleSelectedProduct={handleSelectedProduct}></Product>)
            }
            </div>
        </div>
    );
};

AllProducts.propTypes = {
    handleSelectedProduct: PropTypes.func.isRequired
}

export default AllProducts;