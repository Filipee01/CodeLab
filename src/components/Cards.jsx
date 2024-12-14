import { Heart } from "lucide-react";

const Cards = ({ data, title, paragraph, isFilled }) => {
  return (
    <div className="w-min h-[330px] my-10 mx-16 flex flex-col border-2 rounded-md border-brand_color">
      <div className="mt-[32px] mb-4 mx-[28px] flex justify-between items-center">
        <span className="font-serif text-sm text-brand_color">{data}</span>
        <p className="text-brand_color">
          <Heart width={20} fill={isFilled ? "#E07B67" : "none"} />
        </p>
      </div>
      <div className="mx-[24px] flex flex-col p-1 gap-5 w-[279] h-[226px] text-dark_60">
        <h2 className="font-sans font-medium text-[20px] w-[279px] h-[78px]">
          {title}
        </h2>
        <p className="font-serif mb-2 text-[14px] text-dark_50">{paragraph}</p>
      </div>
    </div>
  );
};

export default Cards;
