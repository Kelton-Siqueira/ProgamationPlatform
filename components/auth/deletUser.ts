import { dados } from "./data";

const dels = async () => {
    const d = await dados();
    const ls = d.user
    console.log('iniciando o dele')
    console.log(ls)
    for(let i = 0; i < 700; i++){
        console.log(ls[i].id, 'id')
        const del = await fetch("/api/usuario",{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id:ls[i].id
            })
        }
           )
    }
}