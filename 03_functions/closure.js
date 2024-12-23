function createSecretPassword() {
  const password = '1234'; //private variable
  // closure remembers the variable if even after the function stops

  return function guessPassword(guess) {
    return guess === password;
  };
}

const checkPassword = createSecretPassword();
console.log(checkPassword('1234'));
console.log(checkPassword('4321'));
