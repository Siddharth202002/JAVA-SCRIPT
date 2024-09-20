function capitalize(userName, check, checkUpper) {
  check === checkUpper
    ? console.log(userName)
    : (() => {
        userName = userName.replace(userName[0], userName[0].toUpperCase());
        console.log(userName);
      })();
}

let userName = "hellow";
let check = userName[0];
let checkUpper = check.toUpperCase();

capitalize(userName, check, checkUpper);
