 //import {useParams} from'react-router-dom'
 import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'               
 //Navigate = component
//useNavigate = Hook
 
 function Post() {
    //useParams
    /*const params = useParams()

    return (
         <div>
             <h1>POST Id: {params.id}</h1>
             <p>{params.name}</p>
         </div>
     )*/
    
    //Navigate
     /*const status = 404

     if (status === 404) {
         return <Navigate to='/notfound'/>
     }*/

     const navigate = useNavigate()

     const onClick = () => {
         navigate('/about')
     }

     return (
         <div>
             <h1>Post</h1>
             <button onClick={onClick}>Post</button>
             <Routes>
                 <Route path='show' element={<h1>Show</h1>}/>
             </Routes>
         </div>
     )
 }
 
 export default Post
 