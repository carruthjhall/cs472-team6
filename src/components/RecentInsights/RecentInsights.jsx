import React, { useState, useEffect } from 'react';

export default function RecentInsights({ options }) {
    const {gradient, 
           buttonLink1, buttonLink2, buttonLink3, buttonLink4,
           buttonText1, buttonText2, buttonText3, buttonText4,
           img1, img2, img3, img4, img5,
           postLink11, postLink12, postLink21, postLink22, postLink31, 
           postLink32, postLink41, postLink42, postLink51, postLink52,
           postText11, postText12, postText21, postText22, postText31,
           postText32, postText41, postText42, postText51, postText52, 
           description1, description2, description3, description4, description5,
           author1, author2, author3, author4, author5} = options;
    
    const [activeButton, setActiveButton] = useState(1);
    const [postsToRender, setPostsToRender] = useState([]);

    useEffect(() => {
        switch (activeButton) {
            case 1:
                setPostsToRender([1, 2, 3, 4, 5]);
                break;
            case 2:
                setPostsToRender([1, 2, 3]);
                break;
            case 3:
                setPostsToRender([4]);
                break;
            case 4:
                setPostsToRender([5]);
                break;
            default:
                break;
        }
    }, [activeButton]);

    function renderPost(img, postLink1, postText1, postLink2, postText2, description, author) {
        return (
            <div className="flex justify-center item-center mb-10">
                <div className="w-[340px] h-[567px] md:w-[864px] md:h-[304px] lg:w-[1200px] lg:h-[344px] md:flex md:flex-row item-center justify-center dark:bg-[#1C1C22] bg-[#f5f5f5]">
                    <div className=" mt-4 md:mt-8 ml-5 md:ml-8">
                        <img src={img} className="w-[300px] h-[280px] md:w-[360px] 
                            md:h-[240px] lg:w-[552px] lg:h-[280px] mb-4" alt="Post Image"></img>
                    </div>
                    <div className="w-1/2 mt-8 ml-5 ">
                        <div className="flex flex-row mb-4 md:mb-8">
                            <a href={postLink1}>   
                                <button className="w-[66px] h-[36px] md:w-[93px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white mr-4 text-white dark:text-black font-bold" href={postLink11}>
                                    {postText1}
                                </button>
                            </a>
                            <a href={postLink2}>   
                                <button className="w-[100px] h-[36px] md:w-[140px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white text-white dark:text-black font-bold" href={postLink12}>
                                    {postText2}
                                </button>
                            </a>
                        </div>
                        <div className="w-[300px] h-[99px] md:w-[418px] md:h-[60px] lg:w-[519px] lg:h-[80px] mb-7 md:mb-14"> 
                            <div className="text-[26px] md:text-[32px] font-bold text-black dark:text-white leading-8">{description}</div>
                        </div>
                        <div className="text-[18px] font-Inter font-bold text-black dark:text-white">{author}</div>
                    </div>
                </div>
            </div>
        );
    }
    
    const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    const isActive = (buttonNumber) => {
        return activeButton === buttonNumber;
    };

    const buttonClasses = (buttonNumber) => {
        const baseClasses = "rounded-[40px] font-bold mr-4";
        const activeLight = "bg-black text-white";
        const inactiveLight = "bg-[#f5f5f5] text-black";
        const activeDark = "dark:bg-white dark:text-black";
        const inactiveDark = "dark:bg-[#1C1C22] dark:text-white";
    
        if (isActive(buttonNumber)) {
            return `${baseClasses} ${activeLight} ${activeDark}`;
        } else {
            return `${baseClasses} ${inactiveLight} ${inactiveDark}`;
        }
    };

    return (
        <div className="flex items-center flex-col justify-center">
            <div className="mb-8 md:mb-12 w-[340px] md:w-[864px] lg:w-[1200px] ">    
                <div className="">
                        <div className={`text-[32px] md:text-[56px] font-bold font-main text-transparent 
                            bg-clip-text bg-gradient-to-r ${gradient} py-4 w-max`}>Recent Insights</div>
                </div>

                <div className="">
                    <a onClick={() => handleButtonClick(1)}>   
                        <button className={`w-[90px] h-[36px] md:w-[119px] md:h-[46px] mb-4 ${buttonClasses(1)}`} href={buttonLink1}>
                            {buttonText1}
                        </button>
                    </a>
                    <a onClick={() => handleButtonClick(2)}>   
                        <button className={`w-[80px] h-[36px] md:w-[105px] md:h-[46px] rounded-[40px] ${buttonClasses(2)}`} href={buttonLink2}>
                            {buttonText2}
                        </button>
                    </a>
                    <a onClick={() => handleButtonClick(3)}>   
                        <button className={`w-[107px] h-[36px] md:w-[141px] md:h-[46px]  ${buttonClasses(3)}`} href={buttonLink3}>
                            {buttonText3}
                        </button>
                    </a>
                    <a onClick={() => handleButtonClick(4)}>   
                        <button className={`w-[90px] h-[36px] md:w-[119px] md:h-[46px] ${buttonClasses(4)}`} href={buttonLink4}>
                            {buttonText4}
                        </button>
                    </a>
                </div>
            </div>

            {postsToRender.includes(1) && renderPost(img1, postLink11, postText11, postLink12, postText12, description1, author1)}
            {postsToRender.includes(2) && renderPost(img2, postLink21, postText21, postLink22, postText22, description2, author2)}
            {postsToRender.includes(3) && renderPost(img3, postLink31, postText31, postLink32, postText32, description3, author3)}
            {postsToRender.includes(4) && renderPost(img4, postLink41, postText41, postLink42, postText42, description4, author4)}
            {postsToRender.includes(5) && renderPost(img5, postLink51, postText51, postLink52, postText52, description5, author5)}

        </div>
        
    );
}