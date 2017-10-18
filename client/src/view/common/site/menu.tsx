/**
 * メニュー
 */

import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from '../../../styled-components'
import config from '../../../config'

const Contianer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;

  list-style: none;
`

const StyledLink = styled(Link)`
  padding-bottom: 2px;

  text-decoration: none;
  color: ${p => p.theme.color.secondary};
  border-bottom: solid 1px ${p => p.theme.color.secondary};
`

type Props = {
  className?: string
}

const Menu: React.SFC<Props> = function Menu (p) {
  return (
    <nav className={p.className}>
      <Contianer>
        {
          config.menu.map((v, i) => (
            <li key={i}>
              <StyledLink to={v.path}>{v.label}</StyledLink>
            </li>
          ))
        }
      </Contianer>
    </nav>
  )
}

export default Menu