export default function MoreProjects({options}) {
    let{title, gradientTitle, image, image2, body, description, gradient, buttonText} = options;
    
    return (
        <div className={`lg:w-[960px] lg:h-[688px] lg:flex 
                        md:w-[868px] md:h-[565px] w-[340px] h-[835px] lg:mt-[50px] m-[50px] overflow-x-clip mx-auto relative
                        text-white bg-white dark:bg-black`}>

            <div className={`w-[340px] h-[357px] -bottom-0 -left-0`}>
                <img className={``}src={image}></img>
            </div>
            <div className={`w-[340px] h-[357px] -bottom-0 -right-0`}>
                <img className={``}src={image2}></img>
            </div>
        </div>
    )
}