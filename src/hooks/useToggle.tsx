'use client'
import { useState } from 'react'

function useToggle(initialState: boolean = false) {
  const [state, setState] = useState(initialState)
  const toggleState = () => setState((state) => !state)

  return [state, toggleState] as const
}

export default useToggle
