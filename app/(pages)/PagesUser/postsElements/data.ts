export const dados = async () =>{
    const res = await fetch("http://localhost:3000/api/PostUsers", {
        method: 'GET',
        next: {
            revalidate: 200,
        }
      })
      return res.json()
}