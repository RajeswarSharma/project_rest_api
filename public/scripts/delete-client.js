"use strict";
const deleteUser = () => {
  const message =
    "You are about to delete your profileAre you sure you want to delete your profile?";
  if (window.confirm(message)) {
    const url = new URL(window.location.href);
    const user_id = url.searchParams.get("user_id");
    document.getElementById("btn-delete").disabled = true;
    document.getElementById("btn-edit").disabled = true;
    let text = document.createTextNode("Deleting...!");
    document.getElementById("target").style.color = "#f22b24";
    document.getElementById("target").appendChild(text);

    axios.delete(`/delete?user_id=${user_id}`).then((res) => {
      if (res.status === 200) {
        document.location.href = "../";
      } else {
        alert("Cannot delete the user");
      }
    });
  }
};
