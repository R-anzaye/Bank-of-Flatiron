import React from 'react'

function Transaction({ transactions }){
//transactions is an array of Transaction objects that is placed as a prop from search 
  return (
    <React.Fragment>
      {/*Mapping is done here to get all transactions in the props */}
      {transactions.map((trans) => (
        <tr key={trans.id}>
          <td>
            <h3>{trans.date}</h3>
          </td>
          <td>
            <h3>{trans.description}</h3>
          </td>
          <td>
            <h3>{trans.category}</h3>
          </td>
          <td>
            <h3>{trans.amount}</h3>
          </td>
        </tr>
      ))}
    </React.Fragment>
  )

}

//export function
export default Transaction;
