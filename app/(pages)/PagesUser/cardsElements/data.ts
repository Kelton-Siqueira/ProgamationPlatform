export async function dados(){
    const dados = await fetch("https://jsonplaceholder.typicode.com/photos")
    const json = dados.json()
    return json
}