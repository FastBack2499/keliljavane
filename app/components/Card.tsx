interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  children
}) => {
  return (
    <div className="flex items-center justify-center gap-x-1.5 bg-black/30 p-1.5 rounded-lg min-w-[108px] verySmall:min-w-28 sm:min-w-36 backdrop-blur-[3px]">
      
      <div className="flex items-center justify-center text-green-700 bg-white p-[7px] rounded-full">
        {children}
      </div>

      <div className="flex flex-col items-center justify-center gap-y-0.5 text-center">

        <p className="text-white text-sm md:text-lg font-bold font-vazir leading-7 ">
          {title}
        </p>

        <p className="text-white text-[13px] md:text-[13px] font-vazir leading-7 ">
          {description}
        </p>

      </div>

    </div>
  )
}

export default Card