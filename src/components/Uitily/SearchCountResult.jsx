import UnopDropdown from "unop-react-dropdown";
import { BsSortDown } from "react-icons/bs";
import { SideFilter } from "./SideFilter";
const SearchCountResult = () => {
  const handler = () => {};
  return (
    <div>
      <div className="container mt-5 flex justify-between">
        <div>
          <SideFilter />
        </div>
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <>
              <button className="AnimatedDropdownButton">
                <div className="flex ">
                  <div>
                    <BsSortDown className="text-[30px]" />
                  </div>
                  <div>ترتيب حسب</div>
                </div>
              </button>
            </>
          }
          delay={300}
          align="LEFT"
          hover
        >
          <ul className="w-[200px] bg-white">
            <li className="p-3 border-b-[1px] hover:text-white hover:bg-[#3C3C3B] duration-150">
              الأكثر مبيعا
            </li>
            <li className="p-3 border-b-[1px]  hover:text-white hover:bg-[#3C3C3B] duration-150">
              الأعلى تقليما
            </li>
            <li className="p-3 border-b-[1px]  hover:text-white hover:bg-[#3C3C3B] duration-150">
              السعر من الأقل للأعلى
            </li>
            <li className="p-3 border-b-[1px]  hover:text-white hover:bg-[#3C3C3B] duration-150">
              السعر من الأعلى للأقل{" "}
            </li>
          </ul>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
