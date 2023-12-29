import { useEffect, useRef } from 'react'

export const useFocus = () => {
    // hook to get access to the rendered input element. TypeScript can't automatically know what the element type will be, so we provide the actual type to it
    const ref = useRef<HTMLInputElement>(null)

    // trigger the focus on the input element
    useEffect(() => {
        ref.current?.focus()
    }, [])
    return ref
}
