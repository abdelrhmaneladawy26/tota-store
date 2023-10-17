const BrandCard = ({ image }) => {
  return (
    <div>
      <div>
        <img src={image} className="w-full p-10" />
      </div>
    </div>
  );
};

export default BrandCard;
