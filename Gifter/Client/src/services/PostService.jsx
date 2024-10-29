const baseUrl = 'https://localhost:5001/api/Post';

export const getAllPosts = () => {
  return fetch(baseUrl) 
    .then((res) => res.json())
};

export const getAllPostsWithComments = () => {
  return fetch(`${baseUrl}/GetWithComments`) 
    .then((res) => res.json())
};

export const addPost = (singlePost) => { 
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singlePost),
  });
};

export const getPost = (id) => {
  return fetch(`/api/post/${id}`).then((res) => res.json());
};

export const getSearchedPosts = (q) => {
  return fetch(`${baseUrl}/search?q=${q}`) 
    .then((res) => res.json())
};