import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Cart() {
  return (
    <>
    <header>
        <div className='flex'>
        <AiOutlineArrowLeft className=' inline-block '/>
        <p>Continue Shopping</p>
        <AiOutlineShoppingCart/>
        {/* <p>7</p> for later */}
        </div>
    </header>

    <section>
      <h1>Shopping Cart</h1>
      <p>You have <span>4</span> items in shopping cart </p>

      <div className='border border-black'>
        Cart item
        <div className='border border-green-400'>
          Cart item container
        </div>
      </div>
    </section>
    </>
  )
}

export default Cart