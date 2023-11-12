class UserModel {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  class UserView {
    displayUserDetails(user) {
      console.log(`User Details: Name - ${user.name}, Age - ${user.age}`);
    }
  }

  class UserController {
    constructor(user, view) {
      this.user = user;
      this.view = view;
    }
  
    setUserName(name) {
      this.user.name = name;
    }
  
    setUserAge(age) {
      this.user.age = age;
    }
  
    updateView() {
      this.view.displayUserDetails(this.user);
    }
  }
  
 
  const user = new UserModel("John Doe", 30);
  const view = new UserView();
  const controller = new UserController(user, view);
  

  controller.updateView();
  

  controller.setUserName("Jane Doe");
  controller.setUserAge(25);
  controller.updateView();