# Project Page Template (FamTree pattern)

Template untuk tambah page projek khas + demo wrapper dalam website CGTechVibes.
Based on the live FamTree implementation:

- `https://cgtechvibes01.github.io/cgweb/projects/famtree` — detail page
- `https://cgtechvibes01.github.io/cgweb/demo/famtree` — demo wrapper
- Card "View Project" pada `/projects` — link ke detail page

## Struktur Fail

| Fail | Fungsi |
|------|--------|
| `project-detail/page.tsx` | Detail page `/projects/<slug>` — screenshot, description, features, butang Demo + Order Now |
| `project-demo/page.tsx` | Demo wrapper `/demo/<slug>` — iframe app full-screen + floating Back to Home & Order Now |
| `project-demo/README.md` | Panduan penuh |

## Cara Guna (3 langkah)

1. **Tambah entry dalam `src/lib/projects.ts`** — set `href: "/projects/<slug>"` untuk projek tu. Ini buat card papar "View Project" dan klikable.
2. **Copy `project-detail/page.tsx` → `src/app/projects/<slug>/page.tsx`** dan isi placeholder.
3. **Copy `project-demo/page.tsx` → `src/app/demo/<slug>/page.tsx`** dan isi placeholder.

## Placeholder

Ganti semua `__PLACEHOLDER__` (guna search/replace seluruh fail):
- `__PROJECT_TITLE__` — e.g. `RestoMe`
- `__SLUG__` — e.g. `restome`
- `__TAGLINE__` — satu baris penerangan ringkas
- `__META_DESCRIPTION__` — description untuk SEO
- `__DEMO_URL__` — URL app (GAS `/exec` atau lain-lain)
- `__ORDER_MESSAGE__` — mesej WhatsApp auto
- `__ABOUT_HEADING__` — tajuk bahagian "About this project"
- `__DESCRIPTION__` — perenggan "About this project"
- `__FEATURE_N_TITLE__` / `__FEATURE_N_DESCRIPTION__` — array features

## Nota PWA

- Demo wrapper guna `fixed inset-0 z-[60]` supaya tutup TopNav/BottomNav.
- Butang floating `z-[70]`.
- GAS apps mungkin block X-Frame-Options dalam iframe. Jika iframe kosong, tukar butang Demo supaya buka `<DEMO_URL>` dalam tab baru.
