import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Product from "./product";
import { useState, useEffect } from "react";

function App() {
  let productDetails = [
    {
      name: "Item One",
      price: "$24.99",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      name: "Item Two",
      price: "$11.99",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet."
    },
    {
      name: "Item Three",
      price: "$54.99",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      name: "Item Four",
      price: "$34.99",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    },
    {
      name: "Item Five",
      price: "$76",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet."
    },
    {
      name: "Item Six",
      price: "$92",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
    }

  ]
  let [accessArray, changeVal] = useState([]);

  let customEventMtd = ((args) => {
    //changeVal.push(args) in normal
    changeVal(accessArray => [...accessArray, args]); //new syntax
   
  })



  return (
    <div className="container bg-dark">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="my-4 text-white">Cart</h1>
          <div className="list-group">
            {
              accessArray.map((item,index) => {
                return (<a href="#" key={index} className="list-group-item">{item}</a>);
              })

            }
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
