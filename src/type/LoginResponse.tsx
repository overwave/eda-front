export interface LoginResponse {
    user: UserInfo;
    token: string;
}

export interface UserInfo {
    email: string;
    name: string;
    pictureUrl: string;
}
