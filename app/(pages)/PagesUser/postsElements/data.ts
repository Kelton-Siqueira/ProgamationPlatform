export async function dados(){
    const dados = await fetch("https://jsonplaceholder.typicode.com/posts")
    const json = dados.json()
    return json
}