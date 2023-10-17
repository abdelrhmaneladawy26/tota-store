import { Input, Button, TabPanel } from "@material-tailwind/react";
import { useState } from "react";

const Login = () => {
  const [cardNumber, setCardNumber] = useState("");

  function formatCardNumber(value) {
    const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  }
  return (
    <div>
      {" "}
      <TabPanel value="card" className="p-0">
        <form className="mt-12 flex flex-col gap-4">
          <Input type="email" label="الأيميل" />
          <Input
            label="كلمة السر"
            maxLength={19}
            value={formatCardNumber(cardNumber)}
            onChange={(event) => setCardNumber(event.target.value)}
          />
          <Button size="lg">تسجيل الدخول</Button>
        </form>
      </TabPanel>
    </div>
  );
};

export default Login;
