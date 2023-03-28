import fourZeroFourImage from "./404_img.png";
import primaryBtn from "./primary_btn_dark.png";

export default function FourZeroFour() {
    return (
        <div className="flex mx-auto content-center items-center">
            <div className="flex-1"></div>
            <div className="flex-none w-5/6">
                <div className="flex w-full">
                    <div className="flex-auto">
                        <img src={fourZeroFourImage} width="450px"></img>
                    </div>
                    <div className="flex-1 my-auto mx-auto items-center content-center justify-center">
                        <p className="font-main text-8xl dark:text-white text-black">404</p>
                        <p className="font-main text-2xl py-4 leading-tight dark:text-white text-black">Page not found</p>
                        <img className="pt-2" src={primaryBtn} height="221.21"></img>
                    </div>
                </div>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}