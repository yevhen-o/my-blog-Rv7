import { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";
import { MainLayout } from "./features/layout/MainLayout";
import {
  getBlogBySlug,
  getBlogPosts,
  getUserById,
  getUsers,
} from "./services/httpClient";
import { getReactRouterPath, IDENTIFIERS } from "./utils/urlHelper";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogList = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const BlogAddNew = lazy(() => import("./pages/BlogAddNew"));
const UserList = lazy(() => import("./pages/UserList"));
const AddUser = lazy(() => import("./pages/UserAddNew"));
const UserPage = lazy(() => import("./pages/UserPage"));

// Loader wrapper to show a fallback while loading
const withSuspense = (Component: React.FC) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Component />
  </Suspense>
);

const routes: RouteObject[] = [
  {
    path: getReactRouterPath(IDENTIFIERS.HOME),
    element: <MainLayout />,
    children: [
      { index: true, element: withSuspense(Home) },
      {
        path: getReactRouterPath(IDENTIFIERS.BLOG),
        element: withSuspense(BlogList),
        loader: getBlogPosts,
      },
      {
        path: getReactRouterPath(IDENTIFIERS.BLOG_ADD),
        element: withSuspense(BlogAddNew),
      },
      {
        path: getReactRouterPath(IDENTIFIERS.BLOG_VIEW),
        element: withSuspense(BlogPost),
        loader: getBlogBySlug,
      },
      {
        path: getReactRouterPath(IDENTIFIERS.USERS),
        element: withSuspense(UserList),
        loader: getUsers,
      },
      {
        path: getReactRouterPath(IDENTIFIERS.USER_ADD),
        element: withSuspense(AddUser),
      },
      {
        path: getReactRouterPath(IDENTIFIERS.USER_VIEW),
        element: withSuspense(UserPage),
        loader: getUserById,
      },
      { path: "/about", element: withSuspense(About) },
      { path: "*", element: withSuspense(NotFound) },
    ],
  },
];

export default routes;
