import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";
import { User } from "../../model/User";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id}: any = request.headers;
    try {
      const users: User[] = this.listAllUsersUseCase.execute({user_id})
      return response.status(200).json(users)

    }catch (e){
      return response.status(400).json({ error: e.message })

    }


  }
}

export { ListAllUsersController };
