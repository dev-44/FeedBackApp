//import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'                                                                  //ipt
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


//function FeedbackItem({ item, handleDelete }) {                                                   //_rfce
function FeedbackItem({ item }) { 
    //const [rating, setRating] = useState(7)
    //const [text, setText] = useState('This is an example of a feedback item')

    /*const handleClick = () => {
        setRating((prev) => {
            return prev + 1
        })
    }*/

    const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => /*handleDelete(item.id) */ deleteFeedback(item.id)}>          {/* Passing an Argument*/}
                <FaTimes color="purple" />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color="purple" />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem


/*<div className="card">
    <div className="num-display">{item.rating}</div>
    <div className="text-display">{item.text}</div>
    <button onClick={handleClick}>Click Me</button>
</div>*/