
import CartProduct from "./cartProduct";

const Cart = ({ArrayInput}) => {

    return (
       <ol className="list-decimal ml-4">
        {
            ArrayInput.map((input,idx)=><CartProduct key={idx} input={input}></CartProduct>)
        }
       </ol>
    );
};

export default Cart;