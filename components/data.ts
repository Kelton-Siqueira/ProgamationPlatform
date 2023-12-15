export const dados = async () =>{
    const res = await fetch("/api/usuario", {
        method: 'GET',
        cache: 'no-cache',
        
        
      })
      if(res.ok) console.log("Error when searching for data postsElements")
      return res.json()
}