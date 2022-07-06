const { post } = require("./utils");

const API_URL = "https://nftp0.dingocoin.io";

const getCollection = (data) => {
    return post(`${API_URL}/collection/get`, {
          handle: data.handle,
            });
};

module.exports = {
  getCollection
};
