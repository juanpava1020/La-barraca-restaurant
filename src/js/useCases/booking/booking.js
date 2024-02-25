import { createBooking } from "../../services/booking/createBooking";
import { getFormData } from "../getFormData.js";

const form = document.getElementById("booking-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const booking = getFormData(form);
  const user = JSON.parse(localStorage.getItem("userCache"));
  booking.userId = user.id
  await createBooking(booking);
  alert("Reservación éxitosa")
  window.location.href = "/src/index.html";
})