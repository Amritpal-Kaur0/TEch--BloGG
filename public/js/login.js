const loginFormHandler = async (event) => {
  event.preventDefault();

  //  values from login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  // Send a POST request to the API endpoint
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // redirect the browser to the dashboard page
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert("Incorrect email or password, please try again");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
