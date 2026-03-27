export const env = {
  baseRoute: process.env.BASE_ROUTE || "/",
  oidc: {
    authority: process.env.OIDC_AUTHORITY!,
    clientId: process.env.OIDC_CLIENT_ID!,
    redirectUri: process.env.OIDC_REDIRECT_URI!,
    postLogoutRedirectUri: process.env.OIDC_POST_LOGOUT_REDIRECT_URI!
  }
};
