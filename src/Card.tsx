interface detail {
  name: String;
  Age: number;
  place: String;
}

const Card: React.FC<detail> = (props) => {
  const { name, Age, place } = props;
  return (
    <div className="grid grid-rows-[_150px_250px] w-[350px] rounded-xl overflow-hidden border-[1px] border-black">
      <div>
        <img
          className="object-cover h-full w-full "
          src="../src/assets/images/bg-pattern-card.svg"
          alt="top"
        />
      </div>
      <div className="relative  bg-white">
        <div className="rounded-full h-50 w-50 absolute flex justify-center items-center -my-12 mx-auto translate-x-[120px]">
          <img
            className="rounded-full h-50 w-50 mx-auto border-4 border-white"
            src=".\src\assets\images\image-victor.jpg"
            alt="victor"
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-20 mb-10">
          <h2 className="text-lg font-bold capitalize">
            {name} <span className="font-light capitalize">{Age}</span>
          </h2>
          <p className=" text-sm  font-light capitalize">{place}</p>
        </div>
        <div className="grid grid-cols-3 h-[50px] border-t-[2px] border-black  border-t-opacity-80 mt-2 p-6">
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold font-base">80k</span>
            <span className="font-light text-xs">Followers</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold font-base">803K</span>
            <span className="font-light text-xs">Likes</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold font-base">1.4K</span>
            <span className="font-light text-xs">Photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
