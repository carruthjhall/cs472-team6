import vectorSVG from "./vector.svg";
export default function CtaSection({options}) {
  const {link, word1, word2, gradient} = options;
  let word1s = word1;
  let word2s = word2; 
  
  return (
    <div className={`bg-white text-black dark:bg-black dark:text-white`}>
    <div className={'py-20 lg:px-40 md:px-20 sm:px-20'}>
    <div className="font-bold font-baijamjuree
    lg:text-6xl lg:leading-non
    md:text-5xl md:leading-tight
    sm:font-semibold sm:text-lg sm:leading-relaxed">
        <h2>{word1s}</h2> 
      <div className = {`bg-white dark:bg-black`}>
        <div className = {`bg-gradient-to-r ${gradient} text-transparent bg-clip-text flex items-center`}>
        <a href={link}className= 'flex items-center font-bold font-main flex-wrap mt-2 mb-2 lg:text-6xl lg:leading-non md:text-5xl md:leading-tight sm:font-medium sm:text-2xl sm:leading-relaxed'>{word2s}<img src={vectorSVG} className="w-6 h-6 md:w-14 md:h-14 lg:w-18 lg:h-18"/></a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}