

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory")

Factory.blueprint("App/Models/User", async (faker, i, data) => ({
  email: data[i].email ? data[i].email : faker.email(),
  password: data[i].password,
  name: data[i].name ? data[i].name : faker.name(),
  account_status: "active",
  role: data[i].role,
}))

