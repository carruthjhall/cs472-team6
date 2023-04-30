import { TestimonialComponent } from "../components/Testimonial/TestimonialComponent";
import { TestimonialSectionComponent } from "../components/TestimonialSection/TestimonialSectionComponent";
import {BannerComponent} from '../components/Banner/BannerComponent';
import {AboutHeadImagesComponent} from '../components/AboutHeadImages/AboutHeadImagesComponent';
import {AboutHeadSectionComponent} from '../components/AboutHeadSection/AboutHeadSectionComponent';
import {EducationAndWorkComponent} from '../components/EducationAndWork/EducationAndWorkComponent';
import {ServiceWrapperComponent} from '../components/ServiceWrapper/ServiceWrapperComponent';
import {SkillsComponent} from '../components/Skills/SkillsComponent';
import {SocialMediaComponent} from '../components/SocialMedia/SocialMediaComponent'; 
import { faqComponent } from "../components/faqSection/faqComponent";
import {CtaSectionComponent} from "../components/CtaSection/CtaSectionComponent";
import { BlogPageComponent } from "../components/BlogPage/BlogPageComponent";
import { StatsWrapperComponent } from "../components/StatsWrapper/StatsWrapperComponent";
import {FourZeroFourComponent} from '../components/404Section/FourZeroFourComponent';
import { contactSectionComponent } from "../components/ContactSection/contactSectionComponent";
import { FooterComponent } from "../components/Footer/FooterComponent";
import { NavBarComponent } from "../components/NavbarComponent/NavBarComponent";
import { CompaniesComponent } from "../components/Companies/CompaniesComponent";
import { CtaSection2Component } from "../components/CtaSection2/CtaSection2Component";
import { HomeHeroSectionComponent } from "../components/HomeHeroSection/HomeHeroSectionComponent";
import { HomeHeroSection2Component } from "../components/HomeHeroSection2/HomeHeroSection2Component";
import { MoreArticlesComponent } from "../components/MoreArticles/MoreArticlesComponent";
import { ServicesSectionComponent } from "../components/ServicesSection/ServicesSectionComponent";
import { RecentInsightsComponent } from "../components/RecentInsights/RecentInsightsComponent";
import { MoreProjectsComponent } from "../components/MoreProjects/MoreProjectsComponent";


export const registeredComponents = new Map([
    ['Testimonial Section', TestimonialSectionComponent],
    ['Service Wrapper', ServiceWrapperComponent],
    ['Banner', BannerComponent],
    ['About Head Section', AboutHeadSectionComponent],
    ['About Head Images', AboutHeadImagesComponent],
    ['Call to Action Section', CtaSectionComponent],
    ['Call to Action Section 2', CtaSection2Component],
    ['Blog Page', BlogPageComponent],
    ['Stats Section', StatsWrapperComponent],
    ['Education and Work', EducationAndWorkComponent],
    ['Skills', SkillsComponent],
    ['Social Media', SocialMediaComponent],
    ['Four Zero Four', FourZeroFourComponent],
    ['FAQ', faqComponent],
    ['Contact Section', contactSectionComponent],
    ['Navbar', NavBarComponent],
    ['Footer', FooterComponent],
    ['Companies', CompaniesComponent],
    ['More Projects', MoreProjectsComponent],
    ['Home Hero Section', HomeHeroSectionComponent],
    ['Home Hero Section 2', HomeHeroSection2Component],
    ['More Articles Section', MoreArticlesComponent],
    ['Services Section', ServicesSectionComponent],
    ['Recent Insights', RecentInsightsComponent]
]);
