import emailIcon from "./emailIcon.svg";
import phoneIcon from "./phoneIcon.svg";
import miniEmailIcon from "./miniEmailIcon.svg";
import miniDollarIcon from "./miniDollarIcon.svg";
import blackMiniDollarSign from "./blackMiniDollarSign.svg"
import blackMiniEmail from "./blackMiniEmail.svg"

import { useState } from 'react'

export default function ContactSection({options}){

    const {uEmail, uPhone, displayHeader, displayDescr, gradient} = options
   
    const [inputs, setInputs] = useState({})
    const [textarea, setTextArea] = useState("")

    const handleChange =  (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
        
    }

    const handleTextChange = (e) => {
        setTextArea(e.target.value)  
    }
    
    
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Name: ${inputs.name}\nEmail: ${inputs.email}\nBudget: ${inputs.budget}\nText: ${textarea}`);
    }
  
    return (
        <div className="flex flex-col m-auto lg:w-[1200px] lg:h-[700px] md:w-[864px] md:h-[1069px] w-[400px] h-[1000px]
                        bg-white dark:bg-black md:px-10 py-10 lg:grid lg:grid-cols-2 lg:gap-28 justify-center">

            <div className='flex-grow row-span-2 py-5 font-main '>
              <h2 className={`text-[64px] w-[400px] h-[80px] text-transparent bg-clip-text bg-gradient-to-r ${gradient} bg-red-400`}>{displayHeader}</h2>
              <br></br>
              <p className="flex flex-wrap flex-row justify-between whitespace-pre-wrap break-words overflow-hidden 
              text-black dark:text-white text-lg font-secondary md:w-[452px] md:h-[97px]">{displayDescr} </p>

            <div className="flex flex-wrap items-start translate-y-[14.5px] mt-2.5 w-[260px] h-[100px]"> 
              <img src={emailIcon}></img> 
              <span className="text-black dark:text-white text-[18px] font-semibold font-secondary px-4">{uEmail}</span>
              <img src={phoneIcon}></img>
              <span className="text-black dark:text-white text-[18px] translate-y-[2.5px] font-bold font-secondary px-4">{uPhone}</span>
            </div>
          </div>

          <div className='pr-10 md:w-[864px] md:h-[668px] lg:w-[575px] lg:h-[668px] lg:-translate-x-10'>
            <form onSubmit={handleSubmit}>
              {/*Form name*/}
              <div className="flex flex-col mt-2.5">
                <label className="block text-black dark:text-white text-[15px] leading-10 font-secondary font-semibold">Your Name</label>
                <input required className='rounded-md border-8 px-2 w-full bg-graywhite border-graywhite dark:bg-grayblack dark:border-grayblack
                text-black dark:text-white font-secondary placeholder:text-base placeholder:font-secondary' type="text" placeholder="Enter your name" name="name" value={inputs.name || ""} onChange={handleChange}></input>
              </div>
              
              {/*Form e-mail*/}
              <div className="mt-5">
                <label className="block text-black dark:text-white text-[15px] leading-4 font-secondary font-semibold"> Your Email </label>
                <picture>
                  <source srcset={blackMiniEmail} media="(prefers-color-scheme: light)">
                  </source>
                  <img src={miniEmailIcon} className="translate-y-7 translate-x-[9.5px]">
                  </img>
                </picture>
                <input required className='rounded-md border-8 px-7 w-full bg-graywhite border-graywhite text-black dark:text-white dark:border-grayblack dark:bg-grayblack font-secondary placeholder:text-base placeholder:font-secondary' type="email" placeholder="Enter your e-mail" name="email" value={inputs.email || ""} onChange={handleChange}></input>
                
              </div>

              {/*Form budget, etc.*/}
              <div className="mt-5">
                <label className="block text-black dark:text-white text-[15px] font-secondary font-semibold">Your Budget </label>
                <picture>
                  <source srcset={blackMiniDollarSign} media="(prefers-color-scheme: light)">
                  </source>
                  <img src={miniDollarIcon} className="translate-y-[32.5px] translate-x-[9.15px]">
                  </img>
                </picture>
                <input required className='rounded-lg border-8 border-t-8 border-b-8 px-7 w-full leading-7 bg-graywhite border-graywhite text-black dark:text-white dark:border-grayblack dark:bg-grayblack font-secondary placeholder:text-base placeholder:font-secondary' type="number" min="1000" max="3000" placeholder="1k-3k" name="budget" value={inputs.budget || ""} onChange={handleChange}></input>
              </div>

              {/*Tell me about section*/}
              <div className="flex flex-col">
                <label className="block text-black dark:text-white text-[15px] leading-1 py-4 font-secondary font-semibold">Tell me a bit more about what you are looking for? </label>
                <textarea required className='rounded-lg border-8 border-t-8 border-b-8 w-full h-36 resize-none overflow-hidden bg-graywhite border-graywhite text-black dark:text-white dark:border-grayblack dark:bg-grayblack font-secondary placeholder:-translate-x-24 placeholder:text-base placeholder:font-secondary' value={textarea} onChange={handleTextChange}></textarea>
              </div>

              {/*Submit button*/}
              <button type="submit" className="text-black dark:text-white font-secondary text-sm font-bold mt-5 bg-gradient-to-r from-grad1 via-grad2 via-grad3 to-grad4 rounded-full py-4 px-8 ">SUBMIT NOW</button>
              
            </form>
          </div>

        </div>
          
          
          

    
      );
}