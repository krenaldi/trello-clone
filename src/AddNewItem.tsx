import { useState } from 'react'
import { AddItemBtn } from './styles'
import { NewItemForm } from './NewItemForm'

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const { onAdd, toggleButtonText, dark } = props;

    // if showForm is true create input field with Create Button
    if (showForm) {
        return (
            <NewItemForm
                onAdd={text => {
                    onAdd(text)
                    setShowForm(false)
                }}
            />
        )
    }

    return (
        <AddItemBtn dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemBtn>
    )
}
