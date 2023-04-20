
export default function BlogPage({options}) {
    const {header, paragraph, image,} = options;
    const valueArray = paragraph.split(String.fromCharCode(10));
    return (
        <div className={`flex bg-white text-black dark:bg-black dark:text-white py-6 lg:px-[240px] md:px-[80px] lg:max-w-[1036px] md:max-w-[864px] max-w-[340px] mx-auto`}>
        <div className= "font-normal font-main">
            <h2 className='mb-4 font-bold text-3xl'>{header}</h2> 
            {image && (<img src={image} class="w-full h-auto aspect-w-1 aspect-h-1" alt="blogpicture"/>)}
            <div className="font-inter font-normal font-main
            sm:text-sm 
            md:text-lg 
            lg:text-lg">{valueArray.map((value, index) => (
            <p key={index} className="my-paragraph mt-8">{value}</p>
            ))}</div>
        </div>
        </div>
      );
}