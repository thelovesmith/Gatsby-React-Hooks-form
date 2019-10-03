import React, { useState, useEffect, useReducer } from "react"
import Image from "./image"

const HookForm = () => {
  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { name: "", email: "", password: "" }
  )
  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  ///////////////////////////////
  const { name, email, password } = state

  return (
    <>
      <div>
        <div>
          <div>
            <Image />
          </div>
          <form>
            <input
              name="name"
              label="password"
              placeholder="Name"
              value={name}
              onChange={e => updateState({ name: e.target.value })}
            />
            <input
              name="email"
              label="password"
              placeholder="Email"
              value={email}
              onChange={e => updateState({ email: e.target.value })}
            />
            <input
              name="password"
              label="password"
              value={password}
              placeholder="************"
              onChange={e => updateState({ password: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          {/* Once the state changes from the inputs onChange being called, they are available everywhere and can be logged or displayed in the DOM like below */}
          {name && <p>Name: {name}</p>}
          {email && <p>Email: {email}</p>}
          {password && <p>Password: {password}</p>}
        </div>
      </div>
    </>
  )
}
export default HookForm
