import React from 'react'

interface Props{
    cartIteams: string[]
    onClear: () => void
}

const Cart = ({cartIteams, onClear}: Props) => {
  return (
    <>
    <div>Cart</div>
    <ul>
        {cartIteams.map(item => <li key={item}>{item}</li>)}
    </ul>
    <button onClick={onClear}>Clear</button>
    </>
  )
}

export default Cart