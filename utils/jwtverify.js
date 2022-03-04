import jwt from "jsonwebtoken";

const jwtverify = (token, secret, options) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, options, (err, payload) => {
      if (err) {
        reject(err);
      } else {
        resolve(payload);
      }
    });
  });
};

export default jwtverify;
