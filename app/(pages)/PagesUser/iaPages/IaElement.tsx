import Image from "next/image";

export default function BodyInital(){
    return(
        <div className="  flex  justify-start flex-col w-full h-full items-center  ">

        <div className=" flex items-center relative h-screen left-1/4 justify-center flex-col ">
            <h1 className="text-4xl">Topicos referêntes a machine learning e IA</h1>
            <div className=" relative left-24 ">
                <h2 className="text-lg text-border my-5 ">O que é IA e quis as diferenças entre machine learning </h2>
                <div className="flex justify-between my-3 ">
                    <p>
                    A Inteligência Artificial (IA) é uma das áreas que mais cresce<br/>
                    atualmente, tendo deste um grande aumento de profissionais como também <br/>
                    um grande aumento na busca destes profissionais. Mas para que serve IA? Bom <br/>
                        Bom resumindo em poucas palavras IA é uma <br/>tecnologia que irá permitir um grande 
                    aumento de produtividade,<br/> pois com ela será possivel automatizar processos em que há<br/>
                    grande preminancia de atividades repetitivas, mas como também em areas de atividades mais<br/>
                    especializadas.
                        Já machine learning O aprendizado de máquina tem como objetivo ensinar <br/>
                    uma máquina a realizar uma tarefa específica e fornecer resultados precisos <br/>
                    identificando padrões. Logo IA tem como diferencial o ato de imitar a inteligência humana<br/>
                    enquanto marchine learning fica com atividades e <br/>padrões especificos onde há uma previsibilidade
                    </p>
                    <div>
                        <Image className="rounded-full h-[22rem]" src={'/accets/ia-saude.jpg'} width={400} height={500} alt="ls" />
                    </div>
                </div>
            </div>
        </div>
        

        <div className=" flex items-center relative h-screen left-1/4 justify-center flex-col ">
            <h1 className="text-4xl">Topicos referêntes a machine learning e IA</h1>
            <div className=" relative left-24 ">
                <h2 className="text-lg text-border my-5 ">O que é IA e quis as diferenças entre machine learning </h2>
                <div className="flex justify-between my-3 ">
                    <p>
                    A Inteligência Artificial (IA) é uma das áreas que mais cresce<br/>
                    atualmente, tendo deste um grande aumento de profissionais como também <br/>
                    um grande aumento na busca destes profissionais. Mas para que serve IA? Bom <br/>
                        Bom resumindo em poucas palavras IA é uma <br/>tecnologia que irá permitir um grande 
                    aumento de produtividade,<br/> pois com ela será possivel automatizar processos em que há<br/>
                    grande preminancia de atividades repetitivas, mas como também em areas de atividades mais<br/>
                    especializadas.
                        Já machine learning O aprendizado de máquina tem como objetivo ensinar <br/>
                    uma máquina a realizar uma tarefa específica e fornecer resultados precisos <br/>
                    identificando padrões. Logo IA tem como diferencial o ato de imitar a inteligência humana<br/>
                    enquanto marchine learning fica com atividades e <br/>padrões especificos onde há uma previsibilidade
                    </p>
                    <div>
                        <Image className="rounded-full h-[22rem]" src={'/accets/ia-saude.jpg'} width={400} height={500} alt="ls" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}