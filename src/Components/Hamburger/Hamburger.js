import React, { useState, useCallback } from "react"
import { HamburgerArrow } from "react-animated-burgers"
import { Transition } from "react-transition-group"
import './Hamburger.css'

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false)
  const toggleButton = useCallback(() => setIsActive((pre) => !pre))
  return (
    <div>
      <Transition timeout={2000} in={isActive} appear>
        {(status) => (
          <ul className={`box box-${status}`}>
            {console.log(status)}
            <li> Login </li>
            <li> Register </li>
            <li> Dashboard </li>
            <li> Profile </li>
            <li> About </li>
          </ul>
        )}
      </Transition>
      {/* <button onClick={() => setIsActive(!isActive)}>menu</button> */}
      <HamburgerArrow {...{ isActive, toggleButton }} />
    </div>
  )
}

export default Hamburger