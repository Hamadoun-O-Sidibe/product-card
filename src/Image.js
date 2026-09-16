import product from "./product.js";

function Image() {
    return (
        <img src={product.image} 
        alt={product.name}
        />
    );

}
export default Image;