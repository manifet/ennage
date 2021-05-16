export function validateForm(fields) {
  let valid = true;

  fields.forEach(item => {
    if (!validateField(item)) {
      valid = false;
      item.setAttribute("data-validate", "invalid");
    }
  });

  return valid;
}

export function validateField(field) {
  let regexp;
  const regexpEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

  switch (field.getAttribute("name")) {
    case "email":
      regexp = regexpEmail;
      break;
    default:
      regexp = /^(?!\s*$).+/;
      break;
  }

  let regexpValid = regexp.test(field.value);

  if (field.value === "") {
    field.setAttribute("data-validate", "");
  } else {
    field.setAttribute("data-validate", `${regexpValid}`);
  }

  return regexpValid;
}
