import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import SocialMedia from "./SocialMedia";
import SocialMediaOptions from "./SocialMediaOptions";
import SocialMediaPreview from "./SocialMediaPreview.png";

export const SocialMediaComponent = new Component(
    'SocialMedia', 
    SocialMedia, 
    SocialMediaOptions, 
    SocialMediaPreview, 
    {
        title: "Follow Me", body: "Im Katrik Bansal, a designer who works with startups to build brands.", 
        image: "https://i.imgur.com/TY7YztC.png", gradient: Gradients.default,
        FbLink: "https://www.facebook.com", LiLink: "https://www.linkedin.com", 
        TwLink: "https://www.twitter.com", InLink: "https://www.instagram.com",
        DrLink: "https://www.dribbble.com", BhLink: "https://www.behance.net"
    }

)