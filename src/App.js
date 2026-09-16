import product from "./product.js";
import Name from "./Name-temp.js";
import Price from "./Price.js";
import Description from "./Description.js";
import Image from "./Image.js";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Card style={{ width: "18rem" }}>
      <Image image={product.image} />

      <Card.Body>
        <Card.Title>
        <Name name={product.name} />
        </Card.Title>
          <Price price={product.price} />
           <Card.Text>
          <Description description={product.description} />
        </Card.Text>
        <button variant="primary"> 
          Acheter Maintenant
           </button>
      </Card.Body>
    </Card>
  );
}

export default App;