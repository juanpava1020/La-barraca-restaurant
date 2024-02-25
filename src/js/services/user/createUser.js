import { envUrl } from "../globalVariables.js";

export const createUser = async (user) => {
  await fetch(`${envUrl}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};
