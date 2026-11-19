---
title: "Unit 1: Polynomial & Rational Functions"
description: Master rates of change, polynomial end behavior, rational asymptotes, and holes for AP Precalculus.
---

# Unit 1: Polynomial & Rational Functions

Unit 1 explores how quantities change in tandem, the rate of change of functions over intervals, and the asymptotic behavior of algebraic expressions.

---

## 1.1 Average Rate of Change (AROC)

The **Average Rate of Change** of a function $f$ over the closed interval $[a, b]$ represents the slope of the secant line passing through $(a, f(a))$ and $(b, f(b))$:

$$\text{AROC}_{[a, b]} = \frac{\Delta y}{\Delta x} = \frac{f(b) - f(a)}{b - a}$$

### Concavity via Rates of Change

The shape of a graph can be deduced by examining consecutive rates of change over equal intervals $[x_1, x_2]$ and $[x_2, x_3]$ (where $x_2 - x_1 = x_3 - x_2$):

- **Concave Up:** The average rates of change are **increasing**:
  $$\text{AROC}_{[x_1, x_2]} < \text{AROC}_{[x_2, x_3]}$$
- **Concave Down:** The average rates of change are **decreasing**:
  $$\text{AROC}_{[x_1, x_2]} > \text{AROC}_{[x_2, x_3]}$$

---

## 1.2 Polynomial Functions & End Behavior

For a general polynomial function of degree $n$:

$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 \quad (a_n \neq 0)$$

The global end behavior is dictated entirely by its **leading term** $a_n x^n$:

$$\lim_{x \to \infty} P(x) = \lim_{x \to \infty} a_n x^n \quad \text{and} \quad \lim_{x \to -\infty} P(x) = \lim_{x \to -\infty} a_n x^n$$

---

## 1.3 Rational Functions & Asymptotes

Let $R(x) = \frac{P(x)}{Q(x)}$ where $P(x)$ and $Q(x)$ are polynomials.

### Removable vs. Vertical Asymptotes
If $x - c$ is a factor of both $P(x)$ and $Q(x)$:
- If the multiplicity of $(x - c)$ in $P(x)$ is **greater than or equal to** its multiplicity in $Q(x)$, $x = c$ corresponds to a **hole** at $\left(c, \lim_{x \to c} R(x)\right)$.
- If the multiplicity in $Q(x)$ is **strictly greater**, $x = c$ produces a **vertical asymptote**:
  $$\lim_{x \to c^+} R(x) = \pm\infty \quad \text{or} \quad \lim_{x \to c^-} R(x) = \pm\infty$$

### Horizontal Asymptotes Degree Test
Comparing the degree of the numerator $n = \deg(P)$ with the degree of the denominator $m = \deg(Q)$:

$$\lim_{x \to \pm\infty} \frac{a_n x^n + \dots}{b_m x^m + \dots} = \begin{cases} 0 & \text{if } n < m \implies y = 0 \\ \dfrac{a_n}{b_m} & \text{if } n = m \implies y = \dfrac{a_n}{b_m} \\ \pm\infty & \text{if } n > m \implies \text{No Horizontal Asymptote} \end{cases}$$

---

!!! tip "AP Exam Tip: Justifying Removable Discontinuities"
    On Free-Response Questions (FRQs), never simply write *"the factor cancels out so it's a hole"*. You must state:
    
    1. The denominator $Q(c) = 0$, so $R(c)$ is undefined.
    2. The two-sided limit exists: $\lim_{x \to c} R(x) = L \in \mathbb{R}$.
    3. Therefore, $R$ possesses a **removable discontinuity** at $(c, L)$.

---

## 📝 Practice Problem & Solution

???+ question "Practice Problem 1.1: Rational Function Analysis"
    Consider the rational function:
    
    $$f(x) = \frac{2x^2 - 8}{x^2 - 5x + 6}$$
    
    a. Determine the coordinates of any holes in the graph of $f(x)$.  
    b. Identify all vertical and horizontal asymptotes. Use limit notation to justify your answers.

??? success "Show Step-by-Step Solution"
    **Step 1: Completely factor the numerator and denominator:**
    
    $$f(x) = \frac{2(x^2 - 4)}{(x - 2)(x - 3)} = \frac{2(x - 2)(x + 2)}{(x - 2)(x - 3)}$$
    
    ---
    
    **Step 2: Identify and evaluate holes (removable discontinuities):**
    
    The common factor is $(x - 2)$. For all $x \neq 2$:
    
    $$\tilde{f}(x) = \frac{2(x + 2)}{x - 3}$$
    
    Evaluating the limit as $x \to 2$:
    
    $$\lim_{x \to 2} f(x) = \frac{2(2 + 2)}{2 - 3} = \frac{8}{-1} = -8$$
    
    Therefore, there is a **hole at $(2, -8)$**.
    
    ---
    
    **Step 3: Vertical Asymptotes:**
    
    The remaining non-canceled denominator factor is $(x - 3)$:
    
    $$\lim_{x \to 3^+} f(x) = \frac{2(3 + 2)}{3^+ - 3} = \frac{10}{0^+} = +\infty$$
    
    Thus, $x = 3$ is a **vertical asymptote**.
    
    ---
    
    **Step 4: Horizontal Asymptotes:**
    
    Both numerator and denominator have degree $2$ ($n = m = 2$). Evaluating end behavior:
    
    $$\lim_{x \to \pm\infty} f(x) = \lim_{x \to \pm\infty} \frac{2x^2}{x^2} = 2$$
    
    Thus, $y = 2$ is a **horizontal asymptote**.
