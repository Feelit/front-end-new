//const baseUrl = 'https://cridetest.ml';

const getAllPosts = async () => {
  const url = 'https://cridetest.ml/posts/';
  const resp = await fetch(url);
  const posts = await resp.json();
  return posts;
};
// export const getClientById = async (id) => {
//   const url = `${baseUrl}/players/${id}`;
//   const resp = await fetch(url);
//   const client = await resp.json();
//   return client;
// };

export {
  getAllPosts
}