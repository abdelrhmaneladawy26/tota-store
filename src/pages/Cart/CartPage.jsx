import CartCheckOut from "../../components/Cart/CartCheckOut";
import CartContainer from "../../components/Cart/CartContainer";
import { Button, Input } from "@material-tailwind/react";
const CartPage = () => {
  return (
    <div>
      <div className="container mt-6 grid grid-cols-3 gap-4">
        <div className="col-span-3 md:col-span-2">
          <CartContainer />
        </div>
        <div className="col-span-3 md:col-span-1">
          <CartCheckOut />
        </div>
        <div>
          <div>هل تمتلك كوبون خصم؟</div>
          <div className="w-72 my-4 flex">
            <Input label="رقم الكوبون" className="rounded-none" />
            <Button className="rounded-none">تطبيق</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
