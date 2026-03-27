export function onSigninCallback(): void {
  window.history.replaceState(
    {},
    document.title,
    window.location.pathname
  );
}
