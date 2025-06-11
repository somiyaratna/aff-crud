export async function loginUser(credentials) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: credentials.username,
      password: credentials.password,
    }),
  });
  const result = await response.json();
  return result;
}

export async function logoutUser() {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}
