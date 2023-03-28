import Component from "../../models/Component";
import { Gradients } from "../../utils/utils";

import AboutHeadImages from "./AboutHeadImages";
import AboutHeadImagesOptions from "./AboutHeadImagesOptions";
import AboutHeadImagesPreview from "./AboutHeadImagesPreview.png";

export const AboutHeadImagesComponent = new Component(
    'AboutHeadImages', AboutHeadImages, AboutHeadImagesOptions, AboutHeadImagesPreview, 
    {   
        image1: "https://imgur.com/XYOEKJD.png", 
        image2: "https://imgur.com/fBYenwe.png",
        image3: "https://imgur.com/L2e6qw3.png",
        image4: "https://imgur.com/tUmGaNG.png",

    }
);