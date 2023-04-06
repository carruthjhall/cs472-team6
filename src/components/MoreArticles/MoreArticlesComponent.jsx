import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";
import MoreArticles from "./MoreArticles";
import MoreArticlesPreview from "./MoreArticlesPreview.png";
import MoreArticlesOptions from "./MoreArticlesOptions";

export const MoreArticlesComponent = new Component(
    'MoreArticles', 
    MoreArticles, 
    MoreArticlesOptions, 
    MoreArticlesPreview, 
    {
        text1: "More Articles",
        gradient: Gradients.default,
        imgLink1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fstack-of-books&psig=AOvVaw0l6GF3nWfe5yCu5L9hGtfX&ust=1680845558772000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPCen-bDlP4CFQAAAAAdAAAAABAE",    
        imgLink2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fbooks%2F&psig=AOvVaw0l6GF3nWfe5yCu5L9hGtfX&ust=1680845558772000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPCen-bDlP4CFQAAAAAdAAAAABAI", 
        buttonLink1: "www.goolge.com",
        buttonLink2: "www.youtube.com",
        buttonLink3: "www.goolge.com",
        buttonLink4: "www.youtube.com",
        buttonText1: "UI/UX",
        buttonText2: "Web Design",
        text2: "Lorem ipsum dolor sit amet consectetur.",
        text3: "Lorem ipsum dolor sit amet consectetur.",
        author: "By kartik Bansal",
        author2: "By kartik Bansal",
    }
);
