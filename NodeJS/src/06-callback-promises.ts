type User = {
  id: number;
  name: string;
  role: "user" | "super-admin";
};

const users: User[] = [
  {
    id: 1,
    name: "suraz",
    role: "super-admin",
  },
  {
    id: 2,
    name: "nirmal",
    role: "user",
  },
  {
    id: 3,
    name: "aadarsh",
    role: "user",
  },
];

//
function findUserWithCallback(
  id: number,
  callback: (error: Error | null, user?: User) => void,
): void {
  setTimeout(() => {
    //u r actual api call
    const userInfo = users.find((user) => user.id === id);
    if (!userInfo) {
      callback(new Error("USer is not found"));
      return;
    }
    callback(null, userInfo);
  }, 500);
}
findUserWithCallback(3, (error, user) => {
  if (error) {
    console.log("message", error.message);
    return;
  }
  if (!user) return;
  console.log("found bsdk", user.id, user.name, user.role);
});
