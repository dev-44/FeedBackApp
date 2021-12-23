import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({ feedback, handleDelete }) {
    console.log(feedback )

    if (!feedback || feedback.length === 0 ) {
        return <p>No Feedbacks here</p>
    }

    //Without Animation
    /*return (
        <div className="feedback map">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
            ))}
        </div>
    )*/

    return (
        <div className="feedback map">
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                    key={item.id} 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                >
                    <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({ 
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList
