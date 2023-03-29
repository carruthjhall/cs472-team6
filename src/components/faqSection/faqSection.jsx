import React from "react";
import Accordion from "./Accordion";
import { PageState } from "../../state"


export default function faqSection({options}){

    const {flavorText, q1, ans1, q2, ans2, q3, ans3, q4, ans4, q5, ans5, gradient, contactBttn} = options

    const componentsList = PageState((state) => state.componentsList);

    const questionAccordion = [
        {question: `${q1}`,
         answer: `${ans1}`
        },
        {
         question: `${q2}`,
         answer: `${ans2}`
        },
        {
            question: `${q3}`,
            answer: `${ans3}`
        }
        ,
        {
            question: `${q4}`,
            answer: `${ans4}`
        }
        ,
        {
            question: `${q5}`,
            answer: `${ans5}`
        }
        
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = componentsList.find( ( {name} ) => name === "ContactSection")
        
        if(result === undefined){
            alert("No contact section found.")
        } else {
            alert("Add functionality to jump to contact section")
        }

    }

    return(
        <div className="sm:flex lg:flex md:flex m-auto md:pl-[30px] p-4 pr-[10px]
                        lg:w-[1257px] lg:h-[500px] md:w-[864px] md:h-[850px] w-[390px] h-[945px]
                        flex-col lg:flex-row  
                        bg-white dark:bg-black text-white 
                        lg:grid lg:grid-cols-2 lg:gap-10">
            {/*FAQ Side*/}
            <div className="md:flex lg:grid md:grid lg:grid-rows-2
                            md:flex-col-3 
                            lg:w-[541px] lg:h-[332px]">
               <div className="flex-shrink 
                               lg:w-[541px] lg:h-[160px]
                               sm:w-[340px] ">
                    <h2 className="font-main text-[64px] text-black dark:text-white leading-tight">Frequently Asked</h2>
                    <h2 className={`font-main text-[64px] -translate-y-5 
                                    text-black dark:text-white
                                    lg:bg-gradient-to-r ${gradient} lg:text-transparent lg:bg-clip-text
                                    md:bg-gradient-to-r ${gradient} md:text-transparent md:bg-clip-text`}> Questions </h2>
               </div>

               <div className="lg:translate-y-12 md:-translate-y-3">
                    <p className="font-secondary pb-10 text-black font-semibold dark:text-white">{flavorText}</p>
               </div>

               <div className="">
                    <button type="submit" className={`rounded-full w-48 h-14 -translate-y-6 bg-gradient-to-r ${gradient} font-secondary font-bold text-black dark:text-white`}
                    onClick={handleSubmit}>{contactBttn}</button>
               </div>
                
            </div>

            {/*Question Accordion */}

            <div className="lg:w-[608px] lg:h-[42px]
                            md:w-[864px] md:[426px]"> 
                {questionAccordion.map( ({question, answer}) => 
                ( <Accordion question={question} answer={answer}/>))}
              
            </div>
            
        </div>
    )

}