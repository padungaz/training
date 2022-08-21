import { Grid } from "@material-ui/core";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import cartApi from "../../apis/cartApi";
import productApi from "../../apis/productApi";
import productStore from "../../stores/ProductStore";
import CartModal from "../CartModal";
import Product from "../Product";

function ProductList(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await productApi.getAll();
        setProducts(response.data);
      } catch (error) {
        console.log("Fail to fetch product list: ", error);
      }
    })();
  }, []);

  const addCart = async (productSelected) => {
    const response = await cartApi.add(productSelected);

    // Check reponse
    if (response.status === 201) {
      productStore.reFetchCarts();
      alert("Add this product into cart");
    }
  };

  return (
    <div>
      <CartModal />
      <Grid container spacing={2}>
        {products.map((item, index) => (
          <Grid key={index} item sm={3} xs={6}>
            <Product product={item} addCart={addCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default observer(ProductList);
