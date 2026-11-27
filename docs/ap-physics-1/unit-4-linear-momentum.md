---
title: "Unit 4: Linear Momentum"
description: Master impulse, momentum conservation, center-of-mass motion, and collision dynamics for AP Physics 1.
---

# Unit 4: Linear Momentum

Momentum is a fundamental vector quantity that measures an object's resistance to stopping, representing inertia in motion.

---

## 4.1 Linear Momentum & Impulse

The **linear momentum** ($\vec{p}$) of an object of mass $m$ traveling with velocity $\vec{v}$ is:

$$\vec{p} = m \vec{v}$$

Momentum is a vector quantity having the same direction as the velocity vector, measured in $\text{kg}\cdot\text{m/s}$ or $\text{N}\cdot\text{s}$.

### The Impulse-Momentum Theorem
Newton's Second Law can be expressed in terms of momentum:

$$\vec{F}_{\text{net}} = \frac{\Delta\vec{p}}{\Delta t} \implies \vec{J} = \vec{F}_{\text{net}} \Delta t = \Delta\vec{p} = m\vec{v}_f - m\vec{v}_i$$

The vector **Impulse** ($\vec{J}$) produces a change in the momentum of the object:
- For a variable force $\vec{F}(t)$, the impulse equals the **area under the Force vs. Time graph**:
  $$\vec{J} = \int_{t_i}^{t_f} \vec{F}(t)\,dt = \vec{F}_{\text{avg}} \Delta t$$

---

## 4.2 Conservation of Linear Momentum

For a system of interacting particles, the internal forces between bodies occur in equal and opposite pairs by Newton's Third Law ($\vec{F}_{12} = -\vec{F}_{21}$).

If the net external force acting on the system is zero ($\sum \vec{F}_{\text{ext}} = 0$), the total linear momentum of the system is strictly conserved:

$$\sum \vec{p}_i = \sum \vec{p}_f \implies m_1 \vec{v}_{1i} + m_2 \vec{v}_{2i} = m_1 \vec{v}_{1f} + m_2 \vec{v}_{2f}$$

In two dimensions, momentum conservation holds independently along each orthogonal axis:

$$\sum p_{ix} = \sum p_{fx} \quad \text{and} \quad \sum p_{iy} = \sum p_{fy}$$

---

## 4.3 Center of Mass Velocity

The velocity of the center of mass of a system of particles is:

$$\vec{v}_{\text{cm}} = \frac{\sum m_i \vec{v}_i}{\sum m_i} = \frac{\vec{p}_{\text{total}}}{M_{\text{total}}}$$

In an isolated system ($\vec{F}_{\text{ext}} = 0$), the center of mass velocity **cannot change**:

$$\vec{v}_{\text{cm}} = \text{constant}$$

---

## 4.4 Classification of Collisions

Total momentum is conserved in **all collisions** within an isolated system. Collisions are classified by what happens to total mechanical kinetic energy:

| Collision Type | Momentum Conserved? | Kinetic Energy Conserved? | Key Physical Characteristics |
| :--- | :---: | :---: | :--- |
| **Elastic** | Yes | Yes ($K_i = K_f$) | Ideal atomic collisions, bouncy magnetic gliders |
| **Inelastic** | Yes | No ($K_f < K_i$) | Energy transformed into thermal, sound, deformation |
| **Completely Inelastic** | Yes | Maximum $K$ loss | Bodies stick together and move with identical final velocity $v_f$ |
| **Explosion / Separation** | Yes | $K_f > K_i$ | Chemical/stored elastic potential energy converts to kinetic |

### Completely Inelastic Collision Formula
When two masses collide and stick together:

$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2) v_f \implies v_f = \frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$$

---

!!! warning "AP Exam Trap: Momentum is a Vector (Watch the Negative Signs!)"
    A frequent error on AP Physics 1 exams is treating momentum as a scalar when an object bounces off a barrier.
    
    Consider a rubber ball of mass $m$ striking a rigid wall with speed $v$ and bouncing back with the same speed $v$:
    - Initial momentum: $p_i = +mv$
    - Final momentum: $p_f = -mv$
    - **Change in momentum (Impulse):**
      $$\Delta p = p_f - p_i = -mv - (+mv) = -2mv \quad (\text{Magnitude } 2mv)$$
    
    If you forget the negative direction of $\vec{v}_f$, you will incorrectly calculate $\Delta p = 0$!

---

## Practice Problem & Solution

???+ question "Practice Problem 4.1: The Ballistic Pendulum"
    In a classic laboratory ballistic pendulum experiment, a wooden block of mass $M = 1.95\,\text{kg}$ is suspended from lightweight cords of length $L = 1.2\,\text{m}$. A bullet of mass $m = 0.05\,\text{kg}$ is fired horizontally with speed $v_0$ into the block, embedding itself completely.
    
    After the collision, the block + embedded bullet pendulum swings upward, reaching a maximum vertical height of $h = 0.20\,\text{m}$. Take $g = 10\,\text{m/s}^2$.
    
    a. Determine the speed $V$ of the block + bullet system immediately after the collision.  
    b. Calculate the initial speed $v_0$ of the bullet.  
    c. Determine the amount of mechanical energy dissipated during the collision.

??? success "Show Step-by-Step Solution"
    **Part a: Speed $V$ immediately after collision (Energy Conservation during swing):**
    
    After the bullet embeds, external forces are gravity and tension (which does zero work because it is perpendicular to motion). Mechanical energy is conserved during the upward swing:
    
    $$K_{\text{post-collision}} = U_{g,\text{top}}$$
    
    $$\frac{1}{2}(m + M) V^2 = (m + M) g h$$
    
    $$V = \sqrt{2gh} = \sqrt{2(10)(0.20)} = \sqrt{4.0} = \mathbf{2.0\,\text{m/s}}$$
    
    ---
    
    **Part b: Initial speed $v_0$ of the bullet (Momentum Conservation during collision):**
    
    During the collision impact, the collision time is infinitesimal ($\Delta t \to 0$), so external forces (gravity) impart negligible impulse. Total linear momentum is conserved:
    
    $$p_{\text{initial}} = p_{\text{final}}$$
    
    $$m v_0 + M(0) = (m + M) V$$
    
    $$v_0 = \frac{m + M}{m} V = \frac{0.05 + 1.95}{0.05} (2.0) = \frac{2.00}{0.05} (2.0) = (40)(2.0) = \mathbf{80\,\text{m/s}}$$
    
    ---
    
    **Part c: Energy dissipated during collision:**
    
    - **Initial kinetic energy:**
      $$K_i = \frac{1}{2} m v_0^2 = \frac{1}{2}(0.05\,\text{kg})(80\,\text{m/s})^2 = \frac{1}{2}(0.05)(6{,}400) = 160\,\text{J}$$
    
    - **Kinetic energy immediately after collision:**
      $$K_f = \frac{1}{2}(m + M) V^2 = \frac{1}{2}(2.00\,\text{kg})(2.0\,\text{m/s})^2 = \frac{1}{2}(2.00)(4.0) = 4.0\,\text{J}$$
    
    - **Energy dissipated:**
      $$\Delta E_{\text{lost}} = K_i - K_f = 160\,\text{J} - 4.0\,\text{J} = \mathbf{156\,\text{J}}$$
    
    *(Over $97.5\%$ of the mechanical energy was dissipated into heat, deformation, and sound during the inelastic embedding).*
