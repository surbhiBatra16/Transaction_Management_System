import React, { Component } from "react";
import ExeclDownload from "../ExportAsExecl/ExportAsExecl";
import PrintTransaction from "../PrintTransaction/PrintTransaction";
import Table from "../Table/Table";

export default class componentName extends Component {
  getDataForExcel = d => {
    let data = JSON.parse(JSON.stringify(d));
    data.map(item => {
      item.itemDetails = JSON.stringify(item.itemDetails);
      return item;
    });
    return data;
  };
  sendMailHandler = template => {
    this.props.sendMailTo(template);
  };
  render() {
    const { user, isPrint, filteredData } = this.props;
    let dataForExxcel = this.getDataForExcel(filteredData);
    return (
      <div className="feature ">
        {user.role === "admin" ? (
          <div className="feature-btn">
            <PrintTransaction isPrint={isPrint}>
              <Table data={filteredData} />
            </PrintTransaction>
            <ExeclDownload data={dataForExxcel} title="Transactions" />
          </div>
        ) : (
          <div className="feature-btn">
            <button className="btn btn-default disabled">
              <span
                className="glyphicon glyphicon-print tPrint"
                aria-hidden="true"
              />
            </button>
            <button className="btn btn-default disabled">
              <span
                className="glyphicon glyphicon-file tPrint"
                aria-hidden="true"
              />
            </button>
          </div>
        )}
        <button
          className="btn btn-default tPrint"
          onClick={() => this.sendMailHandler(filteredData)}
        >
          <span className="glyphicon glyphicon-envelope" aria-hidden="true" />
        </button>
      </div>
    );
  }
}
