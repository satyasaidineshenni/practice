# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Virtual DOM, Fibre, Reconciliation(Written by me)

createRoot- creates DOM like structure
Reconciliation- The algorithm React uses to differentiate one tree with another to determine which parts need to be changed
**Reconciliation is the algorithm behind what is popularly understood as "Virtual DOM".**

Fibre came into picture beacause instead of updating the every state in every time, we can wait for some time and can directly update the last state.(I thought like this and asked copilot and it said i was close to the approach and explained the main moto of fibre in react)

Answer from copilot - Close, but let me clarify! React Fiber was introduced to improve React's rendering performance and flexibility, especially for complex user interfaces. It rethinks how updates are handled by prioritizing tasks and breaking them into smaller, manageable units of work.

Instead of updating every state immediately, Fiber enables a concept called interruptible rendering. This means React can pause rendering tasks if something more urgent, like a user interaction, comes up. Once the urgent task is resolved, React can resume the work from where it left off, without starting over. This approach is especially useful for optimizing performance and ensuring that the user interface remains responsive.

So, it's not about directly skipping to the last state but rather managing and prioritizing updates more effectively.

Primary goal of Fibre is to enable React to take advantage of scheduling.
--- pause work and come back to it later.
--- assign priority to different types of work.
--- reuse previously completed work.
--- abort work if its no longer needed.
