import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import MoreProjects from "./MoreProjects";
import MoreProjectsOptions from "./MoreProjectsOptions";
import MoreProjectsPreview from "./MoreProjectsPreview.png";

export const MoreProjectsComponent = new Component(
    'MoreProjects',
    MoreProjects,
    MoreProjectsOptions,
    MoreProjectsPreview,
    {
        title: "More cool", gradientTitle: " projects", 
        image: "https://i.imgur.com/ThajHs8.png", image2: "https://i.imgur.com/ThajHs8.png", 
        body: "Lorem Ipsum", description: "Technology", 
        gradient: Gradients.default, buttonText: "Web Design"
    }
)