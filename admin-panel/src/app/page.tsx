"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAllSiteContent, updateSiteContent, SiteContent } from "@/lib/supabase";
import {
  PawPrint,
  CheckCircle2,
  Globe,
  Settings2,
  Phone,
  Mail,
  MapPin,
  Heading,
  TextIcon,
  Link as LinkIcon,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
  Save,
  Loader2,
  LayoutTemplate,
  Search,
  ExternalLink
} from "lucide-react";

// Theming for the different projects
const PROJECT_THEMES: Record<string, { label: string; icon: any; color: string; gradient: string }> = {
  "pet-shope-one": { label: "Main Demo", icon: PawPrint, color: "#6366f1", gradient: "from-indigo-500 to-violet-500" },
  "pet-shop-two": { label: "Modern Layout", icon: LayoutTemplate, color: "#ec4899", gradient: "from-pink-500 to-rose-500" },
  "pet-shop-three": { label: "Premium Breeder", icon: Globe, color: "#14b8a6", gradient: "from-teal-400 to-emerald-500" },
};

const PROJECT_URLS: Record<string, string> = {
  "pet-shope-one": "https://pet-shope-one.vercel.app",
  "pet-shop-two": "https://pet-shop-two-five.vercel.app",
  "pet-shop-three": "https://pet-shop-three-mu.vercel.app",
};

export default function AdminPage() {
  const [sites, setSites] = useState<SiteContent[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllSiteContent();
      setSites(data);
      if (data.length > 0 && !activeTab) {
        setActiveTab(data[0].project_id);
      }
    } catch (err) {
      console.error("Failed to load workspace data:", err);
      setToast({ message: "Failed to connect to database. Please check configuration.", type: "error" });
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const activeSite = sites.find((s) => s.project_id === activeTab);
  const activeTheme = PROJECT_THEMES[activeTab] || PROJECT_THEMES["pet-shope-one"];

  const handleFieldChange = (field: keyof SiteContent, value: string) => {
    setSites((prev) =>
      prev.map((s) =>
        s.project_id === activeTab ? { ...s, [field]: value } : s
      )
    );
    setHasChanges(true);
  };

  const handleSocialChange = (platform: string, value: string) => {
    setSites((prev) =>
      prev.map((s) =>
        s.project_id === activeTab
          ? { ...s, social_links: { ...s.social_links, [platform]: value } }
          : s
      )
    );
    setHasChanges(true);
  };

  const handleSave = async () => {
    if (!activeSite) return;
    setSaving(true);
    const success = await updateSiteContent(activeSite.id, {
      site_name: activeSite.site_name,
      clinic_name: activeSite.clinic_name,
      phone: activeSite.phone,
      email: activeSite.email,
      address: activeSite.address,
      hero_title: activeSite.hero_title,
      hero_subtitle: activeSite.hero_subtitle,
      footer_text: activeSite.footer_text,
      social_links: activeSite.social_links,
      seo_title: activeSite.seo_title,
      seo_description: activeSite.seo_description,
    });
    setSaving(false);

    if (success) {
      setToast({ message: "Changes successfully published across all global edge nodes.", type: "success" });
      setHasChanges(false);
    } else {
      setToast({ message: "Failed to persist changes. Check connection.", type: "error" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="relative">
            <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PawPrint className="w-6 h-6 text-indigo-400 opacity-50 absolute" />
            </div>
          </div>
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-300 font-medium">Initializing Workspace</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32">
      {/* Header Area */}
      <header className="fixed top-0 inset-x-0 z-50 glass-panel !rounded-none !border-x-0 !border-t-0 shadow-none">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${activeTheme.gradient} flex items-center justify-center shadow-lg shadow-${activeTheme.color}/20`}>
              <Settings2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-['Plus_Jakarta_Sans'] font-bold premium-gradient-text tracking-tight">
                Control Center
              </h1>
              <div className="flex items-center gap-2 text-xs font-medium mt-1">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400/90 uppercase tracking-widest">Active Connection</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-white/5 rounded-full p-1.5 border border-white/10 backdrop-blur-md">
            {sites.map((site) => {
              const meta = PROJECT_LABELS[site.project_id] || PROJECT_THEMES["pet-shope-one"];
              const isActive = activeTab === site.project_id;
              const Icon = PROJECT_THEMES[site.project_id]?.icon || Globe;

              return (
                <button
                  key={site.project_id}
                  onClick={() => {
                    if (hasChanges && !window.confirm("You have unsaved changes. Discard?")) return;
                    setActiveTab(site.project_id);
                    setHasChanges(false);
                  }}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? "text-white" : "text-white/50 hover:text-white/80 hover:bg-white/5"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className={`absolute inset-0 bg-gradient-to-r ${PROJECT_THEMES[site.project_id]?.gradient || 'from-indigo-500 to-purple-500'} opacity-20 rounded-full`}
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-white' : ''}`} />
                  <span className="relative z-10">{meta.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-32">
        <AnimatePresence mode="wait">
          {activeSite && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              {/* Site Overview Header inside Content */}
              <div className="mb-12 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div>
                  <h2 className="text-4xl font-['Plus_Jakarta_Sans'] font-extrabold text-white mb-2 tracking-tight">
                    {PROJECT_THEMES[activeTab]?.label || 'Store'} Configuration
                  </h2>
                  <p className="text-white/50 text-lg max-w-2xl">
                    Manage the core brand identity, contact details, and landing page messaging for the &apos;{activeTab}&apos; instance.
                  </p>
                </div>

                {PROJECT_URLS[activeTab] && (
                  <a
                    href={PROJECT_URLS[activeTab]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white/80 hover:text-white transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-indigo-500/20"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span>View Live Site</span>
                  </a>
                )}
              </div>

              {/* Grid Layout for Forms */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Brand & Hero */}
                <div className="lg:col-span-7 space-y-8">
                  <FormSection title="Brand Identity" icon={<Globe className="w-5 h-5 text-indigo-400" />}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        label="Store Name"
                        value={activeSite.site_name}
                        onChange={(v) => handleFieldChange("site_name", v)}
                        placeholder="e.g. Dogs Paradise"
                        icon={<Heading className="w-4 h-4" />}
                      />
                      <FormField
                        label="Legal Business Name"
                        value={activeSite.clinic_name}
                        onChange={(v) => handleFieldChange("clinic_name", v)}
                        placeholder="e.g. Paradise Enterprises Ltd"
                        icon={<Heading className="w-4 h-4" />}
                      />
                    </div>
                  </FormSection>

                  <FormSection title="Hero Messaging" icon={<TextIcon className="w-5 h-5 text-pink-400" />}>
                    <FormField
                      label="Primary Headline"
                      value={activeSite.hero_title}
                      onChange={(v) => handleFieldChange("hero_title", v)}
                      placeholder="Catchy headline"
                      icon={<Heading className="w-4 h-4" />}
                    />
                    <FormField
                      label="Subheadline / Description"
                      value={activeSite.hero_subtitle}
                      onChange={(v) => handleFieldChange("hero_subtitle", v)}
                      placeholder="Supporting introductory text"
                      textarea
                    />
                  </FormSection>

                  <FormSection title="Footer & Copyright" icon={<LayoutTemplate className="w-5 h-5 text-orange-400" />}>
                    <FormField
                      label="Footer Legal Text"
                      value={activeSite.footer_text}
                      onChange={(v) => handleFieldChange("footer_text", v)}
                      placeholder="© 2026 Pet Shop. All rights reserved."
                      icon={<TextIcon className="w-4 h-4" />}
                    />
                  </FormSection>

                  <FormSection title="SEO & Social Sharing" icon={<Search className="w-5 h-5 text-yellow-400" />}>
                    <FormField
                      label="SEO Meta Title"
                      value={activeSite.seo_title || ""}
                      onChange={(v) => handleFieldChange("seo_title", v)}
                      placeholder="e.g. Dogs Paradise | Premium Puppies"
                      icon={<Heading className="w-4 h-4" />}
                    />
                    <FormField
                      label="SEO Meta Description"
                      value={activeSite.seo_description || ""}
                      onChange={(v) => handleFieldChange("seo_description", v)}
                      placeholder="e.g. Find your perfect puppy. We offer premium breeds with complete vaccination."
                      textarea
                    />
                  </FormSection>
                </div>

                {/* Right Column: Contact & Social */}
                <div className="lg:col-span-5 space-y-8">
                  <FormSection title="Contact Information" icon={<Phone className="w-5 h-5 text-emerald-400" />}>
                    <FormField
                      label="Primary Phone"
                      value={activeSite.phone}
                      onChange={(v) => handleFieldChange("phone", v)}
                      placeholder="+91 98765 43210"
                      icon={<Phone className="w-4 h-4" />}
                    />
                    <FormField
                      label="Email Address"
                      value={activeSite.email}
                      onChange={(v) => handleFieldChange("email", v)}
                      placeholder="hello@example.com"
                      type="email"
                      icon={<Mail className="w-4 h-4" />}
                    />
                    <FormField
                      label="Physical Address"
                      value={activeSite.address}
                      onChange={(v) => handleFieldChange("address", v)}
                      placeholder="Full business address"
                      icon={<MapPin className="w-4 h-4" />}
                      textarea
                    />
                  </FormSection>

                  <FormSection title="Social Networks" icon={<LinkIcon className="w-5 h-5 text-cyan-400" />}>
                    <div className="space-y-4">
                      {Object.entries({
                        facebook: { icon: Facebook, color: "text-blue-500" },
                        instagram: { icon: Instagram, color: "text-pink-500" },
                        twitter: { icon: Twitter, color: "text-sky-400" },
                        youtube: { icon: Youtube, color: "text-red-500" },
                        whatsapp: { icon: MessageCircle, color: "text-emerald-500" },
                      }).map(([platform, meta]) => (
                        <div key={platform} className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <meta.icon className={`w-4 h-4 ${meta.color} opacity-70 group-focus-within:opacity-100 transition-opacity`} />
                          </div>
                          <input
                            type="text"
                            value={(activeSite.social_links as any)?.[platform] || ""}
                            onChange={(e) => handleSocialChange(platform, e.target.value)}
                            placeholder={`https://${platform}.com/username`}
                            className="w-full glass-input rounded-xl pl-11 pr-4 py-3 text-sm focus:border-indigo-500/50"
                          />
                        </div>
                      ))}
                    </div>
                  </FormSection>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Action Bar */}
      <AnimatePresence>
        {hasChanges && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-0 right-0 z-50 pointer-events-none"
          >
            <div className="max-w-4xl mx-auto px-4">
              <div className="glass-panel p-4 flex items-center justify-between pointer-events-auto border border-indigo-500/30 shadow-[0_0_40px_-10px_rgba(99,102,241,0.2)]">
                <div className="flex items-center gap-4 pl-2">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">Unsaved Changes</h3>
                    <p className="text-white/50 text-xs mt-0.5">Please review and publish your updates.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      fetchData();
                      setHasChanges(false);
                    }}
                    className="px-6 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-all"
                  >
                    Discard
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="group relative px-6 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${activeTheme.gradient} transition-all duration-300 group-hover:scale-105`} />
                    <div className="relative flex items-center gap-2">
                      {saving ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Publishing...
                        </>
                      ) : (
                        <>
                          <Save className="w-4 h-4" />
                          Publish Changes
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Notification positioned at top-center */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100]"
          >
            <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border ${toast.type === "success"
              ? "bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/10"
              : "bg-rose-500/10 border-rose-500/20 shadow-rose-500/10"
              }`}>
              <CheckCircle2 className={`w-5 h-5 ${toast.type === 'success' ? 'text-emerald-400' : 'text-rose-400'}`} />
              <span className={`text-sm font-medium ${toast.type === 'success' ? 'text-emerald-100' : 'text-rose-100'}`}>
                {toast.message}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Reusable Components ─── */

function FormSection({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="glass-panel p-7 pl-8 relative">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 rounded-l-2xl" />
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-white/5 border border-white/5">
          {icon}
        </div>
        <h3 className="text-lg font-['Plus_Jakarta_Sans'] font-semibold text-white/90">{title}</h3>
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea = false,
  icon
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div className="space-y-2 group">
      <label className="block text-[11px] font-bold text-white/40 uppercase tracking-widest pl-1">
        {label}
      </label>
      <div className="relative">
        {icon && !textarea && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30 group-focus-within:text-white/70 transition-colors">
            {icon}
          </div>
        )}
        {textarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rows={4}
            className={`w-full glass-input rounded-xl px-4 py-3 text-sm focus:border-indigo-500/50 resize-none`}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className={`w-full glass-input rounded-xl py-3 text-sm focus:border-indigo-500/50 ${icon ? 'pl-11 pr-4' : 'px-4'}`}
          />
        )}
      </div>
    </div>
  );
}
// Needed outside of component to not re-render
const PROJECT_LABELS: Record<string, { label: string; }> = {
  "pet-shope-one": { label: "Pet Shop One" },
  "pet-shop-two": { label: "Pet Shop Two" },
  "pet-shop-three": { label: "Pet Shop Three" },
};
