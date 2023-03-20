export default function SkillsOptions({
  options,
  updateComponent,
}) {
    let { title, skillsList } = options;

    function handleChange(e){
        updateComponent({ [e.target.name]: e.target.value });
    }

    function handleNameChange(index, e){
        let newSkills = [...skillsList];
        newSkills[index] = {...newSkills[index], [e.target.name]: e.target.value};

        updateComponent({ skillsList: newSkills });
    }

    function handleImageChange(index, e){
        let newSkills = [...skillsList];

        newSkills[index] = {...newSkills[index], [e.target.name]: e.target.files};

        updateComponent({ skillsList: newSkills });
    }

    function handleImageClick(index, e){
        let newSkills = [...skillsList];

        newSkills[index] = {...newSkills[index], [e.target.name]: ""};
        newSkills[index] = {...newSkills[index], image: ""};

        updateComponent({ skillsList: newSkills });
    }

    return (
        <div className="pl-3 pb-3 pr-3">
            <label className="block">Title:</label>
            <input 
                className={`block mb-3 p-2 rounded-lg bg-gray-200`} 
                type="text" 
                name="title" 
                value={title} 
                onChange={(handleChange)} 
            />
            <details className="bg-white mx-1 rounded-lg" open>
                <summary className="mb-2 cursor-pointer"> Skills List </summary>
                {skillsList.map((skill, index) => <SkillOptions key={index} index={index} skill={skill} handleNameChange={handleNameChange} handleImageChange={handleImageChange} handleImageClick={handleImageClick}/>)}
            </details>
        
        </div>
        
    );
}

function SkillOptions({index, skill, handleNameChange, handleImageChange, handleImageClick}){
    const {name, files, image} = skill;
    return(
        <div className="flex flex-col flex-1 px-1">
            <details className="bg-white mt-3 rounded-lg">
                <summary className="mb-2 cursor-pointer"> Skill {index+1}: {name}</summary>
                    <div className="px-3">
                        <label className="block">Name:</label>
                        <input 
                            className={`block mb-3 p-2 rounded-lg bg-gray-200 `} 
                            type="text" 
                            name="name"
                            value={name}
                            onChange={e => handleNameChange(index, e)}
                        />
                        <label className="block mb-2" htmlFor="file_input">Upload Image:</label>
                        <input 
                            className="block w-full text-sm text-black cursor-pointer" 
                            type="file"
                            name="files"
                            accept="image/png, image/jpeg, image/svg+xml"
                            onClick={e => handleImageClick(index, e)}
                            onChange={e => handleImageChange(index, e)}
                        />
                        <p className="mt-2 ml-1 text-xs" id="file_input_help">PNG, JPG, or SVG.</p>
                    </div>
            </details>
        </div>
    )
}
