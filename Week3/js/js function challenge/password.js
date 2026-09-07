/* Part 1 — Check Password Length */

let checkLength = (myPassword) => {
  if (myPassword.length < 8) {
    return "too short";
  } else if (myPassword.length >= 8 && myPassword.length <= 15) {
    return "good";
  } else if (myPassword.length >= 16) {
    return "long";
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
    if (
      !hasNumber(myPassword[i]) &&
      myPassword[i] === myPassword[i].toUpperCase()
    ) {
      count++;
    }
  }
  return count;
};
countUppercase("javascript");

/* Part 4 — Count Special Characters */

let countSpecialCharacters = (myPassword) => {
  let count = 0;
  for (let i = 0; i < myPassword.length; i++) {
    if (
      (myPassword[i] === "!") |
      (myPassword[i] === "@") |
      (myPassword[i] === "#") |
      (myPassword[i] === "$") |
      (myPassword[i] === "%") |
      (myPassword[i] === "&") |
      (myPassword[i] === "*")
    ) {
      count++;
    }
  }
  return count;
};
countSpecialCharacters("Hello!!");

/* Part 5 — Does the Password Meet the Length Requirement? */
let hasGoodLength = (pw) => {
  if (checkLength(pw) === "good" || checkLength(pw) === "long") {
    return true;
  } else {
    return false;
  }
};

hasGoodLength("Hello");

/* Part 6 — Does the Password Contain a Number? */
let hasNumber = (myPassword) => {
  for (i of myPassword) {
    if (i >= "0" && i <= "9") {
      return true;
    }
  }
  return false;
};

hasNumber("1sds");

/* Part 7 — Does the Password Contain an Uppercase Letter? */
let hasUppercase = (myPassword) => {
  if (countUppercase(myPassword) > 0) {
    return true;
  } else {
    return false;
  }
};

/* Part 8 — Does the Password Contain a Special Character? */

let hasSpecialCharacter = (myPassword) => {
  if (countSpecialCharacters(myPassword) > 0) {
    return true;
  } else {
    return false;
  }
};

/* Part 9 — Calculate the Security Score */
let calculateScore = (myPassword) => {
  let score = 0;

  if (hasGoodLength(myPassword)) {
    // console.log("hasGOodlength+1");
    score++;
  }

  if (hasNumber(myPassword)) {
    // console.log("hasNumber+1");
    score++;
  }
  if (hasUppercase(myPassword)) {
    console.log("hasUppercase+1");
    score++;
  }
  if (hasSpecialCharacter(myPassword)) {
    // console.log("hasSpecialCharacter+1");
    score++;
  }
  if (checkLength(myPassword) === "long") {
    // console.log("checkLength+1");
    score++;
  }

  return score;
};

/* Part 10 — Determine Password Strength */
let getPasswordStrength = (myPassword) => {
  let score = calculateScore(myPassword);
  let pwStrength = "";
  switch (score) {
    case 0:
      pwStrength = "Weak";
      break;
    case 1:
      pwStrength = "Weak";
      break;
    case 2:
      pwStrength = "Medium";
      break;
    case 3:
      pwStrength = "Medium";
      break;
    case 4:
      pwStrength = "Strong";
      break;
    case 5:
      pwStrength = "Very Strong";
      break;
  }
};

/* Part 11 — Build the Final Analyzer */
let analyzePassword = (myPassword) => {
  console.log("PASSWORD SECURITY REPORT");
  console.log("------------------------");
  let pwLength = myPassword.length;
  let pwLengthRating = checkLength(myPassword);
  let pwNumbers = countNumbers(myPassword);
  let pwUppercase = countUppercase(myPassword);
  let pwCountSpecialCharacters = countSpecialCharacters(myPassword);
  let pwScore = calculateScore(myPassword);
  let pwStrength = getPasswordStrength(myPassword);
  console.log("Password length: " + pwLength);
  console.log("Length rating: " + pwLengthRating);
  console.log("Numbers: " + pwNumbers);
  console.log("Uppercase letters: " + pwUppercase);
  console.log("Special characters: " + pwCountSpecialCharacters);
  console.log("Security score: " + pwScore + "/5");
  console.log("Strength: " + pwStrength);
};

/* Final one will want all above to return true, or false to calculate result */
analyzePassword("hello");

analyzePassword("hello123");

analyzePassword("Hello123");

analyzePassword("Hello123!");

analyzePassword("SuperSecure123!");

analyzePassword("SuperSecure123!!");
