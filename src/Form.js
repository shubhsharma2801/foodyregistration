import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerData: {
        resturantName: "",
        contactName: "",
        contactNumber: "",
        pincode: "",
        location: "",
        website: "",
        adt: ""
      },
      saving: false,
      success: false,
      validated: false,
      error :false
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler = event => {
    var name = event.target.name;
    var value = event.target.value;
    var registerData = { ...this.state.registerData };
    registerData[name] = value;
    this.setState({ registerData });
  };
  close() {
    this.props.closeForm();
  }
  onSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ validated: true });
      return;
    }
    e.preventDefault();
    console.log(this.state.registerData);
    this.setState({ saving: true });
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: this.state.registerData })
    };
    fetch("http://localhost:9000/registerApi", requestOptions)
      .then(response => response.json())
      .then(data => {
        setTimeout(() => this.props.closeForm(), 2000);
        this.setState({ saving: false, success: true });
        console.log(data);
      }).catch(err=>{
        this.setState({ saving: false, error: true });
      });
  }
  render() {
    return (
      <div>
        <Modal show={true} centered onHide={this.close.bind(this)}>
          <Card
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
          >
            <Card.Body>
              {this.state.success ? (
                <Alert variant="success">
                  Resturant Registered Successfully
                </Alert>
              ) : (
                ""
              )}
              {this.state.error ? (
                <Alert variant="danger">
                  There was an issue while saving.
                </Alert>
              ) : (
                ""
              )}
              <Form
                noValidate
                validated={this.state.validated}
                onSubmit={this.onSubmit.bind(this)}
              >
                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Resturant Name</Form.Label>
                  <Form.Control
                    required
                    placeholder="Enter Resturant Name"
                    name="resturantName"
                    onChange={this.onChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Resturant Name is required
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Contact Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter Owner Name..."
                      name="contactName"
                      onChange={this.onChangeHandler}
                    />
                    <Form.Control.Feedback type="invalid">
                      Contact Name is required
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Enter Mobile Number..."
                      name="contactNumber"
                      onChange={this.onChangeHandler}
                    />
                    <Form.Control.Feedback type="invalid">
                      Contact Number is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Pincode</Form.Label>
                    <Form.Control
                    required
                      type="number"
                      name="pincode"
                      onChange={this.onChangeHandler}
                    />
                    <Form.Control.Feedback type="invalid">
                      Pincode is required
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      required
                      name="location"
                      placeholder="Enter Location..."
                      onChange={this.onChangeHandler}
                    />
                    <Form.Control.Feedback type="invalid">
                      Location is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Group controlId="formGridZip">
                  <Form.Label>Website</Form.Label>
                  <Form.Control
                    required
                    name="website"
                    placeholder="Enter Website..."
                    onChange={this.onChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Website is required
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formGridZip">
                  <Form.Label>Average Daily Transaction</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    name="adt"
                    placeholder="Enter Average Daily Transaction..."
                    onChange={this.onChangeHandler}
                  />
                  <Form.Control.Feedback type="invalid">
                    Average Daily Transaction is required
                  </Form.Control.Feedback>
                </Form.Group>
                <div style={{ float: "right" }}>
                  <Button
                    style={{ marginRight: 10 }}
                    variant="secondary"
                    onClick={this.close.bind(this)}
                  >
                    Close
                  </Button>
                  {this.state.saving ? (
                    <Button variant="primary" disabled>
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Saving...
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      type="submit"
                      //onClick={this.onSubmit.bind(this)}
                    >
                      Register
                    </Button>
                  )}
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Modal>
      </div>
    );
  }
}
