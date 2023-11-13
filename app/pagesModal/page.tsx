
interface ls {
    id:number;
}

export default async function CardPage({ id }:ls){
    const da = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      const ls = await da.json()
      console.log('modal', id)
    return(
        <div>
            id
             {id}
        </div>
    )
}