export const dados = async () =>{
    const res = await fetch("http://localhost:3000/api/PostUsers", {
        method: 'GET',
      })
      return res.json()
}