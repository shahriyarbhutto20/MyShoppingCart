import React, { useEffect, useState } from "react";
import CustomCard from "../Components/card";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchProducts } from "../Redux/productSlice";
import { add } from "../Redux/mainStoreSlice";
import Loader from "../Components/loader";

function MainPage({ catergoryData, setCategoryData }) {
  const myBtnStyle = "btn btn-outline-secondary mb-3 btn-lg";
  // retrive and fetch data
  const { data, status } = useSelector((state) => state.product);
  const [isLoading, setIsloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    setTimeout(() => {
      setIsloading(false);
    }, 1000);
  }, []);
  // add to cart function
  const addToCartFunction = (idFromCrad) => {
    dispatch(add(idFromCrad));
  };
  console.log(status);

  return isLoading ? (
    <Loader />
  ) : catergoryData[0] ? (
    <div className="row ">
      {catergoryData.map((item, index) => {
        return (
          <div
            key={item.id}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4 "
          >
            <CustomCard
              img={item.image}
              description={item.description.slice(0, 70)}
              title={item.title.slice(0, 40)}
              price={item.price}
              rating={item.rating.rate}
              cardBtnText="Add To Cart"
              onClick={() => addToCartFunction(item)}
              customBtnClass={myBtnStyle}
            />
          </div>
        );
      })}
    </div>
  ) : (
    <div className="row">
      {data.map((item, index) => {
        return (
          <div
            key={item.id}
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4"
          >
            <CustomCard
              img={item.image}
              description={item.description.slice(0, 70)}
              title={item.title.slice(0, 40)}
              price={item.price}
              rating={item.rating.rate}
              cardBtnText="Add To Cart"
              onClick={() => addToCartFunction(item)}
              customBtnClass={myBtnStyle}
            />
          </div>
        );
      })}
    </div>
  );
}

export default MainPage;
