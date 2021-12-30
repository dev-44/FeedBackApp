import { useState, useContext, useEffect} from 'react'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'
import Button from './shared/Button'
import FeedbackContext from '../context/FeedbackContext'



//function FeedbackForm({handleAdd}) {
function FeedbackForm() {

    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)
    
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    //If the second parameter is empty, it runs once when the page is loading for the first time
    useEffect(() => {
        //console.log('Hello')
        if (feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])                                                  

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length < 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text, 
                rating
            }

            //Update feedback
            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
            } else {
                //console.log(newFeedback)
                //handleAdd(newFeedback)
                addFeedback(newFeedback)
            }

            setText('')                         //Empty the text input
        }
    }

    return (
        <Card >
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                {/* @todo - rating select component*/}
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input type="text" placeholder="Write a Review" onChange={handleTextChange} value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
