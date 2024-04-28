import React from "react";

function TransactionsList({ transactions }) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* Map over filtered transactions fromcsearch and render each transaction */}
        {transactions.map((trans) => (
          <tr key={trans.id}>
            <td>{trans.date}</td>
            <td>{trans.description}</td>
            <td>{trans.category}</td>
            <td>{trans.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TransactionsList
