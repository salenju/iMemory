import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable' // 路由懒加载

import LayoutWrapper from './components/Layout/LayoutWrapper'

const Loading = ({ isLoading, error }) => {
  if (isLoading) {
    return 'loading'
  } else if (error) {
    return error
  }
  return null
}

const Home = Loadable({
  loading: Loading,
  loader: () => import('./page/Home'),
})

const UserCenter = {
  Login: Loadable({
    loading: Loading,
    loader: () => import('./page/UserCenter/Login'),
  }),
  Register: Loadable({
    loading: Loading,
    loader: () => import('./page/UserCenter/Register'),
  }),
  FindPassword: Loadable({
    loading: Loading,
    loader: () => import('./page/UserCenter/FindPassword'),
  }),
}

// 图片懒加载
const ImgLazyLoad = Loadable({
  loading: Loading,
  loader: () => import('./page/ImgLazyLoad'),
})

const App = () => {
  return (
    <BrowserRouter>
      <LayoutWrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user-center/login" component={UserCenter.Login} />
          <Route
            exact
            path="/user-center/register"
            component={UserCenter.Register}
          />
          <Route
            exact
            path="/user-center/find-password"
            component={UserCenter.FindPassword}
          />
          <Route exact path="/img-lazy-load" component={ImgLazyLoad} />
        </Switch>
      </LayoutWrapper>
    </BrowserRouter>
  )
}

export default App
