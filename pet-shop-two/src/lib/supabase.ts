import { createClient, SupabaseClient } from "@supabase/supabase-js";

let _supabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
    if (!_supabase) {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
        _supabase = createClient(supabaseUrl, supabaseKey);
    }
    return _supabase;
}

export const supabase = new Proxy({} as SupabaseClient, {
    get(_target, prop, receiver) {
        return Reflect.get(getSupabase(), prop, receiver);
    },
});

export interface SiteContent {
    site_name: string;
    clinic_name: string;
    phone: string;
    email: string;
    address: string;
    hero_title: string;
    hero_subtitle: string;
    footer_text: string;
    social_links: any;
}

export async function getSiteContent(): Promise<SiteContent | null> {
    const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .eq("project_id", "pet-shop-two")
        .single();

    if (error) {
        console.error("Error fetching site content:", error);
        return null;
    }
    return data;
}
