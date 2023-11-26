import {NextUIProvider} from "@nextui-org/react";
import Image from 'next/image'
import {Button} from "@nextui-org/react";
import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { RedirectType, redirect, useRouter  } from "next/navigation";
import { SidebarGlobal } from "@/components/side-bar";
import { dados } from "./data";

import Navbar from "@/components/homepage/nav-bar";
import Phots from "../(pages)/PagesUser/cardsElements/Phots";
import MenuHomer from "./nav-bar";
import BodyInital from "../(pages)/PagesUser/iaPages/IaElement";


export default async function Home() {
    const supabase = createServerComponentClient({cookies})
    const { data: { session }, data} = await supabase.auth.getSession()
    if(!session)  redirect("/Restricted", RedirectType.replace)
    const ls = await dados()

    
    
  return (
    <main className="flex overflow-hidden">
            <MenuHomer />
        <aside className="w-60">
            <SidebarGlobal />
        </aside>

        <div className=" grid grid-cols-1">
        <div id="section02" className="overflow-hidden  z-10 h-screen w-screen my-12">
        <div className="w-full h-full bg-black rounded-2xl bg-[url('/accets/lsk.webp')] ">
            <div className="h-full w-[82rem] rounded-2xl opacity-40 bg-black"></div>
            <div className="flex flex-col absolute  m-4 top-10 ">
            <h1 className="my-5 text-3xl text-white">Aqui você aumentará o seu conhecimento sobre IA</h1>
    <div className="bg-blur-500">
      <p className="m-10 text-lg text-white h-25 overflow-x-auto ">
        Aprender Inteligência Artificial (IA) pode trazer muitos benefícios para desenvolvedores. Aqui estão alguns deles:<br />
        1. Aumento da eficiência e produtividade: A IA pode automatizar trabalhos repetitivos, permitindo que os desenvolvedores se concentrem em trabalhos mais complexos e criativos.<br />
        2. Melhoria das capacidades de tomada de decisões e resolução de problemas: A IA pode analisar grandes quantidades de dados e fazer previsões, fornecendo informações que os humanos não seriam capazes de identificar.<br />
        3. Capacidade de processar e analisar grandes quantidades de dados: A IA pode processar e analisar rapidamente grandes quantidades de dados, o que pode ajudar a identificar padrões e tendências.<br />
        4. Desenvolvimento de softwares: A IA pode ajudar no desenvolvimento de softwares, como na prototipagem rápida, programação inteligente, análise automática e tratamento de erros, refatoração automática de código, estimativas precisas e tomada de decisão estratégica.<br />
        5. Melhoria da qualidade do código: As ferramentas de IA podem ser usadas para melhorar a qualidade do código, aumentando a eficiência, segurança e confiabilidade do site.<br />
        Além disso, a IA tem o potencial de revolucionar muitas áreas da nossa vida, desde a forma como trabalhamos até a forma como interagimos com o mundo ao nosso redor. Portanto, dominar linguagens de programação como Python, Java ou C++ permite que os desenvolvedores escrevam código eficiente e robusto para criar soluções de IA.
      </p>
    </div>
            </div>
            
            </div>
        </div>

        <div id="section01" className="overflow-hidden z-10 h-screen w-screen ">
        <div className="w-full h-full bg-black  rounded-2xl bg-[url('/accets/lsk.webp')] ">
            <div className="h-full w-[82rem] rounded-2xl opacity-40 bg-black"></div>
            <div className="flex flex-col absolute  m-4 top-[50rem]">
            <h1 className=" text-3xl my-10 text-white">Aqui você aumentará o seu conhecimento sobre IA</h1>
    <div className=" relative ">
      <p className="text-lg mx-6 text-white h-25 overflow-x-auto ">
        Aprender Inteligência Artificial (IA) pode trazer muitos benefícios para desenvolvedores. Aqui estão alguns deles:<br />
        1. Aumento da eficiência e produtividade: A IA pode automatizar trabalhos repetitivos, permitindo que os desenvolvedores se concentrem em trabalhos mais complexos e criativos.<br />
        2. Melhoria das capacidades de tomada de decisões e resolução de problemas: A IA pode analisar grandes quantidades de dados e fazer previsões, fornecendo informações que os humanos não seriam capazes de identificar.<br />
        3. Capacidade de processar e analisar grandes quantidades de dados: A IA pode processar e analisar rapidamente grandes quantidades de dados, o que pode ajudar a identificar padrões e tendências.<br />
        4. Desenvolvimento de softwares: A IA pode ajudar no desenvolvimento de softwares, como na prototipagem rápida, programação inteligente, análise automática e tratamento de erros, refatoração automática de código, estimativas precisas e tomada de decisão estratégica.<br />
        5. Melhoria da qualidade do código: As ferramentas de IA podem ser usadas para melhorar a qualidade do código, aumentando a eficiência, segurança e confiabilidade do site.<br />
        Além disso, a IA tem o potencial de revolucionar muitas áreas da nossa vida, desde a forma como trabalhamos até a forma como interagimos com o mundo ao nosso redor. Portanto, dominar linguagens de programação como Python, Java ou C++ permite que os desenvolvedores escrevam código eficiente e robusto para criar soluções de IA.
      </p>
    </div>
            </div>
            
            </div>
        </div>
        </div>
        


        
    </main>
  )
}
