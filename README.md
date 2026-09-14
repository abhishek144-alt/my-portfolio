# Abhishek Yadav — VLSI & RTL Design Portfolio

> Personal portfolio website of **Abhishek Yadav**, an aspiring VLSI Design Engineer & Electronics and Communication Engineering undergraduate at RKGIT (AKTU).

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Verilog](https://img.shields.io/badge/Verilog_HDL-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)
![Xilinx](https://img.shields.io/badge/Xilinx_Vivado-000000?style=for-the-badge&logo=xilinx&logoColor=white)

---

## 🌟 Features

- **Interactive 8-Bit ALU Visualizer**:
  - Live hardware simulation reflecting synthesizable Verilog core.
  - 9 Operations: `ADD`, `SUB`, `AND`, `OR`, `XOR`, `NAND`, `NOR`, `SHL`, `SHR`.
  - Live Condition Flags: Carry ($C$), Zero ($Z$), Overflow ($V$), and Negative ($N$).
- **Silicon Dark Aesthetic**: High-tech semiconductor styling, blueprint grid background, glassmorphism bento layout, and cursor spotlight glow.
- **Full Resume Integration**:
  - Professional Summary & Core Engineering Domains
  - Skills Matrix: Verilog HDL, RTL Design, CMOS, Xilinx Vivado, GTKWave, Icarus Verilog
  - Projects: 8-Bit ALU Core (Verilog), UART Transceiver RTL Core & Verification (Verilog), & Hand Gesture Recognition Gloves (Embedded/IoT)
  - Education: B.Tech ECE (CGPA: 8.03), Intermediate, High School, NPTEL Certification, Srijan 2024
  - Contact Channels: One-click copy for email and phone, LinkedIn, GitHub, and contact form.
- **Zero Build Step**: Native HTML5, CSS3, and JavaScript — works instantly in any web browser without build tooling.

---

## 📁 Repository Structure

```
portfolio/
├── index.html               # Main single-page portfolio
├── server.js                # Lightweight Node.js local preview server
├── .gitignore               # Git ignored files
├── README.md                # Project documentation
├── css/
│   ├── variables.css        # Color tokens & design system
│   ├── reset.css            # Base resets and blueprint grid
│   ├── layout.css           # Bento grid & responsive containers
│   ├── components.css       # Glass cards, buttons, ALU visualizer, timeline
│   └── animations.css       # Micro-interactions & animations
└── js/
    ├── alu-simulator.js     # 8-Bit ALU hardware logic engine
    ├── contact.js           # Toast alerts, clipboard copy, form handling
    └── main.js              # Header scroll, mobile drawer, cursor spotlight
```

---

## 🚀 Running Locally

### Option 1: Direct in Browser
Simply double-click [`index.html`](index.html) or right-click and open with your favorite browser (Chrome, Edge, Firefox).

### Option 2: Lightweight Node Server
```bash
node server.js
```
Then navigate to: `[https://abhishek144-alt.github.io/my-portfolio/]`

---

## 📤 Push to GitHub & Deploy to GitHub Pages

### Step 1: Create a Repository on GitHub
1. Go to [GitHub New Repository](https://github.com/new).
2. Set Repository name to `portfolio` (or `abhishek144-alt.github.io`).
3. Leave it Public and click **Create repository**.

### Step 2: Push your Code
Open your terminal in this directory and run:

```bash
git init
git add .
git commit -m "Initial commit: Abhishek Yadav VLSI & RTL Portfolio"
git branch -M main
git remote add origin https://github.com/abhishek144-alt/portfolio.git
git push -u origin main
```

### Step 3: Enable Free Live Hosting on GitHub Pages
1. Go to your repository on GitHub: `https://github.com/abhishek144-alt/portfolio`
2. Click **Settings** ➔ **Pages** (on the left menu).
3. Under **Branch**, select `main` and `/ (root)`.
4. Click **Save**.
5. In ~1 minute, your portfolio will be live at:
   `https://abhishek144-alt.github.io/portfolio/`

---

## 📬 Contact
- **Email**: [abhishekyaduvanshi144@gmail.com](mailto:abhishekyaduvanshi144@gmail.com)
- **LinkedIn**: [linkedin.com/in/abhishek-yadav-1088ba296](https://linkedin.com/in/abhishek-yadav-1088ba296)
- **GitHub**: [github.com/abhishek144-alt](https://github.com/abhishek144-alt)
