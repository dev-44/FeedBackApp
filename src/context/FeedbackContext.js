import { createContext, useState } from 'react'
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is Item 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This is Item 2',
            rating: 7
        },
        {
            id: 3,
            text: 'This is Item 3',
            rating: 8
        },
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        //console.log('App: ' + id)
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //console.log(newFeedback.id)
        setFeedback([newFeedback, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit ({
            item,
            edit: true
        })
    }

    const updateFeedback = (id, updItem) => {
        //console.log(id, updItem)
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item, ...updItem} : item ))
        )
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,                           //Function
        feedbackEdit,                            //Object
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext