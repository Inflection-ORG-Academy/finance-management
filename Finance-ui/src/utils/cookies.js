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

export const setCookie = (name, value, expiresTime = "3600", path = "/") => {
  document.cookie = `${name}=${value}; max-age=${expiresTime}; path=${path}`;
};

export const deleteCookie = (tokenName) => {
  let cookieString = `${encodeURIComponent(tokenName)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

  document.cookie = cookieString;
};
