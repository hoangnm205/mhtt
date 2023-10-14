interface Props {
  number: Number;
  description: string;
}

const StatisticContent = ({ number, description }: Props) => {
  return (
    <div className="p-6">
      <div className="font-bold text-[#8D3032] text-[50px] text-center">{`${number}+`}</div>
      <div className="text-lg text-[#3d3938] text-center">{description}</div>
    </div>
  );
};

export default StatisticContent;
