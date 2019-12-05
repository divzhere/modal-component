import React from "react";
import Modal from "./Component/Modal";
import "./styles.css";
class App extends React.Component {
  state = {
    show1: false,
    show2: false
  };
  showModal = e => {
    this.setState({
      show: !this.state.show,
      show2: !this.state.show2
    });
  };
  render() {
    return (
      <div className="App">
        <button
          class="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
        >
          {" "}
          show Modal{" "}
        </button>

        <Modal onClose={this.showModal} show={this.state.show}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur.
        </Modal>

      
      </div>
    );
  }
}

export default App;
