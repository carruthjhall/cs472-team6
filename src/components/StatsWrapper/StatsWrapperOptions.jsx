import GradientSelect from "../GradientSelect/GradientSelect";

export default function StatsWrapperOptions({options, updateComponent}) {
    const {stats, gradient} = options; 
    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    function handleStatChange(index, e){
        let newStats = [...stats];
        newStats[index] = {...newStats[index], [e.target.name]: e.target.value};

        updateComponent({ stats: newStats });
    }

    return (
        <div className="p-3">
            {stats.map((stat, index) => <StatOptions key={index} index={index} stat={stat} handleStatChange={handleStatChange} />)}
            <GradientSelect name={"gradient"} value={gradient} handleChange={handleChange} />
        </div>
    )
}

function StatOptions({index, stat, handleStatChange}) {
    const {number, text} = stat;
    return (
        <div>
            <label className="block">Number {index+1}:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="number" value={number} onChange={e => handleStatChange(index, e)} />
            <label className="block">Text {index+1}:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="text" value={text} onChange={e => handleStatChange(index, e)} />
        </div>
    )
}