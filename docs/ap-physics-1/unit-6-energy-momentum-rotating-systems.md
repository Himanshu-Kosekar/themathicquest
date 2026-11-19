---
title: "Unit 6: Energy & Momentum of Rotating Systems"
description: Complete review of rotational kinetic energy, rolling without slipping, angular momentum conservation, and angular impulse for AP Physics 1.
---

# Unit 6: Energy & Momentum of Rotating Systems

Rotating bodies possess both kinetic energy distributed across their moving mass and angular momentum that remains conserved in the absence of net external torques.

---

## 6.1 Rotational Kinetic Energy & Work

For a rigid body rotating with angular velocity $\omega$ about an axis:

$$K_{\text{rot}} = \frac{1}{2} I \omega^2$$

### Work Done by a Torque
A torque $\tau$ acting through an angular displacement $\Delta\theta$ does work on the rotating system:

$$W = \tau \Delta\theta$$

By the **Work-Energy Theorem for Rotation**:

$$W_{\text{net}} = \Delta K_{\text{rot}} = \frac{1}{2} I \omega_f^2 - \frac{1}{2} I \omega_i^2$$

---

## 6.2 Rolling Without Slipping

When a symmetrical object (cylinder, sphere, hoop) of mass $M$ and radius $R$ rolls without slipping along a surface:
- The point of contact with the ground is **instantaneously at rest** ($v_{\text{contact}} = 0$), held by static friction.
- The translational center of mass speed and angular speed are coupled:
  $$v_{\text{cm}} = R \omega$$

### Total Mechanical Kinetic Energy
The total kinetic energy is partitioned into translational and rotational contributions:

$$K_{\text{total}} = K_{\text{trans}} + K_{\text{rot}} = \frac{1}{2} M v_{\text{cm}}^2 + \frac{1}{2} I_{\text{cm}} \omega^2$$

Writing $I_{\text{cm}} = c M R^2$ (where $c$ is the shape constant, e.g. $c = 1/2$ for a disk, $c = 2/5$ for a sphere):

$$K_{\text{total}} = \frac{1}{2} M v_{\text{cm}}^2 + \frac{1}{2}(c M R^2)\left(\frac{v_{\text{cm}}}{R}\right)^2 = \frac{1}{2} M v_{\text{cm}}^2(1 + c)$$

---

## 6.3 Angular Momentum

**Angular momentum** ($\vec{L}$) is the rotational analog of linear momentum:

1. **For a Rigid Extended Object Rotating about a Principal Axis:**
   $$L = I \omega$$
2. **For a Point Particle of Mass $m$ Moving at Velocity $\vec{v}$ Relative to a Pivot:**
   $$L = r_\perp p = m v r \sin\theta$$
   where $r_\perp$ is the perpendicular distance from the chosen origin to the particle's velocity vector line.

---

## 6.4 The Angular Impulse-Momentum Theorem

Newton's Second Law for rotation in terms of angular momentum:

$$\vec{\tau}_{\text{net}} = \frac{\Delta\vec{L}}{\Delta t} \implies \Delta\vec{L} = \vec{\tau}_{\text{net}} \Delta t$$

The **angular impulse** imparted by an external torque produces a change in the total angular momentum of the system.

---

## 6.5 Conservation of Angular Momentum

If the net external torque acting on a system about a chosen axis is zero ($\sum \vec{\tau}_{\text{ext}} = 0$):

$$\sum \vec{L}_i = \sum \vec{L}_f \iff I_i \omega_i = I_f \omega_f$$

### Key Physical Phenomenon: Changing Rotational Inertia
When an internal mechanism alters mass distribution (e.g., a spinning figure skater pulling their arms inward):
- $I$ decreases $\implies \omega$ must increase to preserve $L = I\omega$.
- **Kinetic energy is NOT conserved**: $K = \frac{L^2}{2I}$ **increases** because the skater's muscles perform positive work pulling the mass inward against centrifugal effects!

---

!!! tip "AP Exam Tip: The Great Incline Rolling Race"
    A classic AP Physics 1 question releases a solid sphere ($I = \frac{2}{5}MR^2$), a uniform disk ($I = \frac{1}{2}MR^2$), and a hollow hoop ($I = MR^2$) from rest at the top of an incline of height $h$.
    
    By energy conservation:
    $$M g h = \frac{1}{2} M v^2(1 + c) \implies v = \sqrt{\frac{2gh}{1 + c}}$$
    
    - Smaller $c \implies$ less energy diverted to rotation $\implies$ higher linear speed $v$.
    - **Finishing order:** Solid Sphere ($c = 0.40$) wins first, followed by Disk ($c = 0.50$), and Hoop ($c = 1.0$) finishes last!
    - **Notice:** This result is completely independent of the mass $M$ and radius $R$!

---

## 📝 Practice Problem & Solution

???+ question "Practice Problem 6.1: Point Mass Striking a Pivoted Rod"
    A uniform thin rod of mass $M = 3.0\,\text{kg}$ and length $L = 0.80\,\text{m}$ is pivoted at its top end about a frictionless horizontal pin ($I_{\text{rod}} = \frac{1}{3}ML^2$). The rod hangs vertically at rest.
    
    A small sticky clay blob of mass $m = 0.50\,\text{kg}$ traveling horizontally with velocity $v_0 = 12\,\text{m/s}$ strikes the very bottom tip of the rod and sticks to it.
    
    a. Calculate the rotational inertia of the combined rod + clay system about the pivot immediately after impact.  
    b. Using conservation of angular momentum about the pivot, calculate the initial angular velocity $\omega$ of the system immediately following the collision.

??? success "Show Step-by-Step Solution"
    **Part a: Rotational inertia of the composite system:**
    
    The composite rotational inertia about the pivot is the sum of the rod and the clay blob (treated as a point mass at distance $L$):
    
    $$I_{\text{total}} = I_{\text{rod}} + I_{\text{clay}} = \frac{1}{3} M L^2 + m L^2 = \left(\frac{1}{3}M + m\right) L^2$$
    
    Substitute the numerical values:
    
    $$I_{\text{total}} = \left(\frac{1}{3}(3.0) + 0.50\right) (0.80)^2 = (1.0 + 0.50)(0.64) = (1.50)(0.64) = \mathbf{0.96\,\text{kg}\cdot\text{m}^2}$$
    
    ---
    
    **Part b: Angular velocity from conservation of angular momentum:**
    
    Choose the pivot as the origin. During the brief collision, external forces act at the pivot ($r = 0$), so the external torque about the pivot is zero ($\tau_{\text{ext}} = 0$). Angular momentum is conserved:
    
    $$L_i = L_f$$
    
    Before the collision, the rod is at rest. The moving clay blob has angular momentum:
    
    $$L_i = r_\perp p = L(m v_0)$$
    
    $$L_i = (0.80\,\text{m})(0.50\,\text{kg})(12\,\text{m/s}) = (0.80)(6.0) = 4.8\,\text{kg}\cdot\text{m}^2/\text{s}$$
    
    After the collision, the combined system rotates as a single rigid body with angular momentum:
    
    $$L_f = I_{\text{total}} \omega$$
    
    Set $L_i = L_f$:
    
    $$4.8 = 0.96 \omega$$
    
    $$\omega = \frac{4.8}{0.96} = \mathbf{5.0\,\text{rad/s}}$$
