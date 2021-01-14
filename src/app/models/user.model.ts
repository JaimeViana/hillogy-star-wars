import * as bcrypt from 'bcryptjs';

export interface UserInfo {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

export class User {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;

    constructor(info: UserInfo) {
        this.firstName = info.firstName;
        this.lastName = info.lastName;
        this.userName = info.userName;
        this.password = this.getHashedPassword(info.password);
    }

    getHashedPassword(password: string) {
        return bcrypt.hashSync(password, 10)
    }

    comparePassword(attemptedPassword: string) {
        return bcrypt.compareSync(attemptedPassword, this.password)
    }



}

