
export default function BlogPage({options}) {
    const {overview, paragraph1, image,} = options;
    const valueArray = paragraph1.split(String.fromCharCode(10));
    return (
        <div className={`bg-white text-black dark:bg-black dark:text-white py-6 px-40`}>
        <div className= "font-normal font-baijamjuree">
            <h2 className='mb-4 font-bold text-3xl leading-10'>{overview}</h2> 
            {image && (<img src={image} className="w-full h-full" alt="blogpicture"/>)}
            <div className="font-inter font-normal  
            sm:text-base sm:leading-relaxed 
            md:text-lg md:leading-6
            lg:text-lg lg:leading-6">{valueArray.map((value, index) => (
            <p key={index} className="my-paragraph mt-8">{value}</p>
            ))}</div>
        </div>
        </div>
      );
}