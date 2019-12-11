import React from 'react'

const EditExpensePage = (props) => {
    const { match: { params: { id } } } = props
    console.log(id)
    return (
        <div>
            this is page for {id}
    </div>
    )
}

export default EditExpensePage