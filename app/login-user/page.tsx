import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies  } from 'next/headers'
import { RedirectType, redirect  } from 'next/navigation'



import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import CreateAccountForm from '@/components/auth/CreateAccountForm'
import CreateAccountLoginForm from '@/components/auth/CreateLoginForm '

export default async function LoginUser() {
  let logg = false   


  try{
    const supabase = createServerComponentClient({cookies})
    const { data: { session }, data} = await supabase.auth.getSession()

    if(session) logg = true
  }catch(error){
    console.log('Home', error)
  }finally{
    if(logg) redirect("/Welcome", RedirectType.replace)
  }
  return (
    <div className='flex flex-col h-screen w-full justify-center items-center'>
      
    <Tabs defaultValue="Create-account" className="w-[400px] border rounded-md pb-4 shadow-2xl ">
      <TabsList className="flex justify-around items-center rounded-b-none h-14">
        <TabsTrigger className='transition-all delay-150' value="Create-account">Create-Account</TabsTrigger>
        <TabsTrigger className='transition-all delay-150' value="Login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="Create-account">
    <CreateAccountForm />
      </TabsContent>
      <TabsContent value="Login">
        <CreateAccountLoginForm />
      </TabsContent>
    </Tabs>
    </div>
  )
}
