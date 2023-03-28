import { Gradients } from "../../utils/utils";

export default function ServiceWrapperOptions({options, updateComponent}) {
    let {Title, Text, ButtonText, ButtonLink, gradient, ImageLink, Invert} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    return (
        <div className="p-3">
            <label className="block">Title:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="Title" value={Title} onChange={(handleChange)} />
            <label className="block">Text:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="Text" value={Text} onChange={(handleChange)} />
            <label className="block">Button Text:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="ButtonText" value={ButtonText} onChange={(handleChange)} />
            <label className="block">Button Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="ButtonLink" value={ButtonLink} onChange={(handleChange)} />
            <label className="block">Gradient:</label>
            <select value={gradient} onChange={(handleChange)} name="gradient"  className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
            <label className="block">Image Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="ImageLink" value={ImageLink} onChange={(handleChange)} />
            <label className="block">Invert:</label>
            <div className="flex items-center">
            <select value={Invert} onChange={(handleChange)} name="Invert" className='p-2 rounded-lg bg-gray-200'>
                <option>Image Left</option>
                <option>Image Right</option>
            </select>
            </div>
        </div>
    )
}