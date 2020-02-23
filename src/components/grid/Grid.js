import React, { Component } from "react";
import { DetailsList, DetailsListLayoutMode } from "office-ui-fabric-react/lib-commonjs/DetailsList";

const commandBarActions = ['filter', 'clearFilters'];
const items = [];
const columns = [
  {
    key: "column1",
    name: "Name",
    fieldName: "name",
    minWidth: 500,
    maxWidth: 500,
  },
  {
    key: "column2",
    name: "Value",
    fieldName: "value",
    minWidth: 500,
    maxWidth: 500,
  }
];
class detailsList extends Component {
  constructor(props) {
    super(props);
    // Populate with items for demos.
    if (items.length === 0) {
      for (let i = 0; i < 10; i++) {
        items.push({
          key: i,
          name: "Item " + i,
          value: i
        });
      }
    }
    this.state = {
      items: items,
    };
  }
  render() {
    const { items } = this.state;
    return (
      <div className='mainContainer'>
        <label>Grid View Data</label>
        <DetailsList
          items={items}
          columns={columns}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          commandBarActions={commandBarActions}
        />
      </div>
    );
  }
}
export default detailsList;