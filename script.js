// PHONE
const phoneInput = document.getElementById("phone-input");

phoneInput.addEventListener("input", (e) => {
  const input = e.target;
  const inputValue = input.value;

  // Remove all non-digit characters from the input value
  const numericValue = inputValue.replace(/\D/g, "");

  // Format the numeric value with hyphens for Korean phone numbers
  const formattedValue = formatPhoneNumber(numericValue);

  // Set the formatted value back to the input
  input.value = formattedValue;
});

function formatPhoneNumber(value) {
  // Format the numeric value with hyphens for Korean phone numbers
  const formattedValue = value.replace(/(\d{2,3})(\d{4})(\d{4})/, "$1-$2-$3");
  return formattedValue;
}

// PASSWORD
const pwdInputContainer = document.getElementById("pwd-input-container");
const pwdInput = document.getElementById("pwd-input");
const pwdErrorText = document.getElementById("pwd-error");
const pwdConfirmInputContainer = document.getElementById("pwd-confirm-input-container");
const pwdConfirmInput = document.getElementById("pwd-confirm-input");

pwdConfirmInput.addEventListener("input", (e) => {
  if (e.target.value != pwdInput.value) {
    pwdInput.classList.add("error");
    pwdConfirmInput.classList.add("error");
    pwdErrorText.style.visibility = "visible";
  } else {
    pwdInput.classList.remove("error");
    pwdConfirmInput.classList.remove("error");
    pwdErrorText.style.visibility = "hidden";
  }
});
pwdInput.addEventListener("focus", () => {
  // ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
});

/* 
    Password should contain 8 or more characters
    1 uppercase letter: A
    1 lowercase letter: a
    1 number: 0123456789
    1 symbol: @$!%*?&
*/
