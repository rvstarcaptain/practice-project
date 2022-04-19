import React from 'react'


export default function ManishList() {
    const data= [
        {name:"thing one", id:1, list : ['abc','xyz'] },
        {name:"thing two", id:2, list : ['abc','xyz'] },
        {name:"thing three", id:3, list : ['abc','xyz'] },
    
    
    ]
  return (
    <div>
        <table border="1">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>List</th>
                </tr>
                {
                    data.map((item,i)=>{
                        return(
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.id}</td>
                                <td>{item.list.join(',')}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}
