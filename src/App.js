import Counter from "./features/counter/Counter";
import "./App.css";
import Home from "./pages/Home.js";
import Login from "./auth/components/Login.js";
import Signup from "./auth/components/Signup.js";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SignupPage from "./pages/SignupPage.js";
import LoginPage from "./pages/LoginPage.js";
import CartPage from "./pages/CartPage.js";
import Checkout from "./pages/Checkout.js";
import ProductDetailsPage from "./pages/ProductDetailsPage.js";
import Protected from "./auth/components/Protected.js";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./auth/AuthSlice.js";
import { fetchItemsByUserIdAsync } from "./features/cart/CartSlice.js";
import { useEffect } from "react";
import PageNotFound from "./pages/404.js";
import OrderSuccessPage from "./pages/OrderSuccessPage.js";
import UserOrdersPage from "./pages/UserOrdersPages.js";
import UserProfilePage from "./pages/UserProfilePage.js";
import { fetchLoggedInUserAsync } from "./features/user/userSlice.js";
import Logout from "./auth/components/Logout.js";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.js";
import ProtectedAdmin from "./auth/components/ProtectedAdmin.js";
import AdminHome from "./pages/AdminHome.js";
import AdminProductDetailsPage from "./pages/AdminProductDetailsPage.js";
import AdminProductFormPage from "./pages/AdminProductFormPage.js";
import AdminOrderPage from "./pages/AdminOrderPage.js";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_LEFT
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/product-details/:id",
    element: (
      <Protected>
        <ProductDetailsPage />
      </Protected>
    ),
  },
  {
    path: "/admin/product-details/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailsPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/product-form/edit/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/orders",
    element: (
      <ProtectedAdmin>
        <AdminOrderPage />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage />,
  },
  {
    path: "/orders",
    element: <UserOrdersPage />,
  },
  {
    path: "/profile",
    element: <UserProfilePage />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user && user.id) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  }, [dispatch, user?.id]);
  return (
    <div className="App">
       <Provider template={AlertTemplate} {...options}>
      <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
