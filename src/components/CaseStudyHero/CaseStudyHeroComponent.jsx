import CaseStudyHero from "./CaseStudyHero";
import CaseStudyHeroOptions from './CaseStudyHeroOptions'
import CaseStudyHeroPreview from './CaseStudyHeroPreview.png'
import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";

export const CaseStudyHeroComponent = new Component(
    'Case Study Hero',
    CaseStudyHero,
    CaseStudyHeroOptions,
    CaseStudyHeroPreview,
    {
        clientNameHeader: "Con Cubo",
        clientName: "Con Cubo GmbH",
        projTask: "SaaS Tool Design",
        role: "Project Designer",
        location: "Hamburg and Remote",
        projPreview: "https://i.imgur.com/1oXtldB.png",
        briefDescr: "Design an SaaS tool to visualize and manage complex organizations", 
        extendDescr: "The newly founded startup wants to support organizations and teams in the design, control and optimization of their work.\n\nThe tool aims to be an intelligent companion in setting up highly efficient organization structures to tackle overhead and lacks of transparency.", 
        gradient: Gradients.default
    }
)