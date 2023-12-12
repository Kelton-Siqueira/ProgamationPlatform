export const dados = async () =>{
    const res = await fetch("http://localhost:3000/api/PostUsers", {
        method: 'GET',
        cache: 'no-cache',
        
        
      })
      if(res.ok) console.log("Error when searching for data postsElements")
      return res.json()
}