import vectorSVG from "./vector.svg";
import vectorSVG2 from "./vector2.svg";
export default function CtaSection({options}) {
  const {link, word1, word2, gradient} = options;
  const isgreenblue = gradient === 'from-green-400 to-blue-500';
  return (
    <div className={`flex bg-white text-black dark:bg-black dark:text-white lg:max-w-[1036px] md:max-w-[864px] max-w-[340px] mx-auto item-center`}>
    <div className={'py-20 px-[25px] md:px-[80px] lg:px-[202px]'}>
    <div className="font-bold font-main
    lg:text-5xl
    md:text-4xl 
    sm:font-semibold sm:text-lg">
    <h2>{word1}</h2> 
    <div className = {`bg-white dark:bg-black`}>
    <div className = {`bg-gradient-to-r ${gradient} text-transparent bg-clip-text flex items-center`}>
    <a href={link.trim() ? link : '#0'}className= 'flex items-center font-bold font-main flex-wrap mt-2 mb-2 lg:text-5xl md:text-4xl sm:font-medium sm:text-2xl sm:leading-relaxed'>{word2}
    {isgreenblue ? (
        <img src={vectorSVG2} className="w-6 h-6 md:w-14 md:h-14 lg:w-18 lg:h-18"/>
      ) : (
        <img src={vectorSVG} className="w-6 h-6 md:w-14 md:h-14 lg:w-18 lg:h-18"/>
    )}
    </a>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}