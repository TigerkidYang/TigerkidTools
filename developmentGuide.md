# AI Development Brief: High-Performance SEO Tool Website (Next.js)

**Hello AI. Please use the following detailed instructions to create a high-performance, SEO-friendly, front-end tool website for me.**

### (A) Core Project Objectives & Tech Stack

1.  **Core Objective:** To achieve high rankings on Google for specific tool-related keywords and ultimately monetize the website through Google AdSense.
2.  **Core Strategy:** SEO-first, excellent user experience, and robust content support.
3.  **Tech Stack:**
    - **Framework:** **Next.js (using App Router)**
    - **Styling:** **Tailwind CSS**
    - **Deployment Platform:** **Vercel**
    - **Language:** **TypeScript**

### (B) Overall Website Structure

Please build the following directory structure and routes:

- `/` (`app/page.tsx`): **Homepage**. A clean introduction to the site, linking to core tools and recent blog posts.
- `/tools` (`app/tools/page.tsx`): **Tools Landing Page**. Displays all available tools in a card-based layout.
- `/tools/[slug]` (`app/tools/[slug]/page.tsx`): **Individual Tool Page**. This is the core of the website.
- `/blog` (`app/blog/page.tsx`): **Blog Landing Page**. Displays all blog posts in a card-based layout.
- `/blog/[slug]` (`app/blog/[slug]/page.tsx`): **Individual Blog Post Page**. Used for content marketing and internal linking.
- `/components`: For shared components like `Header`, `Footer`, `Card`, etc.
- `/lib` or `/data`: For storing the site's data sources, such as `tools.ts` and `blogs.ts`, which will hold the metadata (slug, title, description, etc.) for each tool and blog post.

### (C) Mandatory SEO & Performance Requirements

This is the **highest priority** for the project. Please adhere strictly to these rules.

1.  **Rendering Strategy: Static Site Generation (SSG)**

    - All pages, including dynamic routes for tools and blogs, **must** be pre-rendered into static HTML at build time.
    - For `[slug]` pages, use the `generateStaticParams` function to create all possible paths.
    - **Strictly avoid** pure Client-Side Rendering (CSR). Only components that require user interaction (like the calculator tool itself) should be marked as Client Components (`'use client'`). All other parts of the page (text, titles, footer) must remain default Server Components.

2.  **Performance Optimization (Core Web Vitals)**

    - **Images:** All images **must** use the Next.js `<Image>` component for automatic optimization.
    - **Fonts:** **Must** use `next/font` to load any web fonts (e.g., Google Fonts like "Inter") to eliminate font-related Cumulative Layout Shift (CLS).
    - **Code Splitting:** The App Router handles this automatically. Ensure best practices are followed.

3.  **HTML Semantics & Structure**

    - **Strictly use semantic HTML5 tags**: `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`, etc.
    - **Maintain a clear heading hierarchy**:
      - Each page **must have one and only one** `<h1>` tag, containing the page's primary keyword.
      - Heading levels must not be skipped (an `<h2>` must be followed by an `<h3>`, not an `<h4>`).

4.  **Metadata & SEO Tags**

    - In every `page.tsx` file, you **must** use the `generateMetadata` function from the Next.js App Router to dynamically generate metadata.
    - The metadata for **every page** must include:
      - `title`: A unique and compelling title.
      - `description`: A unique, keyword-rich description.
      - `alternates: { canonical: '...' }`: The absolute, canonical URL for the page to prevent duplicate content issues.
      - `openGraph`: Including `title`, `description`, `url`, `siteName`, `images`, `type`.
      - `twitter`: Including `card`, `title`, `description`, `images`.

5.  **Structured Data (JSON-LD)**
    - This is critical for earning Google Rich Snippets. Inject the appropriate JSON-LD schema into each page using a `<script type="application/ld+json">` tag.
    - **Tool Pages (`/tools/[slug]`)**:
      - Use the `WebPage` schema type.
      - If the page includes a FAQ, nest `Question` and `Answer` schema types within the `mainEntity` property for each Q&A pair.
    - **Blog Pages (`/blog/[slug]`)**:
      - Use the `BlogPosting` or `Article` schema type, including `headline`, `author`, `datePublished`, `dateModified`, and `image` properties.
    - **Homepage (`/`)**:
      - Use the `WebSite` schema type, including `url` and `name`.

### (D) Specific Page Implementation Guides

#### 1. Individual Tool Page (`/tools/[slug]/page.tsx`)

This is the most important template. The page structure must strictly follow this order:

1.  **`<h1>`**: The main title of the page (e.g., "Debt Snowball Calculator").
2.  **The Tool Component**:
    - This is the core interactive element for the user.
    - It **must** be extracted into its own Client Component (e.g., `app/tools/[slug]/components/Calculator.tsx`) and marked with `'use client'`.
    - The component itself should be intuitive, easy to use, and mobile-friendly.
3.  **The Content Section (`<article>`)**:
    - This content serves both SEO and the user. It **must** be a Server Component.
    - **`<h2>`**: "What is [Tool Topic]?" (e.g., "What is the Debt Snowball Method?").
    - **`<h2>`**: "How to Use Our Calculator".
    - **`<h2>`**: "Understanding the Results" or "Why Is This Important?".
    - **`<h2>`**: "Frequently Asked Questions (FAQ)".
      - Use multiple `<h3>` tags for the questions and `<p>` tags for the answers. This is key for capturing "People Also Ask" traffic.

#### 2. Blog Page (`/blog/[slug]/page.tsx`)

- Primarily for content marketing and building internal links.
- Within the article's content, link naturally to relevant tool pages. For example, a blog post about "Early Retirement Strategies" should include a link to the "Coast FIRE Calculator" tool page.

---

### (E) Information to be Provided by User (Fill this section out for each new tool)

**When I ask you to create a new tool page, I will provide the following information. Please develop the page strictly based on these details.**

- **1. Tool Name:**
  - _Example: `Debt Snowball Calculator`_
- **2. URL Slug:**
  - _Example: `debt-snowball-calculator`_
- **3. Primary Keyword:**
  - _Example: `debt snowball calculator`_
- **4. SEO Title:**
  - _Example: `Debt Snowball Calculator - Create Your Debt Payoff Plan`_
- **5. Meta Description:**
  - _Example: `Use our free debt snowball calculator to create a customized payoff plan. See how fast you can become debt-free by focusing on your smallest debts first.`_
- **6. Tool Functionality Description:**
  - **Inputs:**
    - _Example: The user can dynamically add/remove multiple debts. Each debt requires: name (string), total balance (number), APR (number, %), and minimum monthly payment (number). There is also a single input for "Extra Monthly Payment" (number)._
  - **Outputs:**
    - _Example: After clicking "Calculate," generate a clear amortization schedule table showing the payment allocation and remaining balance for each debt, month by month. Above the table, use a summary card to highlight: "You will be debt-free in [X years and Y months]" and "You will pay a total of [Z] in interest."_
- **7. Page Content Outline (H2/H3 Headings):**
  - _Example:_
    - `<h2>What Is the Debt Snowball Method?`
    - `<h2>How to Use the Debt Snowball Calculator`
    - `<h2>Debt Snowball vs. Debt Avalanche: Which Is Right for You?`
    - `Frequently Asked Questions`
    - `<h3>Is the debt snowball method the fastest way to pay off debt?`
    - `<h3>What happens if I have extra money to pay one month?`
- **8. (Optional) Semrush Data:**
  - **Related Keywords (to be woven into the content):**
    - _Example: `debt payoff planner`, `dave ramsey debt snowball`, `debt calculator`, `how to get out of debt`_
  - **People Also Ask (for the FAQ section):**
    - _Example: `What are the 7 baby steps?`, `Should I pay off my smallest debt first?`_
