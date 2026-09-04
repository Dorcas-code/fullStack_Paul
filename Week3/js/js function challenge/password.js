/* Part 1 — Check Password Length */

let checkLength = (myPassword) => {
  if (myPassword.length < 8) {
    console.log("too short");
  } else if (myPassword.length >= 8 && myPassword.length <= 15) {
    console.log("good");
  } else if (myPassword.length > 16) {
    console.log("long");
  }
};

checkLength("testing1234");

/* Part 2 — Check Password Length */

let countNumbers = (myPassword) => {
  let count = 0;
  for (let i = 0; i < myPassword.length; i++) {
    if (myPassword[i] >= "0" && myPassword[i] <= "9") {
      count++;
    }
  }
  console.log(myPassword.length);
  return count;
};

countNumbers("h234");

/* Part 3 —  Count Uppercase Letters */
let countUppercase = (myPassword) => {
  let count = 0;
  for (let i = 0; i < myPassword.length; i++) {
    if (myPassword[i] === myPassword[i].toUpperCase()) {
      count++;
    }
  }
  return count;
};
countUppercase("javascript");

/* Part 4 — Count Special Characters */

/* Final one will want all above to return true, or false to calculate result */
