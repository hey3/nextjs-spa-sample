import { FC } from 'react'
import styled from 'styled-components'

import Auth from '../components/Auth'
import Layout from '../components/Layout'

type ContainerProps = {
  className?: string
  children?: never
}

type PresenterProps = Record<string, unknown>

type Props = ContainerProps & PresenterProps

const DomComponent: FC<Props> = ({ className }) => (
  <Auth>
    <Layout>
      <div className={className}>Welcome!!</div>
    </Layout>
  </Auth>
)

const StyledComponent = styled(DomComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const HomeTemplate: FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export default HomeTemplate
