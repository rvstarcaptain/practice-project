import React from 'react'

export default function WithProps(props) {
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
                    props.data.map((item,i)=>{
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
