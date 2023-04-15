import { Gradients } from "../../utils/utils";
import logo1 from "./Logos/Logo1.svg";
import React from "react";

export default function Companies({options}){
    const {gradient, noOfLogos, logoList} = options;
    const [screenDimensions, resizeDimensions] = React.useState({
        screenWidth: window.innerWidth,
        isSm: window.innerWidth < 768 ? true : false
    }

    )
    React.useEffect(() => {
        resizeDimensions({
            screenWidth: window.innerWidth,
            isSm: window.innerWidth < 768 ? true : false
        })
        window.addEventListener("resize",resizeDimensions);
    }
    )
    return(
        <div className="lg:w-[1028px] lg:text-center m-3 lg:m-auto">
            <div className="w-[70%] md:w-[65%] lg:w-full">
            <h2 className="text-main font-bold text-[32px] md:text-[64px] mt-11 mb-11 dark:text-[#F0F2F5]"><span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>Companies</span> I've Worked With</h2>
            </div>
            <div className="">
                <div className="flex align-center justify-center">
                    {logoList.slice(0,noOfLogos > (screenDimensions.isSm ? 3 : 4) ? (screenDimensions.isSm ? 3 : 4)  : noOfLogos).map((company, index) => {
                            return(
                                <Company key = {index} index = {index} company={company}/>
                            )
                        })}
                </div>
                <div className="flex align-center justify-center">
                    {logoList.slice((screenDimensions.isSm ? 3 : 4) , noOfLogos > (screenDimensions.isSm ? 6 : 8) ? (screenDimensions.isSm ? 6 : 8) : noOfLogos).map((company, index) => {
                            return(
                                <Company key = {index} index = {index} company={company}/>
                            )
                        })}
                </div>
                <div className="flex align-center justify-center">
                    {logoList.slice((screenDimensions.isSm ? 6 : 8) , screenDimensions.isSm ? 9 : noOfLogos).map((company, index) => {
                            return(
                                <Company key = {index} index = {index} company={company}/>
                            )
                        })}
                </div>
                {screenDimensions.isSm ? 
                <div className="flex align-center justify-center">
                    {logoList.slice(9 , noOfLogos).map((company, index) => {
                            return(
                                <Company key = {index} index = {index} company={company}/>
                            )
                        })}
                </div>: ""}
            </div>
        </div>
    );
}


function Company({company, index}){
    const {url, darkUrl} = company;
    return(
        <picture>
            <source srcset={url === `/src/components/Companies/Logos/Logo${index + 1}.svg` ? `/src/components/Companies/Logos/DarkLogo${index + 1}.svg`: ""} media="(prefers-color-scheme:dark)"/>
            <img src={url} className="float-left max-w-[115px] sm:max-w-[144px] m-5"/>
        </picture>
    );
}