// !! Create Token & Save it in Cookies
const sellerSendResponse = (seller, statusCode, res) => {
  // ** Get JWT Token
  const token = seller.getJwtToken();

  // ** Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("sellerToken", token, options).json({
    success: true,
    seller,
    token,
  });
};

module.exports = sellerSendResponse;
