import { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Checkbox,
  Input,
} from "@material-tailwind/react";
import { BsSliders2Vertical } from "react-icons/bs";
export const SideFilter = () => {
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <div>
      <div className="container flex flex-wrap gap-4">
        <Button
          onClick={openDrawerRight}
          className="bg-wight text-black text-[16px]  flex items-center gap-1"
        >
          <BsSliders2Vertical className="font-bold " /> <div> Filter</div>
        </Button>
        <div className="mb-6 flex items-center justify-between"></div>
        <Drawer
          placement="right"
          open={openRight}
          onClose={closeDrawerRight}
          className="p-4"
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Filter
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={closeDrawerRight}
            >
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
          <div className="flex flex-col">
            <h3 className="text-[20px] font-medium">الفئة</h3>
            <div>
              {" "}
              <Checkbox id="ripple-1" label="الكل" ripple={true} />
              <Checkbox id="ripple-2" label="اولادي" ripple={true} />
              <Checkbox id="ripple-3" label="بناتي" ripple={true} />
              <Checkbox id="ripple-4" label="مستلزمات اطفال" ripple={true} />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] font-medium">الماركة</h3>
            <div>
              <Checkbox id="ripple-5" label="الكل" ripple={true} />
              <Checkbox id="ripple-6" label="اولادي" ripple={true} />
              <Checkbox id="ripple-7" label="بناتي" ripple={true} />
              <Checkbox id="ripple-8" label="مستلزمات اطفال" ripple={true} />
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[20px] font-medium">السعر</h3>
            <div className="mt-2 grid grid-cols-1 gap-[15px]">
              <Input label="من" />
              <Input label="الى" />{" "}
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};
