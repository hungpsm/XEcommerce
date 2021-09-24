import React, { useContext } from "react";
import "components/ProductList/ProductList.scss";
import ProductCard from "components/ProductCard/ProductCard";
import CartItemsContext from "common/constant";
import { useSelector, useDispatch } from "react-redux";
import { increment, applyNewState } from "features/Navigator/QtyCardSlice";

function ProductList(props) {
  const { props: productList } = { ...props };
  const itemsCart = useContext(CartItemsContext);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.qtyCard.value);

  const addToCart = (p) => {
    // If we  dont' have item, we process push item
    !itemsCart.find((item) => item.id === p.id) &&
      itemsCart.push({ ...p, qtyOrder: 1 });

    dispatch(increment());
    dispatch(applyNewState({ value: itemsCart.length }));
  };

  return (
    <>
      <div className="product-list">
        <div className="product-list body">
          {productList.length &&
            productList.map((product) => (
              <ProductCard
                key={product.id}
                props={product}
                itemOnClick={addToCart}
              >
                {" "}
              </ProductCard>
            ))}
        </div>
      </div>
    </>
  );
}
export default ProductList;
