import Link from "next/link";

export default async function Restricted() {


  return (
    <div className="flex justify-center items-center flex-col gap-20 m-10" >
        <h1>Not Found</h1>
        <header className="flex justify-center items-center gap-10 flex-col ">
        <p>
      This page is restricted to registered members, please return to the home page and log in or create an account
    </p>
    <p>
       Click <Link className="text-red-500 hover:text-blue-500" href={"/"}>aqui</Link> para retorna a pagina inicial
    </p>
    </header>
    </div>
  )
}
