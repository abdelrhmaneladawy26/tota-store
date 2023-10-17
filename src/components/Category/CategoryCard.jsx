const CategoryCard = ({ image, title }) => {
  return (
    <div>
      <div className="rounded-[100px] relative hover:scale-y-[1.1] duration-200 cursor-pointer">
        <img src={image} alt="image" className="rounded-[20px]  " />
        <h4 className="text-[30px] font-semibold absolute top-[40%] right-[10%]">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default CategoryCard;
