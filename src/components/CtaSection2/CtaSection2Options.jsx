import { Gradients } from "../../utils/utils";

export default function CtaSection2Options({ options, updateComponent }) {
    let {link, text, button, gradient} = options;
  
    function handleChange(e) {
      updateComponent({ [e.target.name]: e.target.value });
    }
  
    return (
      <div className="p-3">
        <label className="block">link:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="link" value={link} onChange={(handleChange)} />
        <label className="block">Text:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="text" value={text} onChange={(handleChange)} />
        <label className="block">Button:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="button" value={button} onChange={(handleChange)} />
        <label className="block">Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
      </div>
    )
  }