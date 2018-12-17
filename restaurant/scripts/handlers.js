const onFormSubmitHandler = () => {
  console.log("[Form Submitted]");
  const email = document.getElementById("exampleInputEmail1");
  const submit = document.getElementById("submit");
  console.log(email.value.search("@"));
  if (email.value.search("@") !== -1) {
    console.log("Sweet email");
    submit.innerHTML = "Looks good. Thanks for reaching out!";
  } else {
    submit.innerHTML = "Please enter a valid email";
  }
};
