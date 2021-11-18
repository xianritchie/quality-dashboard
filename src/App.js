import React from 'react'
import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import routes from './routes'
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.appRoot}>
     
      <Router>
      <Navigation />
        <div>
          <Routes>
            {routes.map((route, index) => {
              console.log(route.path)
              return (
                <Route exact key={index} path={route.path} element={<route.component />} />
              )
            })}
          </Routes>
        </div>
      </Router>
    </div>
  )
} 

export default App
