"use strict";
const form = document.querySelector("#update-form");
const formData = new FormData();
form.addEventListener("submit", (event, form) => {
  event.preventDefault();
  let data = {};
  const keys = [
    "user_id",
    "user_name",
    "user_email",
    "user_password",
    "total_orders",
    "user_image",
  ];
  keys.forEach((key) => {
    let value = document.getElementById(key).value;
    if (value !== "" && value !== 0) {
      data[key] = value;
      formData.append(key, value);
    }
  });
  let user_image = document.querySelector("#user_image");
  if (user_image.files[0]) {
    formData.append("user_image", user_image.files[0]);
  }
  axios({
    method: "put",
    url: "update",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => {
    if (res.status == 200) {
      window.location.replace(
        `/details?user_id=${document.getElementById("user_id").value}`
      );
    } else {
      window.location.replace("");
    }
  });
  document.getElementById("update-btn").disabled = true;
  let text = document.createTextNode("Updating...!");
  document.getElementById("btn-div").style.color = "#4cfc60";
  document.getElementById("btn-div").appendChild(text);
});
