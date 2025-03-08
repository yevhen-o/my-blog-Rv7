import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { BlogList } from "./pages/Blog";
import {
  getBlogBySlug,
  getBlogPosts,
  getUserById,
  getUsers,
} from "./services/httpClient";
import { MainLayout } from "./features/layout/MainLayout";
import { BlogPost } from "./pages/BlogPost";
import { BlogAddNew } from "./pages/BlogAddNew";
import { getReactRouterPath, IDENTIFIERS } from "./utils/urlHelper";
import { UserList } from "./pages/UserList";
import { AddUser } from "./pages/UserAddNew";
import { UserPage } from "./pages/UserPage";

const routes: RouteObject[] = [
  {
    path: getReactRouterPath(IDENTIFIERS.HOME),
    element: <MainLayout />, // Layout wraps all pages including "/"
    children: [
      { index: true, element: <Home /> },
      {
        path: getReactRouterPath(IDENTIFIERS.BLOG),
        element: <BlogList />,
        loader: getBlogPosts,
      },
      {
        path: getReactRouterPath(IDENTIFIERS.BLOG_ADD),
        element: <BlogAddNew />,
      },
      {
        path: getReactRouterPath(IDENTIFIERS.BLOG_VIEW),
        element: <BlogPost />,
        loader: getBlogBySlug,
      },
      {
        path: getReactRouterPath(IDENTIFIERS.USERS),
        element: <UserList />,
        loader: getUsers,
      },
      {
        path: getReactRouterPath(IDENTIFIERS.USER_ADD),
        element: <AddUser />,
      },
      {
        path: getReactRouterPath(IDENTIFIERS.USER_VIEW),
        element: <UserPage />,
        loader: getUserById,
      },
      { path: "/about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
