import Component from "../../models/Component";
import Companies from "./Companies";
import CompaniesOptions from "./CompaniesOptions";
import CompaniesPreview from "./CompaniesPreview.png";
import { Gradients } from "../../utils/utils";

export const CompaniesComponent = new Component(
    'Companies',
    Companies,
    CompaniesOptions,
    CompaniesPreview,
    {   
        gradient: Gradients.default,
        noOfLogos: 12,
        logoList: [
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo1.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo1.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo2.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo2.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo3.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo3.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo4.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo4.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo5.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo5.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo6.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo6.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo7.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo7.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo8.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo8.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo9.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo9.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo10.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo10.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo11.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo11.svg"},
            {url: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/Logo12.svg", darkURL: "https://raw.githubusercontent.com/cs472-team6/cs472-team6-resources/0f69592db28b6ed6cdf835ca2e891d1f068479ae/images/CompanyLogos/DarkLogo12.svg"},
        ]
    }
)