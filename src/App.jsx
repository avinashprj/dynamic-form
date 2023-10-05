import { useState } from 'react';
import './App.css'
import { FormBuilder, FormGenerator } from "cb-react-forms";

function App() {
    const [formData,setFormData]= useState()
    console.log("🚀 ~ file: App.jsx:7 ~ App ~ formData:", formData)

  return (
    <>
      <div>
        <FormBuilder
        onSubmit={(data) => {
          setFormData(JSON.parse(data));
        }}
        />
      {
        formData?.length &&
          <FormGenerator
            formData={formData}
            onSubmit={(data) => {
            console.log(data);
            }}
         />
      }
      </div>

    </>
  )
}

export default App
