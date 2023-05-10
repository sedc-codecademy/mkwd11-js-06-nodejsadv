const BASE_URL = "http://localhost:4000/api";

// Selectors
const loginViewEl = document.querySelector(".login-view");
const productsViewEl = document.querySelector(".products-view");

productsViewEl.style.display = "none";

const loginFormEl = document.querySelector("#loginForm");
const emailInputEL = document.querySelector("#email");
const passwordInputEL = document.querySelector("#password");

// Global variables
let accessToken = null;
let refreshToken = null;
let user = null;

const loginUser = async credentials => {
  console.log(credentials);

  const credentialsJSON = JSON.stringify(credentials);

  const response = await fetch(BASE_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentialsJSON,
  });

  //  Fetch doesn't throw javascript errors when a request goes bad with a 400 or 500 status
  if (response.status >= 400) return;

  //  Here we can extract the token and refresh token
  accessToken = response.headers.get("access-token");
  refreshToken = response.headers.get("refresh-token");

  //   Will work only if access-control-expose-headers is set on the backend
  console.log(accessToken, refreshToken);

  //   We can get the user data here if we want it
  const user = await response.json();

  console.log(user);

  if (user) {
    loginViewEl.style.display = "none";
    productsViewEl.style.display = "block";
    productsViewEl.querySelector(
      ".username-heading"
    ).innerText = `${user.firstName} ${user.lastName}`;
    saveUserInLocalStorage(user, accessToken, refreshToken);
  }
};

loginFormEl.addEventListener("submit", e => {
  e.preventDefault();

  const email = emailInputEL.value;
  const password = passwordInputEL.value;

  loginUser({ email, password });

  loginFormEl.reset();
});

const fetchStudents = async () => {
  const response = await fetch(`${BASE_URL}/students`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  // 1. If status is 403, try to refresh access token
  if (response.status === 403) {
    const refreshTokenRes = await fetch(`${BASE_URL}/refresh-token`, {
      headers: {
        "refresh-token": refreshToken,
      },
    });
    // 2. If refresh returns 403  logout user
    if (refreshTokenRes.status === 403) return logoutUser();

    console.log(refreshTokenRes);

    console.log("Access Token", refreshTokenRes.headers.get("access-token"));

    accessToken = refreshTokenRes.headers.get("access-token");
    // 3. If refresh is successful try to fetch products again
    fetchStudents();
  }

  const students = await response.json();

  console.log("Students", students);
};

document.querySelector(".students-btn").addEventListener("click", () => {
  console.log("students btn clicked");
  fetchStudents();
});

// Save userdata in local storage func
const saveUserInLocalStorage = (user, accessToken, refreshToken) => {
  const data = { user, accessToken, refreshToken };

  const stringData = JSON.stringify(data);

  console.log(stringData);

  window.localStorage.setItem("userData", stringData);
};

const autoLoginUser = () => {
  const userStringData = window.localStorage.getItem("userData");

  if (userStringData) {
    const userData = JSON.parse(userStringData);
    accessToken = userData.accessToken;
    refreshToken = userData.refreshToken;
    user = userData.user;
    loginViewEl.style.display = "none";
    productsViewEl.style.display = "block";
    productsViewEl.querySelector(
      ".username-heading"
    ).innerText = `${user.firstName} ${user.lastName}`;
  }
};

const logoutUser = async () => {
  const deleteResponse = await fetch(`${BASE_URL}/logout`, {
    headers: {
      "refresh-token": refreshToken,
    },
  });

  console.log(deleteResponse);

  window.localStorage.clear();
  refreshToken = null;
  accessToken = null;
  user = null;
  loginViewEl.style.display = "block";
  productsViewEl.style.display = "none";
};

autoLoginUser();

productsViewEl
  .querySelector(".logout-btn")
  .addEventListener("click", () => logoutUser());
