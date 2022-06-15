import * as http from "./HttpClient";
import {LoginResponse} from "../type/LoginResponse";

export function login(token: string): Promise<LoginResponse> {
    return http.post("public/login/google", {token});
}
