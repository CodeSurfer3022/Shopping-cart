import React from "react";

function OrderSummary() {
  return(
    <div>
      <p>Ship to: </p>
      <table>
        <tbody>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>a</td>
          <td>10</td>
          <td>1</td>
          <td>10</td>
        </tr>
        <tr>
          <td>total 10</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderSummary;
