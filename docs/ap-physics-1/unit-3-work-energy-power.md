---
title: "Unit 3: Work, Energy, & Power"
description: Complete review of translational kinetic energy, work-energy theorem, potential energy, open vs. closed systems, and power for AP Physics 1.
---

# Unit 3: Work, Energy, & Power

Energy is a scalar quantity that characterizes the ability of a system to undergo transformations. Work represents the mechanical mechanism of transferring energy into or out of a defined system.

---

## 3.1 Work Done by a Force

The mechanical **work** ($W$) done by a constant force $\vec{F}$ acting on an object displaced by $\Delta\vec{r}$ is defined by the vector dot product:

$$W = \vec{F} \cdot \Delta\vec{r} = F \|\Delta\vec{r}\| \cos\theta$$

where $\theta$ is the angle between the force vector and the displacement vector:
- **Positive Work ($\theta < 90^\circ$):** Force adds kinetic energy to the object.
- **Zero Work ($\theta = 90^\circ$):** Perpendicular forces (such as the normal force on a flat horizontal track or centripetal tension in circular motion) do no work.
- **Negative Work ($\theta > 90^\circ$):** Opposing forces (such as kinetic friction) remove kinetic energy from the object.

### Work from a Variable Force Graph
For a position-dependent force $F(x)$, the work equals the **area under the Force vs. Position curve**:

$$W = \int_{x_i}^{x_f} F(x)\,dx$$

---

## 3.2 Kinetic Energy & The Work-Energy Theorem

The **translational kinetic energy** ($K$) of an object of mass $m$ moving at speed $v$ is:

$$K = \frac{1}{2} m v^2$$

### The Work-Energy Theorem
The net external work done on a single point-like object equals the net change in its kinetic energy:

$$W_{\text{net}} = \sum W_i = \Delta K = K_f - K_i = \frac{1}{2}m v_f^2 - \frac{1}{2}m v_i^2$$

---

## 3.3 Conservative Forces & Potential Energies

A force is **conservative** if the work it does on an object moving between two points is path-independent (or zero around any closed loop):

$$W_{\text{conservative}} = -\Delta U = -(U_f - U_i)$$

1. **Gravitational Potential Energy ($U_g$):** For an object of mass $m$ near Earth's surface relative to reference height $y = 0$:
   $$U_g = m g h$$
2. **Elastic Potential Energy ($U_s$):** For an ideal spring of stiffness $k$ compressed or stretched by displacement $x$:
   $$U_s = \frac{1}{2} k x^2$$

---

## 3.4 Conservation of Mechanical Energy

The total mechanical energy of a system is the sum of its kinetic and potential energies:

$$E_{\text{mech}} = K + U = K + U_g + U_s$$

### System Boundary Choices
- **Closed (Isolated) System:** When no external non-conservative forces do work on the system ($W_{\text{ext}} = 0$):
  $$E_i = E_f \iff K_i + U_i = K_f + U_f$$
- **Open System with Non-Conservative Work:** When friction or applied external forces act:
  $$E_i + W_{\text{ext}} = E_f \implies K_i + U_i - f_k d = K_f + U_f$$

---

## 3.5 Mechanical Power

**Power** ($P$) is the instantaneous or average rate at which work is performed or energy is transformed:

$$\bar{P} = \frac{\Delta E}{\Delta t} = \frac{W}{\Delta t}$$

For a constant driving force $\vec{F}$ moving an object at velocity $\vec{v}$:

$$P = \vec{F} \cdot \vec{v} = F v \cos\theta$$

---

!!! tip "AP Exam Tip: System Definition Dictates Whether Gravity is Work or Potential Energy"
    On Free-Response Question energy derivations, your choice of system defines the mathematical formulation:
    
    - **System = Block:** Earth is external to the system. Gravity is an **external force** that performs external work on the block: $W_g = \Delta K$. There is no potential energy term!
    - **System = Block + Earth:** Gravity is an **internal conservative force**. The gravitational interaction is stored as potential energy: $\Delta K + \Delta U_g = 0$.
    
    Both choices yield identical final speeds, but mixing them (e.g., claiming both $W_g$ and $\Delta U_g$ are present) double-counts gravity and loses credit.

---

## 📝 Practice Problem & Solution

???+ question "Practice Problem 3.1: Spring-Launched Cart with Friction"
    A cart of mass $m = 2.0\,\text{kg}$ is pushed against a horizontal spring of spring constant $k = 800\,\text{N/m}$, compressing it by $x = 0.20\,\text{m}$.
    
    Upon release from rest, the cart travels across a frictionless horizontal table, and then encounters a rough section of track of length $d = 1.5\,\text{m}$ where the coefficient of kinetic friction is $\mu_k = 0.25$. Finally, it glides smoothly up a frictionless curved ramp. Take $g = 10\,\text{m/s}^2$.
    
    a. Calculate the speed of the cart immediately after leaving the spring (before the rough section).  
    b. Calculate the work done by friction as the cart traverses the rough section.  
    c. Determine the maximum vertical height $h_{\text{max}}$ the cart reaches on the frictionless ramp.

??? success "Show Step-by-Step Solution"
    **Part a: Speed leaving the spring:**
    
    Define the system as the cart + spring + table (frictionless initially). Mechanical energy is conserved:
    
    $$U_{s,i} = K_1 \implies \frac{1}{2} k x^2 = \frac{1}{2} m v_1^2$$
    
    $$v_1 = \sqrt{\frac{k}{m}} x = \sqrt{\frac{800}{2.0}} (0.20) = \sqrt{400} (0.20) = (20)(0.20) = \mathbf{4.0\,\text{m/s}}$$
    
    ---
    
    **Part b: Work done by kinetic friction:**
    
    On the flat rough section, the normal force is $F_N = mg = (2.0)(10) = 20\,\text{N}$.
    
    The magnitude of the kinetic friction force is:
    
    $$f_k = \mu_k F_N = (0.25)(20\,\text{N}) = 5.0\,\text{N}$$
    
    Friction acts directly opposite to the displacement ($\theta = 180^\circ$):
    
    $$W_f = -f_k \cdot d = -(5.0\,\text{N})(1.5\,\text{m}) = \mathbf{-7.5\,\text{J}}$$
    
    ---
    
    **Part c: Maximum vertical height on the ramp:**
    
    Apply the conservation of energy between the initial spring compression and the maximum height on the ramp ($v_{\text{top}} = 0$):
    
    $$E_i + W_f = E_f$$
    
    $$U_{s,i} + W_f = U_{g,f}$$
    
    $$\frac{1}{2} k x^2 - 7.5\,\text{J} = m g h_{\text{max}}$$
    
    Initial spring energy:
    
    $$U_{s,i} = \frac{1}{2}(800)(0.20)^2 = 400(0.04) = 16.0\,\text{J}$$
    
    Remaining mechanical energy entering the ramp:
    
    $$E_{\text{ramp}} = 16.0\,\text{J} - 7.5\,\text{J} = 8.5\,\text{J}$$
    
    Solve for $h_{\text{max}}$:
    
    $$8.5\,\text{J} = m g h_{\text{max}} = (2.0)(10) h_{\text{max}} = 20 h_{\text{max}}$$
    
    $$h_{\text{max}} = \frac{8.5}{20} = \mathbf{0.425\,\text{m}} = 42.5\,\text{cm}$$
