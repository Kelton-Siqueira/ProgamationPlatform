export default function LS({title, body}: { title: string, body:string}){
    return(
        <div className="w-scrren h-screen bg-red-500"> 
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )
}