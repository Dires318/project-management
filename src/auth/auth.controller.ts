import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController{
    constructor(private authServie: AuthService){}

    @Post("/login")
    signin(){}

    @Post("/signup")
    signup(){}
}