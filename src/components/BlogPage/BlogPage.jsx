
export default function BlogPage({options}) {
    const {overview, header1, header2, paragraph1, paragraph2, paragraph3, image, image2} = options;
    const valueArray = paragraph1.split(String.fromCharCode(10));
    const valueArray2 = paragraph2.split(String.fromCharCode(10));
    const valueArray3 = paragraph3.split(String.fromCharCode(10));
    return (
        <div className={`bg-white text-black dark:bg-black dark:text-white`}>
        <div className={'py-20 px-40'}>
        <div className= "font-normal font-baijamjuree text-1xl md:text-4xl leading-normal">
            <h2 className='mb-4'>{overview}</h2> 
            <div className="font-inter font-normal text-base leading-6">{valueArray.map((value, index) => (
            <p key={index} className="my-paragraph mt-6 mb-10">{value}</p>
            ))}</div>
            <h2 className='mt-8 mb-6'>{header1}</h2>
            <img src={image} className="w-full h-full" alt="blogpicture"/>
            <div className="font-inter font-normal text-base leading-6">{valueArray2.map((value, index) => (
            <p key={index} className="my-paragraph mt-9 mb-9">{value}</p>
            ))}</div>
            <h2 className='mt-6 mb-6'>{header2}</h2>
            <img src={image2} className="w-full h-full" alt="blogpicture2"/>
            <div className="font-inter font-normal text-base leading-6">{valueArray3.map((value, index) => (
            <p key={index} className="my-paragraph mt-9 mb-9">{value}</p>
            ))}</div>
        </div>
        </div>
        </div>
      );
}