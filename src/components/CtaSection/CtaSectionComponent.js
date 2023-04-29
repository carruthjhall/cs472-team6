import CtaSection from "./CtaSection";
import CtaSectionOptions from "./CtaSectionOptions";
import CtaSectionPreview from "./CtaSectionPreview.png";
import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";

export const CtaSectionComponent = new Component(
    'Call to Action Section', 
    CtaSection, 
    CtaSectionOptions, 
    CtaSectionPreview, 
    {
        link: "https://www.google.com/", 
        word1: "See the impact of good, conversion-oriented design on your business.", 
        word2: "Let's Work Together", 
        gradient: Gradients.default
    }
)