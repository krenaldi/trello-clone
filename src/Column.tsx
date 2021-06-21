import React from 'react'
import { ColumnContainer, ColumnTitle } from './styles'
import { AddNewItem } from './AddNewItem'

type ColumnProps = React.PropsWithChildren<{
    text: string
}>

export const Column: React.FC<ColumnProps> = ({ text, children }) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddNewItem
                toggleButtonText="+ Add another task"
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    )
}
