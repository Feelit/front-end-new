const baseUrl = 'https://cridetest.ml';

const getAllPosts = async () => {
  const url = `${baseUrl}/posts/`;
  const resp = await fetch(url);
  const posts = await resp.json();
  return posts;
};

const fetchWithToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  const userToken = JSON.parse(localStorage.getItem("userToken")) || "";
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Token ${userToken}`,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${userToken}`,
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchWithoutToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};



export {
  getAllPosts,
  fetchWithToken,
  fetchWithoutToken
}