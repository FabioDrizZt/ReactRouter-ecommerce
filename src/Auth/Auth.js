export default function Auth() {
  const token = localStorage.getItem("token");
  if (token) {
    return true; // logged in user has a valid JWT Token stored locally
  } else {
    console.log("User is not authenticated");
    return false;
  }
}
