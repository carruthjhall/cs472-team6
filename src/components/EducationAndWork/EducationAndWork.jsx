export default function EducationWorkExperience({ options }) {
    const { schoolCount, jobCount, schoolList, jobList, gradient } = options;

    function SchoolOrJob({schoolOrJob}){
        const {primary, secondary, date} = schoolOrJob;
        let dot;

        if(date)
        {
            dot = <span>&#x2022;</span>;
        }
    
        return( 
            <div>
                <div className={`font-main text-[20px]`}> {primary} </div>
                <p className={`float-left font-secondary pb-3 text-[15px]`}> {secondary} </p>
                <p className={`float-right font-secondary pb-3 text-[15px]`}> {dot} {date} </p>
                <hr className={`border-black dark:border-white clear-both`}></hr>
            </div>
        );
    }


    return(
        <div className={`flex flex-col w-[340px] mx-auto py-10
                        md:w-[864px]
                        lg:flex-row lg:w-[1200px]
                        bg-white text-black dark:bg-black dark:text-white`}>
            <div className="md:w-[560px]">
                <div className={`pb-6 text-3xl whitespace-nowrap font-main text-transparent bg-clip-text w-[150px] bg-gradient-to-r ${gradient}`} >Education</div>
                {schoolList.slice(0,schoolCount).map((school, index) => {
                        return(
                            <SchoolOrJob key={index} schoolOrJob={school} />
                        )
                    })}
            </div>
            <div className="h-[30px] lg:h-[0px] lg:w-[80px]"></div>
            <div className="md:w-[560px]">
                <div className={`pb-6 text-3xl whitespace-nowrap font-main text-transparent bg-clip-text w-[250px] bg-gradient-to-r ${gradient}`} >Work Experience</div>
                {jobList.slice(0,jobCount).map((job, index) => {
                        return(
                            <SchoolOrJob key={index} schoolOrJob={job} />
                        )
                    })}
            </div>
        </div>
    )
    
}
