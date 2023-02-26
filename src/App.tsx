import { useMultistepForm } from "./useMultistepForm"
import { UserForm } from "./UserForm"
import { AddressForm } from "./AddressForm"
import { AccountForm } from "./AccountForm"
import { FormEvent, useState } from "react"


type FormData = {
  firstName: string,
  lastName: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}


function App() {

  const [formdata, setFormdata] = useState(INITIAL_DATA)

  function updateFields(fields: Partial<FormData>) {
    setFormdata(prev => {
      return { ...prev, ...fields}
    })
  }
  
  const {step, steps, currentStepIndex, isFirstStep, isLastStep, back, next} = useMultistepForm([
    <UserForm {...formdata} updateFields={updateFields} />,
    <AddressForm {...formdata} updateFields={updateFields} />,
    <AccountForm {...formdata} updateFields={updateFields} />
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Account creation successful")
  }

  return (
    <div style={{
      position: "relative",
      background: "white",
      border: "1px solid black",
      padding: "2rem",
      margin: "1rem auto 1rem auto",
      //width: "30rem",
      borderRadius: "0.5rem",
      fontFamily: "arial",
      maxWidth: "max-content"
    }}>
      <form onSubmit={onSubmit}>
        <div style={{
          position: 'absolute',
          top: ".5rem",
          right: ".5rem"
        }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div style={{
          marginTop: "1rem",
          display: "flex",
          gap: ".5rem",
          justifyContent: "flex-end"

        }}>
          {!isFirstStep && 
            <button onClick={back} type="button">Back</button>
          }
          
          <button type="submit">
            {isLastStep ? "Finish" : "Next"}
          </button>
          
        </div>
      </form>
    </div>
  )
}

export default App
