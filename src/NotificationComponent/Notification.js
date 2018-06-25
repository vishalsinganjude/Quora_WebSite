import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import AppActions from '../actions/AppActions'


export default class NotificationComponent extends React.Component{
    constructor(){
        super()
        this.handleNotificationClick = this.handleNotificationClick.bind(this)
    }

    handleNotificationClick(){
        AppActions.showNotification();
    }
    render(){
        return(
            <div>
                 <Button bsStyle="primary"onClick={this.handleNotificationClick}>Notification</Button>
            </div>
        );
    }

}