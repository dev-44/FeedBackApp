//import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'                                                                  //ipt
import { FaTimes} from 'react-icons/fa'


function FeedbackItem({ item, handleDelete }) {                                                                    //_rfce
    //const [rating, setRating] = useState(7)
    //const [text, setText] = useState('This is an example of a feedback item')

    /*const handleClick = () => {
        setRating((prev) => {
            return prev + 1
        })
    }*/


    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => handleDelete(item.id)}>          {/* Passing an Argument*/}
                <FaTimes color="purple" />
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