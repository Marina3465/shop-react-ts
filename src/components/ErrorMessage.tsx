interface ErrorMessageProps{
    error: string
}


export function ErrorMessage({error}: ErrorMessageProps){
    return(
        <p className="error" style={{}}>{error}</p>
    )
} 