import React, { useState, useEffect } from "react";
import products from "../products";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/ProductAction";

const HomeScreen = () => {
  // using simple use state and use effect for api call
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     // const { data } = await axios.get("/api/products");
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  const dispatch = useDispatch();
  // const productList = useSelector((state) => state.productList);
  // const { error, loading, products } = productList;
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  // const products = [];

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
