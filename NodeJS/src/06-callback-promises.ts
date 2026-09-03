import { error } from "node:console";

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
// findUserWithCallback(3, (error, user) => {
//   if (error) {
//     console.log("message", error.message);
//     return;
//   }
//   if (!user) return;
//   console.log("found bsdk", user.id, user.name, user.role);
// });

function fetchWithPromises(userId: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userInfo = users.find((user) => user.id === userId);
      if (!userInfo) {
        reject(new Error("User is not found"));
        return;
      }
      resolve(userInfo);
    }, 500);
  });
}

// fetchWithPromises(2)
//   .then((user) => {
//     console.log("found bsdk", user.id, user.name, user.role);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

async function fetchUserWithAsyncAwait(userId: number): Promise<void> {
  try {
    const user = await fetchWithPromises(userId);
    console.log(user.name);
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown error";
    console.log(message);
  }
}

fetchUserWithAsyncAwait(20);
