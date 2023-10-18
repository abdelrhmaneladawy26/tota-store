import {
  Drawer,
  Typography,
  IconButton,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { SlBasket } from "react-icons/sl";
import CartContainer from "./CartContainer";
import { Link } from "react-router-dom";
const CartNav = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div>
      <SlBasket onClick={openDrawer} className="text-[30px] cursor-pointer" />
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 overflow-y-auto"
        size={400}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            جميع الطلبات
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="w-50">
          <CartContainer />
          <div>
            <Link to="/cart" onClick={closeDrawer}>
              <Button className="w-full my-1 rounded-none">
                الذهاب الى السلة{" "}
              </Button>
            </Link>
            <Button className="w-full bg-white text-black rounded-none">
              أتمام الشراء{" "}
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CartNav;
