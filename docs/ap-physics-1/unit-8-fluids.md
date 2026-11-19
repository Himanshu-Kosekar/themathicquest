---
title: "Unit 8: Fluids"
description: Complete review of density, hydrostatic pressure, Archimedes' buoyant force, continuity equation, and Bernoulli's equation for AP Physics 1.
---

# Unit 8: Fluids

Fluids (liquids and gases) represent states of matter that yield continuously to shear stress and assume the shape of their containing boundaries.

---

## 8.1 Density & Pressure

- **Density ($\rho$):** Mass per unit volume (in $\text{kg/m}^3$):
  $$\rho = \frac{m}{V}$$
  *(For water at standard conditions, $\rho_{\text{water}} = 1{,}000\,\text{kg/m}^3 = 1.0\,\text{g/cm}^3$).*

- **Pressure ($P$):** Normal compressive force exerted per unit surface area (in Pascals, $\text{Pa} = \text{N/m}^2$):
  $$P = \frac{F_\perp}{A}$$
  *(Standard atmospheric pressure: $P_{\text{atm}} = 1.013 \times 10^5\,\text{Pa} \approx 101\,\text{kPa}$).*

---

## 8.2 Hydrostatic Pressure & Pascal's Principle

For an incompressible fluid of uniform density $\rho$ at rest, pressure increases linearly with vertical depth $h$:

$$P = P_0 + \rho g h$$

where:
- $P_0$ is the pressure at the liquid surface (often $P_{\text{atm}}$).
- $\rho g h$ is the hydrostatic pressure contributed by the fluid column.
- **Gauge Pressure ($P_g$):** The difference between absolute pressure and atmospheric pressure:
  $$P_g = P - P_{\text{atm}} = \rho g h$$

### Pascal's Principle
An external pressure applied to an enclosed, incompressible fluid is transmitted undiminished to every portion of the fluid and container walls:

$$\Delta P_1 = \Delta P_2 \implies \frac{F_1}{A_1} = \frac{F_2}{A_2} \implies F_2 = F_1 \left(\frac{A_2}{A_1}\right)$$

---

## 8.3 Archimedes' Principle & Buoyancy

An object wholly or partially immersed in a fluid experiences an upward **buoyant force** ($\vec{F}_b$) equal to the weight of the fluid displaced by the object:

$$F_b = m_{\text{fluid, displaced}} \, g = \rho_{\text{fluid}} V_{\text{submerged}} g$$

### Floating & Sinking Criteria
1. **Fully Submerged Object:**
   $$F_{\text{net}} = F_b - F_g = \rho_{\text{fluid}} V g - \rho_{\text{object}} V g = (\rho_{\text{fluid}} - \rho_{\text{object}}) V g$$
   - Sinks if $\rho_{\text{object}} > \rho_{\text{fluid}}$.
   - Suspended if $\rho_{\text{object}} = \rho_{\text{fluid}}$.
2. **Floating Object in Static Equilibrium ($\sum F_y = 0$):**
   $$F_b = F_g \implies \rho_{\text{fluid}} V_{\text{submerged}} g = \rho_{\text{object}} V_{\text{total}} g$$
   $$\frac{V_{\text{submerged}}}{V_{\text{total}}} = \frac{\rho_{\text{object}}}{\rho_{\text{fluid}}}$$
   *(The fraction submerged equals the ratio of object density to fluid density).*

---

## 8.4 Fluid Dynamics: The Continuity Equation

For an ideal fluid (incompressible, non-viscous, laminar streamline flow), mass conservation dictates that the volumetric flow rate ($Q$) remains constant along a pipe of varying cross-sectional area:

$$Q = A_1 v_1 = A_2 v_2 = \text{constant}$$

where $A$ is the cross-sectional area and $v$ is the average fluid velocity:
- As the pipe narrows ($A$ decreases), fluid speed $v$ must **increase** proportionally:
  $$v_2 = v_1 \left(\frac{A_1}{A_2}\right)$$

---

## 8.5 Bernoulli's Equation

Bernoulli's equation represents the work-energy theorem applied to a continuous fluid streamline:

$$P_1 + \frac{1}{2}\rho v_1^2 + \rho g y_1 = P_2 + \frac{1}{2}\rho v_2^2 + \rho g y_2 = \text{constant}$$

where:
- $P$ is the static pressure energy density.
- $\frac{1}{2}\rho v^2$ is the kinetic energy density of fluid motion.
- $\rho g y$ is the gravitational potential energy density.

### Torricelli's Law
For a large open tank of liquid with a small drain hole at depth $h$ below the surface ($A_{\text{tank}} \gg A_{\text{hole}} \implies v_{\text{surface}} \approx 0$ and $P_{\text{surface}} = P_{\text{hole}} = P_{\text{atm}}$):

$$v = \sqrt{2gh}$$

---

!!! tip "AP Exam Tip: The Venturi Effect (Narrow Pipe Means LOWER Pressure)"
    A common misconception is believing that when water or air rushes into a narrow constriction, pressure increases because the fluid is "squeezed".
    
    In reality, by the continuity equation, the fluid must **accelerate** to a higher velocity ($v_2 > v_1$).
    
    By Bernoulli's equation at horizontal height ($y_1 = y_2$):
    $$P_1 + \frac{1}{2}\rho v_1^2 = P_2 + \frac{1}{2}\rho v_2^2$$
    
    Because the kinetic energy density $\frac{1}{2}\rho v^2$ increases, the static pressure $P$ must **decrease**:
    $$v_2 > v_1 \implies P_2 < P_1$$
    
    This static pressure reduction explains lift in airplane wings, atomizer sprayers, and the Venturi flow meter.

---

## 📝 Practice Problem & Solution

???+ question "Practice Problem 8.1: Buoyancy and Apparent Weight"
    A solid metal sculpture of unknown composition has a mass of $m = 12.0\,\text{kg}$. When the sculpture is completely submerged in a vat of water ($\rho_{\text{water}} = 1{,}000\,\text{kg/m}^3$), a spring scale attached to the sculpture reads an apparent weight of $F_{\text{scale}} = 75.0\,\text{N}$. Take $g = 10\,\text{m/s}^2$.
    
    a. Calculate the magnitude of the buoyant force exerted on the submerged sculpture.  
    b. Determine the volume $V$ of the sculpture.  
    c. Calculate the density $\rho_{\text{metal}}$ of the sculpture and state whether it would float in liquid mercury ($\rho_{\text{mercury}} = 13{,}600\,\text{kg/m}^3$).

??? success "Show Step-by-Step Solution"
    **Part a: Calculate the buoyant force:**
    
    Draw the vertical forces on the submerged sculpture in static equilibrium:
    - Upward scale tension: $F_{\text{scale}} = 75.0\,\text{N}$
    - Upward buoyant force: $F_b$
    - Downward true weight: $F_g = mg = (12.0\,\text{kg})(10\,\text{m/s}^2) = 120.0\,\text{N}$
    
    Apply Newton's First Law ($\sum F_y = 0$):
    
    $$F_{\text{scale}} + F_b - F_g = 0$$
    
    $$F_b = F_g - F_{\text{scale}} = 120.0\,\text{N} - 75.0\,\text{N} = \mathbf{45.0\,\text{N}}$$
    
    ---
    
    **Part b: Determine the volume of the sculpture:**
    
    By Archimedes' Principle:
    
    $$F_b = \rho_{\text{water}} V_{\text{submerged}} g$$
    
    Since the sculpture is completely submerged, $V = V_{\text{submerged}}$:
    
    $$45.0\,\text{N} = (1{,}000\,\text{kg/m}^3)(10\,\text{m/s}^2) V = 10{,}000 V$$
    
    $$V = \frac{45.0}{10{,}000} = \mathbf{0.0045\,\text{m}^3} = 4.5 \times 10^{-3}\,\text{m}^3 \quad (4.5\,\text{liters})$$
    
    ---
    
    **Part c: Determine density of the sculpture:**
    
    $$\rho_{\text{metal}} = \frac{m}{V} = \frac{12.0\,\text{kg}}{0.0045\,\text{m}^3} \approx \mathbf{2{,}667\,\text{kg/m}^3}$$
    
    *(This is approximately the density of solid aluminum, $\approx 2{,}700\,\text{kg/m}^3$).*
    
    **Floating in mercury:**
    Since $\rho_{\text{metal}} = 2{,}667\,\text{kg/m}^3 < \rho_{\text{mercury}} = 13{,}600\,\text{kg/m}^3$, the sculpture **will easily float** in mercury, with:
    
    $$\frac{V_{\text{submerged}}}{V} = \frac{2{,}667}{13{,}600} \approx 0.196 = \mathbf{19.6\%} \text{ submerged}$$
