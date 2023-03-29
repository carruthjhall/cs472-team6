import fourZeroFourImage from "./404_img.png";

export default function FourZeroFour({ options }) {
    const {buttonText, buttonLink, gradient} = options;
    return (
        <div className="lg:w-[984px] md:h-[351.6px]
                        md:w-[831px] md:h-[320px]
                        sm:w-[340px] md:h-[513.21px]
                        md:flex mx-auto md:content-center md:items-center">
            <div className="flex-1"></div>
            <div className="flex-none w-5/6">
                <div className="flex w-full">
                    <div className="flex-auto">
                        <img className="lg:w-[566] lg:h-[351.6] md:w-[480] md:h-[298] sm:w-[340] sm:h-[211]" src={fourZeroFourImage}></img>
                    </div>
                    <div className="flex-1 my-auto mx-auto items-center content-center justify-center">
                        <p className="font-main text-8xl dark:text-white text-black">404</p>
                        <p className="font-main text-2xl sm:text-1x1 py-4 leading-tight dark:text-white text-black">Page not found</p>
                        <button className={`w-[200px] h-[60px] rounded-[50px] mt-5 bg-gradient-to-r ${gradient}`}>
                            <a href={buttonLink} className = "font-main dark:text-white text-black">BACK TO HOMEPAGE</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}