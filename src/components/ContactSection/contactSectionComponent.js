import ContactSection from "./ContactSection"
import ContactSectionOptions from "./ContactSectionOptions"
import ContactSectionPreview from "./ContactSectionPreview.png"
import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";

export const contactSectionComponent = new Component(
    'Contact Section', 
    ContactSection, 
    ContactSectionOptions, 
    ContactSectionPreview, 
    {
        uEmail:"yourname@email.com",
        uPhone:"+702-555-5555",
        displayHeader:"Get In Touch",
        displayDescr:"Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.",
        gradient: Gradients.default
    }
);