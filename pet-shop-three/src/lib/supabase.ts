import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

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
        .eq("project_id", "pet-shop-three")
        .single();

    if (error) {
        console.error("Error fetching site content:", error);
        return null;
    }
    return data;
}
