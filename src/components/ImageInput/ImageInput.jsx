import React, { useRef } from 'react'

export default function ImageInput({ name, value, handleChange }) {
  const imageInput = useRef(null);

  // handles updating state (saving the image) after the user has selected an image
  function handleImageImport() {
    if (imageInput !== null && imageInput.current !== null){
        let input = imageInput.current;
        if (input.files !== null && input.files.length > 0){
            const image = input.files[0];
            const reader = new FileReader();

            reader.onabort = () => alert("ERROR: Image could not be imported");
            reader.onerror = () => alert("ERROR: Image could not be imported");
            reader.onload = () => {
                const imageURL = reader.result || '';
                handleChange({ target: { name, value: imageURL } })
            }

            // read the image file as Base64
            reader.readAsDataURL(image);
        }
    }
  }

  // used to click the hidden input element (this allows us to have a custom file input button)
  function handleClick(){
      if (imageInput !== null && imageInput.current !== null){
          let input = imageInput.current;
          input.click();
      }
  }

  return (
    <div>
      <input name={name} type="text" className="options-input" value={value} onChange={handleChange}/>
      <input ref={imageInput} name={name} onChange={handleImageImport} className="hidden" type="file" accept="image/jpeg, image/png, image/jpg"></input>
      <p className="font-bold">OR</p>
      <button className="options-btn" onClick={handleClick}>Select Image</button>
    </div>
  )
}