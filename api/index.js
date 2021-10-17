import { createEndpoint, createParameter, isNone } from "@helpers/utilities";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const END_POINTS = {
  TOKEN: "/auth/token/",
  ACCOUNT: "/auth/account/",
  PATIENTS: "/patients/",
};

const METHODS = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
  PUT: "PUT",
};

const form = (obj) => {
  const form = new FormData();
  Object.keys(obj).forEach((key) => {
    form.append(key, obj[key]);
  });
  return form;
};

export function createMainAPI(token) {
  // Private functions
  async function hit(endpoint, method, body) {
    let data = {
      method: method,
      body: body ? form(body) : undefined,
      headers: {
        "Api-Key": API_KEY,
      },
    };

    if (!isNone(token)) {
      data = {
        ...data,
        headers: {
          ...data.headers,
          Authorization: `Token ${token}`,
        },
      };
    }

    return fetch(API_DOMAIN + endpoint, data)
      .then((res) => res)
      .catch((err) => err);
  }

  async function login({ email, password }) {
    const body = {
      email,
      password,
    };

    return hit(END_POINTS.TOKEN, METHODS.POST, body);
  }

  async function logout() {
    return hit(END_POINTS.TOKEN, METHODS.DELETE);
  }

  async function getAccount() {
    return hit(END_POINTS.ACCOUNT, METHODS.GET);
  }

  async function getPatients(parameters) {
    return hit(END_POINTS.PATIENTS + createParameter(parameters), METHODS.GET);
  }

  return {
    login,
    logout,
    getAccount,
    getPatients,
  };
}
