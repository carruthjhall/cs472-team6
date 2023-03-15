import vectorSVG from "./vector.svg";
export default function Ctatest({options}) {
  const {word} = options;
  let word1 = word;
  return (
    <div className={`bg-white text-black dark:bg-black dark:text-white`}>
      <h2>{word1}</h2>
    </div>
  );
}