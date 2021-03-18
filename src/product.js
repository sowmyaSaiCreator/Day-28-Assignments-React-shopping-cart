import React from "react";

function Product(args) {
    return (
        <div className="col-lg-4 col-md-6 mb-4 my-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{args.property.name}</a>
                    </h4>
                    <h5>Rs {args.property.price}</h5>
                    <p className="card-text">{args.property.content}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">★ ★ ★ ★ ☆</small>
                    <button className="btn btn-success float-right" id={args.property.name} onClick={
                        (e) => {
                            args.customEvent(args.property)
                            e.target.classList.add("disabled");
                        }
                    }>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;
