import { Input, Button, TabPanel } from "@material-tailwind/react";
const SignUp = () => {
  return (
    <div>
      <TabPanel value="paypal" className="p-0">
        <form className="mt-12 flex flex-col gap-4">
          <Input type="text" label="الاسم الاول" />
          <Input type="text" label="الاسم الأخير" />
          <Input type="number" label="الهاتف" />
          <Input type="email" label="البريد الالكترونى" />
          <Input type="password" label="كلمة المرور" />
          <Button size="lg">أنشاء حساب جديد </Button>
        </form>
      </TabPanel>
    </div>
  );
};

export default SignUp;
