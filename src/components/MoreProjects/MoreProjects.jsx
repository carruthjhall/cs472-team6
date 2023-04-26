
export default function MoreProjects({options}) {
    let {title, gradientTitle, image, image2, body, description, gradient, buttonText, buttonLink, button2Text, button2Link} = options;
    
    return (
        // contatiner for entire Component
        <div className={`lg:w-[960px] lg:h-[688px]  
                        md:w-[868px] md:h-[565px] w-[340px] h-[835px] lg:mt-[50px] mx-auto`}>
            {/* Container for the header */}
            <div className={`w-full font-main`}>
                {/* Container for the text*/}
                <div className={`lg:text-[64px] md:text-[56px] text-[32px] text-black dark:text-white`}>{title}
                                   <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}> {gradientTitle}</span>
                </div>
            </div>
            {/* Container for the images */}
            <div className={`lg:w-[960px] lg:h-[480px]
                            md:w-[868px] md:h-[430px] md:flex
                            w-[340px] h-[746px]
                            overflow-x-clip mx-auto
                                text-white bg-white dark:bg-black py-[20px]`}>
                        {/* Container for text and buttons */}
                        <div className={`lg:w-[457px] lg:h-[480px]
                                            md:w-[410px] md:h-[430px]
                                            w-[340px] h-[357px] mb-10
                                            bottom-0 left-0 relative`}>
                            <img src={image}></img>
                            {/* Container for the text inside first image */}
                            <div className={`lg:w-[299px] lg:h-[146px]
                                            md:w-[274px] md:h-[118px]
                                            w-[215px] h-[104px]
                                            absolute bottom-10 left-5
                                            `}>
                                {/* Container for the text */}
                                <div className={`left-0 py-[5px]
                                                text-[28px] font-main`}>
                                                {body}
                                <div className={`text-[16px] font-secondary`}>{description}</div>
                                </div>
                                {/* container for the first button */}
                                <button className={`lg:w-[135px] lg:h-[40px]
                                                    md:w-[123px] md:h-[40px]
                                                    w-[95px] h-[25px] 
                                                    absolute bottom-0 left-0 rounded-[50px] mt-5 
                                                    md:text-[16px] text-[12px] bg-gradient-to-r ${gradient}`}>
                                        <a href={buttonLink} >
                                            {buttonText}
                                        </a>
                                </button>
                                {/* container for the secone button */}
                                <button className={`lg:w-[135px] lg:h-[40px]
                                                    md:w-[123px] md:h-[40px]
                                                    w-[95px] h-[25px]
                                                    absolute bottom-0 right-0 rounded-[50px] mt-5 
                                                    md:text-[16px] text-[12px] bg-gradient-to-r ${gradient}`}>
                                        <a href={button2Link} >
                                            {button2Text}
                                        </a>
                                </button>
                            </div>
                        </div>
                        {/* container for the second image */}
                        <div className={`lg:w-[457px] lg:h-[480px]
                                        md:w-[410px] md:h-[430px] 
                                        w-[340px] h-[357px] md:-right-10 -bottom-0 -right-0 relative`}>
                            <img src={image2}></img>
                        </div>
            </div>
        </div>
    )
}
