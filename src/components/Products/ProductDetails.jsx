import { useState } from "react";
import ProductGallery from "./ProductGallery";

const ProductDetails = () => {
  const [amount, setAmount] = useState(1);

  return (
    <div className="grid grid-cols-3 gap-4 mt-10">
      <div className=" col-span-3 md:col-span-1 border p-2 rounded-[10px]">
        <ProductGallery />
      </div>
      <div className=" col-span-3 md:col-span-2">
        <div className="flex flex-col gap-4">
          <div>
            <span className=" text-violet-600 font-semibold">أولادى</span>
            <h1 className="text-3xl font-bold">سالوبيت ميلتون مخطط</h1>
          </div>
          <p className="text-gray-700">
            يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح قفل
            هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها بسهولة،
            وتعدّ خاصية معرَف الوجه الأسرع والأكثر أماناً للمصادقة عن طريق بصمة
            الوجه يتميز بشريحة A12 بايونيك والتي تعد أذكى وأقوى شريحة في الهواتف
            الذكية شكلت أكثر كاميرات العالم شهرة عصراً جديداً من التصوير
            الفوتوغرافي حيث يعمل جهاز الاستشعار الابتكاري بخاصية ISP والمحرك
          </p>
          <h6 className="text-2xl font-semibold">$ 199.00</h6>
          <div className="flex flex-row items-center">
            <div className="flex flex-row items-center">
              <button
                className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </button>
              <span className="py-4 px-6 rounded-lg">{amount}</span>
              <button
                className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button className="bg-[#3C3C3B] text-[14px] md:text-[18px] text-white  font-semibold py-3 px-2 md:px-10 mx-5 hover:scale-[1.03] duration-200 h-full">
              أضافة الى العربة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
