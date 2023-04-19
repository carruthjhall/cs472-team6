
export default function CtaSection2({options}) {
  const {link, text, button, gradient} = options;
  
  return (
    <div className={`bg-white text-black dark:bg-black dark:text-white py-10 lg:px-[120px] md:px-[80px] px-[25px]`}>
    <div className ={`bg-gradient-to-r ${gradient} 
    lg:rounded-bl-[128px] lg:rounded-br-[128px] 
    md:rounded-bl-[92px] md:rounded-br-[92px] 
    rounded-bl-[32px] rounded-br-[32px]
    w-auto h-auto
    flex justify-center items-center`}>
    <div class="flex flex-col items-center text-center">
    <h2 class="font-bold font-baijamjuree 
    lg:text-[84px] lg:px-60 lg:mt-[100px]
    md:text-[72px] md:px-atuo md:mt-[47px]
    text-[32px] px-20 mt-[28px]">{text}</h2>
    <a href={link} class="font-Manrope font-semibold
    lg:font-inter lg:font-normal lg:font-semibold lg:text-base lg:leading-6 lg:mt-[48px] lg:mb-[108px]
    md:font-inter md:font-normal md:font-semibold md:text-base md:leading-6 md:mt-[48px] md:mb-[47px]
    text-sm leading-4 font-sans mt-[16px] mb-[29px] px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full shadow-lg">{button}</a>
    </div>
    </div>
    </div>

  );
}