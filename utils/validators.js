const isEmail = (email) => {
  console.log(email);
  const emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email !== "" && email.match(emailFormat)) {
    return true;
  }
  return false;
};

const validFullName = (name) => {
  const nameFormat = /^[a-zA-Z]{1,40}(?: +[a-zA-Z]{1,40} *)+$/;
  if (name !== "" && name.match(nameFormat)) {
    return true;
  }
  return false;
};

const validRole = (role) => {
  if (role === "admin" || role === "super-admin") {
    return true;
  }

  return false;
};

const validPwd = (password) => {
  if (password === undefined || password === "" || password.length < 8) {
    return false;
  }
  return true;
};

const validCode = (num) => {
  if (num.toString().length !== 6) {
    return false;
  }
  return true;
};

const validPhoneNumber = (num) => {
  if (!num) {
    return false;
  }
  return true;
};

const validateCompany = (domain) => {
  if (domain === undefined || domain==="") {
    return false;
  } else {
    return true;
  }
};

module.exports = {
  validateCompany,
  isEmail,
  validFullName,
  validRole,
  validPwd,
  validCode,
  validPhoneNumber,
};
