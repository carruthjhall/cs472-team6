import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import MoreProjects from "./MoreProjects";
import MoreProjectsOptions from "./MoreProjectsOptions";
import MoreProjectsPreview from "./MoreProjectsPreview.png";

export const MoreProjectsComponent = new Component(
    'More Projects',
    MoreProjects,
    MoreProjectsOptions,
    MoreProjectsPreview,
    {
        title: "More cool", gradientTitle: " projects", 
        image: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/main/images/moreprojects1.png", 
        image2: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/main/images/moreprojects2.png", 
        body: "Lorem Ipsum", description: "Technology", 
        gradient: Gradients.default, buttonText: "Web Design", button2Text: "UI/UX Design"
    }
)