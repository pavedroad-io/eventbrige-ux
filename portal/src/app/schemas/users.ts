export class User {
  name: string
  email: string
  phone: string
  profile: string
  role: string

  created: Date
  updated: Date

  constructor(){
    this.name = "";
    this.email = "";
    this.phone = "";
    this.profile = "";
    this.role = "";
    this.created = new Date();
    this.updated = new Date();
  }
}
