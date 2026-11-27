---
title: "Unit 1: Kinematics"
description: Complete review of 1D and 2D kinematic equations, projectile motion, and graph analysis for AP Physics 1.
---

# Unit 1: Kinematics

Kinematics describes the motion of objects without reference to the forces causing that motion. We analyze position ($x$), velocity ($v$), acceleration ($a$), and time ($t$).

---

## 1.1 The Fundamental Kinematic Equations

For motion with **constant acceleration** ($a = \text{const}$), the AP Physics 1 equation sheet provides three core equations:

$$v_x = v_{0x} + a_x t$$

$$x = x_0 + v_{0x} t + \frac{1}{2} a_x t^2$$

$$v_x^2 = v_{0x}^2 + 2 a_x (x - x_0)$$

Additionally, when acceleration is constant, the average velocity equals the arithmetic mean:

$$\bar{v}_x = \frac{v_x + v_{0x}}{2} \implies \Delta x = \left(\frac{v_x + v_{0x}}{2}\right) t$$

---

## 1.2 Two-Dimensional Projectile Motion

In 2D projectile motion near Earth's surface (neglecting air resistance):
- **Horizontal Axis ($x$):** Zero acceleration ($a_x = 0$), constant velocity.
- **Vertical Axis ($y$):** Constant downward gravitational acceleration ($a_y = -g = -9.8\,\text{m/s}^2$).

$$\begin{aligned}
v_{0x} &= v_0 \cos\theta, & x(t) &= (v_0 \cos\theta) t \\
v_{0y} &= v_0 \sin\theta, & y(t) &= y_0 + (v_0 \sin\theta) t - \frac{1}{2} g t^2
\end{aligned}$$

---

!!! warning "AP Exam Trap: Horizontal vs. Vertical Independence"
    Remember that the horizontal and vertical motions are completely independent except for the shared variable: **time ($t$)**.
    
    A common trap on multiple-choice questions asks: *"If bullet A is fired horizontally and bullet B is dropped from the same height at the exact same instant, which hits the ground first?"*
    
    Both hit the ground at the exact same time because both start with $v_{0y} = 0$ and experience identical vertical acceleration $a_y = -g$.

---

## Practice Problem & Solution

???+ question "Practice Problem 1.1: Cliff Projectile Motion"
    A rescue ball is launched from the edge of a cliff of height $H = 45\,\text{m}$ with an initial velocity $v_0 = 20\,\text{m/s}$ at an angle of $\theta = 30^\circ$ above the horizontal. Assume $g = 10\,\text{m/s}^2$ and negligible air resistance.
    
    a. Calculate the total time of flight before the ball strikes the level ground below.  
    b. Determine the horizontal distance (range) traveled by the ball.

??? success "Show Step-by-Step Solution"
    **Step 1: Decompose the initial velocity vector:**
    
    $$\begin{aligned}
    v_{0x} &= v_0 \cos(30^\circ) = 20 \cdot \frac{\sqrt{3}}{2} = 10\sqrt{3}\,\text{m/s} \approx 17.32\,\text{m/s} \\
    v_{0y} &= v_0 \sin(30^\circ) = 20 \cdot \frac{1}{2} = 10\,\text{m/s}
    \end{aligned}$$
    
    ---
    
    **Step 2: Solve for time of flight using vertical motion:**
    
    Set the origin at the ground below the cliff so $y_0 = 45\,\text{m}$ and $y(t) = 0$:
    
    $$y(t) = y_0 + v_{0y} t - \frac{1}{2} g t^2$$
    
    $$0 = 45 + 10t - \frac{1}{2}(10) t^2 \implies -5t^2 + 10t + 45 = 0$$
    
    Divide through by $-5$:
    
    $$t^2 - 2t - 9 = 0$$
    
    Apply the quadratic formula:
    
    $$t = \frac{-(-2) \pm \sqrt{(-2)^2 - 4(1)(-9)}}{2(1)} = \frac{2 \pm \sqrt{4 + 36}}{2} = \frac{2 \pm \sqrt{40}}{2} = 1 \pm \sqrt{10}$$
    
    Since time must be positive ($t > 0$):
    
    $$t = 1 + \sqrt{10} \approx 1 + 3.162 = \mathbf{4.16\,\text{s}}$$
    
    ---
    
    **Step 3: Calculate horizontal range:**
    
    Since horizontal acceleration $a_x = 0$:
    
    $$\Delta x = v_{0x} \cdot t = (10\sqrt{3})(1 + \sqrt{10}) \approx 17.32 \times 4.162 \approx \mathbf{72.1\,\text{m}}$$
