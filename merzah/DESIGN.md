# Merzah — Design Contract

Mirrors the real app (`~/projects/personal/rust/merzah/style/main.css` + `src/components`).
`index.html` is a landing page in the app's voice, not a separate brand.

## Tokens (from the app theme, hue 279 + gold 99)

| Role | Value | Use |
|---|---|---|
| Page | `oklch(0.96 0.055 279)` | page ground (`--color-surface`) |
| Card | `#ffffff` | all cards |
| Ink | `oklch(0.15 0.11 279)` | headings, body-strong |
| Muted | `oklch(0.4 0.11 279)` | body copy |
| Primary | `#7c3aed` / hover `#6d28d9` | one action per view (`bg-violet-600`) |
| Gold | `#f0bd25` decor, `#fde68a` on dark | brand star, dark-section accents |
| Pill | `#e8edff` bg, `#211c74` text | badges, labels |
| Night | `#23104a → #31105d` gradient | dark CTA panel, as in `cards/home.rs` hero |

- Borders/rings: `ring-1 ring-indigo-950/10`, violet-200 for outlined buttons.
- Radius: `rounded-2xl` cards, `rounded-xl` buttons/tiles, `rounded-full` pills.
- Shadows: soft violet `shadow-[0_0.75rem_2rem_rgba(31,20,58,0.08)]`, `shadow-lg` on lift cards. No hard offsets.
- Type: system sans everywhere (the app loads no custom fonts); `font-serif` for quote/card titles only, as in `cards/events.rs`.

## Recurring devices (copied from the app)

- Uppercase tracking badges: `text-xs font-bold uppercase tracking-wide text-violet-700` on `bg-violet-50` + ring.
- Secondary button: `border-2 border-violet-200/80 bg-violet-50 text-violet-700` → `hover:bg-violet-100`.
- Arrow glyphs on links/buttons (`→`), `View All →` pattern.
- Dark panel: night gradient + amber accents + mosque-skyline silhouette (from `PrayerHeroCard`).
- Focus: 2px violet outline, offset 3px. Motion honors reduced-motion.

## Rules

- No prayer-time values on the landing (gated behind login + location). Feature may be described, never displayed.
- No custom webfonts, no geometric star page patterns, no brass.
- `education.html` still follows the previous contract; migrate it when touched.
