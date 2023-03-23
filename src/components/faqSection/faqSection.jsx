import React from "react";
import Accordion from "./Accordion";


export default function faqSection({options}){

    const {q1, ans1, q2, ans2, q3, ans3, q4, ans4, q5, ans5} = options

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

    return(
        <div className="flex flex-grow pt-10 pl-16 pr-10 h-auto bg-white dark:bg-black text-white grid grid-cols-2 gap-4">
            {/*FAQ Side*/}
            <div className="flex-shrink grid grid-rows-3 pt-8">
               <div className="flex-shrink aspect-auto">
                    <h1 className="text-6xl whitespace-pre-line font-main text-black dark:text-white"> Frequently Asked </h1>
                    <h1 className="font-main text-6xl bg-gradient-to-r from-grad1 via-grad2 via-grad3 to-grad4 text-transparent bg-clip-text"> Questions </h1>
               </div>

               <div className="pt-8">
                    <p className="font-secondary pb-10 text-black font-semibold dark:text-white">Answers to the burning questions in your mind.</p>

                    <button type="submit" className="rounded-full w-48 h-14 -translate-x-1 bg-gradient-to-r from-grad1 via-grad2 via-grad3 to-grad4 font-secondary font-bold text-black dark:text-white">CONTACT ME</button>
               </div>
                
            </div>

            {/*Question Accordion */}

            <div className="flex-shrink">
                {questionAccordion.map( ({question, answer}) => 
                ( <Accordion question={question} answer={answer}/>))}
            </div>
            
        </div>
    )

}