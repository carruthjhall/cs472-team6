export default function AboutHeadSection({options}) {
  const {name, gradient, description} = options;

  return (
    <div className="p-4 flex flex-wrap">
      <div className="pt-56 pl-32 pr-134 w-full md:w-1/2 p-4">
        <h1 className="text-4xl font-bold font-main bg-white text-black dark:bg-black dark:text-white">
        Hi, I am
        <br />
        {name}
        {/*<span className="bg-clip-text text-transparent bg-gradient-to-r ${gradient}">{name}</span>*/}
        </h1>
      </div>

      <div className="pt-56 pr-32 pl-134 max-w-[605px] bg-white text-black dark:bg-black dark:text-white">
        <p>{description}</p>
      </div>
    </div>



  );
}