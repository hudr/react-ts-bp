import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

interface RepositoryParams {
  repository: string
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <h1>Repository: {params.repository}</h1>
      <Link to="/">Ir para rota inicial</Link>
    </>
  )
}

export default Repository
