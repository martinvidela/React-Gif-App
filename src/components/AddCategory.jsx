import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')


    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSumbit = (evt) => {
        evt.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewCategory(inputValue.trim())
        setInputValue('')
    }



    return (
        <form onSubmit={onSumbit}>
            <input
                type="text"
                placeholder="search gifs now!"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
