export function MapOrder(props) {
    const numbers = props.SampleList;
    const listItems = numbers.map((number) =>
      <table>
      <tr>
        <th>Order Number</th>
        <th>Customer Number</th>
        <th>Customer Name</th>
        <th>Stock Number</th>
        <th>Description</th>
        <th>Quantity to Ship</th>
        <th>Salesperson</th>
        <th>Shipping Date</th>
        <th>Ship to Address 1</th>
        <th>Ship to Address 2</th>
        <th>Ship to City</th>
        <th>Ship to State</th>
        <th>Ship to Zipcode</th>
        <th>Service Time</th>
      </tr>
      <tr>
        <td>{number.OrderNumber}</td>
        <td>{number.CustomerNumber}</td>
        <td>{number.CustomerName}</td>
        <td>{number.StockShipped}</td>
        <td>{number.Description1}</td>
        <td>{number.QuantitytoShip}</td>
        <td>{number.Salesperson}</td>
        <td>{number.ShippingDate}</td>
        <td>{number.ShiptoAddress1}</td>
        <td>{number.ShiptoAddress2}</td>
        <td>{number.ShiptoCity}</td>
        <td>{number.ShiptoState}</td>
        <td>{number.ShiptoZipCode}</td>
        <td>{number.ServiceTime}</td>
      </tr>
      </table>
    );
    return (
      <div>
          {listItems}
      </div>
    );
  }