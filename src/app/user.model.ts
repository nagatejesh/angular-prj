export class User implements Object{
  
  constructor(private firstName:string,
    private lastName:string,
    private userName:string,
    private password:string,
    private email:string){}
  setFirstName(firstName:string){
    this.firstName=firstName;
  }
  setLastName(lastName:string){
    this.lastName=lastName;
  }
  setUserName(userName:string){
    this.userName=userName;
  }
  setPassword(password:string){
    this.password=password;
  }
  setEmail(email:string){
    this.email=email;
  }
  getFirstName(){
    return this.firstName;
  }
  getLastName(){
    return this.lastName;
  }
  getUserName(){
    return this.userName;
  }
  getPassword(){
    return this.password;
  }
  getEmail(){
    return this.email;
  }
}