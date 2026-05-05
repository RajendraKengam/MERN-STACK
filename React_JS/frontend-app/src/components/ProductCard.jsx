import './ProductStyle.css';

let cartCount = 0;

const Productcard = (props) => {
  return (
    <>
      <div className="product-card">
        <img 
          src={props.details.imgSrc} 
          alt={props.details.name} 
          className="product-image"
        />
        <h2>{props.details.name}</h2>
        <p>{props.details.description}</p>
        <h3 className="product-price">Price: ₹{props.details.price}</h3>
        <span className="product-rating">Rating: {props.details.rating}</span>
        <button 
          className="add-to-cart-btn"
          onClick={() => { 
            cartCount++; 
            console.log("Cart Count:", cartCount);
            alert(`Item added to cart!\nNo. of items in the cart: ${cartCount}`);
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};
export default Productcard;