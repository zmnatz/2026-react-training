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

## 5. Environment Variables
Lesson 4 calls a real model provider through an OpenAI-compatible client.

### Get an API key
1. Go to [aistudio.google.com/api-keys](https://aistudio.google.com/api-keys) and sign in with a Google account.
2. Create a new project (or pick an existing one) when prompted.
3. Click **Create API key** and select that project.
4. Copy the generated key — you won't be able to view it again later, only regenerate a new one.

### Configure the repo
Copy the example file at the repo root and fill in your key:
```bash
cp .env.example .env
```
Set `VITE_OPENAI_API_KEY` in `.env` to the key you just generated (this is the provider configured in `lessons/common/utils/openaiClient.ts`).

Each lesson runs as its own Vite project root, so Vite only looks for a `.env` file inside that lesson's own folder. Symlink the repo-root `.env` into each lesson directory:
```bash
for d in lessons/*/; do ln -sf ../../.env "$d/.env"; done
```
These symlinks are covered by `.gitignore` (it matches `.env` at any depth), so you'll need to recreate them after a fresh clone.

## 6. Running Lessons
Each lesson is an independent Vite project. Use the following command to run a lesson in development mode:
```bash
npm run dev:<n>
```
Replace `<n>` with the lesson number (e.g., `npm run dev:1` for the first lesson).
