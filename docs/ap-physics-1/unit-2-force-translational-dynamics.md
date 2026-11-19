---
title: "Unit 2: Force & Translational Dynamics"
description: Complete guide to Newton's laws of motion, free-body diagrams, friction, Hooke's law, and circular motion for AP Physics 1.
---

# Unit 2: Force & Translational Dynamics

Dynamics investigates the relationship between forces and changes in the translational motion of bodies, governed by Newton's three fundamental laws of motion.

---

## 2.1 Systems & Center of Mass

A **system** is a collection of objects treated as a single entity. The **center of mass** ($\vec{r}_{\text{cm}}$) represents the average position of the system's mass:

$$x_{\text{cm}} = \frac{\sum m_i x_i}{\sum m_i} = \frac{m_1 x_1 + m_2 x_2 + \dots + m_n x_n}{M_{\text{total}}}$$

If the net external force on a system is zero ($\sum \vec{F}_{\text{ext}} = 0$), the velocity of the center of mass remains constant ($\vec{v}_{\text{cm}} = \text{const}$), regardless of internal interactions.

---

## 2.2 Free-Body Diagrams (FBDs)

Free-body diagrams represent all external forces acting **directly on** an isolated object:
- Forces must originate at the center of the object (or point of application) pointing outward.
- **Never** include components on a graded AP Exam FBD unless explicitly asked; draw only the fundamental forces ($F_g, F_N, F_T, F_f, F_s$).
- **Never** draw "centripetal force" ($\vec{F}_c$) or "net force" ($\vec{F}_{\text{net}}$) as physical forces.

---

## 2.3 Newton's Laws of Motion

1. **Newton's First Law (Inertia):** An object continues in a state of rest or uniform velocity unless acted upon by a non-zero net external force:
   $$\sum \vec{F} = 0 \iff \vec{a} = 0 \quad (\text{Translational Equilibrium})$$
2. **Newton's Second Law:** The acceleration of an object is directly proportional to the net force and inversely proportional to its inertial mass:
   $$\sum \vec{F} = m \vec{a} \implies \begin{cases} \sum F_x = m a_x \\ \sum F_y = m a_y \end{cases}$$
3. **Newton's Third Law:** When body $A$ exerts force $\vec{F}_{A \to B}$ on body $B$, body $B$ exerts an equal and opposite force on body $A$:
   $$\vec{F}_{A \to B} = -\vec{F}_{B \to A}$$
   *(Third-law action-reaction pairs act on different objects and never cancel each other on a single FBD).*

---

## 2.4 Friction & Spring Forces

### Contact Friction
Friction opposes the relative sliding (or intended sliding) between two contact surfaces:
- **Static Friction ($f_s$):** Self-adjusting force preventing sliding up to a maximum threshold:
  $$f_s \le \mu_s F_N \implies f_{s,\text{max}} = \mu_s F_N$$
- **Kinetic Friction ($f_k$):** Acts once surfaces slide across each other:
  $$f_k = \mu_k F_N \quad (\text{with } \mu_k < \mu_s)$$

### Hooke's Law (Ideal Springs)
An ideal spring produces a linear restoring force proportional to displacement from equilibrium:

$$\vec{F}_s = -k \Delta\vec{x}$$

where $k$ is the spring constant ($\text{N/m}$) and $\Delta x$ is the extension or compression.

---

## 2.5 Uniform Circular Motion & Gravitation

An object moving in a circle of radius $r$ at constant speed $v$ undergoes continuous centripetal acceleration directed toward the center of curvature:

$$a_c = \frac{v^2}{r} = \omega^2 r$$

The required net inward radial force is provided by real physical forces (e.g., tension, gravity, normal force, friction):

$$\sum F_{\text{radial}} = m a_c = \frac{m v^2}{r}$$

### Newton's Universal Law of Gravitation
Every pair of point masses attracts with a mutual gravitational force inversely proportional to the square of their center-to-center separation $r$:

$$F_g = G \frac{m_1 m_2}{r^2} \quad \left(G \approx 6.674 \times 10^{-11}\,\text{N}\cdot\text{m}^2/\text{kg}^2\right)$$

At the surface of a spherical planet of mass $M$ and radius $R$:

$$g = G \frac{M}{R^2}$$

---

!!! warning "AP Exam Trap: Normal Force is Not Automatically Equal to $mg$"
    Students frequently assume $F_N = mg$. The normal force is a **constraint force** whose magnitude adjusts based on all vertical forces:
    
    - On a horizontal surface with a downward push at angle $\theta$: $F_N = mg + F\sin\theta$.
    - On a ramp inclined at angle $\theta$: $F_N = mg \cos\theta$.
    - Inside an elevator accelerating upward at $a$: $F_N = m(g + a)$.
    
    Always set up $\sum F_y = m a_y$ from your FBD to solve for $F_N$ algebraically before computing friction!

---

## 📝 Practice Problem & Solution

???+ question "Practice Problem 2.1: Block on an Incline with Friction"
    A crate of mass $m = 10\,\text{kg}$ is placed on an incline tilted at an angle of $\theta = 37^\circ$ above the horizontal ($\sin 37^\circ \approx 0.60$, $\cos 37^\circ \approx 0.80$). The coefficients of friction between the crate and the incline are $\mu_s = 0.50$ and $\mu_k = 0.30$. Take $g = 10\,\text{m/s}^2$.
    
    a. Determine whether the crate remains at rest or begins to slide down the ramp.  
    b. If the crate slides, calculate the magnitude of its acceleration down the incline.

??? success "Show Step-by-Step Solution"
    **Part a: Check if the block slides (Static vs. Driving Force):**
    
    Set up a tilted coordinate system with the $x$-axis pointing down the ramp and the $y$-axis perpendicular to the ramp:
    
    1. **Perpendicular forces ($y$-axis):**
       $$\sum F_y = F_N - mg\cos\theta = 0 \implies F_N = mg\cos\theta$$
       $$F_N = (10)(10)(\cos 37^\circ) = (100)(0.80) = 80\,\text{N}$$
    
    2. **Maximum static friction:**
       $$f_{s,\text{max}} = \mu_s F_N = (0.50)(80\,\text{N}) = 40\,\text{N}$$
    
    3. **Gravitational component down the incline ($x$-axis):**
       $$F_{g,\parallel} = mg\sin\theta = (10)(10)(\sin 37^\circ) = (100)(0.60) = 60\,\text{N}$$
    
    Since $F_{g,\parallel} = 60\,\text{N} > f_{s,\text{max}} = 40\,\text{N}$, static friction is overcome and the crate **slides down the incline**.
    
    ---
    
    **Part b: Calculate acceleration down the incline:**
    
    Once the crate slides, kinetic friction opposes the motion:
    
    $$f_k = \mu_k F_N = (0.30)(80\,\text{N}) = 24\,\text{N}$$
    
    Apply Newton's Second Law along the parallel axis:
    
    $$\sum F_x = mg\sin\theta - f_k = m a_x$$
    
    $$60\,\text{N} - 24\,\text{N} = (10\,\text{kg}) a_x$$
    
    $$36 = 10 a_x \implies a_x = \mathbf{3.6\,\text{m/s}^2}$$
