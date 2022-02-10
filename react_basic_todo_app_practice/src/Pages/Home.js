import { Component, createElement } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = { text: "", values: [] };
  }
  handleInput = (event) => {
    this.setState({ text: event.target.value });
  };
  submit = () => {
      var text =this.state.text
      if(text.trim().length>0){
    var newValues = this.state.values.concat([text]);
    this.setState({ values: newValues });
  }
};

  render() {
    const { text, values } = this.state;
    return (
      <div>
        <input onChange={this.handleInput} value={text} type="text" />
        <button onClick={this.submit}>submit</button>
        {values.map((v)=>{

return <p>{v}</p>

        })}
      </div>
    );
  }
}
export default Home;
