import { FC } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

import LoginForm from '../components/LoginForm'

type ContainerProps = {
  className?: string
  handleLogin: (email: string, password: string) => void
  children?: never
}

type PresenterProps = Record<string, unknown>

type Props = ContainerProps & PresenterProps

const DomComponent: FC<Props> = ({ className, handleLogin }) => (
  <div className={className}>
    <div className="login-form">
      <h1 className="title">Login</h1>
      <LoginForm handleLogin={handleLogin} />
    </div>
  </div>
)

const StyledComponent = styled(DomComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(50deg, #2196f3 20%, #e300eb 90.71%);

  .login-form {
    display: block;
    background-color: #f8f9f9;
    border: 1px solid #f8f9f9;
    box-shadow: 2px 4px 10px 7px rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0.5rem;
    width: 30rem;

    .title {
      text-align: center;
      font-size: 2rem;
      font-weight: 700;
      margin-top: 2rem;
    }
  }
`

const LoginTemplate: FC<ContainerProps> = props => {
  const isLoggedIn = !!localStorage.getItem('token')

  if (isLoggedIn) {
    return <Redirect to={'/'} />
  }

  return <StyledComponent {...props} />
}

export default LoginTemplate
