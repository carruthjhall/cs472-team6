export default function EducationAndWork({options}) {
  const {educationItem1, workExperienceItem1} = options;

  return (
    
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4 bg-white text-black dark:bg-black dark:text-white">Education</h1>
        <br />
        <h2 className="mb-4 bg-white text-black dark:bg-black dark:text-white">{educationItem1}</h2>
      </div>

      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4 bg-white text-black dark:bg-black dark:text-white">Work Experience</h1>
        <br />
        <h2 className="mb-4 bg-white text-black dark:bg-black dark:text-white">{workExperienceItem1}</h2>
      </div>
    </div>

    
    /*const Education = ({ educationItems }) => {
      return (
        <div className="column">
          <h2>Education</h2>
          {educationItems.map((item) => (
            <p key={item.institution}>
              {item.institution}, {item.degree}
            </p>
          ))}
        </div>
      );
    };

    const WorkExperience = ({ workExperienceItems }) => {
      return (
        <div className="column">
          {workExperienceItems.map((item) => (
            <p key={item.company}>
              {item.position}, {item.company}, {item.date}
            </p>
            ))}
        </div>
      );
    };

    const TwoColumns = () => {
      const [educationItems, setEducationItems] = useState([
        {
          institution: '',
          degree: '',
        },
        {
          institution: '',
          degree: '',
        },
      ]);

      const [workExperienceItems, setWorkExperienceItems] = useState([
        {
          position: '',
          company: '',
          date: '',
        },
        {
          position: '',
          company: '',
          date: '',
        },
      ]);

      return (
        <div className="column-container">
          <Education educationItems={educationItems} />
          <WorkExperience workExperienceItems={workExperienceItems} />
        </div>
      );
    };
    */

  );
}