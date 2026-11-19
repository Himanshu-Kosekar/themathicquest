---
title: "Unit 5: Torque & Rotational Dynamics"
description: Complete review of rotational kinematics, torque, rotational inertia, static equilibrium, and Newton's second law for rotation for AP Physics 1.
---

# Unit 5: Torque & Rotational Dynamics

Rotational dynamics extends translational mechanics to extended rigid bodies that rotate about a fixed axis or center of mass.

---

## 5.1 Rotational Kinematics

When an extended object rotates about a fixed axis, all points on the body undergo identical angular displacement ($\theta$), angular velocity ($\omega$), and angular acceleration ($\alpha$).

| Angular Variable | Translational Analogy (at radius $r$) | Relationship |
| :--- | :--- | :--- |
| Angular Position $\theta$ (rad) | Linear Arc Length $s$ (m) | $s = r \theta$ |
| Angular Velocity $\omega$ (rad/s) | Tangential Speed $v_t$ (m/s) | $v_t = r \omega$ |
| Angular Acceleration $\alpha$ ($\text{rad/s}^2$) | Tangential Acceleration $a_t$ ($\text{m/s}^2$) | $a_t = r \alpha$ |
| Centripetal Acceleration $a_c$ | Centripetal Acceleration | $a_c = \frac{v_t^2}{r} = \omega^2 r$ |

### Constant Angular Acceleration Equations
For constant $\alpha$:

$$\omega = \omega_0 + \alpha t$$

$$\theta = \theta_0 + \omega_0 t + \frac{1}{2} \alpha t^2$$

$$\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)$$

---

## 5.2 Torque

**Torque** ($\vec{\tau}$) is the quantitative measure of a force's effectiveness at causing or altering rotational motion about a designated pivot point:

$$\tau = r F \sin\theta = r_\perp F = r F_\perp$$

where:
- $r$ is the distance from the pivot point (axis of rotation) to the point where the force is applied.
- $\theta$ is the angle between the position vector $\vec{r}$ and the force vector $\vec{F}$.
- $r_\perp = r\sin\theta$ is the **lever arm** (perpendicular distance from the pivot to the line of action of the force).
- **Sign Convention:** Counterclockwise torques are standardly positive ($+$); clockwise torques are negative ($-$).

---

## 5.3 Rotational Inertia (Moment of Inertia)

**Rotational inertia** ($I$) measures an object's resistance to changes in its rotational state. It depends not only on total mass, but on **how that mass is distributed relative to the axis of rotation**:

$$I = \sum m_i r_i^2 = \int r^2\,dm$$

### Common Moments of Inertia (Mass $M$, Radius $R$)
- **Hoop / Thin Cylindrical Shell (about central axis):** $I = M R^2$
- **Solid Uniform Cylinder / Disk (about central axis):** $I = \frac{1}{2} M R^2$
- **Solid Uniform Sphere (about diameter):** $I = \frac{2}{5} M R^2$
- **Thin Hollow Spherical Shell:** $I = \frac{2}{3} M R^2$
- **Thin Uniform Rod of length $L$ (about center):** $I = \frac{1}{12} M L^2$
- **Thin Uniform Rod of length $L$ (about one end):** $I = \frac{1}{3} M L^2$

---

## 5.4 Static Equilibrium

For an extended body to remain in complete **static equilibrium** (neither translating nor rotating):

$$\sum \vec{F}_x = 0 \quad \text{and} \quad \sum \vec{F}_y = 0 \quad (\text{Translational Equilibrium})$$

$$\sum \tau_{\text{pivot}} = 0 \quad (\text{Rotational Equilibrium})$$

*(If an object is in translational equilibrium, the net torque is identical about any arbitrary pivot point).*

---

## 5.5 Newton's Second Law for Rotation

When a non-zero net external torque acts on a rigid body of rotational inertia $I$:

$$\sum \tau_{\text{net}} = I \alpha$$

---

!!! tip "AP Exam Tip: Choosing the Pivot to Eliminate Unknown Forces"
    When solving static equilibrium problems (such as a ladder resting against a wall or a sign hanging from a hinged strut):
    
    Always place your reference pivot point at the location of an **unknown, unrequested force** (e.g., the hinge pin or the rough floor).
    
    Because the distance $r = 0$ for forces acting directly at the pivot, their torques are identically zero ($\tau = 0$). This removes those unknown forces from your torque balance equation, allowing you to solve for the target variable in a single equation!

---

## 📝 Practice Problem & Solution

???+ question "Practice Problem 5.1: Massive Pulley with Hanging Mass"
    A uniform solid disk pulley of mass $M = 4.0\,\text{kg}$ and radius $R = 0.20\,\text{m}$ ($I = \frac{1}{2}MR^2$) is mounted on a frictionless horizontal axle. A light string wrapped around the perimeter of the pulley is attached to a hanging block of mass $m = 2.0\,\text{kg}$.
    
    The system is released from rest. Assume the string does not slip on the pulley. Take $g = 10\,\text{m/s}^2$.
    
    a. Draw the free-body diagram for the block and the torque diagram for the pulley.  
    b. Calculate the linear acceleration $a$ of the descending block.  
    c. Calculate the tension $T$ in the string during the descent.

??? success "Show Step-by-Step Solution"
    **Part a & b: Calculate linear acceleration $a$:**
    
    1. **For the hanging mass $m$ (translating downward):**
       Apply Newton's Second Law:
       $$\sum F_y = m g - T = m a \implies T = m(g - a)$$
    
    2. **For the pulley $M$ (rotating clockwise):**
       The string tension exerts a tangential torque at radius $R$ ($\theta = 90^\circ$):
       $$\tau_{\text{net}} = T \cdot R = I \alpha$$
    
    3. **No-slip condition:**
       The linear acceleration of the string matches the tangential acceleration of the rim:
       $$a = R \alpha \implies \alpha = \frac{a}{R}$$
    
    4. **Combine equations:**
       Substitute $I = \frac{1}{2}MR^2$ and $\alpha = \frac{a}{R}$:
       $$T \cdot R = \left(\frac{1}{2}M R^2\right) \left(\frac{a}{R}\right) = \frac{1}{2} M R a$$
       Divide through by $R$:
       $$T = \frac{1}{2} M a$$
    
    5. **Substitute $T$ into the block's equation:**
       $$m g - \frac{1}{2} M a = m a$$
       $$m g = \left(m + \frac{1}{2} M\right) a$$
       $$a = \frac{m g}{m + \frac{1}{2} M} = \frac{(2.0)(10)}{2.0 + \frac{1}{2}(4.0)} = \frac{20}{2.0 + 2.0} = \frac{20}{4.0} = \mathbf{5.0\,\text{m/s}^2}$$
    
    ---
    
    **Part c: Determine string tension $T$:**
    
    Using $T = \frac{1}{2} M a$:
    
    $$T = \frac{1}{2}(4.0\,\text{kg})(5.0\,\text{m/s}^2) = \mathbf{10\,\text{N}}$$
    
    *(Notice that $T = 10\,\text{N} < mg = 20\,\text{N}$, which is required for the hanging block to accelerate downward).*
