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
    
    return (
        <div className="flex items-center flex-col justify-center">
            <div className="mb-8 md:mb-12 w-[340px] md:w-[864px] lg:w-[1200px] ">    
                <div className="">
                        <div className={`text-[32px] md:text-[56px] font-bold font-main text-transparent 
                            bg-clip-text bg-gradient-to-r ${gradient} py-4 w-max`}>Recent Insights</div>
                </div>

                <div className="">
                    <a href={buttonLink1}>   
                        <button className="w-[90px] h-[36px] md:w-[119px] md:h-[46px] rounded-[40px] dark:bg-[#FFFFFF] 
                            bg-black mr-4 text-white dark:text-black font-bold mb-4 " href={buttonLink1}>
                            {buttonText1}
                        </button>
                    </a>
                    <a href={buttonLink2}>   
                        <button className="w-[80px] h-[36px] md:w-[105px] md:h-[46px] rounded-[40px] dark:bg-[#1C1C22] bg-[#e4e4e7] 
                            mr-4 text-white dark:text-black font-bold" href={buttonLink2}>
                            {buttonText2}
                        </button>
                    </a>
                    <a href={buttonLink3}>   
                        <button className="w-[107px] h-[36px] md:w-[141px] md:h-[46px] rounded-[40px] bg-[#e4e4e7] 
                            dark:bg-[#1C1C22] mr-4 text-white dark:text-black font-bold" href={buttonLink3}>
                            {buttonText3}
                        </button>
                    </a>
                    <a href={buttonLink4}>   
                        <button className="w-[90px] h-[36px] md:w-[119px] md:h-[46px] rounded-[40px] bg-[#e4e4e7]
                            dark:bg-[#1C1C22] mr-4 text-white dark:text-black font-bold" href={buttonLink4}>
                            {buttonText4}
                        </button>
                    </a>
                </div>
            </div>

            <div className="flex justify-center item-center mb-10">
                <div className="w-[340px] h-[567px] md:w-[864px] md:h-[304px] lg:w-[1200px] lg:h-[344px] md:flex md:flex-row item-center justify-center dark:bg-[#1C1C22] bg-[#FFFFFF]">
                    <div className="md:w-1/2 mt-4 md:mt-8 ml-5 md:ml-8">
                        <img src={img1} className="w-[300px] h-[280px] md:w-[360px] 
                            md:h-[240px] lg:w-[552px] lg:h-[280px] mb-4" alt="Post Image"></img>
                    </div>
                    <div className="w-1/2 mt-8 ml-5 ">
                        <div className="flex flex-row mb-4 md:mb-8">
                            <a href={postLink11}>   
                                <button className="w-[66px] h-[36px] md:w-[93px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white mr-4 text-white dark:text-black font-bold" href={postLink11}>
                                    {postText11}
                                </button>
                            </a>
                            <a href={postLink12}>   
                                <button className="w-[100px] h-[36px] md:w-[140px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white text-white dark:text-black font-bold" href={postLink12}>
                                    {postText12}
                                </button>
                            </a>
                        </div>
                        <div className="w-[300px] h-[99px] md:w-[418px] md:h-[60px] lg:w-[519px] lg:h-[80px] mb-7 md:mb-14"> 
                            <div className="text-[26px] md:text-[32px] font-bold text-black dark:text-white leading-8">{description1}</div>
                        </div>
                        <div className="text-[18px] font-Inter font-bold text-black dark:text-white">{author1}</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center item-center mb-10">
                <div className="w-[340px] h-[567px] md:w-[864px] md:h-[304px] lg:w-[1200px] lg:h-[344px] md:flex md:flex-row item-center justify-center dark:bg-[#1C1C22] bg-[#FFFFFF]">
                    <div className="md:w-1/2 mt-4 md:mt-8 ml-5 md:ml-8">
                        <img src={img2} className="w-[300px] h-[280px] md:w-[360px] 
                            md:h-[240px] lg:w-[552px] lg:h-[280px] mb-4" alt="Post Image"></img>
                    </div>
                    <div className="w-1/2 mt-8 ml-5 ">
                        <div className="flex flex-row mb-4 md:mb-8">
                            <a href={postLink21}>   
                                <button className="w-[66px] h-[36px] md:w-[93px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white mr-4 text-white dark:text-black font-bold" href={postLink21}>
                                    {postText21}
                                </button>
                            </a>
                            <a href={postLink22}>   
                                <button className="w-[100px] h-[36px] md:w-[140px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white text-white dark:text-black font-bold" href={postLink22}>
                                    {postText22}
                                </button>
                            </a>
                        </div>
                        <div className="w-[300px] h-[99px] md:w-[418px] md:h-[60px] lg:w-[519px] lg:h-[80px] mb-7 md:mb-14"> 
                            <div className="text-[26px] md:text-[32px] font-bold text-black dark:text-white leading-8">{description2}</div>
                        </div>
                        <div className="text-[18px] font-Inter font-bold text-black dark:text-white">{author2}</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center item-center mb-10">
                <div className="w-[340px] h-[567px] md:w-[864px] md:h-[304px] lg:w-[1200px] lg:h-[344px] md:flex md:flex-row item-center justify-center dark:bg-[#1C1C22] bg-[#FFFFFF]">
                    <div className="md:w-1/2 mt-4 md:mt-8 ml-5 md:ml-8">
                        <img src={img3} className="w-[300px] h-[280px] md:w-[360px] 
                            md:h-[240px] lg:w-[552px] lg:h-[280px] mb-4" alt="Post Image"></img>
                    </div>
                    <div className="w-1/2 mt-8 ml-5 ">
                        <div className="flex flex-row mb-4 md:mb-8">
                            <a href={postLink31}>   
                                <button className="w-[66px] h-[36px] md:w-[93px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white mr-4 text-white dark:text-black font-bold" href={postLink31}>
                                    {postText31}
                                </button>
                            </a>
                            <a href={postLink32}>   
                                <button className="w-[100px] h-[36px] md:w-[140px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white text-white dark:text-black font-bold" href={postLink32}>
                                    {postText32}
                                </button>
                            </a>
                        </div>
                        <div className="w-[300px] h-[99px] md:w-[418px] md:h-[60px] lg:w-[519px] lg:h-[80px] mb-7 md:mb-14"> 
                            <div className="text-[26px] md:text-[32px] font-bold text-black dark:text-white leading-8">{description3}</div>
                        </div>
                        <div className="text-[18px] font-Inter font-bold text-black dark:text-white">{author3}</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center item-center mb-10">
                <div className="w-[340px] h-[567px] md:w-[864px] md:h-[304px] lg:w-[1200px] lg:h-[344px] md:flex md:flex-row item-center justify-center dark:bg-[#1C1C22] bg-[#FFFFFF]">
                    <div className="md:w-1/2 mt-4 md:mt-8 ml-5 md:ml-8">
                        <img src={img4} className="w-[300px] h-[280px] md:w-[360px] 
                            md:h-[240px] lg:w-[552px] lg:h-[280px] mb-4" alt="Post Image"></img>
                    </div>
                    <div className="w-1/2 mt-8 ml-5 ">
                        <div className="flex flex-row mb-4 md:mb-8">
                            <a href={postLink41}>   
                                <button className="w-[66px] h-[36px] md:w-[93px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white mr-4 text-white dark:text-black font-bold" href={postLink41}>
                                    {postText41}
                                </button>
                            </a>
                            <a href={postLink42}>   
                                <button className="w-[100px] h-[36px] md:w-[140px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white text-white dark:text-black font-bold" href={postLink42}>
                                    {postText42}
                                </button>
                            </a>
                        </div>
                        <div className="w-[300px] h-[99px] md:w-[418px] md:h-[60px] lg:w-[519px] lg:h-[80px] mb-7 md:mb-14"> 
                            <div className="text-[26px] md:text-[32px] font-bold text-black dark:text-white leading-8">{description4}</div>
                        </div>
                        <div className="text-[18px] font-Inter font-bold text-black dark:text-white">{author4}</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center item-center mb-10">
                <div className="w-[340px] h-[567px] md:w-[864px] md:h-[304px] lg:w-[1200px] lg:h-[344px] md:flex md:flex-row item-center justify-center dark:bg-[#1C1C22] bg-[#FFFFFF]">
                    <div className="md:w-1/2 mt-4 md:mt-8 ml-5 md:ml-8">
                        <img src={img5} className="w-[300px] h-[280px] md:w-[360px] 
                            md:h-[240px] lg:w-[552px] lg:h-[280px] mb-4" alt="Post Image"></img>
                    </div>
                    <div className="w-1/2 mt-8 ml-5 ">
                        <div className="flex flex-row mb-4 md:mb-8">
                            <a href={postLink51}>   
                                <button className="w-[66px] h-[36px] md:w-[93px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white mr-4 text-white dark:text-black font-bold" href={postLink51}>
                                    {postText51}
                                </button>
                            </a>
                            <a href={postLink52}>   
                                <button className="w-[100px] h-[36px] md:w-[140px] md:h-[44px] rounded-[40px] bg-black 
                                    dark:bg-white text-white dark:text-black font-bold" href={postLink52}>
                                    {postText52}
                                </button>
                            </a>
                        </div>
                        <div className="w-[300px] h-[99px] md:w-[418px] md:h-[60px] lg:w-[519px] lg:h-[80px] mb-7 md:mb-14"> 
                            <div className="text-[26px] md:text-[32px] font-bold text-black dark:text-white leading-8">{description5}</div>
                        </div>
                        <div className="text-[18px] font-Inter font-bold text-black dark:text-white">{author5}</div>
                    </div>
                </div>
            </div>

        </div>
        
    );
}