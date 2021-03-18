import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Product from "./product";
import { useState } from "react";

library.add(faTimes, faShoppingCart);

function App() {
  let productDetails = [
    {
      name: "Item One",
      price: "24.99",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      name: "Item Two",
      price: "11.99",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",

    },
    {
      name: "Item Three",
      price: "54.99",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",

    },
    {
      name: "Item Four",
      price: "34.99",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",

    },
    {
      name: "Item Five",
      price: "76",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.",

    },
    {
      name: "Item Six",
      price: "92",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",

    }

  ]
  let [accessArray, changeVal] = useState([]);
  const [totalVal, changeTotal] = useState(0);
  

  let customEventMtd = ((args) => {
    accessArray.push(args)
    changeVal([...accessArray]); //new syntax
    let total = (parseFloat(totalVal)) + (parseFloat(args.price));
    changeTotal(total.toFixed(2));

  })

  let removeItem = (index, item) => {
    document.getElementById(item.name).classList.remove("disabled");
    accessArray.splice(index, 1);
    changeVal([...accessArray]);
    let total = totalVal - item.price;
    changeTotal(total.toFixed(2));
   

  }

  return (
    <div className="container bg-dark">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="my-4 text-white"><FontAwesomeIcon icon="shopping-cart" /> Cart</h1>
          <div className="list-group">
            {
              accessArray.map((item, index) => {
                return (<li key={index} className="list-group-item">
                  {item.name} - Rs {item.price}
                  <button className="badge badge-primary badge-pill btn float-right" onClick={() => removeItem(index, item)}><FontAwesomeIcon icon="times" /></button></li>);
              })
            }
            <li className="list-group-item">
              Total
                  <div className="badge badge-danger badge-pill float-right ">Rs {totalVal}</div></li>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row MarPad10">
            {
              productDetails.map((product, index) => {
                return <Product key={index} property={product} customEvent={customEventMtd}></Product>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
