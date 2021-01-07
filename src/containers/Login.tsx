import { FC, useCallback } from 'react'
import { useHistory } from 'react-router'

import LoginTemplate from '../templates/LoginTemplate'

type Props = {
  children?: never
}

const Login: FC<Props> = () => {
  const history = useHistory()
  const handleLogin = useCallback(
    (email: string, password: string) => {
      // Replace with login process.
      console.log(email, password)
      localStorage.setItem('token', 'token')
      history.push('/')
    },
    [history]
  )

  return <LoginTemplate handleLogin={handleLogin} />
}

export default Login
