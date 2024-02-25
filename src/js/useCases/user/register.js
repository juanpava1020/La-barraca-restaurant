import { createUser } from "../../services/user/createUser.js";
import { getFormData } from "../getFormData.js";

const formRegister = document.getElementById("form-sign-up");

formRegister.addEventListener("submit", async (event) => {
  event.preventDefault();
  const user = getFormData(formRegister);
  await createUser(user);
  console.log(user);
  alert("")
});
