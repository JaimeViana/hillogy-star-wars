import * as bcrypt from 'bcryptjs';

export interface UserInfo {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
}

export class User {
    firstName: string;
    lastName: string;
    username: string;
    password: string;

    constructor(info: UserInfo) {
        this.firstName = info.firstName;
        this.lastName = info.lastName;
        this.username = info.username;
        this.password = info.password;
    }

    setHashedPassword(password: string) {
        this.password = bcrypt.hashSync(password, 10);
    }

    comparePassword(attemptedPassword: string) {
        return bcrypt.compareSync(attemptedPassword, this.password);
    }



}

