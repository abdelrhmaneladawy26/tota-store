import CartItem from "./CartItem";

const CartContainer = () => {
  return (
    <div>
      <h3 className="text-[20px] font-bold ">الطلبات</h3>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

export default CartContainer;
