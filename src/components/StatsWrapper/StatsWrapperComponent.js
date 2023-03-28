import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import StatsWrapper from "./StatsWrapper";
import StatsWrapperOptions from "./StatsWrapperOptions";
import StatsWrapperPreview from "./StatsWrapperPreview.png";

export const StatsWrapperComponent = new Component(
    'Stats Section', 
    StatsWrapper, 
    StatsWrapperOptions, 
    StatsWrapperPreview, 
    {
        stats: [
            {
                number: "12+", 
                text: "Years of Experience in Design"
            },    
            {
                number: "100+", 
                text: "Successfully Completed Projects"
            },
            {
                number: "50+", 
                text: "Global Customers"
            }
        ], 
        gradient: Gradients.default
    }
)