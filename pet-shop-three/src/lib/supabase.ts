import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { unstable_noStore as noStore } from "next/cache";

let _supabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
    if (!_supabase) {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
        _supabase = createClient(supabaseUrl, supabaseKey, {
            global: {
                fetch: (url, options) => fetch(url, { ...options, cache: "no-store" }),
            },
        });
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
    noStore(); // Opt out of Next.js static caching to always get live data
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.warn("Supabase env vars missing. Skipping fetch during build/prerender.");
        return null;
    }

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
