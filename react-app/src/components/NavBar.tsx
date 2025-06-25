import React from 'react'

interface Props {
    cartIteamsCount: number
}

const NavBar = ({cartIteamsCount}: Props) => {
  return (
    <div>NavBar: {cartIteamsCount}</div>
  )
}

export default NavBar