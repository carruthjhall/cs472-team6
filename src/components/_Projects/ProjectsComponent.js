import Component from "../../models/Component";
import Projects from "./Projects";
import ProjectsOptions from "./ProjectsOptions";
import ProjectsPreview from "./ProjectsPreview.png";
import { Gradients } from "../../utils/utils";

export class ProjectOptions {
    constructor(Title, Description, Picture, URL){
        this.Title = Title;
        this.Description = Description;
        this.Picture = Picture;
        this.URL = URL;
    }
}

export const ProjectsComponent = new Component(
    'Projects', 
    Projects, 
    ProjectsOptions, 
    ProjectsPreview, 
    {
        Title: "Look at My", 
        Highlight: "Projects",
        gradient: Gradients.default,
        Description: "Lorem ipsum dolor sit amet consectetur. Consequat tempus rhoncus cum in. Vel id donec adipiscing elit morbi amet. Fermentum aliquam sed vitae placerat quam nec convallis.", 
        Projects: [
            new ProjectOptions('Finance Landing Page', 'Landing Page UI Kit', "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", ''),
            new ProjectOptions('Interior Design Website', 'Dribble Shot', "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", ''),
            new ProjectOptions('Russell Morgan Portfolio', 'Dribble Shot', "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", ''),
            new ProjectOptions('Sonali Landing Page', 'Dribble Shot', "https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80", '')
        ]
    }
);