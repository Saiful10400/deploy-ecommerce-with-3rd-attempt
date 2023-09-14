
import PropTypes from "prop-types";
const CartProduct = ({input}) => {
    
    
    return (
        
            <li className="bg-white my-4">{input}</li>
        
    );
};

export default CartProduct;



CartProduct.propTypes = {
    inputData: PropTypes.object,
  
  };
  