export default function Skills({ options }){
    const { title, skillsList } = options;

    for(let i = 0; i < skillsList.length; i++){
        if(!skillsList[i].image){
            if (skillsList[i].files && skillsList[i].files[0]){
                skillsList[i].image = URL.createObjectURL(skillsList[i].files[0]);
            }
            else{
                skillsList[i].image = "";
            }
        }
    }

    return (
        <div className="p-20">
            <div className="mb-5 font-main text-4xl text-black dark:text-white">{title}</div>
            <div className="flex gap-[2.5%] justify-center">
                {skillsList.map((skill, index) => {
                    if(skill.image || skill.name){
                        return (
                            <SkillBox key={index} skill={skill}/>
                        )
                    }
                })}
            </div>
        </div>
    )
}

function SkillBox({skill}){
    const {name, image} = skill;
    return (
        <div className="bg-[#F0F2F5] dark:bg-[#1C1C22] grow max-w-[17%] aspect-[55/61] flex flex-col">
            <div className= "h-[70%] py-[17%] flex justify-center">
                <img src={image} alt=""/>
            </div>
            <div className="h-[30%] flex flex-col justify-center">
                <p className="text-2xl mb-5 text-center font-main text-black dark:text-white">{name}</p>
            </div>
        </div>
    )
}
