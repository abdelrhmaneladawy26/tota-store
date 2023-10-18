import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { HiOutlineShoppingCart } from "react-icons/hi";
const ProductCard = () => {
  return (
    <div>
      <Card className=" relative ">
        <Link to="/products/:id">
          <img
            src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
            alt="card-image"
            className="h-[200px] w-full object-cover rounded-[10px_10px_0px_0px]"
          />
          <CardBody>
            <div className="mb-1 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                Apple AirPods
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
              </Typography>
            </div>
          </CardBody>
        </Link>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="flex items-center justify-center gap-3 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            أضافة الى العربة
            <HiOutlineShoppingCart className="text-[20px]" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
