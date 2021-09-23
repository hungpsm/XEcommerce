import React from "react";
import "components/ProductCard/ProductCard.scss";
import { Badge, Button } from "reactstrap";

function ProductCard(props) {
  const { props: productCard } = { ...props };
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });

  return (
    <div className="product-card">
      <div className="card-top">
        <img src={productCard.images[0]} alt={productCard.id} />
      </div>

      <div className="card-bottom">
        <div className="card-info">
          <p>
            {productCard.name.trim().toLowerCase().length > 52
              ? productCard.name.trim().charAt(0).toUpperCase() +
                productCard.name
                  .trim()
                  .slice(1)
                  .toLowerCase()
                  .substring(0, 49) +
                "..."
              : productCard.name.trim().charAt(0).toUpperCase() +
                productCard.name.trim().slice(1).toLowerCase()}
          </p>
        </div>
        <div className="card-price">
          {" "}
          {formatter.format(productCard.salePrice)}
        </div>
        <div className="card-price--original">
          {" "}
          {formatter.format(productCard.originalPrice)}
        </div>
        <div className="card-control">
          <Button className="btn-order" onClick={() => props.itemOnClick(productCard)} > Order now!</Button>
          <Badge className="btn-view"> View</Badge>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
