import { getUserByEmail } from "../../services/user/getUserByEmail.js";
import { getFormData } from "../getFormData.js";

const formLogin = document.getElementById("form-sign-in");

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = getFormData(formLogin);
  checkUser(user);
});

const checkUser = async (user) => {
  const dataUser = await getUserByEmail(user.email);
  console.log(dataUser);
  if (!dataUser[0]) return alert("Este email no existe");
  if (dataUser[0].password === user.password) {
    window.location.href = "/src/pages/booking/index.html";
    localStorage.setItem("isAuthorized", "true");
    localStorage.setItem("userCache", JSON.stringify(dataUser[0]));
  } else {
    alert("Credenciales incorrectas!");
  }
};
