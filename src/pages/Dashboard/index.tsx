import React from 'react'
import { Link } from 'react-router-dom'

import { Title } from './styles'

const DashBoard: React.FC = () => {
  return (
    <>
      <Title>Explore repositórios no Github</Title>
      <Link to="/repositories/qualquer/coisa">Ir para rota: repositories</Link>
    </>
  )
}

export default DashBoard
