export const getCookie = (name) => {
  // Split cookie string into individual cookie pairs
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue); // Decode special characters
    }
  }
  return null; // Return null if cookie doesn't exist
};
