//when user registered
//send a welcome email
//write a log
//notify some other services

import EventEmitter from "node:events";

//emit one event -> listner listen to this event , do something

//.on() - register one listener
//.once()- register one listener that runs one time
//.emit() =trigger an event and sends to the listeners

const appEvents = new EventEmitter();

type UserRegisterPayLoad = {
  id: number;
  email: string;
};

appEvents.on("user:registered", (user: UserRegisterPayLoad) => {
  console.log(user);
});

function registerUser(): void {
  const user = {
    id: 1,
    email: "sanagam@gmail.com",
  };
  console.log("user assigned");

  appEvents.emit("user:registered", user);
}

registerUser();

//register multiple event
