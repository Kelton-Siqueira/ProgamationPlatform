import Navbar from "@/components/homepage/nav-bar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import { RedirectType, redirect } from "next/navigation";
import { cookies } from "next/headers";
export default async function HomoPage() {

    let logg = false   


  try{
    const supabase = createServerComponentClient({cookies})
    const { data: { session }, data} = await supabase.auth.getSession()
    if(session) logg = true
  }catch(error){
    console.log('Home', error)
  }finally{
    if(logg) redirect("/HomeUserAuth", RedirectType.replace)
  }

 

    return (
        <div className=" overflow-hidden w-full flex  bg-slate-800 ">
         <div className=" z-30 h-28 gap-14 items-center fixed justify-between">
             <Navbar />
             oi
         </div>
         <div className="flex  flex-col items-center justify-center ">
            <h1 className=" md:left-[30rem] left-8 text-red-500 top-5 md:top-20  w-screen relative m-8 p-2 text-3xl md:text-5xl justify-center items-center" >Pricinpais Topícos</h1>
         <div id="section01" className="overflow-y-scroll relative p-9 right-7 md:px-3 z-10 h-[30rem]  w-screen md:h-screen flex justify-center flex-col items-center">
             <div className=" h-[28rem] w-full  flex  flex-col ">
                 <h1 className="text-purple-500 text-3xl m-4 "> -O que é progamação</h1>
                 <div className=" flex-col flex md:flex-row  items-center  md:items-start justify-between">
                     <p className="text-clip text-white"> &nbsp; &nbsp; &nbsp; Programação é o processo de escrita, teste e manutenção de um programa de computador. O programa é escrito em uma linguagem de programação, embora seja possível, com alguma dificuldade, o escrever diretamente em linguagem de máquina. Diferentes partes de um programa podem ser escritas em diferentes linguagens. <br />
 
                     &nbsp; &nbsp; &nbsp;Diferentes linguagens de programação funcionam de diferentes modos. Por esse motivo, os programadores podem criar programas muito diferentes para diferentes linguagens; muito embora, teoricamente, a maioria das linguagens possa ser usada para criar qualquer programa.
 <br />
 &nbsp;  &nbsp; &nbsp;Há várias décadas se debate se a programação é mais semelhante a uma arte (Donald Knuth), a uma ciência, à matemática (Edsger Dijkstra), à engenharia (David Parnas), ou Se é um campo completamente novo.
 <br/>   &nbsp;  &nbsp; &nbsp;hoje utilizamos diversas ferramentas que auxilíam na criação de aplicações, veremos agora 3 exemplos dessas ferramentas, que são englobadas tanto no backend como no frontend mas também os bancos de dados, pois será neles que serão guardados os dados da aplicação.
 </p>
                     <Image className="rounded-full w-[20rem] h-[20rem] md:h-[24rem] md:w-[27rem]" src={"/accets/laptop-com-icone-de-codigo-isometrico-de-programa-desenvolvimento-de-software-e-aplicacoes-de-programacao-neon-escuro_39422-971.avif"} alt='images' width={600} height={600} />
                 </div>
             </div>
         </div>
 
 
         <div id="section02" className="overflow-y-scroll relative p-9 right-7 md:p-0 z-10 h-[30rem]  w-screen md:h-screen flex justify-center flex-col items-center"> 
             <div className="px-8 h-[28rem] w-full  flex  flex-col ">
                 <h1 className="text-purple-900 text-3xl m-4"> -Quais São as suas utilidades</h1>
                 <div className="flex-col flex md:flex-row  items-center  md:items-start justify-between">
                     <p className="text-clip text-black"> 
    &nbsp;  &nbsp; &nbsp;Ao trabalhar com conceitos de lógica e de matemática, a programação contribui muito para<br /> o desenvolvimento do raciocínio e do pensamento sistêmico dos jovens.<br /> 
    &nbsp;  &nbsp; &nbsp;Além disso, o trabalho minucioso da escrita de códigos treina bastante<br /> a concentração e a capacidade de resolução de problemas.<br />
    &nbsp;  &nbsp; &nbsp;Através da programação, é possível desenvolver softwares, aplicativos, <br />websites, jogos, sistemas de inteligência artificial e muito mais.<br /> 
    &nbsp;  &nbsp; &nbsp;A programação permite automatizar tarefas, resolver<br /> problemas e criar soluções personalizadas para atender às necessidades específicas de cada pessoa ou empresa.<br />
                     Logo então a progamação tem tantos benefícos para desde aqueles<br /> que tem ela como profissão, como também para a sociedade como um todo
                     </p>
                     <Image className="rounded-full  w-[20rem] h-[20rem] md:h-[24rem] md:w-[27rem]" src={"/accets/7994702-programadores-e-ciber-seguranca-tecnologias-design-websites-e-seguranca-no-mundo-social-conceitos-de-seguranca-cibernetica-foto.jpg"} alt='images' width={500} height={500} />
                 </div>
             </div>
         </div>
 
 
         <div id="section03" className="overflow-y-scroll relative p-9 right-7 md:p-0 z-10 h-[30rem]  w-screen md:h-screen flex justify-center flex-col items-center"> 
             <div className="px-8 h-[28rem] w-full  flex  flex-col">
                 <h1 className="text-purple-500 text-3xl m-4 "> -Quais São as suas utilidades</h1>
                 <div className="flex-col flex md:flex-row  items-center  md:items-start justify-between">
                     <p className="text-clip text-white"> 
                     Qual será o primeiro passo que se  deve tomar para aprender a progamar e a criar
                     as suas primeiras aplicações? <br/>Neste video iremos ver uma introdução sobre como sair do
                     completo {"0 a 0"}<br/> até até a um primeiro passo, já que a progamação em si e uma caminhada extença e com bastantes vertentes, porém, o básico<br/> aprendido será aplicado em todas as vertentes  desta área.
                     </p>
                     <iframe className="m-3 rounded-lg  w-[20rem] h-[20rem] md:h-[23rem] md:w-[26rem]" width="560" height="315" src="https://www.youtube.com/embed/l_5qTI5EHgc?si=9-UlTxaOcFWLi90S" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                 </div>
             </div>
         </div>
 
         </div>
             
         </div>
         
   
     )
}