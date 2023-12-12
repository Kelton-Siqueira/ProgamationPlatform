'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"


//aqui podemos fazer o possivel salvamento de elementos
const formSchema = z.object({
    email: z.string({
        required_error: 'E-mail is required'
    }).email({
        message: 'must be a valid e-mail'
    }),
    password: z.string({
        required_error: 'password is required'
    }).min(7, {message:'The password must have at least 5 characteristics'}).max(10, {message: 'Password exceeded the default limit'})
})


export default function CreateAccountLoginForm(){
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        //como zod não fala a lingua do react, utilizamos o resolver passando o zodResolver que é o tradutor e passando pra ele o schema.
        resolver: zodResolver(formSchema),
        //Os valores de inicio
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmits = async (values:z.infer<typeof formSchema>) => {
        try{
            const supabase = createClientComponentClient({})
            const { email, password} = values
            const { data } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            form.reset()
            router.refresh()
        }catch(error){
            console.log('error no submit login', error)
        }
    }
    return(
        <div className="flex flex-col justify-center items-center space-y-2 w-full h-full">

            <span className="text-lg text-red-600">Enter your login credentials</span>
            {/* Passamos por meio de props todos os elementos de form, criamos um forme e informamos que o evento de submição será realizado pelo handleSubmit por meio do form */}
            <Form {...form}>
                <form
                    className="flex flex-col space-y-2" 
                    onSubmit={form.handleSubmit(onSubmits)}
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
                    <Button className="text-white hover:text-red-500 border active:border  active:text-white active:shadow-black active:h-8 active:bg-black" type="submit">Login</Button>
                    
                </form>
                
            </Form>
        </div>
    )
}