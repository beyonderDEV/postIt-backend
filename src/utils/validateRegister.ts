import { UsernamePasswordInput } from "./UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "Length must be greater than 2 characters!",
      },
    ];
  }
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "Invalid email adress",
      },
    ];
  }
  if (options.password.length <= 5) {
    return [
      {
        field: "password",
        message: "Length must be greater than 5 characters!",
      },
    ];
  }

  return null;
};
