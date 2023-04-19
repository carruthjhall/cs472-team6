import CtaSection2 from "./CtaSection2"
import CtaSection2Options from "./CtaSection2Options";
import CtaSection2Preview from "./CtaSection2Preview.png";
import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";

export const CtaSection2Component = new Component(
    'CtaSection2', 
    CtaSection2, 
    CtaSection2Options, 
    CtaSection2Preview, 
    {
        link: "https://www.google.com/", 
        word1: "See the impact of good, conversion-oriented design on your business.", 
        word2: "Let's Work Together", 
        gradient: Gradients.default
    }
)