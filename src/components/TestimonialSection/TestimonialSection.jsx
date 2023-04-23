import Testimonial from "../Testimonial/Testimonial";
import Component from "../../models/Component";
import { TestimonialComponent } from "../Testimonial/TestimonialComponent";
import { Gradients } from "../../utils/utils";
import React from "react";


export default function TestimonialSection({options}){
    const {gradient, noOfTestimonials, testimonialList} = options;
    const [screenDimensions, resizeDimensions] = React.useState({
        screenWidth: window.innerWidth,
        isSm: window.innerWidth < 768 ? true : false
    }
    )

    const resizeWidth = () => {
        resizeDimensions({
            screenWidth: window.innerWidth,
            isSm: window.innerWidth < 768 ? true : false
        });
    }

    React.useEffect(() => {
        window.addEventListener("resize", resizeWidth);
    }, []
    )
    return(
        <div className="lg:w-[1028px] m-3 lg:m-auto flex flex-col">
            <h2 className="text-main font-bold text-[32px] md:text-[64px] mt-11 mb-11 dark:text-[#F0F2F5] flex justify-center">Client &#20;<span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}> Testimonials</span></h2>
            {/*<LayoutByScreenSize isSm={screenDimensions.isSm} options={options} />*/}
            <div className="flex flex-wrap">
                {testimonialList.slice(0,noOfTestimonials).map((testimonial, index) => {
                    return(
                        <SingleTestimonial key = {index} index = {index} testimonial = {testimonial} className="flex-[1_1_50%]"/>
                )
                })}
            </div>
        </div>
    )

}

function SingleTestimonial({testimonial,index}){
    let testimonialOptions = {
        stars: testimonial.stars,
        starGradient: Gradients.default,
        testimonialBody:  testimonial.testimonialBody,
        custPicture: testimonial.custPicture,
        custName: testimonial.custName,
        custPosition: testimonial.custPosition
    }

    return(
        <Testimonial options={testimonialOptions} className="p-0"/>
    )
}

function LayoutByScreenSize({isSm, options}){
    const {gradient, noOfTestimonials, testimonialList} = options;
    if(isSm){
        return(
            <div className="flex flex-col justify-center">
                <div className="float-left mr-0">
                {testimonialList.slice(0,noOfTestimonials < 4 ? noOfTestimonials : 4).map((testimonial, index) => {
                    return(
                        <SingleTestimonial key = {index} index = {index} testimonial = {testimonial}/>
                )
                })}
                </div>
                <div className="float-left ml-0">
                {testimonialList.slice(4,noOfTestimonials).map((testimonial, index) => {
                    return(
                        <SingleTestimonial key = {index} index = {index} testimonial = {testimonial}/>
                    )
                })}  
                </div>
            </div>
        )
    } else{
        return(
            <div className="flex flex-col justify-center">
                <div className="flex flex-row mr-0">
                {testimonialList.slice(0,noOfTestimonials < 2 ? noOfTestimonials : 2).map((testimonial, index) => {
                    return(
                        <SingleTestimonial key = {index} index = {index} testimonial = {testimonial}/>
                )
                })}
                </div>
                <div className="flex flex-row ml-0">
                {testimonialList.slice(2,noOfTestimonials < 4 ? noOfTestimonials : 4).map((testimonial, index) => {
                    return(
                        <SingleTestimonial key = {index} index = {index} testimonial = {testimonial}/>
                    )
                })}  
                </div>
                <div className="flex flex-row ml-0">
                {testimonialList.slice(4,noOfTestimonials < 6 ? noOfTestimonials : 6).map((testimonial, index) => {
                    return(
                        <SingleTestimonial key = {index} index = {index} testimonial = {testimonial}/>
                    )
                })}  
                </div>
                <div className="flex flex-row ml-0">
                {testimonialList.slice(6,noOfTestimonials).map((testimonial, index) => {
                    return(
                        <SingleTestimonial key = {index} index = {index} testimonial = {testimonial}/>
                    )
                })}  
                </div>
            </div>
        )
    }
}