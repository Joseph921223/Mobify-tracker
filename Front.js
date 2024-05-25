document.getElementById("registrationForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userData = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password")
  };
  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    if (response.ok) {
      // Registration successful, redirect to login page or display success message
    } else {
      // Handle registration error
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
});// JavaScript Document