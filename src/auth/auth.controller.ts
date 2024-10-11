import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController{
    constructor(private authServie: AuthService){}

    @Post("login")
    signin(){
       return this.authServie.login();
    }

    @Post("/signup")
    signup(){
        this.authServie.signup();
    }
}