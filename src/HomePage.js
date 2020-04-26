//Display homepage of the website
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import Button from 'react-bootstrap/Button';
import Form from './Form';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    //Width and height attribute to get the height & width of the displaying window initially set to 0
    this.state = { width: 0, height: 0,showForm:false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }
  //method to close the registration form modal
  closeForm(){
    this.setState({showForm:false});
  }
  //method to show the registration form modal
  handleButtonClick(){
      this.setState({showForm:true})
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div>
        {/**Image Slider component. Sliding interval set to 1 sec */}  
        <Carousel interval={1000}>
          <Carousel.Item>
            <img
              width={this.state.width}
              height={this.state.height}
              className="d-block w-100"
              src={image1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={this.state.width}
              height={this.state.height}
              className="d-block w-100"
              src={image2}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              width={this.state.width}
              height={this.state.height}
              className="d-block w-100"
              src={image3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        {/**Button and h1 to show in the middle of the page. this.state.height/2 is used to center the element according to screen size*/}
        <div style={{position: "absolute", top: this.state.height/2, left: "50%",right:0,marginLeft:"-120px"}}>
            <h1 style={{color: "cadetblue",fontFamily:"fantasy",fontWeight:900}}>Register to Foody </h1>
            <Button onClick={this.handleButtonClick} style={{width:"35%",marginLeft:"9px"}} variant="outline-info" size="lg">Register</Button>
        </div>
        {/** showForm state variable is set when handleButton click is called and hence it display the Form component*/}
        {this.state.showForm ? <Form closeForm={this.closeForm}/>:""}
      </div>
    );
  }
}
