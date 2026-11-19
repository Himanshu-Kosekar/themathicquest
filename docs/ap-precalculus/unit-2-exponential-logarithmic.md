---
title: "Unit 2: Exponential & Logarithmic Functions"
description: Master geometric sequences, continuous growth models, logarithmic laws, equations, and semi-log data linearization for AP Precalculus.
---

# Unit 2: Exponential & Logarithmic Functions

Unit 2 explores processes characterized by proportional and multiplicative change, building from discrete sequences to continuous exponential growth and their algebraic inverses: logarithmic functions.

---

## 2.1 Arithmetic vs. Geometric Sequences

Sequences serve as the discrete foundation for continuous linear and exponential functions:

| Feature | Arithmetic Sequence | Geometric Sequence |
| :--- | :--- | :--- |
| **Recursive Definition** | $a_n = a_{n-1} + d$ | $g_n = g_{n-1} \cdot r$ |
| **Explicit Formula** | $a_n = a_1 + (n - 1)d$ | $g_n = g_1 \cdot r^{n-1}$ |
| **Continuous Analogy** | Linear function: $f(x) = mx + b$ | Exponential function: $f(x) = a \cdot b^x$ |
| **Rate of Change** | Constant additive difference ($d$) | Constant multiplicative factor ($r$) |

---

## 2.2 Exponential Function Modeling

An exponential function changes by equal factors over equal intervals:

$$f(x) = a \cdot b^x = a(1 + r)^x$$

where:
- $a = f(0)$ is the initial value (non-zero).
- $b > 0$ with $b \neq 1$ is the base / growth factor.
- $r = b - 1$ is the growth or decay rate per unit input.

### Continuous Compounding & Natural Base $e$
When compounding occurs continuously, Euler's number $e = \lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n \approx 2.71828\dots$ emerges:

$$A(t) = P \cdot e^{kt}$$

- If $k > 0$, the quantity experiences **continuous growth**.
- If $k < 0$, the quantity experiences **continuous decay**.

### Half-Life and Doubling Time
For radioactive decay with half-life $t_{1/2}$, the remaining quantity is modeled as:

$$N(t) = N_0 \left(\frac{1}{2}\right)^{t / t_{1/2}} = N_0 e^{-kt} \quad \text{where} \quad k = \frac{\ln 2}{t_{1/2}}$$

Similarly, for doubling time $t_d$:

$$P(t) = P_0 (2)^{t / t_d} = P_0 e^{kt} \quad \text{where} \quad k = \frac{\ln 2}{t_d}$$

---

## 2.3 Composition, Inverses, & Logarithmic Functions

A logarithm is defined as the inverse of an exponential function:

$$y = \log_b(x) \iff b^y = x \quad (b > 0, \; b \neq 1, \; x > 0)$$

- **Domain:** $(0, \infty)$
- **Range:** $(-\infty, \infty)$
- **Vertical Asymptote:** $x = 0$ (with $\lim_{x \to 0^+} \log_b(x) = -\infty$ for $b > 1$)

### Essential Logarithmic Properties

$$\log_b(xy) = \log_b(x) + \log_b(y) \quad \text{(Product Property)}$$

$$\log_b\left(\frac{x}{y}\right) = \log_b(x) - \log_b(y) \quad \text{(Quotient Property)}$$

$$\log_b(x^k) = k \cdot \log_b(x) \quad \text{(Power Property)}$$

$$\log_b(a) = \frac{\ln a}{\ln b} = \frac{\log_{10} a}{\log_{10} b} \quad \text{(Change of Base Formula)}$$

---

## 2.4 Semi-Log Plots & Data Linearization

When exponential data $(x, y)$ is plotted on a **semi-log plot** (where the vertical axis is scaled logarithmically):

Given $y = a \cdot b^x$, take the natural logarithm of both sides:

$$\ln(y) = \ln(a \cdot b^x) = \ln(a) + \ln(b^x)$$

$$\ln(y) = (\ln b) \cdot x + \ln(a)$$

This matches standard slope-intercept form $Y = m x + C$:
- The dependent variable is $Y = \ln(y)$.
- The slope of the line is $m = \ln(b) \implies b = e^m$.
- The vertical intercept is $C = \ln(a) \implies a = e^C$.

---

!!! warning "AP Exam Trap: Checking for Extraneous Solutions"
    When solving logarithmic equations, combining terms using the product or quotient rules can introduce **extraneous solutions** that violate the strict domain requirement $x > 0$.
    
    For example, in $\log_2(x) + \log_2(x - 2) = 3$:
    $$\log_2(x(x - 2)) = 3 \implies x^2 - 2x = 8 \implies x^2 - 2x - 8 = 0$$
    $$(x - 4)(x + 2) = 0 \implies x = 4 \quad \text{or} \quad x = -2$$
    
    You **must reject $x = -2$** because $\log_2(-2)$ is undefined in the real numbers. Always check candidate roots in the **original unsimplified equation**.

---

## 📝 Practice Problem & Solution

???+ question "Practice Problem 2.1: Continuous Modeling & Semi-Log Linearization"
    A biological culture of bacteria is treated with an antibiotic. The population $P(t)$ is modeled by an exponential decay function $P(t) = P_0 e^{-kt}$, where $t$ is measured in hours.
    
    At $t = 0$, the culture contains $8{,}000$ bacteria. After $3$ hours, the population has decreased to $1{,}000$ bacteria.
    
    a. Determine the exact continuous decay rate $k$ and write the complete formula for $P(t)$.  
    b. Express $\ln(P(t))$ as a linear function of $t$. State the slope and vertical intercept of the resulting line.  
    c. Determine the half-life of the bacteria under this antibiotic treatment.

??? success "Show Step-by-Step Solution"
    **Part a: Determine $P_0$ and the decay constant $k$:**
    
    The initial condition gives $P_0 = P(0) = 8{,}000$.
    
    At $t = 3$, $P(3) = 1{,}000$:
    
    $$1{,}000 = 8{,}000 \, e^{-3k}$$
    
    Divide both sides by $8{,}000$:
    
    $$\frac{1}{8} = e^{-3k}$$
    
    Take the natural logarithm of both sides:
    
    $$\ln\left(\frac{1}{8}\right) = -3k \implies -\ln(8) = -3k$$
    
    Since $8 = 2^3$, $\ln(8) = 3\ln(2)$:
    
    $$k = \frac{3\ln(2)}{3} = \ln(2) \approx 0.6931\,\text{hr}^{-1}$$
    
    Therefore, the exact population model is:
    
    $$P(t) = 8{,}000 \, e^{-(\ln 2)t} = 8{,}000 \left(\frac{1}{2}\right)^t$$
    
    ---
    
    **Part b: Linearization on a Semi-Log Plot:**
    
    Take the natural logarithm of both sides:
    
    $$\ln(P(t)) = \ln\left(8{,}000 \, e^{-kt}\right) = \ln(8{,}000) + \ln\left(e^{-kt}\right)$$
    
    $$\ln(P(t)) = -kt + \ln(8{,}000) = -(\ln 2)t + \ln(8{,}000)$$
    
    - **Slope:** $m = -k = -\ln(2) \approx -0.6931$
    - **Vertical Intercept:** $C = \ln(8{,}000) \approx 8.987$
    
    ---
    
    **Part c: Determine the Half-Life:**
    
    The half-life $t_{1/2}$ is the time required for the population to reach $\frac{1}{2}P_0 = 4{,}000$:
    
    $$4{,}000 = 8{,}000 \, e^{-(\ln 2) t_{1/2}} \implies \frac{1}{2} = e^{-(\ln 2) t_{1/2}}$$
    
    $$-\ln(2) = -(\ln 2) t_{1/2} \implies t_{1/2} = \mathbf{1\,\text{hour}}$$
    
    *(Notice this is immediate from the base-2 simplified model $P(t) = 8{,}000(1/2)^t$, where $t$ is in hours).*
