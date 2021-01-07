import { FC, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

type ContainerProps = Record<string, unknown>

type PresenterProps = {
  isLoggedIn: boolean
}

type Props = ContainerProps & PresenterProps

const DomComponent: FC<Props> = ({ isLoggedIn, children }) =>
  isLoggedIn ? <Fragment>{children}</Fragment> : <Redirect to={'/login'} />

const StyledComponent = styled(DomComponent)``

const Auth: FC<ContainerProps> = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('token')

  const presenterProps: PresenterProps = {
    isLoggedIn,
  }

  return <StyledComponent {...presenterProps}>{children}</StyledComponent>
}

export default Auth
