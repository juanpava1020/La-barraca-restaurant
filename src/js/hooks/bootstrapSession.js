(() => {
  const isAuthorized = localStorage.getItem("isAuthorized");
  const path = window.location.pathname;
  const routeActive = path.substring(path.indexOf("pages/"));
  const privateRoutes = ["pages/booking/index.html"];

  if (privateRoutes.includes(routeActive) && !isAuthorized) {
    window.location.href = "/src/index.html";
  }
})();

