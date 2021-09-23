import CartItemsContext from "common/constant";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Offcanvas, Button, Card } from "react-bootstrap";
import "components/OffCanvasCart/OffCanvasCart.scss";

function OffCanvasCart() {
  const [show, setShow] = useState(false);
  const itemsCart = useContext(CartItemsContext);

  const [update, setUpdate] = useState(false);
  const refSumAmt = useRef(0);

  const setRefAmt = () => {
    refSumAmt.current = 0;
    itemsCart.map(
      (item) => (refSumAmt.current += item.salePrice * item.qtyOrder)
    );
  };

  setRefAmt();

  const handOnClickAdd = (itemClick) => {
    const indexItem = itemsCart.findIndex((item) => item.id === itemClick.id);
    const intQtyOrder = itemClick.qtyOrder;

    itemsCart.splice(indexItem, 1, {
      ...itemClick,
      qtyOrder: intQtyOrder + 1,
    });
    setRefAmt();

    setUpdate((preState) => !preState);
  };

  const handOnClickRemove = (itemClick) => {
    const indexItem = itemsCart.findIndex((item) => item.id === itemClick.id);
    const intQtyOrder = itemClick.qtyOrder;

    intQtyOrder === 1
      ? itemsCart.splice(indexItem, 1)
      : itemsCart.splice(indexItem, 1, {
          ...itemClick,
          qtyOrder: intQtyOrder - 1,
        });

    setRefAmt();
    setUpdate((preState) => !preState);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });

  return (
    <div className="cart-shopping">
      <Button variant="warning" onClick={handleShow}>
        Cart {itemsCart.length > 0 && itemsCart.length}
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Please check your cart before any processing payment is done
          {itemsCart.length > 0 &&
            itemsCart.map((item) => (
              <Card key={item.id} border="light">
                <Card.Text>{item.name}</Card.Text>
                <div className="item-cart">
                  <Button variant="danger" onClick={() => handOnClickAdd(item)}>
                    +
                  </Button>
                  <Card.Text className="item-qty">{item.qtyOrder}</Card.Text>
                  <Button
                    variant="success"
                    onClick={() => handOnClickRemove(item)}
                  >
                    -
                  </Button>
                </div>
                <div className="item-price">
                  <Card.Text>
                    {formatter.format(item.salePrice)} X {item.qtyOrder}
                    {"="}
                    {formatter.format(item.salePrice * item.qtyOrder)}
                  </Card.Text>
                </div>
              </Card>
            ))}
          <Card key={99999999} border="light">
            <Card.Text>Subtotal</Card.Text>

            <div className="item-price">
              <Card.Text>{"Total payment"}</Card.Text>
              <Card.Text>{formatter.format(refSumAmt.current)} </Card.Text>
            </div>

            <div className="item-submit">
              <div className="item-okay">
                <Button variant="primary">Submit</Button>
              </div>
              <div className="item-close">
                <Button variant="secondary">Close</Button>
              </div>
            </div>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffCanvasCart;
