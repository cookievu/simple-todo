import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import IndexPage from 'pages/IndexPage'
import Navbar from 'components/Navbar'
import LoginPage from 'pages/LoginPage'
import CreateTodoPage from 'pages/CreateTodoPage'
import TodoDetailPage from 'pages/TodoDetailPage'

function App() {
  const auth = useSelector((state: any) => state.auth)
  return (
    <Router>
      {!auth.loggedIn ? (
        <Switch>
          <Route path="/register">
            <LoginPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      ) : (
        <div className="pt-16">
          <Navbar />
          <Switch>
            <Route exact path="/create">
              <CreateTodoPage />
            </Route>

            <Route exact path="/todo/:id">
              <TodoDetailPage />
            </Route>
            <Route path="/">
              <IndexPage />
            </Route>
          </Switch>
        </div>
      )}
    </Router>
  )
}

export default App
