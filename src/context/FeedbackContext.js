import { createContext, useState, useEffect } from 'react'
//import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {fetchFeedback()}, [])

    //Fetch feedback data
    const fetchFeedback = async () => {
        const response = await fetch('http://localhost:5000/feedback?_sort=id&order=desc')
        const data = await response.json()
        //console.log(data)
        setFeedback(data)
        setIsLoading(false)
    }

    const deleteFeedback = async (id) => {
        //console.log('App: ' + id)
        if(window.confirm('Are you sure you want to delete?')) {

            await fetch(`http://localhost:5000/feedback/${id}`, {method: 'DELETE'})
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('http://localhost:5000/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        console.log('Response ADD')
        console.log(response)
        const data = await response.json()
        console.log('ADD Data')
        console.log(data)

        //newFeedback.id = uuidv4()
        //console.log(newFeedback.id)
        //setFeedback([newFeedback, ...feedback])
        setFeedback([data, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit ({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updItem) => {

        console.log('upd ITEM')
        console.log(updItem)
        const response = await fetch(`http://localhost:5000/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()

        //console.log(id, updItem)
        //setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item )))
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...data} : item )))

        setFeedbackEdit({   
            item:{},
            edit: false
        })
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,                           //Function
        feedbackEdit,                            //Object
        updateFeedback,
        isLoading
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext