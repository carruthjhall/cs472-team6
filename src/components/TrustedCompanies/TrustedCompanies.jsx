export default function TrustedCompanies({ options }){
    const { Title, Companies } = options;

    return (
        <div className="md:flex flex-col lg:flex-row lg:max-w-[1200px] md:max-w-[864px] max-w-[300px] mx-auto my-[40px]">
            <div className="text-white text-[24px] font-main my-auto lg:mr-[200px]">
                {Title}
            </div>
            <div className="md:flex flex-row">
                {Companies.map((Company, index) => <CompanyItem key={index} Company={Company} />)}
            </div>
        </div>
    )
}

function CompanyItem({Company}) {
    const { Name, Picture } = Company;

    return (
        <img src={Picture} alt={Name} className="max-w-[150px] object-contain max-h-[150px] my-[20px] md:my-[60px] mr-[40px]"/>
    )
}