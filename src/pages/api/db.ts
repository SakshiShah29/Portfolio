import { createClient } from "@supabase/supabase-js";
require('dotenv').config({ path: ".env" })
const supabaseurl:any=process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey:any=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseurl, supabaseAnonKey);

export const fetchEntries=async()=>{
    const { data,error } = await supabase
  .from('guestbook')
  .select("*").order("created_at");
  return{data,error};
}

export const signMessage=async(signer:string,message:string,signature:string)=>{
    const {data,error}=await supabase.from('guestbook').insert({signer,message,signature});

    return{data,error}

}