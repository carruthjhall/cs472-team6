export default function StatsWrapper({options}) {
    const {stats, gradient} = options;
    return (
        <div className="flex flex-col md:flex-row md:max-w-[660px] w-4/5 mx-auto max-w-[200px]">
            {stats.map((stat, index) => <Stat key={index} gradient={gradient} number={stat.number} text={stat.text} showLine={index < stats.length-1} />)}
        </div>
    )
}

function Stat({gradient, number, text, showLine}) {
    return (
        <div className="flex shrink-0 flex-col md:flex-row w-[220px] max-w-[220px] items-center">
            <div className="text-center m-3">
                <p className={`max-w-[160px] break-words bg-gradient-to-r ${gradient} inline-block text-transparent bg-clip-text font-main text-5xl`}>{number}</p>
                <p className={`max-w-[160px] break-words font-secondary text-base dark:text-white`}>{text}</p>
            </div>
            {showLine ? <div className="bg-black dark:bg-white m-3 h-0.5 w-3/5 md:w-0.5 md:h-3/5"></div> : null}
        </div>
    )
}