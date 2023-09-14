import PropTypes from "prop-types";

const Product = ({ item,eventHandle }) => {
  const { name, price, volume, rating, img } = item;
  return (
    <div  className=" hover:scale-110 hover:bg-orange-300 transition border border-gray-500 rounded-lg text-center">
      <img className="w-full rounded-lg" src={img}></img>
      <span className=" mb-5 block text-end mr-4 mt-1 text-yellow-500 text-sm">
        {rating}
      </span>
      <h1 className="font-extrabold text-lg">{name}</h1>
      <p className="">Quantity: {volume}</p>
      <p className="mt-2 ">{price}</p>
      <button onClick={()=>eventHandle(name)} className="btn border-2 text-md p-2 rounded-xl bg-gray-400 text-white my-2 hover:text-black hover:bg-gray-100 transition">
        Add to cart
      </button>
    </div>
  );
};

export default Product;

Product.propTypes = {
  item: PropTypes.object,
  eventHandle: PropTypes.func,
};
