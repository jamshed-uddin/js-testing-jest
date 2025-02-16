const postToServer = async (data) => {
  console.log("mock used");
  return Promise.resolve(data);
};

module.exports = { postToServer };
