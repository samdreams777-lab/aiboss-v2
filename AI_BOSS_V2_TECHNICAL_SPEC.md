# AI B.O.S.S. 2.0 — Техническое задание на разработку нового сайта

**Статус:** Master Specification / Implementation Blueprint  
**Версия:** 2.0  
**Язык документа:** RU  
**Legacy project:** `D:\CODEX\Workspace\aiboss-digital-site`  
**New project:** `D:\CODEX\Workspace\aiboss_new_site`

---

# 1. ЦЕЛЬ ПРОЕКТА

Создать новую версию сайта AI B.O.S.S. **с нуля**, используя существующий сайт только как источник контента, структуры знаний, существующих маршрутов, assets и бизнес-логики.

Новый сайт не должен выглядеть как косметический редизайн текущего проекта.

Главная задача V2:

> Посетитель должен не просто понять, что такое AI B.O.S.S., а увидеть результат и подумать: **«Я хочу такое для своего бизнеса».**

Текущий сайт объясняет концепцию. Новый сайт должен **демонстрировать продукт**.

---

# 2. ИСХОДНЫЕ ПРОЕКТЫ

## 2.1 Legacy

Исходный проект находится здесь:

```text
D:\CODEX\Workspace\aiboss-digital-site
```

Legacy-проект **НЕ изменять**.

Он используется для:

- аудита;
- извлечения существующего контента;
- анализа маршрутов;
- анализа Knowledge Base;
- анализа локализации;
- повторного использования полезных assets;
- проверки текущей бизнес-логики;
- сохранения SEO-ценного материала.

## 2.2 Новый проект

Вся разработка V2 выполняется здесь:

```text
D:\CODEX\Workspace\aiboss_new_site
```

Нельзя постепенно превращать legacy-проект в V2.

V2 должен иметь собственную архитектуру.

---

# 3. КРИТИЧЕСКИЙ ПРИНЦИП

## Не делать:

> «Возьми старый сайт и сделай его красивее».

## Делать:

> «Изучи старый сайт, сохрани его полезное содержание и создай новый цифровой продуктовый опыт AI B.O.S.S. с нуля».

Legacy = **source of truth для существующего контента**.

V2 = **новая архитектура + новый UX + новая визуальная система + новая презентация продукта**.

---

# 4. ЧТО НЕЛЬЗЯ ПОТЕРЯТЬ

Обязательно сохранить и перенести в V2 после аудита:

- Vietnamese / English;
- Knowledge Base;
- статьи;
- категории статей;
- SEO-ценный контент;
- customer journey;
- capabilities;
- business categories;
- process;
- существующие проекты;
- контактную информацию;
- полезные изображения;
- существующие SEO metadata;
- релевантные URL/slugs;
- внутренние ссылки;
- полезные элементы текущей бизнес-логики.

**Нельзя сокращать сайт до одной страницы.**

Homepage должна стать сильным интерактивным showroom, но AI B.O.S.S. остаётся полноценным многостраничным двуязычным сайтом.

---

# 5. ТЕКУЩАЯ КОНЦЕПЦИЯ AI B.O.S.S.

AI B.O.S.S. — это система цифровой трансформации локального бизнеса, соединяющая отдельные digital touchpoints в единую измеримую customer journey.

Главная идея:

> **YOUR BUSINESS. CONNECTED.**

Ключевая модель:

```text
DISCOVER
   ↓
WEBSITE
   ↓
MENU / SERVICE
   ↓
CONTACT
   ↓
VISIT
   ↓
REVIEW
   ↓
RETURN
   ↺
DISCOVER
```

Важно: это не просто линейная схема. Это **замкнутый customer loop**.

---

# 6. ПРОБЛЕМА, КОТОРУЮ ДОЛЖЕН ПОКАЗЫВАТЬ САЙТ

Типичный локальный бизнес имеет разрозненные touchpoints:

- Google / Maps;
- Facebook / Social;
- Website;
- QR menu;
- Zalo;
- Hotline;
- Reviews;
- ручную коммуникацию;
- повторных клиентов без единой системы данных.

Проблема не в отсутствии отдельных инструментов.

Проблема в отсутствии **связи между ними**.

AI B.O.S.S. позиционируется как connection layer между этими точками.

---

# 7. ГЛАВНОЕ ИЗМЕНЕНИЕ V1 → V2

## V1

```text
Explain
→ Problem
→ Solution
→ Capabilities
→ Process
→ Outcomes
→ CTA
```

## V2

```text
Show
→ Demonstrate
→ Let visitor explore
→ Explain
→ Personalize by business type
→ Build desire
→ Convert
```

Сайт должен сначала дать **визуальное доказательство**, а потом объяснение.

---

# 8. HOMEPAGE — ГЛАВНЫЙ SHOWROOM

Homepage не должна быть перегруженной корпоративной презентацией.

Она должна ощущаться как интерактивная демонстрация продукта.

Рекомендуемая последовательность.

---

## 8.1 HERO

### Цель

За первые секунды объяснить не технологию, а результат для бизнеса.

Главный вопрос посетителя:

> «Что я получу?»

Визуально hero должен показывать connected business experience:

- Website;
- QR Menu;
- AI Assistant;
- Google / Maps;
- Contact;
- Analytics;
- Customer Journey.

Не использовать типичный generic AI hero с роботом, glowing blob и абстрактным искусственным интеллектом.

### Основной CTA

```text
BUILD THIS FOR MY BUSINESS
```

### Вторичный CTA

```text
EXPLORE THE SYSTEM
```

Hero должен работать и без анимации.

---

# 9. SECTION — SEE WHAT WE CAN BUILD

Первое крупное доказательство — реальные созданные digital experiences.

Использовать существующие проекты:

- Camon Coffee;
- Geum Cha;
- Seoul Korean Cuisine;
- Lerin's Nook.

Позиционировать их как:

- Selected Digital Experiences;
- Selected Prototypes;
- What We Can Build.

## КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО

Не называть эти проекты:

- paid client case studies;
- client success stories;
- proven ROI;
- revenue growth;
- customer growth;
- fabricated results.

Если коммерческие результаты не подтверждены, никаких цифр не придумывать.

---

# 10. PROJECT CARD / PROJECT PAGE

Каждый проект должен демонстрировать:

- тип бизнеса;
- задачу;
- созданный digital experience;
- использованные модули;
- screenshots / video;
- customer journey;
- чему этот пример соответствует в AI B.O.S.S.

Структура:

```text
Hero
→ Context
→ Experience
→ Modules
→ Customer Journey
→ Visual Demonstration
→ Related Systems
→ CTA
```

---

# 11. WHAT WOULD YOUR BUSINESS LOOK LIKE?

Это один из центральных блоков сайта.

Пользователь выбирает бизнес:

- Café;
- Restaurant;
- Beauty / Spa;
- Dental / Medical;
- Real Estate;
- Hospitality;
- Retail — если контент и система позволяют.

После выбора меняется демонстрация системы.

Пример Café:

```text
Website
+ Google / Maps
+ QR Menu
+ Contact / Zalo
+ AI Assistant
+ Reviews
+ Loyalty
+ Analytics
```

Пример Beauty / Spa:

```text
Website
+ Services
+ Booking / Contact
+ AI Assistant
+ Reminders
+ Reviews
+ Loyalty
```

Это должно ощущаться как **business configuration**, а не как фильтр портфолио.

---

# 12. FROM SCATTERED TO CONNECTED

Нужен сильный визуальный переход.

## BEFORE

```text
Google
Facebook
Website
Menu
Zalo
Reviews
Manual Work
```

Элементы выглядят разрозненно.

## TRANSITION

Они визуально соединяются.

## AFTER

```text
ONE CUSTOMER JOURNEY
ONE CONNECTED SYSTEM
ONE DATA FLOW
ONE AUTOMATION LAYER
ONE RESULTS VIEW
```

Анимация должна объяснять смысл перехода.

Не делать декоративную анимацию ради эффекта.

---

# 13. 7-STEP CUSTOMER JOURNEY

Основной интерактивный narrative:

1. DISCOVER
2. WEBSITE
3. MENU / SERVICE
4. CONTACT
5. VISIT
6. REVIEW
7. RETURN

После RETURN цикл возвращается к DISCOVER.

Для каждого шага показать:

- intent клиента;
- touchpoint;
- роль AI B.O.S.S.;
- возможные данные;
- возможную automation;
- measurable outcome.

На desktop допустим scroll-driven narrative / horizontal interaction.

На mobile использовать вертикальную последовательность.

Нельзя заставлять мобильного пользователя горизонтально прокручивать весь документ.

---

# 14. ONE SYSTEM, EVERY TOUCHPOINT

Capabilities должны быть представлены не как длинный список услуг, а как **product modules**.

Минимальный набор:

- Website;
- QR Menu / Service Board;
- Google / Maps presence;
- AI Assistant;
- Contact & Messaging;
- Automation;
- Analytics;
- Loyalty / Retention;
- Reviews.

Каждый модуль должен иметь хотя бы один визуальный объект:

- UI preview;
- mini-demo;
- screenshot;
- interaction;
- system diagram.

Карточки с одним заголовком и абзацем использовать только там, где это действительно необходимо.

---

# 15. PROCESS

Существующий процесс сохранить:

```text
UNDERSTAND
→ CONNECT
→ AUTOMATE
→ MEASURE
→ IMPROVE
```

В V2 это должно стать визуальным lifecycle, а не пятью обычными карточками.

---

# 16. KNOWLEDGE BASE

Knowledge Base — обязательная часть продукта.

Она не удаляется и не прячется в footer.

Она является отдельным информационным слоем AI B.O.S.S.

Цели:

- SEO;
- экспертность;
- education;
- organic acquisition;
- trust;
- long-tail search;
- поддержка решений пользователя.

## Обязательные возможности

- Knowledge Base index;
- categories;
- article pages;
- tags при наличии в legacy;
- related articles;
- breadcrumbs;
- search, если он уже предусмотрен или оправдан архитектурой;
- VI/EN;
- SEO metadata;
- Open Graph;
- canonical;
- internal links;
- mobile reading experience.

## Article model

Рекомендуемая структура:

```text
id
slug
locale
title
excerpt
body
category
tags
coverImage
author
publishedAt
updatedAt
seoTitle
seoDescription
relatedArticles
```

Не дублировать статьи в компонентах.

Контент должен храниться отдельно от UI.

---

# 17. KNOWLEDGE BASE — UX

Article page должна быть максимально читаемой.

Приоритет:

```text
Typography
Readability
Navigation
Content
```

а не:

```text
Animation
Decoration
Visual effects
```

Нельзя превращать Knowledge Base в flashy landing page.

---

# 18. SOLUTIONS

Раздел Solutions должен отвечать на вопрос:

> «Что AI B.O.S.S. сделает именно для моего типа бизнеса?»

Минимальные категории:

```text
/solutions/cafes/
/solutions/restaurants/
/solutions/beauty-spa/
/solutions/dental-medical/
/solutions/real-estate/
/solutions/hospitality/
```

Retail — добавить, если он подтверждён контентом и бизнес-логикой.

Каждая страница:

```text
Hero
→ Business Problem
→ Connected System
→ Relevant Modules
→ Customer Journey
→ Example
→ Measurement
→ CTA
```

Не копировать одну страницу шесть раз с заменой заголовка.

---

# 19. SYSTEMS

Раздел Systems объясняет отдельные product modules.

Минимальные страницы:

```text
/systems/website/
/systems/qr-menu/
/systems/ai-assistant/
/systems/automation/
/systems/analytics/
/systems/loyalty/
```

Каждая страница должна показывать связь модуля с общей системой.

Структура:

```text
Hero
→ Problem
→ Product UI
→ How It Connects
→ Example
→ What Can Be Measured
→ Related Modules
→ CTA
```

---

# 20. JOURNEY PAGE

Отдельная глубокая страница:

```text
/journey/
```

Она должна объяснять AI B.O.S.S. через customer journey.

Это место для пользователя, который после homepage хочет разобраться глубже.

---

# 21. ABOUT

Оставить отдельную страницу, если она есть или необходима.

Она должна объяснять:

- кто стоит за AI B.O.S.S.;
- подход;
- почему local businesses;
- философию продукта;
- принципы работы.

Не делать искусственное агентство с придуманной историей, командой или наградами.

---

# 22. CONTACT

Отдельная страница:

```text
/contact/
```

CTA должен быть максимально понятным.

Основной action:

```text
BUILD THIS FOR MY BUSINESS
```

или:

```text
START WITH A CUSTOMER-JOURNEY AUDIT
```

Не создавать фальшивую автоматическую цену, если реальной pricing logic нет.

---

# 23. РЕКОМЕНДУЕМАЯ INFORMATION ARCHITECTURE

Финальная структура должна быть согласована с результатом legacy audit, но базовая модель:

```text
/
/en/

/solutions/
/en/solutions/

/solutions/cafes/
/en/solutions/cafes/

/solutions/restaurants/
/en/solutions/restaurants/

/solutions/beauty-spa/
/en/solutions/beauty-spa/

/solutions/dental-medical/
/en/solutions/dental-medical/

/solutions/real-estate/
/en/solutions/real-estate/

/solutions/hospitality/
/en/solutions/hospitality/

/systems/
/en/systems/

/systems/website/
/systems/qr-menu/
/systems/ai-assistant/
/systems/automation/
/systems/analytics/
/systems/loyalty/

/work/
/en/work/

/work/camon-coffee/
/work/geum-cha/
/work/seoul-korean-cuisine/
/work/lerins-nook/

/journey/
/en/journey/

/knowledge/
/en/knowledge/

/about/
/en/about/

/contact/
/en/contact/
```

**Важно:** Hermes обязан сначала сравнить эту модель с реальными legacy routes и не ломать существующие SEO-valuable URLs без migration/redirect plan.

---

# 24. BILINGUAL ARCHITECTURE

Языки:

- Vietnamese — основной локальный рынок;
- English — полноценная параллельная версия.

Рекомендуемая схема:

```text
/       → VI
/en/    → EN
```

Для внутренних страниц:

```text
/knowledge/google-business-profile/
/en/knowledge/google-business-profile/
```

Language switch должен сохранять текущий контекст.

Запрещено:

```text
Article VI → click EN → homepage
```

Если перевод существует:

```text
Article VI ↔ Article EN
```

Все UI strings должны быть localization-ready.

Не делать массовые `if (lang === ...)` внутри компонентов.

---

# 25. NAVIGATION

Header должен оставаться компактным.

Рекомендуемая структура:

```text
Solutions
Systems
Work
Journey
Knowledge
About
```

Primary CTA:

```text
BUILD THIS FOR MY BUSINESS
```

Language:

```text
VI / EN
```

На mobile — полноценная accessible navigation.

---

# 26. FOOTER

Сохранить verified identity/contact information из legacy.

Из текущей версии известно:

```text
AI B.O.S.S.
Digital transformation for local businesses in Vietnam
hello@aiboss.vn
```

Перед финальным использованием Hermes обязан проверить эти данные в legacy source.

Footer должен содержать:

- Solutions;
- Systems;
- Work;
- Journey;
- Knowledge;
- About;
- Contact;
- language switch;
- legal links при необходимости.

---

# 27. VISUAL DIRECTION

Визуальный язык:

- premium digital product;
- editorial typography;
- strong composition;
- clean grid;
- high contrast;
- restrained palette;
- real interfaces;
- real project visuals;
- purposeful motion;
- system visualization.

Не делать:

- generic AI robots;
- excessive neon;
- random glowing blobs;
- decorative 3D;
- generic SaaS card grid;
- template-looking landing page;
- endless paragraphs;
- animation everywhere.

Главный визуальный смысл:

> **A business operating as one connected digital system.**

---

# 28. VISUAL REFERENCES — ПРИНЦИПЫ, НЕ КОПИРОВАНИЕ

В качестве направления ранее были выделены:

- Linear / Stripe / Vercel — product communication, clarity, conversion;
- RANGE RAK — interactive motion / scroll interaction;
- Stellare Agency — process storytelling;
- Portal-1 Studio — typography / composition / editorial character.

Не копировать конкретный дизайн, brand identity или proprietary visual assets.

Изучать механики:

- hierarchy;
- interaction;
- transition;
- scroll storytelling;
- product presentation;
- typography;
- composition.

AI B.O.S.S. должен выглядеть как собственный продукт.

---

# 29. MOTION SYSTEM

Motion должен объяснять систему.

Хорошие применения:

- scattered → connected;
- journey progression;
- module activation;
- UI state changes;
- project hover previews;
- scroll storytelling;
- subtle parallax;
- CTA microinteraction.

Плохие применения:

- animation for every element;
- long loading animations;
- excessive WebGL;
- motion blocking content;
- motion that causes layout shift.

Обязательно:

```css
@media (prefers-reduced-motion: reduce)
```

Для reduced motion использовать simplified/fade states.

---

# 30. RESPONSIVE DESIGN

Поддержка:

- desktop;
- laptop;
- tablet;
- mobile.

Mobile не является уменьшенной desktop-версией.

Каждый сложный desktop interaction должен иметь mobile equivalent.

Например:

```text
Desktop hover → Mobile tap
Desktop horizontal journey → Mobile vertical journey
Desktop floating UI → Mobile contained UI
```

Критический requirement:

> **NO HORIZONTAL OVERFLOW**

Проверять:

```js
const width = document.documentElement.scrollWidth;
const viewport = document.documentElement.clientWidth;
```

Требование:

```text
width <= viewport
```

за исключением осознанных внутренних horizontal scrollers, которые не расширяют document viewport.

---

# 31. PERFORMANCE

Performance — обязательная часть реализации.

Использовать:

- optimized images;
- WebP/AVIF где уместно;
- responsive images;
- lazy loading;
- code splitting;
- compressed video;
- минимально необходимый JS;
- оптимизированные fonts.

Не делать:

- тяжёлый WebGL без необходимости;
- огромные hero assets;
- загрузку всех изображений сразу;
- импорт огромной библиотеки ради одного эффекта.

Приоритет:

```text
CSS / SVG / DOM
>
lightweight animation
>
WebGL / Three.js only when justified
```

---

# 32. ACCESSIBILITY

Минимальный стандарт:

- semantic HTML;
- правильная heading hierarchy;
- keyboard navigation;
- visible focus;
- accessible buttons;
- accessible links;
- form labels;
- adequate contrast;
- alt text;
- reduced motion;
- mobile touch targets.

Не делать взаимодействия, которые доступны только мышью.

---

# 33. SEO

Сохранить и улучшить:

- title;
- meta description;
- canonical;
- Open Graph;
- hreflang / language alternates;
- sitemap;
- robots;
- semantic headings;
- internal links;
- article metadata.

При изменении URL:

1. inventory legacy URL;
2. сохранить slug, если возможно;
3. создать redirects при необходимости;
4. проверить canonical;
5. проверить sitemap;
6. проверить language alternates.

Нельзя потерять Knowledge Base indexing из-за redesign.

---

# 34. CONTENT RULES

Запрещено придумывать:

- testimonials;
- client results;
- revenue figures;
- ROI;
- growth percentages;
- awards;
- partnerships;
- client names;
- customer counts.

Если результат не подтверждён — не использовать.

Использовать существующие проекты как evidence of capability, а не как фальшивую commercial proof.

---

# 35. CONTENT / UI SEPARATION

Контент должен быть отделён от компонентов.

Предпочтительно:

```text
src/
  content/
    vi/
    en/
  components/
  pages/
  routes/
  styles/
```

Конкретная структура зависит от stack, обнаруженного в legacy audit.

Главное правило:

> UI не должен содержать огромные массивы hard-coded article/business content.

---

# 36. COMPONENT SYSTEM

Рекомендуемые базовые компоненты:

```text
Header
MobileNav
LanguageSwitcher
Button
SectionHeading
Container
ProjectCard
ProjectShowcase
BusinessScenario
SystemModule
SystemModuleGrid
ProductPreview
JourneyFlow
JourneyStep
ProcessFlow
ArticleCard
ArticleList
Breadcrumbs
CTASection
Footer
```

Не создавать один огромный `HomePage.tsx`.

---

# 37. DESIGN TOKENS

Централизовать:

- colors;
- typography;
- spacing;
- radii;
- shadows;
- container widths;
- breakpoints;
- transitions;
- easing;
- z-index layers.

Не размазывать случайные значения по десяткам файлов.

---

# 38. LEGACY AUDIT — ПЕРВЫЙ ОБЯЗАТЕЛЬНЫЙ ЭТАП

До создания значительного количества V2 UI Hermes обязан изучить:

```text
D:\CODEX\Workspace\aiboss-digital-site
```

Проверить:

- package.json;
- framework;
- build system;
- router;
- components;
- content;
- Knowledge Base;
- localization;
- assets;
- fonts;
- videos;
- SEO;
- deployment;
- analytics;
- forms;
- external integrations.

Создать:

```text
LEGACY_AUDIT.md
```

---

# 39. ROUTE INVENTORY

Создать таблицу:

| Legacy route | Language | Purpose | Content | V2 action | SEO risk |
|---|---|---|---|---|---|
| ... | ... | ... | ... | KEEP/REWORK/MERGE/REPLACE/ARCHIVE | ... |

Не приступать к массовому удалению routes до завершения inventory.

---

# 40. ASSET INVENTORY

Проверить каждый asset.

Категории:

```text
REQUIRED
REUSABLE
OBSOLETE
UNKNOWN
```

Не копировать весь legacy `assets` blindly.

Проверить:

- размеры;
- формат;
- duplicate files;
- unused files;
- source;
- performance impact.

---

# 41. MIGRATION MATRIX

Для каждого legacy section/page установить:

```text
KEEP
REWORK
MERGE
REPLACE
ARCHIVE
```

### KEEP
Контент правильный и нужен.

### REWORK
Идея нужна, но presentation меняется.

### MERGE
Дублирующая информация объединяется.

### REPLACE
Старый концепт больше не соответствует V2.

### ARCHIVE
Только действительно устаревший материал.

---

# 42. РЕКОМЕНДУЕМЫЙ DEVELOPMENT ORDER

## Phase 1 — Reconnaissance

- legacy audit;
- route inventory;
- Knowledge Base inventory;
- asset inventory.

## Phase 2 — Architecture

- route architecture;
- content model;
- localization model;
- component model.

## Phase 3 — Foundation

- app shell;
- design tokens;
- typography;
- responsive grid;
- header;
- footer;
- buttons;
- language switch.

## Phase 4 — Homepage

- Hero;
- Work showcase;
- Business selector;
- Scattered → Connected;
- Journey;
- Systems;
- Process;
- Knowledge;
- Build Your B.O.S.S.;
- Final CTA.

## Phase 5 — Knowledge Base

- migration;
- index;
- category;
- article;
- language versions;
- metadata.

## Phase 6 — Solutions

Business-type pages.

## Phase 7 — Systems

Product module pages.

## Phase 8 — Work

Project pages.

## Phase 9 — Journey / About / Contact

## Phase 10 — SEO / Accessibility / Performance

## Phase 11 — QA

## Phase 12 — Production build

---

# 43. QA — FUNCTIONAL

Проверить:

- homepage;
- every primary route;
- every language route;
- navigation;
- language switching;
- project links;
- article links;
- CTA;
- forms;
- direct route loading;
- browser refresh;
- back button.

---

# 44. QA — RESPONSIVE

Минимально проверить:

- desktop;
- tablet;
- narrow mobile;
- representative Android viewport;
- representative iOS viewport.

Особое внимание:

- header;
- hero;
- horizontal interactions;
- cards;
- project previews;
- article typography;
- CTA;
- footer.

---

# 45. QA — BROWSER

Использовать Playwright или другой доступный browser automation tool.

Проверять:

```text
console errors
network errors
404s
broken images
missing fonts
layout overflow
route failures
```

Скриншоты:

- desktop;
- tablet;
- mobile.

---

# 46. QA — CONTENT

По всему проекту выполнить поиск:

```text
TODO
FIXME
lorem
placeholder
example.com
fake metrics
fake testimonials
fake clients
```

Также искать:

- accidental Vietnamese in EN;
- accidental English in VI;
- broken markdown;
- empty links;
- missing translations.

---

# 47. QA — KNOWLEDGE BASE

Проверить:

- index;
- category pages;
- article pages;
- images;
- internal links;
- related articles;
- metadata;
- language switch;
- mobile reading;
- direct URL loading.

---

# 48. QA — ACCESSIBILITY

Проверить:

- keyboard navigation;
- focus;
- semantic headings;
- labels;
- contrast;
- alt text;
- reduced motion;
- touch targets.

---

# 49. QA — PERFORMANCE

Проверить:

- initial load;
- image payload;
- video payload;
- JS bundle;
- font loading;
- lazy loading;
- layout shift;
- unnecessary requests.

Не оптимизировать вслепую — сначала измерить, затем исправлять.

---

# 50. FINAL QA REPORT

Создать:

```text
V2_FINAL_QA.md
```

Структура:

```text
Functional
Visual
Responsive
Accessibility
Performance
SEO
Knowledge Base
Known limitations
```

Все реальные ограничения указать явно.

---

# 51. DEFINITION OF DONE

Проект считается готовым только когда:

- V2 работает из новой директории;
- legacy не повреждён;
- VI работает;
- EN работает;
- language switching сохраняет контекст;
- Knowledge Base работает;
- статьи доступны;
- project pages доступны;
- Solutions доступны;
- Systems доступны;
- Journey доступен;
- Contact доступен;
- mobile работает;
- desktop работает;
- нет неожиданного horizontal overflow;
- нет console errors;
- нет broken assets;
- нет dead links;
- production build проходит;
- SEO metadata присутствует;
- reduced-motion поддерживается;
- accessibility проверена;
- content claims verified;
- нет fake commercial proof.

---

# 52. HUMAN SUCCESS TEST

Открыть сайт как владелец небольшого бизнеса во Вьетнаме, который впервые видит AI B.O.S.S.

Через ~30 секунд он должен понимать:

1. Что AI B.O.S.S. создаёт.
2. Как может выглядеть его собственный бизнес с этой системой.
3. Что отдельные digital touchpoints соединяются.
4. Что уже существуют реальные digital experiences / prototypes.
5. Что решение можно адаптировать под его тип бизнеса.
6. Где посмотреть подробную информацию.
7. Как начать.

Если пользователь понял только:

> «Это какой-то AI/IT сервис»

но не подумал:

> **«Я хочу такое для своего бизнеса»**

— homepage не достигла цели.

---

# 53. ПРИОРИТЕТЫ

## P0 — обязательно

- новая архитектура;
- bilingual shell;
- homepage;
- Knowledge Base;
- navigation;
- responsive;
- core CTA;
- SEO-safe migration.

## P1

- Solutions;
- Systems;
- Work;
- Journey;
- About;
- Contact.

## P2

- advanced configurator;
- advanced motion;
- advanced interactive product demos;
- secondary visual effects.

Если не хватает времени:

> **никогда не жертвовать P0 ради декоративного P2.**

---

# 54. ОСОБЫЕ УКАЗАНИЯ HERMES

1. Не переписывать legacy.
2. Не начинать с косметического изменения старого Hero.
3. Сначала провести audit.
4. Сначала сформировать route/content map.
5. Затем сформировать V2 architecture.
6. Только после этого писать основной UI.
7. Не удалять Knowledge Base.
8. Не превращать сайт в single-page landing.
9. Не ломать VI/EN.
10. Не придумывать коммерческие результаты.
11. Не использовать generic AI visual clichés.
12. Не добавлять сложный WebGL без доказанной необходимости.
13. Проверять mobile на каждом крупном этапе.
14. После каждой крупной архитектурной фазы запускать build.
15. После homepage запускать visual QA.
16. После migration Knowledge Base запускать route/SEO QA.
17. Перед финалом выполнить полный browser audit.
18. Если legacy content противоречит этому ТЗ — не угадывать, а зафиксировать конфликт в отчёте.

---

# 55. ИТОГОВАЯ ФИЛОСОФИЯ V2

AI B.O.S.S. V2 не должен быть очередным сайтом, который говорит:

> «Мы делаем сайты, AI, автоматизацию и аналитику».

Он должен показать:

> **«Вот как может выглядеть ваш бизнес, когда всё это работает как одна система».**

Главная — showroom.

Solutions — применение к конкретному бизнесу.

Systems — продуктовые модули.

Work — доказательство способности создавать digital experiences.

Journey — объяснение connected customer journey.

Knowledge — экспертный и SEO-слой.

Contact — переход от интереса к реализации.

Вся архитектура должна работать вокруг одной идеи:

# YOUR BUSINESS. CONNECTED.
