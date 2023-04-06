import { Gradients } from "../../utils/utils";

export default function MoreArticlesOptions({options, updateComponent}) {
    let {text1, gradient, imgLink1, buttonLink1, buttonText1, buttonText2, buttonLink2, text2, author,
        imgLink2, buttonLink3, buttonLink4, text3, author2} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    return (
        <div className="p-3">
            <label className="block">Gradient:</label>
            <select value={gradient} onChange={(handleChange)} name="gradient"  className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
            <label className="block">theme:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="text1" value={text1} onChange={(handleChange)}/>
            <label className="block">description 1:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="text2" value={text2} onChange={(handleChange)}/>
            <label className="block">description 2:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="text3" value={text3} onChange={(handleChange)} />
            <label className="block">left button text 1:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText1" value={buttonText1} onChange={(handleChange)} />
            <label className="block">right button text 2:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText2" value={buttonText2} onChange={(handleChange)} />
            <label className="block">left button link 1:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText1" value={buttonLink1} onChange={(handleChange)} />
            <label className="block">right button link 1:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText2" value={buttonLink2} onChange={(handleChange)} />
            <label className="block">left button link 2:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText3" value={buttonLink3} onChange={(handleChange)} />
            <label className="block">right button link 2:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText4" value={buttonLink4} onChange={(handleChange)} />
            <label className="block">image link 1:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="imgLink1" value={imgLink1} onChange={(handleChange)} />
            <label className="block">image link 2:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="imgLink2" value={imgLink2} onChange={(handleChange)} />
            <label className="block">author 1:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="author1" value={author} onChange={(handleChange)} />
            <label className="block">author 2:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="author2" value={author2} onChange={(handleChange)} />
        </div>
    )
}