const { BaseController } = require('./BaseController')

class UsersController extends BaseController {
    constructor() {
        super()
        this.API_USERS_PROFILE = '/users/profile';
    
    }

    async getUserProfile() {
        return this.get(this.API_USERS_PROFILE)
    }

}

module.exports.UsersController = UsersController