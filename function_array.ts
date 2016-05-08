"use strict";

class User {

  constructor (public username : string, public email : string) { }

}

class LoggedInUser extends User {

  public logged_in : boolean = true;
 
  constructor (username : string, email : string) { super(username, email) }

  logout () : void {
    // Logout logic
  }

}

const function_array = [
  // ((user : LoggedInUser) => void)
  function logout(user : LoggedInUser) : void { user.logout() },
  // ((user : User, email : string) => void)
  function setEmail (user : User, email : string) : void { 
    user.email = email;
  }
];

// Dummy class to pleae compiler
class Friend { }

const function_array2 = [
  // ((user : LoggedInUser) => void)
  function logout(user : LoggedInUser) : void { user.logout() },
  // ((user : User, email : string) => void)
  function setEmail (user : User, email : string) : void { 
    user.email = email;
  },
  function chargeAccount ( user : User, amount : number) : void {
    // Take user's money to fund more features
  }
];

function_array2.a
