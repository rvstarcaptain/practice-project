// import React from 'react'

// export default function List(props) {
//     return (
//         <div>

//             <table border="1"> 

            
//                 <tbody>
//                 {(props.data.length >0) && <tr>
//                     <th>ID</th>
//                     <th>USERID</th>
//                     <th>TITLE</th>
//                     <th>BODY</th>
//                 </tr>}

//                     {
//                         props.data.map((item, i) => {
//                             return (


//                                 <tr key={i}>
//                                     <td>{item.userid}</td>
//                                     <td>{item.id}</td>
//                                     <td>{item.title}</td>
//                                     <td>{item.body}</td>
//                                 </tr>


//                             )
//                         })

//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }
