const baseUrl = 'https://cridetest.ml';

const getAllPosts = async () => {
  const url = `${baseUrl}/posts/`;
  const resp = await fetch(url);
  const posts = await resp.json();
  return posts;
};

const fetchWithToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  //const userData = JSON.parse(localStorage.getItem("userData")) || "";
  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Token ab2fef055c08a442eb4d97d2976aaf9f767bfcac`,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ab2fef055c08a442eb4d97d2976aaf9f767bfcac`,
      },
      body: JSON.stringify(data),
    });
  }
};



export {
  getAllPosts,
  fetchWithToken
}