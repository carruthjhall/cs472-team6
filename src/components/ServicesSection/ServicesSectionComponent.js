import ServicesSection from "./ServicesSection";
import ServicesSectionPreview from "./ServicesSectionPreview.png";
import { Gradients } from "../../utils/utils";

export const ServicesSectionComponent = new Component(
    'Services Section', 
    ServicesSection, 
    null, 
    ServicesSectionPreview, 
    { 
        services: [
            new ServiceOptions('UI/UX Design', Gradients.default, null),
            new ServiceOptions('Graphic Design', Gradients.default, null),
            new ServiceOptions('Web Design', Gradients.default, null),
            new ServiceOptions('Product Design', Gradients.default, null)
        ]
    }
);

export class ServiceOptions {
    constructor(name, gradient, picture){
        this.name = name;
        this.gradient = gradient;
        this.picture = picture;
    }
}