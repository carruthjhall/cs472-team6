
export default function faqSectionOptions({options, updateComponent}){

    const {q1, ans1, q2, ans2, q3, ans3, q4, ans4, q5, ans5} = options

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    
    return (
        <div className="pl-3">
            <details className="pl-2.5 pb-1">
                <summary>Question 1</summary>
                    <div className="pl-4">
                        <label className="block">Question:</label>
                        <input className={`block mb-2 p-2 rounded-lg bg-gray-200 w-[95%] truncate`} type="text" name="q1" value={q1} onChange={(handleChange)} />
                        <label className="block">Answer:</label>
                        <textarea className={`block mb-3 p-2 rounded-lg bg-gray-200 w-[95%]`} type="text" name="ans1" value={ans1} onChange={(handleChange)} />
                    </div>
            </details>
            <details className="pl-2.5 pb-1">
                <summary>Question 2</summary>
                    <div className="pl-4">
                        <label className="block">Question:</label>
                        <input className={`block mb-2 p-2 rounded-lg bg-gray-200 w-[95%]`} type="text" name="q2" value={q2} onChange={(handleChange)} />
                        <label className="block">Answer:</label>
                        <textarea className={`block mb-3 p-2 rounded-lg bg-gray-200 w-[95%] whitespace-normal`} type="text" name="ans2" value={ans2} onChange={(handleChange)} />
                    </div>
            </details>
            <details className="pl-2.5 pb-1">
                <summary>Question 3</summary>
                    <div className="pl-4">
                        <label className="block">Question:</label>
                        <input className={`block mb-2 p-2 rounded-lg bg-gray-200 w-[95%]`} type="text" name="q3" value={q3} onChange={(handleChange)} />
                        <label className="block">Answer:</label>
                        <textarea className={`block mb-3 p-2 rounded-lg bg-gray-200 w-[95%]`} type="text" name="ans3" value={ans3} onChange={(handleChange)} />
                    </div>
            </details>
            <details className="pl-2.5 pb-1">
                <summary>Question 4</summary>
                    <div className="pl-4">
                        <label className="block">Question:</label>
                        <input className={`block mb-2 p-2 rounded-lg bg-gray-200 w-[95%]`} type="text" name="q4" value={q4} onChange={(handleChange)} />
                        <label className="block">Answer:</label>
                        <textarea className={`block mb-3 p-2 rounded-lg bg-gray-200 w-[95%]`} type="text" name="ans4" value={ans4} onChange={(handleChange)} />
                    </div>
            </details>
            <details className="pl-2.5 pb-1">
                <summary>Question 5</summary>
                    <div className="pl-4">
                        <label className="block">Question:</label>
                        <input className={`block mb-2 p-2 rounded-lg bg-gray-200 w-[95%]`} type="text" name="q5" value={q5} onChange={(handleChange)} />
                        <label className="block">Answer:</label>
                        <textarea className={`block mb-3 p-2 rounded-lg bg-gray-200 w-[95%]`} type="text" name="ans5" value={ans5} onChange={(handleChange)} />
                    </div>
            </details>

        </div>
    )
}