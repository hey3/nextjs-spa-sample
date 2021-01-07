import { FC, useState, FormEvent } from 'react'
import styled from 'styled-components'

type ContainerProps = {
  className?: string
  handleLogin: (email: string, password: string) => void
  children?: never
}

type PresenterProps = {
  handleChangeEmail: (emailValue: string) => void
  handleChangePassword: (passwordValue: string) => void
  login: (e: FormEvent) => void
}

type Props = ContainerProps & PresenterProps

const DomComponent: FC<Props> = ({ className, handleChangeEmail, handleChangePassword, login }) => {
  return (
    <form className={className} onSubmit={login}>
      <label className="form-input" htmlFor="email">
        <div>Mail Address </div>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Type your email"
          onChange={e => handleChangeEmail(e.target.value)}
        />
      </label>
      <label className="form-input" htmlFor="password">
        <div>Password</div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Type your password"
          onChange={e => handleChangePassword(e.target.value)}
        />
      </label>
      <button className="submit-button" type="submit">
        Login
      </button>
    </form>
  )
}

const StyledComponent = styled(DomComponent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem 0 2rem;
  height: 20rem;
  user-select: none;

  .form-input {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
    width: 100%;

    & > div {
      cursor: default;
    }

    &:not(:first-child) {
      margin-top: 1rem;
    }

    > input {
      font-size: 1.2rem;
      line-height: 3rem;
      border-bottom: 1px solid black;

      &:focus {
        border-bottom: 1px solid #9ecaed;
      }
    }
  }

  .submit-button {
    margin-top: 2rem;
    background-color: #06aee6;
    width: 100%;
    text-align: center;
    color: #f8f9f9;
    height: 3rem;
    border-radius: 0.15rem;

    &:hover,
    &:focus {
      background-color: #0290bf;
      outline: none;
      border-color: #9ecaed;
      box-shadow: 0 0 10px #9ecaed;
    }
  }
`

const LoginForm: FC<ContainerProps> = props => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const login = (e: FormEvent): void => {
    e.preventDefault()
    props.handleLogin(email, password)
  }

  const presenterProps: PresenterProps = {
    handleChangeEmail: (emailValue: string) => setEmail(emailValue),
    handleChangePassword: (passwordValue: string) => setPassword(passwordValue),
    login,
  }
  return <StyledComponent {...presenterProps} {...props} />
}

export default LoginForm
