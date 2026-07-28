---
name: Deploy Portfolio Locally
description: Trigger this skill when the user asks to deploy their portfolio locally, start the dev server, or test their website locally.
---

# Deploy Portfolio Locally

When the user asks you to deploy the portfolio locally, follow these exact steps to ensure a foolproof deployment:

1. **Start the Dev Server in the Background**:
   - Use the `run_command` tool to execute `npm run dev` in the project root (`/Users/agrimbillowria/Desktop/Portfolio`).
   - IMPORTANT: Set the `WaitMsBeforeAsync` parameter to `3000` so the server has enough time to initialize before being sent to the background.

2. **Force Open the Browser**:
   - Immediately after launching the dev server, use the `run_command` tool to execute the macOS system command: `open http://localhost:5173`.
   - This ensures the browser automatically opens the portfolio without relying on Vite's internal open logic, which might fail in certain terminal environments.

3. **Inform the User**:
   - Tell the user that the dev server is running securely in the background.
   - Let them know that you forced their web browser to open the link directly.
   - Explicitly instruct them that they **do not** need to type `npm run dev` in their terminal manually.
