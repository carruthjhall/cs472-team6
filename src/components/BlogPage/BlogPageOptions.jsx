export default function BlogPageOptions({ options, updateComponent }) {
    let {overview, header1, header2, paragraph1, paragraph2, paragraph3, paragraph3_1, paragraph3_2, paragraph3_3, paragraph3_4, image, image2} = options;
  
    function handleChange(e) {
      updateComponent({ [e.target.name]: e.target.value });
    }
  
    return (
      <div className="p-3">
        <label className="block">Overview:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="Overview" value={overview} onChange={(handleChange)} />
        <label className="block">Header1:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="header1" value={header1} onChange={(handleChange)} />
        <label className="block">Header2:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="header2" value={header2} onChange={(handleChange)} />
        <label className="block">Paragraph1:</label>
        <textarea
          className="border border-gray-400 p-2 rounded-lg w-full"
          rows={4}
          placeholder="Enter your text here..."
          name = "paragraph1"
          value = {paragraph1}
          onChange={(handleChange)}
        />
        <label className="block">Paragraph2:</label>
        <textarea
          className="border border-gray-400 p-2 rounded-lg w-full"
          rows={4}
          placeholder="Enter your text here..."
          name = "paragraph2"
          value = {paragraph2}
          onChange={(handleChange)}
        />
        <label className="block">Paragraph3:</label>
        <textarea
          className="border border-gray-400 p-2 rounded-lg w-full"
          rows={4}
          placeholder="Enter your text here..."
          name = "paragraph3"
          value = {paragraph3}
          onChange={(handleChange)}
        />
        <label className="block">Image1 Url:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="image" value={image} onChange={(handleChange)} />
        <label className="block">Image2 Url:</label>
        <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="image2" value={image2} onChange={(handleChange)} />
      </div>
    )
  }