# 🔑 Random Password Generator
### Length-Controlled, Copy-Ready Password Tool

> ⚠️ **DISCLAIMER:** This is a **personal learning and portfolio project**. It demonstrates JavaScript random generation, slider input handling, and clipboard interaction. Passwords are generated **entirely in the browser** using `Math.random()` and are **never** transmitted, logged, or stored anywhere. For real-world password security, use a dedicated, audited password manager.

A clean, lightweight web tool that generates random passwords from a mix of letters, digits, and symbols. Adjust the length with a slider (4–20 characters), hit Generate, and copy the result to your clipboard with one click — all in a responsive, mobile-friendly layout.

![Version](https://img.shields.io/badge/Version-1.0.0-007bff)
![Status](https://img.shields.io/badge/Status-Portfolio%20Project-F4B400)
![Responsive](https://img.shields.io/badge/Responsive-Desktop%20%26%20Mobile-2D6A4F)

---

## 🔗 Live Links

- **Live Demo:** [passwordkeeper.netlify.app](https://passwordkeeper.netlify.app)
- **Source Code:** [github.com/Ashish22Gupta/Random_password_Generator](https://github.com/Ashish22Gupta/Random_password_Generator)

---

## ✨ Implemented Features

### 🔢 Length Control
- **Slider Input** - Range slider from `4` to `20` characters, defaulting to `12`.
- **Live Length Display** - The current value updates instantly beside the slider via `updateLength()`.
- **Dynamic Generation** - The password length always matches the slider value at the time of generation.

### 🎲 Password Generation
- **Mixed Character Set** - Combines digits (`0–9`), lowercase (`a–z`), uppercase (`A–Z`), and special characters (`!@#$%^&*()`).
- **Random Indexing** - Each character is chosen via `Math.floor(Math.random() * chars.length)`.
- **One-Click Generate** - The "Generate Password" button fills the readonly display field instantly.
- **Readonly Output** - The result field is `readonly`, preventing accidental edits while still allowing copy.

### 📋 Copy to Clipboard
- **One-Click Copy** - The "Copy Password" button selects the field and runs `document.execCommand("copy")`.
- **Full-Length Selection** - `setSelectionRange(0, 999)` ensures the entire password is copied regardless of length.
- **Confirmation Alert** - A success message ("Password copied successfully!") confirms the action.

### 🎨 Visual Design
- **Clean, Minimal UI** - Soft `#f0f4f8` background with centered content and blue accents.
- **Hover Feedback** - Buttons transition from `#007bff` to `#0056b3` on hover for tactile feel.
- **Rounded Inputs** - Consistent `5px` border-radius across the password field and buttons.
- **Responsive Controls** - Slider, input, and buttons use `width: 90%` with `max-width` caps so they never overflow.

### 📱 Responsive Design
- **Mobile-Friendly Inputs** - Slider caps at `200px`; password field caps at `300px`.
- **Small-Screen Heading** - Below `352px`, the `h1` shrinks to `x-large` to prevent overflow.
- **Touch-Friendly Buttons** - Fixed `150×40px` buttons with `10px` margins for comfortable tapping.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup with range input and readonly field |
| **CSS3** | Centered layout, hover transitions, media queries |
| **Vanilla JavaScript** | Random generation, slider updates, clipboard copy |
| **Netlify** | Static hosting and deployment |

---

## 📁 Project Structure

```text
Random_password_Generator/
├── index.html          # UI: slider, display field, generate/copy buttons
├── style.css           # Layout, buttons, responsive rules
└── script.js           # Generation, copy, length-update logic
