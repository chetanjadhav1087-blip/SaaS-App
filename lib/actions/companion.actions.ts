'use server'

import { auth } from "@clerk/nextjs/server"
import { createSupabaseClient } from "../supabase";

export const createComapnion = async (formData: CreateCompanion) => {
    const {userId: author} = await auth();
    const supabase = createSupabaseClient();

    const {data, error} = await supabase
        .from('companions')
        .insert({...formData, author})
        .select()
    
    if(error || !data) throw new Error(error?.message || 'Faoled to create a companion');

    return data[0];
}