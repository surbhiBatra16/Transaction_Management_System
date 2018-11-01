import React, { Component } from "react";
import { connect } from "react-redux";
import Search from "../Components/Search/Search";
import Table from "../Components/Table/Table";
import ActionButton from "../Components/ActionButtons/ActionButton";
import { getTransactionData } from "../../Store/Transactions/actionCreator";
import { sendMailTo } from "../../Store/Mail/actionCreator";

export class HomePage extends Component {
  state = {
    search: "",
    isPrint: true
  };
  componentDidMount() {
    this.props.getTransactionData();
  }

  handleSearch = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { search, isPrint } = this.state;
    const { transaction, user, sendMailTo } = this.props;
    let filteredData =
      search.length > 0
        ? transaction.filter(
            item => item.transactionId.toString().indexOf(search) !== -1
          )
        : transaction;

    return (
      <div className="home">
        <div className="action-box">
          <div className="col-sm-8 ">
            <Search
              title="Search Transaction"
              onChange={e => this.handleSearch(e)}
              query={this.state.search}
              searchBy="search by transactionId ..."
            />
          </div>
          <div className="col-sm-4 ">
            <ActionButton
              user={user}
              isPrint={isPrint}
              filteredData={filteredData}
              sendMailTo={sendMailTo}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <Table data={filteredData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transaction: state.trans.transactionList,
  user: state.auth.user
});

const mapDispatchToProps = {
  getTransactionData,
  sendMailTo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
