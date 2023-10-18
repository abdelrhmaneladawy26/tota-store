import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
} from "@material-tailwind/react";
import SignUp from "./SignUp";
import Login from "./Login";
const Auth = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("card");
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      {" "}
      <AiOutlineUser
        onClick={openDrawer}
        className="text-[30px] cursor-pointer"
      />
      <Drawer open={open} onClose={closeDrawer} className="p-4" size={350}>
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
          <Card className="w-full max-w-[24rem]">
            <CardBody>
              <Tabs value={type} className="overflow-visible">
                <TabsHeader className="">
                  <Tab
                    className="text-[15px]"
                    value="card"
                    onClick={() => setType("card")}
                  >
                    تسجيل الدخول
                  </Tab>
                  <Tab value="paypal" onClick={() => setType("paypal")}>
                    التسجيل
                  </Tab>
                </TabsHeader>
                <TabsBody
                  className="!overflow-x-hidden !overflow-y-visible"
                  animate={{
                    initial: {
                      x: type === "card" ? 400 : -400,
                    },
                    mount: {
                      x: 0,
                    },
                    unmount: {
                      x: type === "card" ? 400 : -400,
                    },
                  }}
                >
                  <Login />
                  <SignUp />
                </TabsBody>
              </Tabs>
            </CardBody>
          </Card>
        </div>
      </Drawer>
    </div>
  );
};

export default Auth;
