import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import RecentInsights from "./RecentInsights";
import RecentInsightsPreview from "./RecentInsightsPreview.png";
import RecentInsightsOptions from "./RecentInsightsOptions";

export const RecentInsightsComponent = new Component(
    'RecentInsights', 
    RecentInsights, 
    RecentInsightsOptions, 
    RecentInsightsPreview, 
    {
        gradient: Gradients.default,
        buttonText1: "All Posts", 
        buttonText2: "Design",
        buttonText3: "Technology",
        buttonText4: "Webflow",
        img1: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/RecentInsightsImg1.png?raw=true",
        img2: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/RecentInsightsImg2.png?raw=true",
        img3: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/RecentInsightsImg3.png?raw=true",
        img4: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/RecentInsightsImg4.png?raw=true",
        img5: "https://github.com/cs472-team6/cs472-team6-resources/blob/main/images/RecentInsightsImg5.png?raw=true",
        postLink11: "http://www.google.com", 
        postLink12: "http://www.google.com", 
        postLink21: "http://www.google.com", 
        postLink22: "http://www.google.com", 
        postLink31: "http://www.google.com", 
        postLink32: "http://www.google.com", 
        postLink41: "http://www.google.com", 
        postLink42: "http://www.google.com", 
        postLink51: "http://www.google.com", 
        postLink52: "http://www.google.com",
        postText11: "UI/UX",
        postText21: "UI/UX",
        postText31: "UI/UX",
        postText41: "UI/UX",
        postText51: "UI/UX",
        postText12: "Web Design",
        postText22: "Web Design",
        postText32: "Web Design",
        postText42: "Web Design",
        postText52: "Web Design",
        description1: "Lorem ipsum dolor sit amet consectetur. Ac praesent",
        description2: "Lorem ipsum dolor sit amet consectetur. Ac praesent", 
        description3: "Lorem ipsum dolor sit amet consectetur. Ac praesent", 
        description4: "Lorem ipsum dolor sit amet consectetur. Ac praesent", 
        description5: "Lorem ipsum dolor sit amet consectetur. Ac praesent",  
        author1: "By Kartik Bansal",
        author2: "By Kartik Bansal",
        author3: "By Kartik Bansal",
        author4: "By Kartik Bansal",
        author5: "By Kartik Bansal"
    }
);