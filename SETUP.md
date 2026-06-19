# Setup Guide

## Platform Recommendation
We strongly recommend using **Linux** or **Windows Subsystem for Linux (WSL)** for the best development experience.

## 1. Checkout the Code
```bash
git clone <repository-url>
cd react-intern
```

## 2. Install NVM (Node Version Manager)

### Linux / WSL
Run the install script:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
Then restart your terminal or run:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

### Windows (Native)
Download and run `nvm-setup.exe` from [nvm-windows releases](https://github.com/coreybutler/nvm-windows/releases).

## 3. Install Node & NPM
Using NVM, install the latest LTS version of Node:
```bash
nvm install --lts
nvm use --lts
```
Verify installations:
```bash
node -v
npm -v
```

## 4. Install Dependencies
```bash
npm install
```

## 5. Running Lessons
Each lesson is an independent Vite project. Use the following command to run a lesson in development mode:
```bash
npm run dev:<n>
```
Replace `<n>` with the lesson number (e.g., `npm run dev:1` for the first lesson).
