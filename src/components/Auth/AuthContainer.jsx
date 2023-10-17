import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import AuthForm from "./AuthForm";
const Auth = () => {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div>
      {" "}
      <AiOutlineUser
        onClick={openDrawer}
        className="text-[30px] cursor-pointer"
      />
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            تسجيل دخول / التسجيل
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
          <AuthForm />
        </div>
      </Drawer>
    </div>
  );
};

export default Auth;
