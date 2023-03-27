export default function ServiceWrapper({options}) {
    let {Title, Text, ButtonText, ButtonLink, gradient, ImageLink, Invert} = options;

    Invert = Invert == "Image Left" ? "flex-row-reverse" : "flex-row";

    return (
        <div className={`lg:w-[1200px] lg:h-[500px] lg:flex 
                         md:w-[864px] md:h-[850px] w-[340px] h-[580px] lg:mt-[100px] m-[50px] overflow-x-clip mx-auto relative text-black bg-white dark:text-white dark:bg-black ${Invert}`}>
            <div className="font-main my-auto lg:w-[500px] md:w-[640px] w-[340px]">
                <div className="md:text-[64px] text-[48px]">
                    {Title}
                </div>
                <div className="text-[18px]">
                    {Text}
                </div>
                <button className={`w-[150px] h-[60px] rounded-[50px] mt-5 bg-gradient-to-r ${gradient}`}>
                    <a href={ButtonLink} >
                        {ButtonText}
                    </a>
                </button>
            </div>
            <div className="lg:w-[200px] h-[64px]"></div>
            <img className="lg:w-[500px] md:w-[864px] md:h-[500px] w-[340px] h-[200px]" src={ImageLink}></img>
        </div>
    )
}