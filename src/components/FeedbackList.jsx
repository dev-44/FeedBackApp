import FeedbackItem from './FeedbackItem'
//import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

//function FeedbackList ({feedback, handleDelete})
function FeedbackList() {

    //console.log(feedback )
    const {feedback} = useContext(FeedbackContext)

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
                    {/*<FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>*/}
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    )
}

//No longer needed since we don't recieve feedback as a prop
/*FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({ 
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}*/

export default FeedbackList
