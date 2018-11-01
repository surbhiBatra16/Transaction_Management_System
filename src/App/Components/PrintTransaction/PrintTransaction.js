import React from "react";
import ReactToPrint from "react-to-print";

class ComponentToPrint extends React.Component {
  render() {
    return <div> {this.props.children}</div>;
  }
}

class PrintTransaction extends React.Component {
  render() {
    const { isPrint } = this.props;
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <button
              className={`btn btn-default tPrint ${!isPrint && "disabled"}`}
            >
              <span className="glyphicon glyphicon-print" aria-hidden="true" />
            </button>
          )}
          content={() => this.componentRef}
        />
        {isPrint && (
          <div className="componnent-to-print">
            <ComponentToPrint ref={el => (this.componentRef = el)}>
              {this.props.children}
            </ComponentToPrint>
          </div>
        )}
      </div>
    );
  }
}
export default PrintTransaction;
