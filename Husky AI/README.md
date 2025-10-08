# Group Assignment 5 — Login & Landing Pages (Bootstrap)

This starter is designed to help you satisfy **all** the assignment requirements quickly, while leaving clear placeholders for your **project topic & branding**. Replace `BrandName`, the copy, and colors in `assets/css/styles.css` to align with your approved topic.

---

## 1) Purpose & Overview
Two responsive pages built with Bootstrap 5.3:
- `login.html`: a client‑side validated login form with accessible feedback and UX enhancements.
- `index.html`: a landing page showcasing features, tabs, FAQ accordion, modal demo request, newsletter subscription, etc.

The JavaScript (`assets/js/main.js`) wires up **validation**, **toasts**, **modal forms**, **tooltips**, and **login flow** (demo only). The CSS (`assets/css/styles.css`) overrides theme colors and sets a custom hero gradient.

> **Note**: There is no backend; the login success is simulated for the assignment. Hook the form to your backend later if desired.

---

## 2) Bootstrap Components Used (14 distinct)
Purposefully integrated across the two pages:

1. **Navbar**
2. **Offcanvas**
3. **Dropdown**
4. **Carousel**
5. **Cards**
6. **Nav Tabs**
7. **Accordion**
8. **Modal**
9. **Toast**
10. **List Group**
11. **Progress (password strength + adoption)**
12. **Badges**
13. **Alerts**
14. **Form Components** (Form Floating, Input Group, Form Switch, Validation helpers)
    - Also includes Tooltip and Spinner usage

> You only need **12+**; we’ve included 14. If you prefer, you can remove any extras and update this list.

---

## 3) Client‑Side Validation (Login Page)
- Email: HTML5 `type="email"` + Bootstrap validation classes.
- Password: Custom rule (≥8 chars, includes **uppercase**, **lowercase**, and **number**). Real‑time **strength meter** via a Bootstrap **Progress** bar.
- Invalid inputs display **invalid‑feedback**; a top **alert** renders if the form is submitted with errors.
- On valid submit, button shows a **spinner**, a **toast** confirms success, then we **redirect** to `index.html` (demo).

Forms inside the “Book demo” modal and newsletter also use constraint validation and show a success toast.

---

## 4) Significant Template Customization
- Custom theme token and **brand color** (`--brand`) in `assets/css/styles.css`.
- Custom **hero gradient** and **feature card** styling.
- Replace **copy**, **brand name**, and **colors** to match your approved topic. Search for **`BrandName`** and change everywhere.
- Swap icons (Bootstrap Icons CDN already linked).

---

## 5) Responsive Design
- All layout sections rely on Bootstrap’s responsive grid and utilities.
- Navbar collapses into **offcanvas** on mobile.
- Carousel, cards, tabs, and accordions are fully responsive out of the box.

---

## 6) Run Locally
No build step required—just open the HTML files.

**Option A: Double‑click `index.html`**  
**Option B: Simple HTTP server**
- Python 3: `python -m http.server 8000` then visit http://localhost:8000
- Node (serve): `npx serve .` then open the printed URL

> Tooltips and modals work both via file:// and http://. For future APIs, prefer running a local server.

---

## 7) GitHub Workflow (One Central Repo)
**Repository structure**
```
root/
├─ index.html
├─ login.html
├─ assets/
│  ├─ css/styles.css
│  └─ js/main.js
└─ README.md
```

**Branching model**
- `main` — integration branch for approved changes
- One branch **per teammate**, e.g., `feat/landing-saket`, `feat/login-lee`

**Suggested workflow**
```bash
# 1) Create repo
git init
git add .
git commit -m "chore: bootstrap starter for assignment 5"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main

# 2) Teammates branch off
git checkout -b feat/landing-saket

# 3) Open a PR to main when a chunk is ready
# Use PR templates, request reviews, and squash-merge
```

**Contribution evidence**
- Ensure each member commits to **their branch** with descriptive messages.
- Merge via Pull Requests for a verifiable review trail.

---

## 8) How To Customize Quickly
- Replace **BrandName** → your approved project name.
- Update the **hero** copy and CTA.
- Update **Features cards**, **FAQ items**, and **Pricing** into your domain.
- If you have a brand color, set it by editing `--brand-hue`, `--brand-sat`, `--brand-light` in `assets/css/styles.css`.

---

## 9) Submission Checklist
- [ ] `login.html` validates inputs with clear messages
- [ ] `index.html` shows at least **12** Bootstrap components (see list above)
- [ ] Fully responsive layouts (desktop / tablet / mobile)
- [ ] README updated with your **topic** and **component list**
- [ ] All members show commits in GitHub history
- [ ] Canvas upload: **ZIP** + **GitHub URL** + team names + project name

Good luck—ship it! 🚀
