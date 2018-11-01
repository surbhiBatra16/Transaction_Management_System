import React, { Component } from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

class ExeclDownload extends Component {
  render() {
    const { data, title } = this.props;
    let cols = data.length > 0 ? Object.keys(data[0]) : [];
    return (
      <ExcelFile
        element={
          <button className="btn btn-default tPrint">
            <span className="glyphicon glyphicon-file" aria-hidden="true" />
          </button>
        }
      >
        <ExcelSheet data={data} name={title}>
          {cols.map((col, index) => (
            <ExcelColumn key={index} label={col} value={col} />
          ))}
        </ExcelSheet>
      </ExcelFile>
    );
  }
}

export default ExeclDownload;
