import React from 'react'
import {
	Route,
	Switch,
	withRouter,
	BrowserRouter
} from 'react-router-dom'
import {
	Home,
	ArticleDetail
} from './pages/index'

const RouterJump = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={withRouter(Home)} />
				<Route exact path='/articledetail' component={withRouter(ArticleDetail)} />
			</Switch>
		</BrowserRouter>
	)
}

export default RouterJump

