const fetch = require('node-fetch');
const AbortController = require('abort-controller');

const post = async (link, data) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 30000);
  return (
      await fetch(link, {
withCredentials: true,
method: "POST",
signal: controller.signal,
headers: {
Accept: "application/json",
"Content-Type": "application/json",
},
body: JSON.stringify(data),
})
      ).json();
  };

const get = (link) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 30000);
  return fetch(link, {
withCredentials: true,
method: "GET",
signal: controller.signal,
});
};

module.exports = { 
  post, 
  get 
};
