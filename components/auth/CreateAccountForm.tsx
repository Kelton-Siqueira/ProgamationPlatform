'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { dados } from "./data"
import { Construction } from "lucide-react"
import { v4 } from "uuid"


//aqui podemos fazer o possivel salvamento de elementos
const formSchema = z.object({
    UserName: z.string({
        required_error: "Name is required"
    }).min(7, {message:'The name must have at least 20 characteristics'}).max(20, {message: 'Password exceeded the default limit'}),
    ReaptPassword: z.string({
        required_error: "Password is required"
    }).min(7, {message:'The password must have at least 5 characteristics'}).max(10, {message: 'Password exceeded the default limit'}),
    email: z.string({
        required_error: 'E-mail is required'
    }).email({
        message: 'must be a valid e-mail'
    }),
    password: z.string({
        required_error: 'password is required'
    }).min(7, {message:'The password must have at least 5 characteristics'}).max(10, {message: 'Password exceeded the default limit'}),
})



type NewType = {
    SetisLogin: React.Dispatch<React.SetStateAction<boolean>>;
    isLogin: boolean
}

export default function CreateAccountForm({ isLogin, SetisLogin }: NewType){
    const router = useRouter()
    const [pass, setPass] = useState(false)
    console.log(isLogin)
    const [d, setD] = useState([
        {
            email: '',
            name: ''
        }
    ])
    const form = useForm<z.infer<typeof formSchema>>({
        //como zod não fala a lingua do react, utilizamos o resolver passando o zodResolver que é o tradutor e passando pra ele o schema.
        resolver: zodResolver(formSchema),
        //Os valores de inicio
        defaultValues: {
            UserName: '',
            email: '',
            password: '',
            ReaptPassword: ''
        }
    });

    const onSubmitls = async (values:z.infer<typeof formSchema>) => {
        try{
            //Como se trata de um component client não a uma necessidade de se ler um cookie, podendo ter acesso diretamente
            
            
            const dadosbrutos = await dados()
            const ls = await dadosbrutos.user
            setD(ls)
            console.log(ls, 'ls')
        const supabase = createClientComponentClient()   
        const { email, password, ReaptPassword, UserName } = values
        const { data:{ user }, error } = await supabase.auth.signUp({
            email,
            password,
             options: {
                emailRedirectTo: `${location.origin}/auth/callback`
            } 
        })
        console.log(d, 'd')
        if(password === ReaptPassword){ 
            console.log('entrou no if do reapt')
            console.log(d, 'de no reapt')
            d.map((e) =>{
                console.log(e, 'parte de cima sem o if')
                console.log('email', !!e.email)
                console.log('o email', e.email)
                if(e.email != email && !!e.email ){
                    console.log(e.email, 'e.email')
                    console.log(isLogin, 'entrou no if')
                    const data = async () => {
                        try {
                            const response = await fetch("/api/usuario", {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    email: email,
                                    name: UserName,
                                    id_user: 23
                                })
                            });
                
                            if (!response.ok) {
                                throw new Error(`HTTP error! status: ${response.status}`);
                            }
                            SetisLogin(true)
                            
                            
                        } catch (error) {
                            console.error('There was a problem with the fetch operation: ' + error);
                        }
                    }
                    data()
                }
                else{
                     SetisLogin(false) 
                }
                
            })
            const user = true
            if(user){
                /* router.push("/") */
                form.reset()
                router.refresh()
            }
        }else if(password != ReaptPassword){
            setPass(true)

        }
        
        }catch(error){
            console.log('Erro no Create-Account Submit', error)
        }
    }
    
    return(
        <div className="flex z-40 flex-col justify-center items-center space-y-2">

{!isLogin ? <div onClick={()=>SetisLogin(isLogin ? false : true)} className=" w-screen h-screen flex justify-center items-center absolute  bg-red-500 ">
                        <div className="">
                        <Construction />
                        </div>
                        <h1>O usuario já está cadastrado, tente outrou e-mail</h1>
                    </div>: ''}
            <span className="text-lg text-red-600">You wuill love it</span>
            {/* Passamos por meio de props todos os elementos de form, criamos um forme e informamos que o evento de submição será realizado pelo handleSubmit por meio do form */}
            <Form {...form}>
                <form
                
                    className="flex flex-col  space-y-2" 
                    onSubmit={form.handleSubmit(onSubmitls)}
                >
                    
                    <FormField
                        control={form.control}
                        name="UserName"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>your name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="your name"
                                        {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your Name
                                </FormDescription>
                                <FormMessage  />
                            </FormItem>
                        )}  
                    />
                    
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>E-Mail</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="your email" type="email"
                                        {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your E-mail
                                </FormDescription>
                                <FormMessage  />
                            </FormItem>
                        )}  
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="your password" type="password"
                                        {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your Password
                                </FormDescription>
                                <FormMessage  />
                            </FormItem>
                        )}  
                    />
                    {pass ? <div className="text-red-500">As senhas precisão ser iguais</div>: ''}
                    <FormField
                        control={form.control}
                        name="ReaptPassword"
                        render={({field}) => (
                            <FormItem className="">
                                <FormLabel>Reapt Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Reapt your password" type="password"
                                        {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your Password
                                </FormDescription>
                                <FormMessage  />
                            </FormItem>
                        )}  
                    />
                    <Button className=" m-4 text-white border  active:text-white active:shadow-black active:h-8 active:bg-black" type="submit">Create Your Account</Button>
                    
                </form>
                
            </Form>
        </div>
    )
}


/**/







