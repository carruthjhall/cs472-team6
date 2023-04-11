import { Gradients } from "../../utils/utils";

export default function ServicesSectionOptions({options, updateComponent}) {
    let {services} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    
    return (
        <div className="p-3">
        </div>
    )
}