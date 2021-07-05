import { createContext, useContext, useEffect, Dispatch, ReactNode } from 'react'
// import ImmerJS which allows you to mutate an object & create a new object instance based on your mutations
import { useImmerReducer } from 'use-immer'
import { save } from '../utils/api'
import { appStateReducer, AppState, List, Task } from './appStateReducer'
import { DragItem } from '../DragItem'
import { Action } from './actions'
import { withInitialState } from '../withInitialState'

type AppStateContextProps = {
    draggedItem: DragItem | null
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

type AppStateProviderProps = {
    children: ReactNode
    initialState: AppState
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const AppStateProvider = withInitialState<AppStateProviderProps>(
    ({ children, initialState }) => {
        const [state, dispatch] = useImmerReducer(appStateReducer, initialState)

        useEffect(() => {
            save(state)
        }, [state])

        const { draggedItem, lists } = state
        const getTasksByListId = (id: string) => {
            return lists.find((list) => list.id === id)?.tasks || []
        }


        return (
            <AppStateContext.Provider value={{ draggedItem, lists, getTasksByListId, dispatch }}>
                {children}
            </AppStateContext.Provider>
        )
    }
)

export const useAppState = () => {
    return useContext(AppStateContext)
}