import starSVG from "./star.svg";

export default function Testimonial({options}) {
    //TO-DO: Add gradient functionality to the stars
    const {stars, starGradient, testimonialBody, custPicture, custName, custPosition} = options;

    const union = Array.from({length: stars}, () => <img src={starSVG} className="float-left mr-2"/>)

    return(
        <div className="flex flex-col items-start p-8 bg-white dark:bg-gray-900 h-fit w-[436.58px] m-4">
            <div className={`w-fit h-6`}>
                {union}
            </div>
            <p className="w-11/12 dark:text-gray-200 text-base leading-7 font-secondary pt-6 pb-6">{testimonialBody}</p>
            <div>
                <img src={custPicture} className="float-left w-14 h-14 rounded-full"/>
                <div className="float-right ml-4">
                    <p className="dark:text-gray-200 text-main font-bold">{custName}</p>
                    <p className="dark:text-gray-200 text-secondary text-sm">{custPosition}</p>
                </div>
            </div>
        </div>
    )
}