import { envUrl } from "../globalVariables.js";

export const getUserByEmail = async (email) => {
  const response = await fetch(`${envUrl}/users?email=${email}`);
  const data = await response.json();
  return data;
};
