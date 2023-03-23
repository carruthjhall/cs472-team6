export default function Sm({options}) {
    let {title, body, image, gradient, FbLink, LiLink, TwLink, InLink, DrLink, BhLink} = options;

    return (

        <div className={`lg:w-[1062px] lg:h-[720px] lg:flex  w-[1062px] h-[720px] lg:mt-[100px]
                        overflow-x-clip mx-auto relative text-black bg-white dark:bg-black dark:text-white`}>
            <div className={`container mx-auto justify-center`}>
                
                <img className="md:h-[720px] w-[720px] h-[720px]"src={image}>
                </img>   
                
                <div className="absolute text-2xl md:text-7xl bg-black text-white dark:bg-white dark:text-black 
                                top-1/2 -right-1/4 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[301px]">
                    <div className={`mx-10 pt-12 pb-6 text-3x1 whitespace-nowrap font-main text-transparent bg-clip-text text-[40px] w-full bg-gradient-to-r ${gradient}`}>
                        {title}
                    </div>
                    <div className="mx-10  text-[18px] float-none">
                        {body}
                    </div>

                    <hr class="h-px my-10 mx-10 border-1 bg-white dark:bg-black"></hr>

                    <div className="mx-10 grid grid-flow-col-dense">
                        <a href={FbLink}>
                            <img className={`md:h-[20px] md:w-[20px]`}src="https://i.imgur.com/VgkNYXI.png"></img>
                        </a>
                        <a href={LiLink}>
                            <img className={`md:h-[20px] md:w-[20px]`}src="https://i.imgur.com/NGBriju.png"></img>
                        </a>
                        <a href={TwLink}>
                            <img className={`md:h-[20px] md:w-[20px]`}src="https://i.imgur.com/iYkheW1.png"></img>
                        </a>
                        <a href={InLink}>
                            <img className={`md:h-[20px] md:w-[20px]`}src="https://i.imgur.com/M6yBwxS.png"></img>
                        </a>
                        <a href={DrLink}>
                            <img className={`md:h-[20px] md:w-[20px]`}src="https://cdn.freebiesupply.com/logos/large/2x/dribbble-icon-1-logo-png-transparent.png"></img>
                        </a>
                        <a href={BhLink}>
                            <img className={`md:h-[20px] md:w-[20px]`}src="https://i.imgur.com/HQR1o0z.png"></img>
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    )
}


