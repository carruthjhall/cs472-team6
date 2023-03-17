export default function AboutHeadSection({options}) {
  const {name, description} = options;

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-6xl font-bold mb-4 bg-white text-black dark:bg-black dark:text-white">
        Hi, I am
        <br />
        {name}
        </h1>
      </div>

      <div className="w-full md:w-1/2 p-4 bg-white text-black dark:bg-black dark:text-white">
        <p>{description}</p>
      </div>
    </div>

  );
}