
import React from 'react'
import Overlay from 'react-bootstrap/lib/Overlay'
import Button from 'react-bootstrap/lib/Button'
import Tooltip from 'react-bootstrap/lib/Tooltip'
import ReactDOM from 'react-dom'



export default class Notification extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.getTarget = this.getTarget.bind(this);
      this.handleToggle = this.handleToggle.bind(this);
  
      this.state = {
        show: true
      };
    }
  
    getTarget() {
      return ReactDOM.findDOMNode(this.target);
    }
  
    handleToggle() {
      this.setState({ show: !this.state.show });
    }
  
    render() {
      const sharedProps = {
        container: this,
        target: this.getTarget,
        show: this.state.show
      };
  
      return (
        <div style={{ height: 100, paddingLeft: 150, position: 'relative' }}>
          <Button
            ref={button => {
              this.target = button;
            }}
            onClick={this.handleToggle}
          >
            Notification
          </Button>
  

          <Overlay {...sharedProps} placement="bottom">
            <Tooltip id="overload-bottom">Tooltip overload!</Tooltip>
          </Overlay>
        </div>
      );
    }
  }