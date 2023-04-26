export default function SelectedProjects({options}){
    let  {header, descr, image1, image2, projName, projField, btn1, btn1Link, btn2, btn2Link, gradient} = options

    return(
        <div id="mainDiv" className="flex flex-wrap m-auto w-[450px] md:w-[870px] lg:w-[1200px] bg-blue-100
                                     sm:bg-red-200
                                     md:bg-orange-300
                                     lg:bg-yellow-400">
            <div id="header" className="flex-row row-2  md:w-[870px] lg:w-[1200px]">
                <h1 className={`pb-5 bg-red-100 font-main w-[278px] md:w-[388px] lg:w-[750px]
                                text-[32px] md:text-[56px] lg:text-[64px]
                                text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{header}</h1>
                <p className="pb-10 font-normal font-secondary 
                               md:w-[600px]
                              text-[16px] md:text-[18px]">{descr}</p>
            </div>

            <div id="pic1" className="bg-green-200 relative m-auto">

                <img src={image1}></img>
                
                <div className="absolute 
                -translate-y-[170px] translate-x-[15px]
                md:-translate-y-[10px] md:translate-x-1
                lg:-translate-y-10 lg:-translate-y-8">
                    <button className={`invisible lg:visible rounded-full py-[20px] bg-gradient-to-r ${gradient} text-[16px] font-secondary text-black -translate-y-[300px] translate-x-[540px]`}>View Case Study</button>  

                    <h2 className="font-main text-white 
                                md:w-[500px]
                                text-[24px] md:text-[48px] lg:text-[56px]

                                md:-translate-y-64 md:translate-x-6">{projName}</h2>
                    
                    <span className="font-secondary text-white md:text-[24px] lg:text-[32px] absolute 
                                    md:-translate-y-[250px] md:translate-x-[27.5px]">{projField}</span>

                    <div className="text-[9.5px] md:text-[16px] absolute
                    translate-y-[35px] 
                    md:-translate-y-[200px] md:translate-x-6">
                        
                        <button className={`rounded-3xl bg-gradient-to-r ${gradient} font-secondary text-white 
                        px-[10px] py-[3.5px]
                        md:px-[30px] md:py-[10px] `}>{btn1}</button>
                        <button className={`rounded-3xl bg-gradient-to-r ${gradient} font-secondary text-white px-[10px] py-[3.5px] md:px-[30px] md:py-[10px] translate-x-2`}>{btn2}</button>
                     
                    </div>

                </div>
                 
                

                
            </div>

            <div id="pic2">
                <img src={image2}></img>
            </div>

        </div>
    )
}