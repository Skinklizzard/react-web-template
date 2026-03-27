import React from "react";
import ReactDOM from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { AuthProvider } from "react-oidc-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { userManager } from "./auth/userManager";
import { onSigninCallback } from "./auth/onSigninCallback";
import { router } from "./router/router";

const queryClient = new QueryClient();

const container = document.getElementById("root")!;
console.debug(container);

ReactDOM.createRoot(container).render(
  <FluentProvider theme={webLightTheme}>
    <AuthProvider
      userManager={userManager}
      onSigninCallback={onSigninCallback}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </FluentProvider>
);