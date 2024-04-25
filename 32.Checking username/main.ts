
let current_users: string[] = ["saba", "babar", "ali", "rohan", "atif"];
let new_users: string[] = ["raza", "hussain", "admin", "ahmed"];
new_users.forEach((newUser) => {
  if (
    current_users.some((currentUser) =>
      currentUser.toLowerCase() === newUser.toString().toLowerCase()
    )
  ) {
    console. log(`${newUser} will need to enter a new username.`);
  } else{
    console.log(`${newUser} is available.`);
  }
});