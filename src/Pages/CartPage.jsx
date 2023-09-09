import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomCard from "../Components/card";
import { remove } from "../Redux/mainStoreSlice";

function CartPage() {
  const myBtnStyle = "btn btn-danger mb-3 btn-lg";
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // funtion to remove items
  const handleRemoveItem = (idfromcard) => {
    dispatch(remove(idfromcard));
  };
  const arr = ["2"];

  return cartData[0] ? (
    <div className="row">
      {cartData.map((item, index) => {
        return (
          <div
            key={index}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4"
          >
            <CustomCard
              img={item.image}
              description={item.description.slice(0, 70)}
              title={item.title.slice(0, 40)}
              price={item.price}
              rating={item.rating.rate}
              cardBtnText="Remove"
              onClick={() => handleRemoveItem(index)}
              customBtnClass={myBtnStyle}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <div className="emptyCartDiv">
      <h1>Your cart is empty!</h1>
    </div>
  );
}

export default CartPage;
