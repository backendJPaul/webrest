export class User{
    constructor(id, name, password, role) {
        this._id = id;
        this._name = name;
        this._password = password;
        this._role = role;
    }


    getId() {
        return this._id;
    }

    setId(value) {
        this._id = value;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }

    getPassword() {
        return this._password;
    }

    setPassword(value) {
        this._password = value;
    }

    getRole() {
        return this._role;
    }

    setRole(value) {
        this._role = value;
    }
}
