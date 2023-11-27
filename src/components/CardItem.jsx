
const CardItem = ({title, desc, icon}) => {
  return (
    <div className="border border-sky-600 p-4 rounded-xl flex justify-between w-1/4">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-xl">{title}</h1>
        <h3 className="text-2xl">{desc}</h3>
      </div>
      {icon}
    </div>
  );
};

export default CardItem;
