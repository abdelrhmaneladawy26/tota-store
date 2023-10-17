import {
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
} from "@material-tailwind/react";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
const AuthForm = () => {
  const [type, setType] = useState("card");
  return (
    <div>
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
  );
};

export default AuthForm;
