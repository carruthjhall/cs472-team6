import { TestimonialComponent } from "../components/Testimonial/TestimonialComponent";
import {EducationAndWorkComponent} from '../components/EducationAndWork/EducationAndWorkComponent';
import {BannerComponent} from '../components/Banner/BannerComponent';
import {ServiceWrapperComponent} from '../components/ServiceWrapper/ServiceWrapperComponent';
import EducationWorkExperience from "../components/EducationAndWork/EducationAndWork";
import EducationWorkExperienceOptions from "../components/EducationAndWork/EducationAndWorkOptions";
import EducationWorkExperiencePreview from "../components/EducationAndWork/EducationAndWorkDark.png";
import Skills from "../components/Skills/Skills";
import SkillsOptions from "../components/Skills/SkillsOptions";
import SkillsPreview from "../components/Skills/SkillsDark.png";
import { faqComponent } from "../components/faqSection/faqComponent";
import Component from "../models/Component";
import { Gradients } from "./utils";
import {CtaSectionComponent} from "../components/CtaSection/CtaSectionComponent";
import { BlogPageComponent } from "../components/BlogPage/BlogPageComponent";
import { StatsWrapperComponent } from "../components/StatsWrapper/StatsWrapperComponent";
import { contactSectionComponent } from "../components/ContactSection/contactSectionComponent";
import { FooterComponent } from "../components/Footer/FooterComponent";
import { NavBarComponent } from "../components/NavbarComponent/NavBarComponent";

export const registeredComponents = new Map([
    ['Testimonial', TestimonialComponent],
    ['Service Wrapper', ServiceWrapperComponent],
    ['Banner', BannerComponent],
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
    ['ContactSection', contactSectionComponent],
    ['FAQ', faqComponent],
    ['Navbar', NavBarComponent],
    ['Footer', FooterComponent]
]);
