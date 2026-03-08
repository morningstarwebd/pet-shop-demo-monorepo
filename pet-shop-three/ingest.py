"""
ingest.py — WebsiteReplicator v3.0
Upgraded: Auto-generates SKILL.md sections, detects AI/payment/animation/backend libs,
skips already-indexed projects, extracts design tokens.
"""

import os
import zipfile
import json
import re
from pathlib import Path

SOURCE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
RESOURCES_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "resources"))
SKILL_MD = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "SKILL.md"))
os.makedirs(RESOURCES_DIR, exist_ok=True)
OUTPUT_FILE = os.path.join(RESOURCES_DIR, "module_index.json")

AI_LIBS = ["genkit", "openai", "anthropic", "groq", "gemini", "langchain", "replicate", "cohere"]
PAYMENT_LIBS = ["razorpay", "stripe", "cashfree", "paytm", "phonepe", "qrcode"]
ANIMATION_LIBS = ["framer-motion", "gsap", "lenis", "three", "@react-three", "animejs"]
BACKEND_LIBS = ["supabase", "firebase", "prisma", "drizzle", "mongodb", "redis", "trpc"]
CMS_LIBS = ["sanity", "contentful", "payload", "strapi", "next-mdx-remote", "mdx"]
EMAIL_LIBS = ["resend", "nodemailer", "sendgrid", "@react-email"]
MAP_LIBS = ["maplibre", "mapbox", "leaflet", "google-maps"]
MONITORING_LIBS = ["sentry", "datadog", "posthog", "mixpanel"]

NUMBERED = "①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳"


def detect_design_tokens(css: str) -> dict:
    colors = list(set(re.findall(r'#[0-9a-fA-F]{3,8}', css)))[:10]
    fonts = list(set(re.findall(r'font-family:\s*[\'"]?([^\'";,\n]+)', css)))[:5]
    return {"colors": colors, "fonts": fonts}


def peek_zip(filepath: str) -> dict:
    info = {
        "filename": os.path.basename(filepath),
        "project_name": Path(filepath).stem.replace("-main","").replace("_main","").replace("-master",""),
        "stack": [], "has_package_json": False, "has_requirements_txt": False,
        "is_nextjs": False, "is_vite": False, "is_react": False, "is_python": False,
        "app_router": False, "pages_router": False,
        "components": [], "features": [], "routes": [],
        "ai_libs": [], "payment_libs": [], "animation_libs": [], "backend_libs": [],
        "cms_libs": [], "email_libs": [], "map_libs": [], "monitoring_libs": [],
        "has_whatsapp": False, "has_typescript": False,
        "design_tokens": {}, "all_deps": []
    }
    try:
        with zipfile.ZipFile(filepath, 'r') as z:
            file_list = z.namelist()
            for f in file_list:
                fname = os.path.basename(f)
                norm_f = f.lower()
                if fname.endswith((".ts", ".tsx")): info["has_typescript"] = True
                if fname == "package.json" and f.count("/") <= 2:
                    info["has_package_json"] = True
                    try:
                        pkg = json.loads(z.read(f).decode("utf-8"))
                        deps = {**pkg.get("dependencies",{}), **pkg.get("devDependencies",{})}
                        info["all_deps"] = list(deps.keys())
                        if "next" in deps: info["is_nextjs"] = True; info["stack"].append(f"nextjs")
                        if "vite" in deps: info["is_vite"] = True; info["stack"].append("vite")
                        if "react" in deps: info["is_react"] = True; info["stack"].append("react")
                        if "tailwindcss" in deps or "@tailwindcss/postcss" in deps:
                            v = deps.get("tailwindcss", deps.get("@tailwindcss/postcss",""))
                            info["stack"].append("tailwindv4" if "4" in str(v)[:3] else "tailwind")
                        if "typescript" in deps: info["stack"].append("typescript")
                        for lib in AI_LIBS:
                            if any(lib in d.lower() for d in deps): info["ai_libs"].append(lib); info["stack"].append(lib) if lib not in info["stack"] else None
                        for lib in PAYMENT_LIBS:
                            if any(lib in d.lower() for d in deps): info["payment_libs"].append(lib)
                        for lib in ANIMATION_LIBS:
                            if any(lib in d.lower() for d in deps): info["animation_libs"].append(lib)
                        for lib in BACKEND_LIBS:
                            if any(lib in d.lower() for d in deps): info["backend_libs"].append(lib); info["stack"].append(lib) if lib not in info["stack"] else None
                        for lib in CMS_LIBS:
                            if any(lib in d.lower() for d in deps): info["cms_libs"].append(lib)
                        for lib in EMAIL_LIBS:
                            if any(lib in d.lower() for d in deps): info["email_libs"].append(lib)
                        for lib in MAP_LIBS:
                            if any(lib in d.lower() for d in deps): info["map_libs"].append(lib)
                        for lib in MONITORING_LIBS:
                            if any(lib in d.lower() for d in deps): info["monitoring_libs"].append(lib)
                    except Exception: pass
                elif fname in ("requirements.txt","pyproject.toml","Pipfile"):
                    info["has_requirements_txt"] = True; info["is_python"] = True
                    if "python" not in info["stack"]: info["stack"].append("python")
                if "/app/" in norm_f and ("page.tsx" in norm_f or "layout.tsx" in norm_f): info["app_router"] = True
                elif "/pages/" in norm_f and "/api/" not in norm_f: info["pages_router"] = True
                if "/components/" in norm_f and fname.endswith((".tsx",".jsx",".ts",".js",".vue",".svelte")):
                    if fname not in info["components"]: info["components"].append(fname)
                if "/features/" in norm_f and fname.endswith((".tsx",".jsx",".ts",".js")):
                    if fname not in info["features"]: info["features"].append(fname)
                if "whatsapp" in norm_f or "wa.me" in norm_f: info["has_whatsapp"] = True
            css_files = [f for f in file_list if f.endswith("globals.css")]
            if css_files:
                try: info["design_tokens"] = detect_design_tokens(z.read(css_files[0]).decode("utf-8"))
                except: pass
    except zipfile.BadZipFile: info["error"] = "Bad zip file"
    except Exception as e: info["error"] = str(e)
    info["components"] = sorted(list(set(info["components"])))[:100]
    info["features"] = sorted(list(set(info["features"])))[:100]
    return info


def generate_skill_section(meta: dict, idx: int) -> str:
    name = meta.get("project_name", meta["filename"])
    stack_str = " + ".join(meta.get("stack", []))
    num = NUMBERED[idx-1] if 0 < idx <= len(NUMBERED) else f"({idx})"
    comps = ", ".join(f"`{c.replace('.tsx','').replace('.ts','')}`" for c in meta["components"][:12])
    special = []
    if meta.get("ai_libs"): special.append(f"AI({','.join(meta['ai_libs'])})")
    if meta.get("payment_libs"): special.append(f"Payments({','.join(meta['payment_libs'])})")
    if meta.get("has_whatsapp"): special.append("WhatsApp")
    if meta.get("map_libs"): special.append(f"Maps({','.join(meta['map_libs'])})")
    if meta.get("cms_libs"): special.append(f"CMS({','.join(meta['cms_libs'])})")
    if meta.get("email_libs"): special.append(f"Email({','.join(meta['email_libs'])})")
    return f"""
### {num} {name} ({stack_str})
**Domain**: Auto-ingested — update description manually
**Stack**: {stack_str}
**Key modules**: {comps or 'See module_index.json'}
**Special**: {', '.join(special) or 'Standard web app'}
**Backend**: {', '.join(meta['backend_libs']) or 'None'} | **Animations**: {', '.join(meta['animation_libs']) or 'None'}
**Components detected**: {len(meta['components'])} | **TypeScript**: {meta['has_typescript']}
**Auto-ingested**: Yes — enrich this section with domain description and key features
"""


def main():
    print(f"🔍 Scanning: {SOURCE_DIR}")
    zip_files = [f for f in os.listdir(SOURCE_DIR) if f.endswith('.zip')]
    print(f"📦 Found {len(zip_files)} zip files.")
    existing = json.load(open(OUTPUT_FILE)) if os.path.exists(OUTPUT_FILE) else []
    existing_filenames = {e["filename"] for e in existing}
    new_entries, new_sections = [], []
    for zfile in zip_files:
        if zfile in existing_filenames:
            print(f"  ⏭️  Already indexed: {zfile}"); continue
        print(f"  🔎 Analyzing: {zfile}")
        meta = peek_zip(os.path.join(SOURCE_DIR, zfile))
        new_entries.append(meta)
        idx = len(existing) + len(new_entries)
        new_sections.append(generate_skill_section(meta, idx))
        print(f"     Stack: {meta['stack']} | Components: {len(meta['components'])} | AI: {meta['ai_libs']}")
    all_entries = existing + new_entries
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(all_entries, f, indent=2)
    print(f"\n✅ module_index.json — Total: {len(all_entries)} projects")
    if new_sections and os.path.exists(SKILL_MD):
        with open(SKILL_MD, 'a', encoding='utf-8') as f:
            f.write("\n\n## AUTO-INGESTED PROJECTS\n"); [f.write(s) for s in new_sections]
        print(f"✅ SKILL.md — {len(new_sections)} new sections added")
    elif not new_sections:
        print("ℹ️  No new projects found.")
    print(f"\n🎉 Done! {len(new_entries)} new projects ingested.")

if __name__ == "__main__":
    main()
