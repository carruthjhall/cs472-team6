import React, { useState } from "react";
import dropArrow from "./lightdropArrow.svg"
import reverseArrow from "./lightdropArrowReverse.svg"
import darkArrow from "./darkdropArrow.svg"
import reverseDarkArrow from "./darkdropArrowReverse.svg"
import { ReactComponentElement  } from "react";


export default function Accordion({question, answer}){

    const [isActive, setIsActive] = useState(false);

    return(

        <div className="flex items-center justify-between w-full">
            
            <div className="w-[95%] h-[95%]" id="accordion">
                <div id="accordion1" className="flex items-center justify-between w-[100%] h-20 border-b border-gray-300 dark:border-white dark:border-opacity-40 font-main text-lg cursor-pointer text-black dark:text-white" onClick={() => setIsActive(!isActive)}>
                    <span>{question}</span>
                    <div className="items-start">
                        {isActive ?
                        <picture>
                            <source srcset={reverseDarkArrow} media="(prefers-color-scheme: light)"></source>
                            <img src={reverseArrow}></img> 
                        </picture> 
                        : 
                        <picture>
                            <source srcset={darkArrow} media="(prefers-color-scheme: light)"></source>
                            <img src={dropArrow}></img> 
                        </picture> }
                    </div>
                </div>
                {isActive && <div className="pt-4 font-secondary text-black dark:text-white">{answer}</div>}
            </div>
        </div>
    );
}