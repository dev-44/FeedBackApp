//import { v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
//import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {       
    
    //Move to Context
    //const [feedback, setFeedback] = useState(FeedbackData)

    //Move to Context
    /*const deleteFeedback = (id) => {
        //console.log('App: ' + id)
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //console.log(newFeedback.id)
        setFeedback([newFeedback, ...feedback])
    }*/
      
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                {/*<FeedbackForm handleAdd={addFeedback}/>*/}
                                <FeedbackForm />
                                {/*<FeedbackStats feedback={feedback}/>*/}
                                <FeedbackStats />
                                {/*<FeedbackList feedback={feedback} handleDelete={deleteFeedback}/> */}
                                <FeedbackList />
                                                                
                            </>
                        }>
                        </Route>

                        <Route path='/about' element={<AboutPage />}/>
                        <Route path='/post/*' element={<Post />}/>  
                        <Route path='/post/:id/:name' element={<Post />}/>
                    </Routes>
                    
                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
        
    )
}

export default App

//_rfce                 React Functional Component Export
//post/*                El * sirve para cualquier otra url a ser agregada posteriormente