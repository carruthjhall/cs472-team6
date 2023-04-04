import fourZeroFourImage from "./404_img.png";

export default function FourZeroFour({ options }) {
    const {buttonText, buttonLink, gradient} = options;
    return (
        <div className="flex items-center justify-center">  
            <div className="flex sm:flex-col md:flex-row md:gap-35 sm:gap-20 max-auto">
                <div className="flex-initial ">
                    <img className="lg:w-[566] lg:h-[351.6] md:w-[480] md:h-[298] sm:w-[340] sm:h-[211]" src={fourZeroFourImage}></img>
                </div>
                <div className="flex-initial">
                    <p className="font-main flex-auto sm:text-6xl md:text-8xl dark:text-white text-black">404</p>
                    <p className="font-main md:text-3xl sm:text-2xl py-4 leading-tight dark:text-white text-black">Page not found</p>
                    <button className={`w-[250px] h-[60px] rounded-[50px] mt-5 bg-gradient-to-r ${gradient}`}>
                        <a href={buttonLink} className = "font-main dark:text-white text-black">BACK TO HOMEPAGE</a>
                    </button>
                </div>
            </div>
        </div>
    )
}