// FormWrapper is used to simplify and add consistency to styling
// Takes Form step title and children as props

import { ReactNode } from "react"

type FormWrapperProps= {
    title: string,
    children: ReactNode
}

export function FormWrapper({title, children}: FormWrapperProps) {
    return (<>
        <h2 style={{
            textAlign: "center",
            margin: 0,
            marginBottom: "2rem",
        }}>
            {title}
        </h2>
        <div style={{
            display: "grid",
            gap: "1rem .5rem",
            justifyContent: "flex-start,",
            gridTemplateColumns: "auto minmax(auto, 400px)"
        }}>
            {children}
        </div>
    
    </>
    ) 


    
}