export default function CtaSectionOptions({ options, updateComponent }) {
    let {word} = options;
  
    function handleChange(e) {
      updateComponent({ [e.target.name]: e.target.value });
    }
  
    return (
      <div className="p-3">
        <label className="block">Word:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="word" value={word} onChange={(handleChange)} />
      </div>
    )
  }