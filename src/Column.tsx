import React from 'react'
import { ColumnContainer, ColumnTitle } from './styles'

type ColumnProps = React.PropsWithChildren<{
    text: string
}>

export const Column: React.FC<ColumnProps> = ({ text, children }) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
        </ColumnContainer>
    )
}
