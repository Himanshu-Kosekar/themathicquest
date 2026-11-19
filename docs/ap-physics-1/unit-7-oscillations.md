---
title: "Unit 7: Oscillations"
description: Complete review of simple harmonic motion (SHM), mass-spring systems, simple pendulums, and energy transformations for AP Physics 1.
---

# Unit 7: Oscillations

Oscillatory motion occurs when an object is displaced from a stable equilibrium position and experiences a linear restoring force that drives it back toward equilibrium.

---

## 7.1 Simple Harmonic Motion (SHM)

A system executes **Simple Harmonic Motion (SHM)** if the restoring force is directly proportional to displacement and directed opposite to it:

$$F_{\text{net}} = -k x \implies m a = -k x \implies a = -\left(\frac{k}{m}\right) x = -\omega^2 x$$

where $\omega = \sqrt{\dfrac{k}{m}}$ is the **angular frequency** (in rad/s).

### Kinematics of SHM
Assuming the oscillator is released from maximum displacement $x = A$ at $t = 0$:

$$x(t) = A \cos(\omega t)$$

$$v(t) = \frac{dx}{dt} = -A\omega \sin(\omega t)$$

$$a(t) = \frac{dv}{dt} = -A\omega^2 \cos(\omega t) = -\omega^2 x(t)$$

- **Maximum Speed ($v_{\text{max}}$):** Occurs at the equilibrium position ($x = 0$):
  $$v_{\text{max}} = A \omega$$
- **Maximum Acceleration ($a_{\text{max}}$):** Occurs at the turning points ($x = \pm A$):
  $$a_{\text{max}} = A \omega^2$$

---

## 7.2 Period and Frequency

- **Period ($T$):** The time required to complete one full cycle of oscillation (in seconds):
  $$T = \frac{1}{f} = \frac{2\pi}{\omega}$$
- **Frequency ($f$):** The number of oscillations completed per second (in Hertz, $\text{Hz} = \text{s}^{-1}$):
  $$f = \frac{1}{T} = \frac{\omega}{2\pi}$$

---

## 7.3 Canonical Oscillating Systems

### 1. Mass-Spring Oscillator
For a mass $m$ attached to an ideal spring of force constant $k$ (horizontal or vertical):

$$\omega = \sqrt{\frac{k}{m}} \implies T_s = 2\pi \sqrt{\frac{m}{k}}$$

- **Independent of:** Amplitude ($A$) and local gravitational acceleration ($g$).

### 2. Simple Pendulum (Small Angle Approximation)
For a point mass $m$ suspended from a string of length $L$ in gravitational field $g$:

$$\tau_{\text{net}} = -(mg\sin\theta) L \approx -mgL\theta \quad (\text{for } \theta \le 15^\circ)$$

$$\omega = \sqrt{\frac{g}{L}} \implies T_p = 2\pi \sqrt{\frac{L}{g}}$$

- **Independent of:** Bob mass ($m$) and amplitude ($\theta_0$, within small-angle regime).

---

## 7.4 Energy Transformations in SHM

In an ideal, undamped oscillator, mechanical energy continuously shifts between kinetic energy ($K$) and potential energy ($U$):

$$E_{\text{total}} = K + U = \frac{1}{2} m v^2 + \frac{1}{2} k x^2 = \text{constant}$$

At the turning points ($x = \pm A, v = 0$):

$$E_{\text{total}} = \frac{1}{2} k A^2$$

At the equilibrium position ($x = 0, v = \pm v_{\text{max}}$):

$$E_{\text{total}} = \frac{1}{2} m v_{\text{max}}^2$$

Equating the two expressions:

$$\frac{1}{2} m v_{\text{max}}^2 = \frac{1}{2} k A^2 \implies v_{\text{max}} = A \sqrt{\frac{k}{m}} = A \omega$$

---

!!! warning "AP Exam Trap: Gravity Does NOT Alter Vertical Spring Period"
    When a mass hangs vertically from a spring, gravity shifts the equilibrium position downward by $\Delta y_0 = \frac{mg}{k}$.
    
    However, because the restoring force relative to the new equilibrium is still linear ($F_{\text{net}} = -k y'$), the frequency and period are **completely unchanged**:
    $$T = 2\pi\sqrt{\frac{m}{k}}$$
    
    A vertical spring oscillating on Earth will oscillate with the **exact same period** if taken to the Moon or placed in a freely falling elevator!

---

## 📝 Practice Problem & Solution

???+ question "Practice Problem 7.1: Energy and Kinematics of a Spring Oscillator"
    A block of mass $m = 0.50\,\text{kg}$ on a frictionless horizontal surface is attached to a spring with $k = 200\,\text{N/m}$. The block is pulled to $x = +0.10\,\text{m}$ ($10\,\text{cm}$) and released from rest at $t = 0$.
    
    a. Calculate the period $T$ and maximum speed $v_{\text{max}}$ of the oscillation.  
    b. Determine the speed of the block when its position is $x = 0.06\,\text{m}$ ($6\,\text{cm}$).  
    c. What fraction of the total mechanical energy is kinetic energy at $x = 0.06\,\text{m}$?

??? success "Show Step-by-Step Solution"
    **Part a: Calculate period $T$ and maximum speed $v_{\text{max}}$:**
    
    Angular frequency:
    
    $$\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{200}{0.50}} = \sqrt{400} = 20\,\text{rad/s}$$
    
    Period:
    
    $$T = \frac{2\pi}{\omega} = \frac{2\pi}{20} = \frac{\pi}{10} \approx \mathbf{0.314\,\text{s}}$$
    
    Maximum speed:
    
    $$v_{\text{max}} = A \omega = (0.10\,\text{m})(20\,\text{rad/s}) = \mathbf{2.0\,\text{m/s}}$$
    
    ---
    
    **Part b: Speed at $x = 0.06\,\text{m}$ using energy conservation:**
    
    Total mechanical energy:
    
    $$E_{\text{total}} = \frac{1}{2} k A^2 = \frac{1}{2}(200)(0.10)^2 = 100(0.01) = 1.0\,\text{J}$$
    
    At position $x = 0.06\,\text{m}$:
    
    $$U = \frac{1}{2} k x^2 = \frac{1}{2}(200)(0.06)^2 = 100(0.0036) = 0.36\,\text{J}$$
    
    By conservation of energy:
    
    $$K = E_{\text{total}} - U = 1.0\,\text{J} - 0.36\,\text{J} = 0.64\,\text{J}$$
    
    Solve for $v$:
    
    $$\frac{1}{2} m v^2 = 0.64 \implies \frac{1}{2}(0.50) v^2 = 0.64 \implies 0.25 v^2 = 0.64$$
    
    $$v^2 = \frac{0.64}{0.25} = 2.56 \implies v = \sqrt{2.56} = \mathbf{1.6\,\text{m/s}}$$
    
    ---
    
    **Part c: Fraction of total energy in kinetic form:**
    
    $$\frac{K}{E_{\text{total}}} = \frac{0.64\,\text{J}}{1.0\,\text{J}} = 0.64 = \mathbf{64\%}$$
    
    *(Notice: $\frac{K}{E} = 1 - \frac{x^2}{A^2} = 1 - \frac{0.06^2}{0.10^2} = 1 - 0.36 = 0.64$).*
