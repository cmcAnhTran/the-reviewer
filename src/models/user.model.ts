export interface User {
    id: string,
    username: string,
    email: string,
    avatar: string,
}

export interface SignupPayload {
    username: string,
    email: string,
    password: string
}

export type LoginPayload = Omit<SignupPayload, 'email'>