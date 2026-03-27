import { UserManager } from "oidc-client-ts";
import { env } from "../env";

export const userManager = new UserManager({
  authority: env.oidc.authority,
  client_id: env.oidc.clientId,
  redirect_uri: env.oidc.redirectUri,
  post_logout_redirect_uri: env.oidc.postLogoutRedirectUri,
  response_type: "code",
  scope: "openid profile email",
  automaticSilentRenew: true
});