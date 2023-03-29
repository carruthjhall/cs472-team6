import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import EducationWorkExperience from "./EducationAndWork";
import EducationWorkExperienceOptions from "./EducationAndWorkOptions";
import EducationWorkExperiencePreview from "./EducationAndWorkDark.png";

export const EducationAndWorkComponent = new Component(
    'Education and Work',
    EducationWorkExperience,
    EducationWorkExperienceOptions,
    EducationWorkExperiencePreview,
    {
        school1: 'School 1; Degree; Date',
        school2: 'School 2; Degree; Date',
        school3: 'School 3; Degree; Date',
        job1: 'Company 1; Title; Date',
        job2: 'Company 2; Title; Date',
        job3: 'Company 3; Title; Date',
        gradient: Gradients.default
    }
)