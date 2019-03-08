import React from 'react'
import { Link } from 'gatsby'
import { injectIntl } from 'react-intl'

const LLink = ({ to, intl: { locale }, ...props }) => {
  const path = `/${locale}${to}`

  return <Link {...props} to={path} />
}

export default injectIntl(LLink)
