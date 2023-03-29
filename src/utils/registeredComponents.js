import Banner from "../components/Banner/Banner";
import BannerOptions from "../components/Banner/BannerOptions";
import BannerPreview from "../components/Banner/BannerPreview.png";
import { TestimonialComponent } from "../components/Testimonial/TestimonialComponent";
import ServiceWrapper from "../components/ServiceWrapper/ServiceWrapper";
import ServiceWrapperPreview from "../components/ServiceWrapper/ServiceWrapperPreview.png";
import ServiceWrapperOptions from "../components/ServiceWrapper/ServiceWrapperOptions";
import {BannerComponent} from '../components/Banner/BannerComponent';
import {AboutHeadImagesComponent} from '../components/AboutHeadImages/AboutHeadImagesComponent';
import {AboutHeadSectionComponent} from '../components/AboutHeadSection/AboutHeadSectionComponent';
import StatsWrapper from "../components/StatsWrapper/StatsWrapper";
import StatsWrapperOptions from "../components/StatsWrapper/StatsWrapperOptions";
import StatsWrapperPreview from "../components/StatsWrapper/StatsWrapperPreview.png";
import EducationWorkExperience from "../components/EducationAndWork/EducationAndWork";
import EducationWorkExperienceOptions from "../components/EducationAndWork/EducationAndWorkOptions";
import EducationWorkExperiencePreview from "../components/EducationAndWork/EducationAndWorkDark.png";
import {EducationAndWorkComponent} from '../components/EducationAndWork/EducationAndWorkComponent';
import Skills from "../components/Skills/Skills";
import SkillsOptions from "../components/Skills/SkillsOptions";
import SkillsPreview from "../components/Skills/SkillsDark.png";
import { faqComponent } from "../components/faqSection/faqComponent";
import Component from "../models/Component";
import { Gradients } from "./utils";
import {CtaSectionComponent} from "../components/CtaSection/CtaSectionComponent";
import { StatsWrapperComponent } from "../components/StatsWrapper/StatsWrapperComponent";
import { contactSectionComponent } from "../components/ContactSection/contactSectionComponent";
import { FooterComponent } from "../components/Footer/FooterComponent";
import { NavBarComponent } from "../components/NavbarComponent/NavBarComponent";

export const registeredComponents = new Map([
    ['Banner', new Component('Banner', Banner, BannerOptions, BannerPreview, {words: 'Design,Develop,Discover', gradient: Gradients.default})],
    ['Testimonial', TestimonialComponent],
    ['Service Wrapper', new Component('Service Wrapper', ServiceWrapper, ServiceWrapperOptions, ServiceWrapperPreview, {Title: 'Web Design', Text: "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id m", ButtonText: "Contact Me", ButtonLink: "https://www.google.com/", gradient: Gradients.default, ImageLink: "https://i.imgur.com/0vBgKva.jpeg", Invert: "Image Left"})],
    ['Banner', BannerComponent],
    ['AboutHeadSection', AboutHeadSectionComponent],
    ['AboutHeadImages', AboutHeadImagesComponent],
    ['Stats Section', new Component('Stats Section', StatsWrapper, StatsWrapperOptions, StatsWrapperPreview, {stats: [{number: "12+", text: "Years of Experience in Design"},{number: "100+", text: "Successfully Completed Projects"},{number: "50+", text: "Global Customers"}], gradient: Gradients.default})],
    ['CtaSection', CtaSectionComponent],
    ['Stats Section', StatsWrapperComponent],
    ['Education and Work', EducationAndWorkComponent],
    [
      'Skills',
      new Component(
        'Skills',
        Skills,
        SkillsOptions,
        SkillsPreview,
        {
          title: 'What I Do.',
          skillsList: [
            {name: "Figma", files:  "", image: "/src/components/Skills/SampleLogos/figma.png"},
            {name: "Photoshop", files:  "", image: "/src/components/Skills/SampleLogos/photoshop.png"},
            {name: "HTML", files:  "", image: "/src/components/Skills/SampleLogos/html.png"},
            {name: "Webflow", files:  "", image: "/src/components/Skills/SampleLogos/webflow.png"},
            {name: "SEQ", files:  "", image: "/src/components/Skills/SampleLogos/seo.png"}
          ]
        }
      )
    ],
    ['ContactSection', contactSectionComponent],
    ['FAQ', faqComponent],
    ['Navbar', NavBarComponent],
    ['Footer', FooterComponent]
]);
