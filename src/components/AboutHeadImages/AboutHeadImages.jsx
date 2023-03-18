

export default function AboutHeadImages({options}) {
  const {image1, image2, image3, image4} = options;

  return (
    <div class="container mx-auto px-120 py-482">
      <div class="flex flex-wrap -mx-4">
        {/*Image 1*/}
        <div class="w-1/3 px-4">
          <img src={image1} class="w-full" alt="Image 1" />
        </div>
        {/*Image 2*/}
        <div class="w-1/3 px-4">
          <img src={image2} class="w-full" alt="Image 2" />
        </div>

        {/*Images 3 and 4*/}
        <div class="w-1/3 flex flex-wrap">
          {/*Image 3*/} 
          <div class="w-full md:w-1/2 px-4">
            <img src={image3} class="w-full h-full object-cover" alt="Image 3" />
          </div>
          {/*Image 4*/}
          <div class="w-full md:w-1/2 mt-4 md:mt-0 px-4">
            <img src={image4} class="w-full h-full object-cover" alt="Image 4" />
          </div>

        </div>
      </div>
    </div>



  );
}