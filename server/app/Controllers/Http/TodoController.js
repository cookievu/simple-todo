"use strict";

const NotFoundException = use("App/Exceptions/NotFoundException");

class TodoController {
  async index({ request, response, auth }) {
    const { page } = request.get();
    const todos = await auth.user.todos().paginate(page | 1, 20);
    return response.json(todos);
  }

  async show({ response, params, auth }) {
    const { id } = params;
    const todo = await auth.user.todos().where("id", id).first();
    if (!todo) {
      throw new NotFounDException();
    }
    return response.json(todo);
  }

  async store({ request, response, auth }) {
    const body = request.only(["title", "description", "status"]);
    const todo = await auth.user.todos().create(body);

    return response.json(todo);
  }

  async update({ request, response, params, auth }) {
    const { id } = params;
    const todo = await auth.user.todos().where("id", id).first();
    if (!todo) {
      throw new NotFounDException();
    }

    todo.merge(request.post());
    await todo.save();

    return response.json(todo);
  }

  async destroy({ response, params, auth }) {
    const { id } = params;
    const todo = await auth.user.todos().where("id", id).first();
    if (!todo) {
      throw new NotFounDException();
    }

    await todo.delete();

    return response.json({
      message: "Todo is deleted",
    });
  }
}

module.exports = TodoController;
