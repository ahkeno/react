'use client'
export default function Error({error}){
    console.log("error",error)
    return(
        <p className="error">Something went wrong
            <p></p>
        </p>
    )
}