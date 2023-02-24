import axios from "axios";
import { BASE_URL } from "../constants";
;

const AddToCart = (data) => {
    axios.post(`${BASE_URL}/cart`, {
      id: data._id,
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      description: data.description,
    })
      .then(response => {
        console.log("response: ", response.data);
      })
      .catch(err => {
        console.log("error:", err);
      })
  }

  export {AddToCart}