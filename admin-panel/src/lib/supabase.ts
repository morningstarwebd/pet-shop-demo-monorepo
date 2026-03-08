import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface SiteContent {
    id: string;
    project_id: string;
    site_name: string;
    clinic_name: string;
    phone: string;
    email: string;
    address: string;
    hero_title: string;
    hero_subtitle: string;
    footer_text: string;
    social_links: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
        youtube?: string;
        whatsapp?: string;
    };
}

export async function getAllSiteContent(): Promise<SiteContent[]> {
    const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .order('project_id');

    if (error) {
        console.error('Error fetching site content:', error);
        return [];
    }

    return data || [];
}

export async function updateSiteContent(
    id: string,
    updates: Partial<SiteContent>
): Promise<boolean> {
    const { error } = await supabase
        .from('site_content')
        .update(updates)
        .eq('id', id);

    if (error) {
        console.error('Error updating site content:', error);
        return false;
    }

    return true;
}
