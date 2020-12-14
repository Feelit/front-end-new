const baseUrl = 'https://cridetest.ml';

const getAllPosts = async () => {
  const url = `${baseUrl}/posts/`;
  const resp = await fetch(url
  //   , {
  //   'mode': 'cors',
  //   'headers': {
  //       'Access-Control-Allow-Origin': '*',
  //   }
  // }
  );
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