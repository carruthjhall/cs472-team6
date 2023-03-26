import BlogPage from "./BlogPage";
import BlogPageOptions from "./BlogPageOptions";
import BlogPagePreview from "./BlogPagePreview.png";
import Component from "../../models/Component";

export const BlogPageComponent = new Component(
    'BlogPage', BlogPage, BlogPageOptions, BlogPagePreview, 
      {overview: "Overview",
       header1: "Header1",
       header2: "Header2", 
       paragraph1: "example\nexample1\nexample2", 
       paragraph2: "example\nexample1\nexample2", 
       paragraph3: "example\nexample1\nexample2",
       image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", 
       image2: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
)
