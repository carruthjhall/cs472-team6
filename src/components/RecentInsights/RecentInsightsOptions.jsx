import { Gradients } from "../../utils/utils";

export default function MoreArticlesOptions({options, updateComponent}) {
    let {gradient,
        buttonLink1, buttonLink2, buttonLink3, buttonLink4,
        buttonText1, buttonText2, buttonText3, buttonText4,
        img1, img2, img3, img4, img5,
        postLink11, postLink12, postLink21, postLink22, postLink31, 
        postLink32, postLink41, postLink42, postLink51, postLink52,
        postText11, postText12, postText21, postText22, postText31,
        postText32, postText41, postText42, postText51, postText52, 
        description1, description2, description3, description4, description5,
        author1, author2, author3, author4, author5} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    return (
        <div className="pl-3 pb-3">
            <label className="block font-bold">Gradient:</label>
            <select value={gradient} onChange={(handleChange)} name="gradient"  className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>

            <label className="block font-bold">First Button text:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText1" value={buttonText1} onChange={(handleChange)}/>
            <label className="block font-bold">First Button Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonLink1" value={buttonLink1} onChange={(handleChange)}/>
            <label className="block font-bold">Second Button text:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText2" value={buttonText2} onChange={(handleChange)}/>
            <label className="block font-bold">Second Button Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonLink2" value={buttonLink2} onChange={(handleChange)}/>
            <label className="block font-bold">Third Button text:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText3" value={buttonText3} onChange={(handleChange)}/>
            <label className="block font-bold">Third Button Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonLink3" value={buttonLink3} onChange={(handleChange)}/>
            <label className="block font-bold">Forth Button text:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonText4" value={buttonText4} onChange={(handleChange)}/>
            <label className="block font-bold">Forth Button Link:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="buttonLink4" value={buttonLink4} onChange={(handleChange)}/>

            <details className="bg-white w-[300px] rounded-lg">
                <summary className="pl-1 mb-2 cursor-pointer font-bold">Post 1</summary>
                    <div className="pl-6">  
                        <label className="block">Image link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="img1" value={img1} onChange={(handleChange)} />  
                        <label className="block">Left button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postText11" value={postText11} onChange={(handleChange)} />
                        <label className="block">Left button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postLink11" value={postLink11} onChange={(handleChange)} />
                        <label className="block">Right button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postText12" value={postText12} onChange={(handleChange)} />
                        <label className="block">Right button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postLink12" value={postLink12} onChange={(handleChange)} />
                        <label className="block">Description:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="description1" value={description1} onChange={(handleChange)}/>
                        <label className="block">Author:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="author1" value={author1} onChange={(handleChange)} />
                    </div>    
            </details>

            <details className="bg-white w-[300px] rounded-lg">
                <summary className="pl-1 mb-2 cursor-pointer font-bold">Post 2</summary>
                    <div className="pl-6">  
                        <label className="block">Image link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="img2" value={img2} onChange={(handleChange)} />  
                        <label className="block">Left button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postText21" value={postText21} onChange={(handleChange)} />
                        <label className="block">Left button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postLink21" value={postLink21} onChange={(handleChange)} />
                        <label className="block">Right button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postText22" value={postText22} onChange={(handleChange)} />
                        <label className="block">Right button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postLink22" value={postLink22} onChange={(handleChange)} />
                        <label className="block">Description:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="description2" value={description2} onChange={(handleChange)}/>
                        <label className="block">Author:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="author2" value={author2} onChange={(handleChange)} />
                    </div>    
            </details>

            <details className="bg-white w-[300px] rounded-lg">
                <summary className="pl-1 mb-2 cursor-pointer font-bold">Post 3</summary>
                    <div className="pl-6">  
                        <label className="block">Image link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="img3" value={img3} onChange={(handleChange)} />  
                        <label className="block">Left button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postText31" value={postText31} onChange={(handleChange)} />
                        <label className="block">Left button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postLink31" value={postLink31} onChange={(handleChange)} />
                        <label className="block">Right button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postText32" value={postText32} onChange={(handleChange)} />
                        <label className="block">Right button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postLink32" value={postLink32} onChange={(handleChange)} />
                        <label className="block">Description:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="description3" value={description3} onChange={(handleChange)}/>
                        <label className="block">Author:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="author3" value={author3} onChange={(handleChange)} />
                    </div>    
            </details>

            <details className="bg-white w-[300px] rounded-lg">
                <summary className="pl-1 mb-2 cursor-pointer font-bold">Post 4</summary>
                    <div className="pl-6">  
                        <label className="block">Image link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="img4" value={img4} onChange={(handleChange)} />  
                        <label className="block">Left button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postText41" value={postText41} onChange={(handleChange)} />
                        <label className="block">Left button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postLink41" value={postLink41} onChange={(handleChange)} />
                        <label className="block">Right button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postText42" value={postText42} onChange={(handleChange)} />
                        <label className="block">Right button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postLink42" value={postLink42} onChange={(handleChange)} />
                        <label className="block">Description:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="description4" value={description4} onChange={(handleChange)}/>
                        <label className="block">Author:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="author4" value={author4} onChange={(handleChange)} />
                    </div>    
            </details>

            <details className="bg-white w-[300px] rounded-lg">
                <summary className="pl-1 mb-2 cursor-pointer font-bold">Post 5</summary>
                    <div className="pl-6">  
                        <label className="block">Image link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="img5" value={img5} onChange={(handleChange)} />  
                        <label className="block">Left button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postText51" value={postText51} onChange={(handleChange)} />
                        <label className="block">Left button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postLink51" value={postLink51} onChange={(handleChange)} />
                        <label className="block">Right button text:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postText52" value={postText52} onChange={(handleChange)} />
                        <label className="block">Right button link:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="postLink52" value={postLink52} onChange={(handleChange)} />
                        <label className="block">Description:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="description5" value={description5} onChange={(handleChange)}/>
                        <label className="block">Author:</label>
                        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="author5" value={author5} onChange={(handleChange)} />
                    </div>    
            </details>
        </div>
    )
}