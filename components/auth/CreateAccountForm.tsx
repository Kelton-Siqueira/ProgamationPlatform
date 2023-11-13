'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import ImageUploadPlaceHolder from "../imagesUploud/imagesUploud"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Label } from "../ui/label"
import { useCallback, useEffect, useState } from "react"


//aqui podemos fazer o possivel salvamento de elementos
const formSchema = z.object({
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



export default function CreateAccountForm(){
    const router = useRouter()
    const [pass, setPass] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        //como zod não fala a lingua do react, utilizamos o resolver passando o zodResolver que é o tradutor e passando pra ele o schema.
        resolver: zodResolver(formSchema),
        //Os valores de inicio
        defaultValues: {
            email: '',
            password: '',
            ReaptPassword: ''
        }
    });

    const onSubmitls = async (values:z.infer<typeof formSchema>) => {
        try{
            //Como se trata de um component client não a uma necessidade de se ler um cookie, podendo ter acesso diretamente
        const supabase = createClientComponentClient()
        const { email, password, ReaptPassword } = values
        if(password === ReaptPassword){
            const { data:{ user }, error } = await supabase.auth.signUp({
                email,
                password,
                /* options: {
                    emailRedirectTo: `${location.origin}/auth/callback`
                } */
            })
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
        <div className="flex z-0 flex-col justify-center items-center space-y-2">

            <span className="text-lg text-red-600">You wuill love it</span>
            {/* Passamos por meio de props todos os elementos de form, criamos um forme e informamos que o evento de submição será realizado pelo handleSubmit por meio do form */}
            <Form {...form}>
                <form
                    className="flex flex-col space-y-2" 
                    onSubmit={form.handleSubmit(onSubmitls)}
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>E-Mail</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="your@email.com"
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
                                <FormLabel>E-Mail</FormLabel>
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
                    <Button className=" m-4 text-black border  active:text-white active:shadow-black active:h-8 active:bg-black" type="submit">Create Your Account</Button>
                    
                </form>
                
            </Form>
        </div>
    )
}