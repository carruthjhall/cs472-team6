import { TestimonialComponent } from "../components/Testimonial/TestimonialComponent";
import {BannerComponent} from '../components/Banner/BannerComponent';
import {AboutHeadImagesComponent} from '../components/AboutHeadImages/AboutHeadImagesComponent';
import {AboutHeadSectionComponent} from '../components/AboutHeadSection/AboutHeadSectionComponent';
import {EducationAndWorkComponent} from '../components/EducationAndWork/EducationAndWorkComponent';
import {ServiceWrapperComponent} from '../components/ServiceWrapper/ServiceWrapperComponent';
import Skills from "../components/Skills/Skills";
import SkillsOptions from "../components/Skills/SkillsOptions";
import SkillsPreview from "../components/Skills/SkillsDark.png";
import {SocialMediaComponent} from '../components/SocialMedia/SocialMediaComponent'; 
import { faqComponent } from "../components/faqSection/faqComponent";
import Component from "../models/Component";
import { Gradients } from "./utils";
import {CtaSectionComponent} from "../components/CtaSection/CtaSectionComponent";
import { BlogPageComponent } from "../components/BlogPage/BlogPageComponent";
import { StatsWrapperComponent } from "../components/StatsWrapper/StatsWrapperComponent";
import {FourZeroFourComponent} from '../components/404Section/FourZeroFourComponent';
import { contactSectionComponent } from "../components/ContactSection/contactSectionComponent";
import { FooterComponent } from "../components/Footer/FooterComponent";
import { NavBarComponent } from "../components/NavbarComponent/NavBarComponent";
import { CompaniesComponent } from "../components/Companies/CompaniesComponent";
import { ServicesSectionComponent } from "../components/ServicesSection/ServicesSectionComponent";


export const registeredComponents = new Map([
    ['Testimonial', TestimonialComponent],
    ['Service Wrapper', ServiceWrapperComponent],
    ['Banner', BannerComponent],
    ['AboutHeadSection', AboutHeadSectionComponent],
    ['AboutHeadImages', AboutHeadImagesComponent],
    ['Stats Section', StatsWrapperComponent],
    ['CtaSection', CtaSectionComponent],
    ['BlogPage', BlogPageComponent],
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
    ['SocialMedia', SocialMediaComponent],
    ['Four Zero Four', FourZeroFourComponent],
    ['FAQ', faqComponent],
    ['ContactSection', contactSectionComponent],
    ['FAQ', faqComponent],
    ['Navbar', NavBarComponent],
    ['Footer', FooterComponent],
    ['Companies', CompaniesComponent],
    ['Services Section', ServicesSectionComponent]
]);
