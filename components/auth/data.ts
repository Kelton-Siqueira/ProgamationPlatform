export const dados = async () =>{
    const res = await fetch("api/usuario", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
          },
        
        
      })
      if(!res.ok) console.log("Error when searching for data postsElements")
      return res.json()
}