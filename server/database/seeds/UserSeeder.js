

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    const users = [
      {
        email: "tuanvu0995@gmail.com",
        password: "1234567",
        name: "Tuan Vu",
        role: "super",
        account_status: 'active'
      },
    ]
    await Factory.model("App/Models/User").createMany(users.length, users)

  }
}

module.exports = UserSeeder
