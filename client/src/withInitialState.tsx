import { useState, useEffect, ComponentType } from 'react'
import { AppState } from './state/appStateReducer'
import { load } from './utils/api'

type InjectedProps = {
    initialState: AppState
}

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>

export function withInitialState<TProps>(
    WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>
) {
    return (props: PropsWithoutInjected<TProps>) => {
        const [initialState, setInitialState] = useState<AppState>({
            lists: [],
            draggedItem: null
        })
        const [isLoading, setIsLoading] = useState(true)
        const [error, setError] = useState<Error | undefined>()

        useEffect(() => {
            const fetchInitialState = async () => {
                try {
                    const data = await load()
                    setInitialState(data)
                } catch (err: any) {
                    setError(err)
                }
                setIsLoading(false)
            }
            fetchInitialState()
        }, [])

        if (isLoading) {
            return <div>Loading</div>
        }

        if (error) {
            return <div>{error.message}</div>
        }

        return <WrappedComponent {...props} initialState={initialState} />
    }
}