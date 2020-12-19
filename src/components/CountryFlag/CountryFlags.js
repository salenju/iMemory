import React from 'react'

const cdnUrl =
  'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/4x3/'

const CountryFlag = param => {
  let { code } = param
  if (code === 'HK' || code === 'MO') {
    code = 'CN'
  } else if (code === 'TW') {
    code = ''
  }
  const flagUrl = code ? `${cdnUrl}${code.toLowerCase()}.svg` : ''

  return (
    <span
      aria-label={code}
      role="img"
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '1.3333333333em',
        height: '1em',
        backgroundImage: `url(${flagUrl})`,
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        fontSize: '1em',
        lineHeight: '1em',
        verticalAlign: 'middle'
      }}
      title={code}
    />
  )
}
export default CountryFlag
