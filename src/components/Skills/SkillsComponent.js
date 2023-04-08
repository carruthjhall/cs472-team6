import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import Skills from "./Skills";
import SkillsOptions from "./SkillsOptions";
import SkillsPreview from "./SkillsDark.png";

export const SkillsComponent = new Component(
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