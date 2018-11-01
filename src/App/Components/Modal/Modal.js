import React, { Component } from "react";
import Modal from "react-responsive-modal";
import { connect } from "react-redux";
import { closeMail } from "../../../Store/Mail/actionCreator";
import Table from "../Table/Table";
class MailPopUp extends Component {
  state = {
    open: false,
    mailFormat: {
      to: "abc@def.com",
      subject: "Subject ...",
      body: "",
      cc: "",
      bcc: ""
    }
  };

  onCloseModal = () => {
    this.props.closeMail();
  };

  handleChange = e => {
    let mailFormat = this.state.mailFormat;
    mailFormat[e.target.name] = e.target.value;
    this.setState({ mailFormat });
  };
  render() {
    const { open, template } = this.props;
    const { mailFormat } = this.state;
    const { to, subject, body, cc, bcc } = mailFormat;
    return (
      <Modal open={open} onClose={this.onCloseModal} center>
        <div className="form-horizontal send-mail">
          <div className="form-group">
            <label htmlFor="to" className="col-sm-2 control-label">
              To
            </label>
            <div className="col-sm-10">
              <input
                onChange={e => this.handleChange(e)}
                type="text"
                className="form-control"
                name="to"
                id="to"
                placeholder="to"
                value={to}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="col-sm-2 control-label">
              Subject
            </label>
            <div className="col-sm-10">
              <input
                onChange={e => this.handleChange(e)}
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                value={subject}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="bcc" className="col-sm-2 control-label">
              BCC
            </label>
            <div className="col-sm-10">
              <input
                onChange={e => this.handleChange(e)}
                type="text"
                className="form-control"
                name="bcc"
                id="bcc"
                placeholder="Email"
                value={bcc}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cc" className="col-sm-2 control-label">
              CC
            </label>
            <div className="col-sm-10">
              <input
                onChange={e => this.handleChange(e)}
                type="text"
                className="form-control"
                name="cc"
                id="cc"
                placeholder="CC"
                value={cc}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="body" className="col-sm-2 control-label">
              CC
            </label>
            <div className="col-sm-10">
              <textarea
                rows="4"
                cols="50"
                className="form-control"
                onChange={e => this.handleChange(e)}
                name="body"
                id="body"
                placeholder="body"
                value={body}
              >
                {body}
              </textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <a
                className="btn btn-default tPrint"
                href={`mailto:${to}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${
                  template && Object.keys(template).length > 0 ? (
                    <Table data={template} />
                  ) : (
                    body
                  )
                }`}
              >
                Send mail
              </a>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}
const mapDispatchToProps = { closeMail };
const mapStateToProps = state => ({
  open: state.mail.showMailPopup,
  template: state.mail.template
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MailPopUp);
