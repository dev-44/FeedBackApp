 import {useParams} from'react-router-dom'
 
 function Post() {
    const params = useParams()

     return (
         <div>
             <h1>POST Id: {params.id}</h1>
             <p>{params.name}</p>
         </div>
     )
 }
 
 export default Post
 