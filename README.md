This is a React project using [React Router v7](https://reactrouter.com/en/main).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

You can start editing pages by modifying files inside the `src/pages` directory. The app will automatically update as you edit the files.

## Routing Setup

This project uses `react-router-dom` for client-side routing. Routes are defined in `src/router.tsx` and managed with `createBrowserRouter`.

Example route setup:

```tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import BlogList from "@/pages/BlogList";
import BlogPost from "@/pages/BlogPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps all child routes
    children: [
      { index: true, element: <Home /> },
      { path: "blogs", element: <BlogList /> },
      { path: "blog/:id", element: <BlogPost /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
```

## Learn More

To learn more about React Router, check out:

- [React Router Documentation](https://reactrouter.com/en/main) - Learn about React Router features and API.
- [React Router Tutorials](https://reactrouter.com/en/main/start/tutorial) - Interactive tutorials on React Router.

You can also explore the [React Router GitHub repository](https://github.com/remix-run/react-router) for more details.

## Deployment

To deploy your React app, you can use services like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

Run the following command to build the app for production:

```bash
npm run build
```

## App Preview URL

[https://my-blog-app-rust.vercel.app/](https://my-blog-app-rust.vercel.app/)
