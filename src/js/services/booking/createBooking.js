import { envUrl } from "../globalVariables.js";

export const createBooking = async (data) => {
    await fetch(`${envUrl}/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  