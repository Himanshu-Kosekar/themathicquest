# The Mathic Quest — STEM Educational Hub

A fast, accessible, static educational website built with [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) and [MathJax v3](https://www.mathjax.org/), configured for continuous deployment to GitHub Pages under the custom domain `themathicquest.com`.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Python 3.10+ installed

### 2. Activate the Virtual Environment
```bash
# Windows (PowerShell)
.\venv\Scripts\Activate.ps1

# Windows (Command Prompt)
venv\Scripts\activate.bat

# macOS / Linux
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Start the Local Development Server
```bash
mkdocs serve
```
Open your browser and navigate to `http://127.0.0.1:8000/`. The site automatically reloads on any changes to `mkdocs.yml` or Markdown files in `docs/`.

---

## 📁 Repository Structure & Course Coverage

```text
themathicquest/
├── .github/
│   └── workflows/
│       └── ci.yml                                      # GitHub Actions CI/CD to deploy on push to main
├── docs/
│   ├── CNAME                                           # Custom domain pointer (themathicquest.com)
│   ├── index.md                                        # Home landing page
│   ├── javascripts/
│   │   └── mathjax.js                                  # MathJax v3 instant navigation integration
│   ├── ap-precalculus/                                 # AP Precalculus (4 Units Complete)
│   │   ├── index.md                                    # Course Hub & Roadmap
│   │   ├── unit-1-polynomial-rational.md               # Unit 1: Polynomial & Rational Functions
│   │   ├── unit-2-exponential-logarithmic.md           # Unit 2: Exponential & Logarithmic Functions
│   │   ├── unit-3-trigonometric-polar.md               # Unit 3: Trigonometric & Polar Functions
│   │   └── unit-4-functions-parameters-vectors-matrices.md # Unit 4: Parameters, Vectors, & Matrices
│   └── ap-physics-1/                                   # AP Physics 1 (Updated 8-Unit CED Framework)
│       ├── index.md                                    # Course Hub & Roadmap
│       ├── unit-1-kinematics.md                        # Unit 1: Kinematics
│       ├── unit-2-force-translational-dynamics.md      # Unit 2: Force & Translational Dynamics
│       ├── unit-3-work-energy-power.md                 # Unit 3: Work, Energy, & Power
│       ├── unit-4-linear-momentum.md                   # Unit 4: Linear Momentum
│       ├── unit-5-torque-rotational-dynamics.md        # Unit 5: Torque & Rotational Dynamics
│       ├── unit-6-energy-momentum-rotating-systems.md  # Unit 6: Energy & Momentum of Rotating Systems
│       ├── unit-7-oscillations.md                      # Unit 7: Oscillations
│       └── unit-8-fluids.md                            # Unit 8: Fluids
├── .gitignore                                          # Ignores venv/, site/, __pycache__/
├── mkdocs.yml                                          # Material theme, navigation, search, and extensions
├── requirements.txt                                    # mkdocs-material and pymdown-extensions
└── README.md                                           # Project documentation
```

---

## 📐 Mathematical Notation & Typesetting

Equations are typeset using **MathJax v3** via the `pymdownx.arithmatex` extension configured with `generic: true`.

- **Inline equations:** Use `\( ... \)` or `$...$` (e.g., `$\Delta x = v_0 t + \frac{1}{2}at^2$`).
- **Display equations:** Use `\[ ... \]` or `$$...$$` (e.g., `$$\lim_{x \to c} f(x) = L$$`).

`docs/javascripts/mathjax.js` listens to `document$.subscribe(...)` to ensure equations are automatically re-typeset when navigating between pages with Material's instant navigation (`navigation.instant`).

---

## 🚢 Continuous Deployment (GitHub Pages)

The repository includes a GitHub Actions workflow in `.github/workflows/ci.yml`:
1. Triggers automatically on any push to the `main` branch.
2. Checks out the repository and configures Python 3.11 with pip caching.
3. Installs dependencies from `requirements.txt`.
4. Runs `mkdocs gh-deploy --force` with `contents: write` permissions to deploy the static build to the `gh-pages` branch.
5. GitHub Pages serves the site at `https://themathicquest.com/` using the `docs/CNAME` configuration.
