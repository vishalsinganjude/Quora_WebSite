

import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Badge from 'react-bootstrap/lib/Badge'
import AppAction from '../../actions/AppActions'

export default class Answer extends React.Component{
    constructor(props)
    {
        super(props);
        this.handelUpVoteClick = this.handelUpVoteClick.bind(this);
        this.handelDownVoteClick = this.handelDownVoteClick.bind(this);
    }

    handelUpVoteClick(){
        const answerId = this.props.answer.answerId
        AppAction.addUpvote(answerId);
    }

    handelDownVoteClick(){
        const answerId = this.props.answer.answerId
        AppAction.addDownvote(answerId);
    }

    render(){
        let answer = this.props.answer;
        
        return(
            <div>
                <p>
                {this.props.index}&nbsp;:&nbsp;
                {answer.answerString}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h8>{answer.userId}</h8><br/>
                <button type="button" class="btn btn-default btn-lg">
  <span class="glyphicon glyphicon-bell" aria-hidden="true"></span> Star
</button>
                &nbsp;&nbsp;<Button bsStyle="success" bsSize="small" onClick={this.handelUpVoteClick}>Upvotes&nbsp;<Badge>{answer.upvoteCount}</Badge></Button>
                &nbsp;&nbsp;<Button bsStyle="danger" bsSize="small" onClick={this.handelDownVoteClick}>Downvotes&nbsp;<Badge>{answer.downvoteCount}</Badge></Button>
                </p>
            </div>
        );
    }

}