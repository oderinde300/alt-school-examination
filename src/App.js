import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Layout from "./components/Layout";

function ErrorBoundaryFallback({ error, resetErrorBoundary }) {
  return (
    <Layout>
      <div role="alert" className="errorBoundary">
        <h1>Something went wrong:</h1>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </Layout>
  );
}

const NotFound = React.lazy(() => import("./pages/NotFoundPage"));
const Home = React.lazy(() => import("./pages/HomePage"));
const UserDetails = React.lazy(() => import("./pages/UserDetailsPage"));
const Users = React.lazy(() => import("./pages/UsersPage"));
const ErrorTester = React.lazy(() => import("./pages/ErrorTesterPage"));
const Auth = React.lazy(() => import("./pages/AuthPage"));

export const fallback = (
  <div className="loader-container">
    <div class="loading-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallback}
      onReset={() => {
        return window.location.reload();
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={fallback}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={fallback}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/users">
          <Route
            index
            element={
              <Suspense fallback={fallback}>
                <Users />
              </Suspense>
            }
          />
          <Route
            path=":page/:id"
            element={
              <Suspense fallback={fallback}>
                <UserDetails />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/errorBoundary"
          element={
            <Suspense fallback={fallback}>
              <ErrorTester />
            </Suspense>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={fallback}>
              <Auth />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={fallback}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
