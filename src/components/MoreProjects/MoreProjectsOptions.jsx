import { Gradients } from "../../utils/utils";

export default function MoreProjectsOptions({options, updateComponent}){
    let {title, gradientTitle, image, image2, body, description, gradient, buttonText, buttonLink, button2Text, button2Link} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    return (
        <div className='p-3'>
            <label className="block">Title:</label>
            <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="title" value={title} onChange={(handleChange)}/>
            <lablel className="block">Gradient Title:</lablel>
            <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="gradientTitle" value={gradientTitle} onChange={(handleChange)}/>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
            <details>
                <summary>Image Options</summary>
                <label className="block">Image Link:</label>
                <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="image" value={image} onChange={(handleChange)} />
                <label className="block">Image2 Link:</label>
                <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="image2" value={image2} onChange={(handleChange)} />
                <details>
                    <summary>Text Options</summary>
                    <label className="block">Body:</label>
                    <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="body" value={body} onChange={(handleChange)} />
                    <label className="block">Description:</label>
                    <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="description" value={description} onChange={(handleChange)} />
                </details>
                <details>
                    <summary>Button Options</summary>
                    <label className="block">Button Text:</label>
                    <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="buttonText" value={buttonText} onChange={(handleChange)} />
                    <label className="block">Button Link:</label>
                    <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="buttonLink" value={buttonLink} onChange={(handleChange)} />
                    <label className="block">Button Text:</label>
                    <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="button2Text" value={button2Text} onChange={(handleChange)} />
                    <label className="block">Button Link:</label>
                    <input className={'block mb-3 p-2 rounded-lg bg-gray-200'} type="text" name="button2Link" value={button2Link} onChange={(handleChange)} />
                </details>
            </details>

        </div>



    )
}