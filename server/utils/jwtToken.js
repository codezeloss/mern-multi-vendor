// !! Create Token & Save it in Cookies
const sendToken = (user, statusCode, res) => {
  // ** Get JWT Token
  const token = user.getJwtToken();

  // ** Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
