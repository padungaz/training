import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import ButtonText from "../common/Button";

import "./styles.scss";

Product.propTypes = {};

function Product({ product, addCart }) {
  // Learn more
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.price);

  // 100.000.000

  return (
    <Card classes={{ root: "card-product" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="yellow "
        />
        <CardContent>
          <Typography
            classes={{ h5: "card-product__name" }}
            gutterBottom
            variant="h5"
            component="h5"
          >
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <button onClick={() => addCart(product)}> Add to cart </button>
      </CardActions>
    </Card>
  );
}

export default Product;
