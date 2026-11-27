---
title: "Unit 4: Functions Involving Parameters, Vectors, & Matrices"
description: Master parametric motion, conic sections, 2D vectors, and matrix transformations for AP Precalculus.
---

# Unit 4: Functions Involving Parameters, Vectors, & Matrices

Unit 4 extends analytical geometry and functional relationships into multidimensional contexts, including parametric equations of motion, implicit algebraic curves (conic sections), vector operations, and linear transformations via matrices.

---

## Video Lessons & Channel Series

Follow along with the AP Precalculus video series from our YouTube channel:

<div class="video-wrapper">
  <iframe 
    src="https://www.youtube-nocookie.com/embed/videoseries?list=UU1c2nUa4hYaSrwXKvjmlJIA" 
    title="AP Precalculus Video Series - Mathic Quest" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

[:material-youtube: Explore all video lessons on our YouTube Channel](https://www.youtube.com/channel/UC1c2nUa4hYaSrwXKvjmlJIA){ .md-button .md-button--primary target="_blank" }

---

## 4.1 Parametric Functions

A parametric curve defines both the horizontal and vertical coordinates independently in terms of an auxiliary parameter (often time $t$):

$$\begin{cases} x = x(t) \\ y = y(t) \end{cases} \quad \text{for } t \in [t_{\text{min}}, t_{\text{max}}]$$

### Eliminating the Parameter
To convert parametric equations into a single rectangular relationship $y = f(x)$ or $F(x, y) = 0$:
1. **Algebraic Substitution:** Solve for $t$ in one equation (e.g., $t = g(x)$) and substitute into the second equation: $y = y(g(x))$.
2. **Trigonometric Elimination:** When expressions involve sine and cosine, isolate the trig terms and apply the Pythagorean identity:
   $$\left(\frac{x - h}{a}\right)^2 + \left(\frac{y - k}{b}\right)^2 = \cos^2 t + \sin^2 t = 1$$

---

## 4.2 Conic Sections in Standard Form

Conic sections are implicit second-degree algebraic curves formed by intersecting a double cone with a plane:

| Conic Section | Standard Equation (Horizontal Major/Transverse Axis) | Key Geometric Features |
| :--- | :---: | :--- |
| **Parabola** | $(y - k)^2 = 4p(x - h)$ | Vertex $(h, k)$; Focus $(h+p, k)$; Directrix $x = h - p$ |
| **Ellipse** | $\dfrac{(x - h)^2}{a^2} + \dfrac{(y - k)^2}{b^2} = 1 \quad (a > b)$ | Center $(h, k)$; Foci $(h \pm c, k)$ where $c^2 = a^2 - b^2$ |
| **Hyperbola** | $\dfrac{(x - h)^2}{a^2} - \dfrac{(y - k)^2}{b^2} = 1$ | Center $(h, k)$; Foci $(h \pm c, k)$ where $c^2 = a^2 + b^2$; Asymptotes $y - k = \pm \frac{b}{a}(x - h)$ |

---

## 4.3 Vectors in Two Dimensions

A vector $\vec{v}$ represents a directed line segment possessing both magnitude (length) and direction:

$$\vec{v} = \langle v_x, v_y \rangle = v_x \hat{i} + v_y \hat{j}$$

- **Magnitude (Norm):** $\|\vec{v}\| = \sqrt{v_x^2 + v_y^2}$
- **Direction Angle ($\theta$):** $\tan\theta = \dfrac{v_y}{v_x} \implies \vec{v} = \langle \|\vec{v}\|\cos\theta, \; \|\vec{v}\|\sin\theta \rangle$
- **Unit Vector:** $\hat{u} = \dfrac{\vec{v}}{\|\vec{v}\|}$

### The Dot Product & Orthogonality
The dot product of vectors $\vec{u} = \langle u_1, u_2 \rangle$ and $\vec{v} = \langle v_1, v_2 \rangle$ is an algebraic scalar:

$$\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2 = \|\vec{u}\| \|\vec{v}\| \cos\theta$$

$$\cos\theta = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\| \|\vec{v}\|}$$

$$\vec{u} \perp \vec{v} \iff \vec{u} \cdot \vec{v} = 0 \quad (\text{Orthogonality Criterion})$$

---

## 4.4 Matrices & Planar Transformations

A $2 \times 2$ matrix $M = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ maps points $(x, y)$ in the plane to new coordinates $(x', y')$:

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} ax + by \\ cx + dy \end{pmatrix}$$

- **Determinant:** $\det(M) = ad - bc$. The determinant measures the **area scaling factor** under the transformation. If $\det(M) < 0$, orientation is reversed (reflection).
- **Matrix Inverse:** If $\det(M) \neq 0$:
  $$M^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

### Geometric Transformation Matrices

$$\text{Counterclockwise Rotation by } \theta: \quad R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$$

$$\text{Reflection over } x\text{-axis}: \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, \quad \text{Reflection over } y = x: \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

$$\text{Horizontal & Vertical Scaling}: \begin{pmatrix} k_x & 0 \\ 0 & k_y \end{pmatrix}$$

---

!!! warning "AP Exam Trap: Domain and Orientation of Parametric Curves"
    When eliminating a parameter, always verify whether the parameter interval restricts the resulting Cartesian domain or range.
    
    For instance, if $x(t) = t^2$ and $y(t) = 2t$ for $t \in \mathbb{R}$:
    Substituting $t = y/2$ yields $x = (y/2)^2 = y^2/4$.
    
    However, because $x(t) = t^2 \ge 0$, the curve is strictly the portion of the parabola in the **right half-plane** ($x \ge 0$). Always specify restricted domains when eliminating parameters!

---

## Practice Problem & Solution

???+ question "Practice Problem 4.1: Vector Orthogonality & Matrix Transformation"
    Let vectors $\vec{u} = \langle 3, -4 \rangle$ and $\vec{v} = \langle 8, k \rangle$.
    
    a. Determine the value of scalar $k$ such that $\vec{u}$ and $\vec{v}$ are orthogonal.  
    b. A linear transformation is given by matrix $A = \begin{pmatrix} 2 & 1 \\ -1 & 3 \end{pmatrix}$. Calculate $\det(A)$ and determine the inverse matrix $A^{-1}$.  
    c. Use $A^{-1}$ to solve the linear system:
       $$\begin{aligned} 2x + y &= 7 \\ -x + 3y &= 7 \end{aligned}$$

??? success "Show Step-by-Step Solution"
    **Part a: Solve for $k$ using the dot product condition:**
    
    Two vectors are orthogonal if and only if their dot product equals zero:
    
    $$\vec{u} \cdot \vec{v} = (3)(8) + (-4)(k) = 0$$
    
    $$24 - 4k = 0 \implies 4k = 24 \implies k = \mathbf{6}$$
    
    ---
    
    **Part b: Compute $\det(A)$ and $A^{-1}$:**
    
    $$\det(A) = ad - bc = (2)(3) - (1)(-1) = 6 - (-1) = \mathbf{7}$$
    
    Since $\det(A) = 7 \neq 0$, the inverse exists:
    
    $$A^{-1} = \frac{1}{\det(A)} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} = \frac{1}{7} \begin{pmatrix} 3 & -1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} \dfrac{3}{7} & -\dfrac{1}{7} \\ \dfrac{1}{7} & \dfrac{2}{7} \end{pmatrix}$$
    
    ---
    
    **Part c: Solve the matrix equation $A X = B$:**
    
    The system can be written in matrix form as:
    
    $$\begin{pmatrix} 2 & 1 \\ -1 & 3 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 7 \\ 7 \end{pmatrix}$$
    
    Multiply both sides by $A^{-1}$:
    
    $$\begin{pmatrix} x \\ y \end{pmatrix} = A^{-1} \begin{pmatrix} 7 \\ 7 \end{pmatrix} = \frac{1}{7} \begin{pmatrix} 3 & -1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 7 \\ 7 \end{pmatrix}$$
    
    Perform the matrix-vector multiplication:
    
    $$\begin{pmatrix} x \\ y \end{pmatrix} = \frac{1}{7} \begin{pmatrix} (3)(7) + (-1)(7) \\ (1)(7) + (2)(7) \end{pmatrix} = \frac{1}{7} \begin{pmatrix} 21 - 7 \\ 7 + 14 \end{pmatrix} = \frac{1}{7} \begin{pmatrix} 14 \\ 21 \end{pmatrix} = \begin{pmatrix} \mathbf{2} \\ \mathbf{3} \end{pmatrix}$$
    
    Thus, $x = 2$ and $y = 3$.  
    *(Check: $2(2) + 3 = 7$ and $-2 + 3(3) = 7$).*
