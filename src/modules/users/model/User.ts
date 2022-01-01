import { v4 as uuidV4 } from "uuid";

class User {
  id: string;

  name: string;

  admin: boolean;

  email: string;

  created_at: Date;

  updated_at: Date;

  constructor(name:string,email:string) {
    this.id = uuidV4();
    this.admin = false;
    this.name = name;
    this.email = email;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
