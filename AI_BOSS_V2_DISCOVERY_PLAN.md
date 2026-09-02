# AI B.O.S.S. V2 — DISCOVERY PLAN (ФИНАЛЬНЫЙ)

**Статус:** Исследование завершено — уточнения учтены  
**Дата:** 2026-09-02  
**Режим:** READ-ONLY — реализация не начата

---

## 1. TECH STACK (УТВЕРЖДЁН)

| Элемент | Решение |
|---------|---------|
| Framework | React 19 |
| Language | TypeScript |
| Bundler | Vite |
| Router | TanStack Router |
| Styling | Tailwind CSS |
| Animation | GSAP (ScrollTrigger, Flip, SplitText) — осмысленно |
| Visual approach | CSS/SVG/DOM-first; WebGL only when justified |

**Обоснование:** Сохраняет continuity с legacy (TanStack Start → TanStack Router, React 19, Vite, Tailwind), минимизирует learning curve и обеспечивает совместимость с существующими паттернами.

---

## 2. EXISTING DIGITAL EXPERIENCES (УТОЧНЕНО)

Подтверждённые проекты:

| Проект | URL | Статус |
|--------|-----|--------|
| Camon Coffee | https://samdreams777-lab.github.io/CoffeeSites/ | Существует (VI/EN) |
| Geum Cha | https://samdreams777-lab.github.io/GeumCha/ | Недоступен (fetch failed) |
| Seoul Korean Cuisine | https://samdreams777-lab.github.io/SEULQR/ | Недоступен (fetch failed) |
| Lerin's Nook Homestay | https://samdreams777-lab.github.io/Lerins-Nook/ | Недоступен (fetch failed) |

**Примечание:** Только Camon Coffee подтверждён как доступный. Geum Cha, Seoul и Lerin's Nook недоступны для изучения через web_extract, но могут работать в браузере (CORS/fetch limitations). Для V2 рекомендуется:

- Сделать скриншоты/скринкасты доступных проектов
- Для недоступных — использовать archive copies или placeholder подход
- Позиционировать как: Selected Digital Experiences / Selected Work / What We Can Build

**Правило:** НЕ называть их paid clients, client success, commercial success, ROI cases.

---

## 3. CUSTOMER JOURNEY MODEL (УТВЕРЖДЕНО)

**7-этапная модель:**

```
DISCOVER → WEBSITE → MENU/SERVICE → CONTACT → VISIT → REVIEW → RETURN
                                                            ↺
                                                         DISCOVER
```

Этап SEARCH (если встречается в legacy) рассматривается как детализация DISCOVER, не как отдельный этап.

**Для V2 используется именно эта 7-этапная модель.**

---

## 4. GSAP (УТВЕРЖДЁН)

GSAP разрешён для:
- Scroll-driven storytelling
- Horizontal journey interaction
- Section transitions
- Reveal animations
- Micro-interactions
- Product/module demonstrations

GSAP НЕ для:
- Декоративной анимации
- Сайта как animation showcase
- Тяжёлых эффектов на mobile

**Обязательно:** `prefers-reduced-motion` fallback

---

## 5. DESIGN TOKEN SYSTEM — ПРЕДЛОЖЕНИЕ

Это **предложение**, не утверждение. Финальная система будет утверждена перед PHASE 2.

### Цветовая система

```css
:root {
  /* Background hierarchy */
  --bg-base: #05060f;        /* Deep dark — base canvas */
  --bg-surface: #0d0f1a;     /* Elevated surfaces */
  --bg-card: #12152a;        /* Cards, containers */
  --bg-glass: rgba(18, 21, 42, 0.6); /* Glassmorphism layer */

  /* Text hierarchy */
  --text-primary: #f0f2f8;   /* Headlines, primary text */
  --text-secondary: #a8b2d8;  /* Body, supporting text */
  --text-muted: #5a6490;     /* Captions, meta */

  /* Accent system — AI B.O.S.S. identity */
  --accent-primary: #6366f1;    /* Indigo — primary actions */
  --accent-secondary: #818cf8;  /* Lighter indigo — hover states */
  --accent-glow: rgba(99, 102, 241, 0.15); /* Glow effects */
  --accent-cyan: #22d3ee;      /* Cyan — highlights, data viz */
  --accent-emerald: #34d399;    /* Emerald — success, positive */

  /* Borders & dividers */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-default: rgba(255, 255, 255, 0.10);
  --border-strong: rgba(255, 255, 255, 0.18);

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 12px 40px rgba(0, 0, 0, 0.6);
  --shadow-glow: 0 0 24px var(--accent-glow);
}
```

### Типографика

```css
:root {
  /* Font scale — editorial, premium */
  --font-display: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Scale — fluid, modular */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.375rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem);
  --text-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);
  --text-3xl: clamp(2rem, 1.5rem + 2.5vw, 3.5rem);
  --text-4xl: clamp(2.5rem, 1.8rem + 3.5vw, 5rem);
  --text-5xl: clamp(3rem, 2rem + 5vw, 7rem);

  /* Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Line heights */
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### Spacing & Layout

```css
:root {
  /* Spacing scale */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;    /* 12px */
  --space-4: 1rem;       /* 16px */
  --space-6: 1.5rem;     /* 24px */
  --space-8: 2rem;       /* 32px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;      /* 128px */
  --space-40: 10rem;     /* 160px */

  /* Container widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1440px;
  --container-3xl: 1536px;

  /* Section spacing */
  --section-padding-y: clamp(4rem, 8vw, 8rem);
}
```

### Borders & Radius

```css
:root {
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* Borders */
  --border-width: 1px;
  --border-width-2: 2px;
}
```

### Motion Tokens

```css
:root {
  /* Durations */
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 400ms;
  --duration-slower: 600ms;
  --duration-slowest: 1000ms;

  /* Easings */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Transitions */
  --transition-fast: var(--duration-fast) var(--ease-out);
  --transition-base: var(--duration-base) var(--ease-out);
  --transition-slow: var(--duration-slow) var(--ease-out);
}
```

### Z-Index Layers

```css
:root {
  --z-base: 0;
  --z-raised: 10;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
}
```

### Interaction States

```css
:root {
  /* Focus */
  --focus-ring: 0 0 0 2px var(--bg-base), 0 0 0 4px var(--accent-primary);

  /* Hover */
  --hover-overlay: rgba(255, 255, 255, 0.04);

  /* Active */
  --active-scale: scale(0.98);

  /* Disabled */
  --disabled-opacity: 0.5;
  --disabled-cursor: not-allowed;
}
```

---

## 6. VISUAL DIRECTION — ПРИНЦИПЫ ОТ РЕФЕРЕНСОВ

### От Linear
- Product-first presentation: показывать интерфейс, а не описание
- Restrained UI: Eyebrow → Title → Subtitle → Supporting
- Typography hierarchy: крупные заголовки, small supporting text
- Product screenshots как UI mockups

### От Stripe
- Modular product presentation: capability = module с визуальным подтверждением
- Business messaging: результат для клиента, а не technical feature list
- Structured content: structured data presentation

### От Vercel
- Typography как визуальный инструмент
- Global navigation: compact, restrained,清晰的 CTA
- Premium minimalism: контраст, spacing, rhythm
- Responsive behavior: mobile не уменьшенный desktop

### От RANGE RAK
- Scroll-driven storytelling для Journey
- Motion communicates: connection, progression, transformation
- Interactive hover states
- Discovery mechanics

### От Stellare Agency
- Process = lifecycle, не 5 статичных карточек
- Scroll interaction превращает процесс в narrative
- Large CTA moments

### От Portal-1 Studio
- Editorial typography: bold statements, unusual layouts
- Large-scale text для impact
- Monochrome/restrained visual systems
- Horizontal scrolling + masked transitions

### AI B.O.S.S. Visual DNA

```
NOT: generic AI startup, generic SaaS dashboard, generic web agency
YES: premium, intelligent, modern, visually memorable
     через typography + composition + purposeful motion + real interfaces
```

**Что НЕ делать:** AI robots, glowing brains, excessive neon, random gradients, meaningless 3D, decorative WebGL, excessive glassmorphism, generic SaaS card grids, giant paragraphs, template-like dashboards, animation everywhere.

---

## 7. URL STRUCTURE — УТВЕРЖДЁННАЯ IA

```
/                        → VI (default)
/en/                     → EN
/solutions/              → VI solutions index
/solutions/cafes/       → VI café solution
/solutions/restaurants/  → VI restaurant solution
/solutions/beauty-spa/   → VI beauty/spa solution
/solutions/dental-medical/ → VI dental/medical solution
/solutions/real-estate/  → VI real estate solution
/solutions/hospitality/  → VI hospitality solution
/systems/               → VI systems overview
/systems/website/       → VI website module
/systems/qr-menu/       → VI QR menu module
/systems/ai-assistant/  → VI AI assistant module
/systems/automation/    → VI automation module
/systems/analytics/      → VI analytics module
/systems/loyalty/       → VI loyalty module
/work/                  → VI work/showcase index
/work/camon-coffee/     → VI Camon Coffee project
/work/geum-cha/         → VI Geum Cha project
/work/seoul-korean-cuisine/ → VI Seoul project
/work/lerins-nook/      → VI Lerin's Nook project
/journey/               → VI customer journey
/knowledge/             → VI knowledge base index
/knowledge/[category]/   → VI category
/knowledge/[category]/[article]/ → VI article
/about/                 → VI about
/contact/               → VI contact
```

### Legacy Routes — SEO Preservation

| Legacy Route | V2 Action | SEO Risk |
|---|---|---|
| `/` | Rewrite as homepage showroom | LOW |
| `/knowledge/` | Rewrite with new IA | LOW |
| `/knowledge/article/$slug` | Rewrite | MEDIUM — slug preservation critical |
| `/knowledge/category/$category` | Rewrite | MEDIUM — category slug preservation |
| `/logo-test` | Archive (not in V2) | NONE |

**Action:** All legacy Knowledge Base slugs must be preserved 1:1 in V2. Create redirect map for any URL changes.

---

## 8. HOMEPAGE SHOWROOM — КАК РЕАЛИЗОВАТЬ

### Структура (секции сверху вниз)

```
1. HERO
   - Live business experience mockup (Café scenario)
   - Website + Mobile + QR Menu + AI + Analytics
   - Primary CTA: "BUILD THIS FOR MY BUSINESS"
   - Secondary CTA: "EXPLORE THE SYSTEM"
   - Fallback: работает без анимации

2. SEE WHAT WE CAN BUILD
   - 4 project cards (Camon, Geum Cha, Seoul, Lerin's)
   - Hover: image scale, depth, tilt, CTA reveal
   - Desktop: horizontal scroll/drag
   - Mobile: native swipe
   - Positioned как: Selected Digital Experiences / What We Can Build

3. WHAT WOULD YOUR BUSINESS LOOK LIKE?
   - Business type selector: Café / Restaurant / Beauty / Dental / Hospitality
   - Dynamic scenario demonstration
   - Business configuration feel

4. FROM SCATTERED TO CONNECTED
   - Before: разрозненные элементы (Google, Facebook, Website, Menu, Zalo, Reviews)
   - Transition: визуальное соединение
   - After: ONE JOURNEY, ONE SYSTEM, ONE DATA FLOW
   - GSAP scroll-driven animation

5. FOLLOW THE CUSTOMER
   - 7-этапный journey: DISCOVER → WEBSITE → MENU → CONTACT → VISIT → REVIEW → RETURN
   - Desktop: horizontal scroll-driven narrative (RANGE RAK style)
   - Mobile: вертикальный sequence с progressive disclosure
   - Циклический: RETURN → DISCOVER

6. ONE SYSTEM. EVERY TOUCHPOINT.
   - Module cards: Website, QR Menu, AI, Google, Analytics, Loyalty, Automation
   - Каждый с UI mockup / preview
   - Hover/click раскрывает детали

7. BUILD. CONNECT. AUTOMATE. MEASURE. IMPROVE.
   - 5-этапный процесс как transformation pipeline lifecycle
   - Stellare-style scroll interaction
   - Не 5 карточек, а continuous narrative

8. DESIGNED TO IMPROVE
   - Outcomes без fabricated numbers
   - discoverability, direct contacts, visits, reviews, returning customers
   - Realistic positioning

9. WHAT DO YOU WANT TO BUILD?
   - Interactive configurator
   - User selects business type + modules
   - Dynamic preview: "YOUR AI B.O.S.S."
   - CTA: "BUILD MY BUSINESS"

10. LET'S BUILD YOURS.
    - Final CTA section
    - Primary: "SHOW ME MY BUSINESS"
    - Secondary: "GET A FREE JOURNEY AUDIT"
```

---

## 9. MOBILE INTERACTIONS — АДАПТАЦИЯ

### Desktop → Mobile Mapping

| Desktop Pattern | Mobile Pattern | Implementation |
|---|---|---|
| Hover states | Tap states | CSS :active + JS tap |
| Horizontal journey | Vertical sequence | Scroll-triggered reveals, stacked cards |
| Horizontal project showcase | Native swipe | CSS scroll-snap |
| Floating UI elements | Contained UI | Collapsible sections |
| Mouse-based navigation | Touch-optimized | Larger touch targets (min 44px) |
| Parallax effects | Simplified fade | Reduced motion for performance |
| Complex hover previews | Tap to expand | Disclosure pattern |

### Critical Mobile Rules
- **NO HORIZONTAL OVERFLOW** — document viewport width enforced
- Touch targets minimum 44x44px
- Vertical scroll как primary navigation
- Collapsible navigation (hamburger menu)
- CTA always discoverable
- Reduced motion support

---

## 10. KNOWLEDGE BASE MIGRATION

### Migration Strategy

1. **Source:** `knowledge_content/*.md` (95 файлов, EN + VI)
2. **Process:** Перенести `scripts/build-knowledge.mjs` и адаптировать
3. **Target:** V2 `src/content/knowledge/` (или эквивалент)
4. **Data layer:** TypeScript types сохранить из `src/lib/knowledge-types.ts`

### Known Issue
VI markdown файлы могут содержать EN body (известная проблема legacy). При миграции:
1. Проверить каждый VI файл на наличие EN контента
2. Исправить перед генерацией content.ts
3. QA после генерации

### Features to Preserve
- Search (language-scoped)
- Categories с articles
- Related articles
- Breadcrumbs
- Reading time
- EN/VI language switch (сохраняет контекст)

---

## 11. SKILLS РЕКОМЕНДАЦИИ

### REQUIRED для всех фаз

**`aiboss-site-ops`**
- Контекст: JourneyField, ShaderBackground, i18n паттерны, Knowledge Base
- Применение: все фазы, особенно миграция KB и Journey анимация
- Результат: сохранение правильных паттернов, предотвращение регрессий

**`frontend-audit-redesign`**
- Контекст: методология аудита без破坏 бизнес-логики
- Применение: PHASE 1, PHASE 11
- Результат: верификация в браузере, выявление проблем на уровне кода

**`impeccable`**
- Контекст: уровень дизайна для V2
- Применение: PHASE 2 (Design System), PHASE 3 (Homepage)
- Результат: production-grade code + визуально выдающийся результат

### REQUIRED для специфических задач

**`canvas-particle-systems` + `canvas-particle-field-qa`**
- Контекст: JourneyField — ключевой визуальный элемент
- Применение: PHASE 3, PHASE 11
- Результат: корректная работа canvas particle анимации

**`webgl-shader-background`**
- Контекст: ShaderBackground — декоративный слой
- Применение: PHASE 3
- Результат: производительный WebGL без избыточных затрат

**`markdown-content-pipeline`**
- Контекст: Knowledge Base построена на Markdown → content pipeline
- Применение: PHASE 8
- Результат: корректная генерация статей

**`ui-ux-pro-max`**
- Контекст: локальная база знаний (84 стиля, 192 палитры, 74 шрифтовые пары, 16 GSAP presets)
- Применение: PHASE 2, PHASE 3
- Результат: правильный выбор визуальной системы

### RECOMMENDED

**`webgl-canvas-visual-verification`** — для JourneyField и ShaderBackground верификации  
**`browser-visual-verification`** — для визуального QA после каждой фазы  
**`karpathy-behavioral`** — предотвращение unnecessary rewrites  
**`systematic-debugging`** — для complex bug diagnosis  

### OPTIONAL

**`vite-react-tailwind-app`** — первичная настройка проекта  
**`i18n-content-source-audit`** — если VI/EN контент смешивается  
**`pre-modification-verification`** — verify filesystem перед созданием файлов  
**`responsive-webapp-ui`** — для vanilla JS/CSS responsive fixes  

### NOT NEEDED

`lovable-qr-menu`, `coffee-site-loading-sync`, `playwright-component-testing`, `llm-wiki`, `arxiv`, `blogwatcher`, `competitor-news-monitor`, `huggingface-hub`, `weights-and-biases`, `llama-cpp`, `mcp-audit`, `email-inbox-triage`, `email`, `box`, `notion`, `obsidian`, `google-workspace`, `product-price-monitor`, `docx`, `pdf`, `powerpoint`, `xlsx`, `maps`, `github-*` (если не нужен gh CLI), `vite-github-pages-deploy`, `browser-e2e-verification`, `shadcn` (если не используется), `brand-guidelines` (используется partial, но не критично)

---

## 12. IMPLEMENTATION PLAN

### PHASE 0 — Discovery (ТЕКУЩИЙ)
✓ Исследование завершено  
✓ Tech stack утверждён  
✓ Journey model утверждена  
✓ URL IA утверждена  
✓ Design tokens предложены  
✓ Skills определены  

**Ожидание:** Разрешение человека на начало PHASE 1

---

### PHASE 1 — Foundation (8–12 часов)
**Цель:** Создать проектную инфраструктуру V2

**Deliverables:**
- Vite + React 19 + TypeScript + TanStack Router + Tailwind CSS setup
- Design tokens (CSS variables)
- Базовый роутинг: `/`, `/en/`, `/solutions/`, `/work/`, `/journey/`, `/knowledge/`, `/about/`, `/contact/`
- i18n система: cookie + Accept-Language, EN/VI, SSR-safe hydration
- Global layout: Header, Footer, LanguageSwitcher
- SEO база: metadata, canonical, hreflang

**Skills:** vite-react-tailwind-app, aiboss-site-ops, frontend-audit-redesign  
**Dependencies:** Tech stack decision (УТВЕРЖДЁН)  
**Risks:** Low — стек известен и совместим с legacy паттернами  

---

### PHASE 2 — Design System (12–16 часов)
**Цель:** Построить визуальную систему

**Deliverables:**
- CSS variables (colors, typography, spacing, motion, z-index)
- Базовые UI components: Button, Card, Container, SectionHeading, Badge
- Layout primitives: responsive grid, section spacing
- Motion primitives: transition presets, reduced-motion support
- Dark theme (primary), light theme (optional)

**Skills:** impeccable (init + extract), ui-ux-pro-max, frontend-audit-redesign  
**Dependencies:** PHASE 1 завершён  
**Risks:** Medium — timeboxed; если затягивается, перейти к PHASE 3 с базовыми токенами  

---

### PHASE 3 — Homepage Showroom (24–40 часов)
**Цель:** Построить homepage как интерактивный showroom

**Deliverables:**
- Hero: live Café business experience mockup
- See What We Can Build: 4 project cards
- Business Type Selector: 5 categories
- From Scattered to Connected: before/after transition
- Follow the Customer: 7-step journey (desktop horizontal, mobile vertical)
- ONE SYSTEM modules: 7 module cards с UI previews
- Process lifecycle: 5-этапный pipeline
- Outcomes: designed to improve
- Build Your Business: configuration flow
- Final CTA

**Skills:** impeccable (polish, animate, overdrive), canvas-particle-systems, webgl-shader-background, ui-ux-pro-max (GSAP presets), webgl-canvas-visual-verification, browser-visual-verification  
**Dependencies:** PHASE 2 завершён  
**Risks:** High — Journey animation самая сложная часть; GSAP ScrollTrigger для desktop horizontal; mobile vertical fallback  

---

### PHASE 4 — Work / Digital Experiences (8–12 часов)
**Цель:** Страницы проектов

**Deliverables:**
- `/work/` — grid/showcase всех 4 проектов
- `/work/camon-coffee/`, `/work/geum-cha/`, `/work/seoul-korean-cuisine/`, `/work/lerins-nook/`
- Individual project pages: Hero, Context, Experience, Modules, Customer Journey, Visual Demo

**Skills:** impeccable (experience mode), frontend-audit-redesign  
**Dependencies:** PHASE 3 завершён  
**Risks:** Low — template-based pages  

---

### PHASE 5 — Solutions (6–10 часов)
**Цель:** Business type pages

**Deliverables:**
- `/solutions/` — overview всех типов
- `/solutions/cafes/`, `/solutions/restaurants/`, `/solutions/beauty-spa/`, `/solutions/dental-medical/`, `/solutions/real-estate/`, `/solutions/hospitality/`
- Dynamic content для каждого типа бизнеса

**Skills:** impeccable (persuade mode), frontend-audit-redesign  
**Dependencies:** PHASE 3 завершён  
**Risks:** Low  

---

### PHASE 6 — Systems (6–10 часов)
**Цель:** Product module pages

**Deliverables:**
- `/systems/` — overview всех modules
- `/systems/website/`, `/systems/qr-menu/`, `/systems/ai-assistant/`, `/systems/automation/`, `/systems/analytics/`, `/systems/loyalty/`
- UI mockups для каждого module

**Skills:** impeccable, frontend-audit-redesign  
**Dependencies:** PHASE 3 завершён  
**Risks:** Low  

---

### PHASE 7 — Journey (4–8 часов)
**Цель:** Выделенная страница Journey

**Deliverables:**
- `/journey/` — полноэкранная scroll-driven Journey experience
- 7 этапов как циклическая narrative animation

**Skills:** impeccable (animate), canvas-particle-systems, ui-ux-pro-max (GSAP ScrollTrigger)  
**Dependencies:** PHASE 3 завершён  
**Risks:** Medium — mobile vertical adaptation может потребовать simplified motion  

---

### PHASE 8 — Knowledge Base (16–24 часа)
**Цель:** Полная миграция KB

**Deliverables:**
- `/knowledge/` — main index с categories, search
- `/knowledge/[category]/` — filtered grid
- `/knowledge/[article]/` — article page
- Markdown → content pipeline (перенос build-knowledge.mjs)
- 95 статей (EN + VI)
- SEO: metadata, OG, canonical, structured data
- VI/EN language switch (сохраняет контекст)

**Skills:** markdown-content-pipeline, frontend-audit-redesign, i18n-content-source-audit  
**Dependencies:** PHASE 1 завершён  
**Risks:** Medium — VI body может содержать EN content (известная проблема); проверка каждого VI файла перед генерацией  

---

### PHASE 9 — About / Contact (4–6 часов)
**Цель:** Завершающие страницы

**Deliverables:**
- `/about/`
- `/contact/`

**Skills:** impeccable, frontend-audit-redesign  
**Dependencies:** PHASE 3 завершён  
**Risks:** Low  

---

### PHASE 10 — Responsive / Accessibility / Performance (8–12 часов)
**Цель:** Корректная работа на всех устройствах

**Deliverables:**
- Mobile-first responsive для всех страниц
- Mobile interaction patterns
- Keyboard navigation + focus states
- Semantic HTML + ARIA
- Contrast compliance
- Reduced motion support
- Performance: lazy loading, code splitting, image optimization

**Skills:** frontend-audit-redesign, impeccable (audit, adapt), responsive-webapp-ui  
**Dependencies:** PHASE 3–9 завершены  
**Risks:** Medium — mobile Journey animation самая сложная  

---

### PHASE 11 — QA / Final Audit (8–12 часов)
**Цель:** Верификация всего сайта

**Deliverables:**
- Browser testing: desktop, tablet, mobile
- EN/VI toggle проверка
- SEO audit
- Accessibility audit
- Performance audit
- Knowledge Base: все статьи читаемы, search работает
- No console errors, no broken assets, no dead links

**Skills:** frontend-audit-redesign, browser-visual-verification, webgl-canvas-visual-verification, impeccable (audit)  
**Dependencies:** PHASE 1–10 завершены  
**Risks:** Low — если bugs найдены, исправить в той же фазе  

---

## 13. LEGACY ROUTES — СОПОСТАВЛЕНИЕ

| Legacy Route | V2 Route | Action | Notes |
|---|---|---|---|
| `/` | `/` (showroom) | REWORK | Homepage полностью переделывается |
| `/knowledge/` | `/knowledge/` | REWORK | New IA, slug preservation critical |
| `/knowledge/article/:slug` | `/knowledge/:category/:slug` | REWORK | Slug preservation critical for SEO |
| `/knowledge/category/:category` | `/knowledge/:category/` | REWORK | Category slug preservation critical |
| `/logo-test` | — | ARCHIVE | Not needed in V2 |

**Action:** Create redirect map for any URL changes. All Knowledge Base slugs must be preserved 1:1.

---

## 14. TECHNICAL RISKS

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Journey animation: horizontal desktop + vertical mobile — двойная реализация | High | High | Спроектировать abstraction layer для motion; mobile-first |
| VI markdown содержит EN body | Medium | Medium | Аудит VI файлов до генерации content.ts |
| GSAP избыточен для простых задач | Medium | Medium | CSS-first для простых transitions; GSAP только для scroll-driven |
| Business showcase: недоступность проектов (Geum Cha, Seoul, Lerin's) | Medium | Low | Сделать скриншоты/архивы; placeholder approach |
| i18n hydration mismatch | Low | High | Использовать legacy паттерн: document.documentElement.lang |
| SEO: изменение URL ломает rankings | Medium | High | Preserve slugs; create redirect map |
| Mobile Journey animation слишком тяжёлая | High | Medium | Simplified motion approach; reduced motion fallback |

---

## 15. REMAINING DECISIONS (NON-BLOCKING)

Следующие решения могут быть приняты позже, но требуют внимания:

1. **Light theme** — делать ли light theme или только dark?
2. **Video content** — будут ли видео в проектах? Если да, нужен video hosting strategy
3. **Contact form** — какой backend для формы контакта? (Formspree, EmailJS, custom)
4. **Analytics** — какой analytics tool? (Plausible, Google Analytics, custom)
5. **Hosting/Deployment** — какой deployment target? (Vercel, Cloudflare, другой?)

Эти решения не блокируют PHASE 1, но должны быть приняты до PHASE 9.

---

## 16. DEFINITION OF READY FOR PHASE 1

PHASE 1 может начаться когда:

- ✓ Tech stack утверждён (УТВЕРЖДЁН)
- ✓ Design tokens предложены (ПРЕДЛОЖЕНЫ)
- ✓ URL IA утверждена (УТВЕРЖДЕНА)
- ✓ Journey model утверждена (УТВЕРЖДЕНА)
- ✓ Skills определены (ОПРЕДЕЛЕНЫ)
- ✓ Legacy audit завершён (ЗАВЕРШЁН)
- ✓ Non-blocking решения зафиксированы (ЗАФИКСИРОВАНЫ)

**ВСЁ ГОТОВО. PHASE 1 может начаться.**

---

## 17. ФИНАЛЬНОЕ РЕШЕНИЕ

### READY FOR IMPLEMENTATION

Все вопросы из первоначального discovery report уточнены и answered:

1. ✓ Tech stack — УТВЕРЖДЁН (React 19, TypeScript, Vite, TanStack Router, Tailwind CSS, GSAP)
2. ✓ Digital experiences — УТОЧНЕНЫ (Camon Coffee подтверждён, остальные 3 недоступны через fetch но существуют)
3. ✓ Journey model — УТВЕРЖДЕНА (7-этапная модель)
4. ✓ GSAP — УТВЕРЖДЁН (осмысленное использование)
5. ✓ Design tokens — ПРЕДЛОЖЕНЫ (ожидают утверждения перед PHASE 2)
6. ✓ URL IA — УТВЕРЖДЕНА (согласована с legacy SEO requirements)

**Discovery завершён. Ожидаю отдельного разрешения на начало PHASE 1.**

---

*Отчёт обновлён: 2026-09-02*  
*Режим: READ-ONLY — реализация не начата*  
*Следующий шаг: PHASE 1 — Foundation (ожидание разрешения)*
