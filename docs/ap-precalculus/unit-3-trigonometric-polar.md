---
title: "Unit 3: Trigonometric & Polar Functions"
description: Master periodic phenomena, unit circle trig, sinusoidal transformations, inverse trig restrictions, polar coordinates, and complex numbers for AP Precalculus.
---

# Unit 3: Trigonometric & Polar Functions

Unit 3 examines periodic motion and angular displacement, transitioning from geometric right-triangle definitions to the circular function definitions on the coordinate plane, sinusoidal modeling, inverse trigonometric functions, and polar coordinates.

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

## 3.1 Radian Measure & The Unit Circle

An angle of $\theta$ radians subtends an arc length $s$ equal to $\theta$ on a circle of radius $r = 1$:

$$\theta = \frac{s}{r} \implies s = r\theta$$

On the unit circle ($x^2 + y^2 = 1$), the coordinates of the terminal ray point at angle $\theta$ define the circular functions:

$$\cos\theta = x, \quad \sin\theta = y, \quad \tan\theta = \frac{y}{x} = \frac{\sin\theta}{\cos\theta} \quad (x \neq 0)$$

$$\sec\theta = \frac{1}{\cos\theta}, \quad \csc\theta = \frac{1}{\sin\theta}, \quad \cot\theta = \frac{\cos\theta}{\sin\theta}$$

### Core Pythagorean Identities

$$\sin^2\theta + \cos^2\theta = 1$$

$$\tan^2\theta + 1 = \sec^2\theta$$

$$1 + \cot^2\theta = \csc^2\theta$$

---

## 3.2 Sinusoidal Modeling & Transformations

A sinusoidal function models periodic behavior using the general form:

$$f(t) = a \sin(b(t - c)) + d \quad \text{or} \quad f(t) = a \cos(b(t - c)) + d$$

where:
- **Amplitude:** $|a| = \dfrac{\text{Maximum} - \text{Minimum}}{2}$
- **Midline (Vertical Shift):** $y = d = \dfrac{\text{Maximum} + \text{Minimum}}{2}$
- **Period ($T$):** The length of one complete cycle:
  $$T = \frac{2\pi}{|b|} \iff |b| = \frac{2\pi}{T}$$
- **Frequency ($f$):** $f = \dfrac{1}{T} = \dfrac{|b|}{2\pi}$
- **Phase Shift (Horizontal Shift):** $c$ (shifts right if $c > 0$, left if $c < 0$)

---

## 3.3 Inverse Trigonometric Functions

Because trigonometric functions are periodic, their domains must be restricted to standard principal branches so that they become one-to-one (invertible):

| Function | Notation | Restricted Domain of $f$ (Range of $f^{-1}$) | Domain of $f^{-1}$ |
| :--- | :--- | :---: | :---: |
| **Arcsine** | $y = \arcsin(x) = \sin^{-1}(x)$ | $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$ | $[-1, 1]$ |
| **Arccosine** | $y = \arccos(x) = \cos^{-1}(x)$ | $[0, \pi]$ | $[-1, 1]$ |
| **Arctangent** | $y = \arctan(x) = \tan^{-1}(x)$ | $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$ | $(-\infty, \infty)$ |

---

## 3.4 Double-Angle & Sum/Difference Identities

$$\sin(2\theta) = 2\sin\theta\cos\theta$$

$$\cos(2\theta) = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta$$

$$\tan(2\theta) = \frac{2\tan\theta}{1 - \tan^2\theta}$$

---

## 3.5 Polar Coordinates & Complex Plane

In the polar coordinate system, points are designated by $(r, \theta)$, where $r$ is the directed radial distance from the pole (origin) and $\theta$ is the angle from the polar axis.

### Conversion Formulas

$$\begin{aligned}
x &= r\cos\theta, & y &= r\sin\theta \\
r^2 &= x^2 + y^2, & \tan\theta &= \frac{y}{x} \quad (x \neq 0)
\end{aligned}$$

### Complex Numbers in Polar (Trigonometric) Form
A complex number $z = x + i y$ can be written in polar form with modulus $r = |z| = \sqrt{x^2 + y^2}$ and argument $\theta = \operatorname{arg}(z)$:

$$z = r(\cos\theta + i\sin\theta) = r e^{i\theta}$$

By **De Moivre's Theorem**, for any integer $n$:

$$z^n = [r(\cos\theta + i\sin\theta)]^n = r^n(\cos(n\theta) + i\sin(n\theta))$$

---

!!! tip "AP Exam Tip: Interpreting Negative Radii in Polar Coordinates"
    In polar coordinates $(r, \theta)$, if $r < 0$, the point is plotted by first rotating by $\theta$, and then projecting a distance $|r|$ in the **opposite direction** (along the ray $\theta + \pi$).
    
    Therefore, the polar point:
    $$\left(-3, \; \frac{\pi}{4}\right) \quad \text{is identical to} \quad \left(3, \; \frac{5\pi}{4}\right)$$
    In Cartesian coordinates:
    $$x = -3\cos(\pi/4) = -\frac{3\sqrt{2}}{2}, \quad y = -3\sin(\pi/4) = -\frac{3\sqrt{2}}{2}$$

---

## Practice Problem & Solution

???+ question "Practice Problem 3.1: Modeling Periodic Ferris Wheel Motion"
    A giant Ferris wheel with a diameter of $50\,\text{m}$ completes one full counterclockwise revolution every $4\,\text{minutes}$. Passengers board the wheel at the lowest point, which is $2\,\text{m}$ above the ground.
    
    Assume a passenger boards at time $t = 0\,\text{minutes}$.
    
    a. Determine the amplitude, midline, and period of the passenger's height function $h(t)$.  
    b. Construct a sinusoidal function of the form $h(t) = a\cos(b(t - c)) + d$ modeling the height $h(t)$ in meters at time $t$ in minutes.  
    c. Find the first two positive times $t > 0$ when the passenger is exactly $40\,\text{m}$ above the ground.

??? success "Show Step-by-Step Solution"
    **Part a: Determine geometric parameters:**
    - Diameter $= 50\,\text{m} \implies \text{Radius } R = 25\,\text{m}$.
    - Minimum height: $h_{\text{min}} = 2\,\text{m}$.
    - Maximum height: $h_{\text{max}} = 2 + 50 = 52\,\text{m}$.
    - **Amplitude:** $a = \frac{h_{\text{max}} - h_{\text{min}}}{2} = \frac{52 - 2}{2} = \mathbf{25\,\text{m}}$.
    - **Midline:** $d = \frac{h_{\text{max}} + h_{\text{min}}}{2} = \frac{52 + 2}{2} = \mathbf{27\,\text{m}}$.
    - **Period:** $T = \mathbf{4\,\text{minutes}}$.
    
    ---
    
    **Part b: Formulate the cosine model:**
    
    The frequency parameter $b$ is:
    
    $$b = \frac{2\pi}{T} = \frac{2\pi}{4} = \frac{\pi}{2}$$
    
    Since the passenger begins at the absolute minimum at $t = 0$ ($h(0) = 2$), we can use an inverted cosine model ($a = -25$) with zero phase shift ($c = 0$):
    
    $$h(t) = -25\cos\left(\frac{\pi}{2}t\right) + 27$$
    
    ---
    
    **Part c: Solve for $h(t) = 40\,\text{m}$:**
    
    $$-25\cos\left(\frac{\pi}{2}t\right) + 27 = 40$$
    
    $$-25\cos\left(\frac{\pi}{2}t\right) = 13 \implies \cos\left(\frac{\pi}{2}t\right) = -\frac{13}{25} = -0.52$$
    
    Take the principal inverse cosine:
    
    $$\theta_1 = \arccos(-0.52) \approx 2.1179\,\text{radians}$$
    
    By the symmetry of the cosine function on $[0, 2\pi]$, the second angle in the first cycle is:
    
    $$\theta_2 = 2\pi - \theta_1 \approx 6.2832 - 2.1179 = 4.1653\,\text{radians}$$
    
    Now solve for $t = \frac{2}{\pi}\theta$:
    
    $$t_1 = \frac{2}{\pi}(2.1179) \approx \mathbf{1.348\,\text{minutes}}$$
    
    $$t_2 = \frac{2}{\pi}(4.1653) \approx \mathbf{2.652\,\text{minutes}}$$
