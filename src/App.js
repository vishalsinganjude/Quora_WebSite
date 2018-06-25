import React, {Component} from 'react';
import './App.css';
import './store/AppStore';
import Body from './body/Body'
import NavBar from "./body/NavBar";
import Loader from './body/Loader'
import Login from './body/Login'
import SignUp from './body/SignUp'
import Reflux from 'reflux'
import AppStore from './store/AppStore'
import AddQue from './body//feeds/AddQue'
import AppAction from './actions/AppActions'
import NotifictionComponent from './NotificationComponent/Notification'

const listener = Reflux.ListenerMixin;

class App extends Component {
  constructor() {
    super();
    this.state = {
      feeds: {
        questions: [],
      },
      loading: true,
      loginPopup: false,
      signUpPopup: false,
      addQuePopup: false,
      user: {},
    };
    this.onAppStoreActions = this.onAppStoreActions.bind(this);
    listener.listenTo(AppStore, this.onAppStoreActions);
  }

  onAppStoreActions(data) {
    if (data.action === 'hideLoginPopup') {
      this.setState({loginPopup: false});
    }

    if (data.action === 'showLoginPopup') {
      this.setState({loginPopup: true});
    }

    if (data.action === 'showSignUpPopup'){
      this.setState({signUpPopup: true});
    }

    if (data.action === 'hideSignupPopup'){
      this.setState({signUpPopup: false});
    }

    if(data.action === 'showAddQuePopup'){
      this.setState({addQuePopup: true});
    }

    if(data.action === 'hideAddQuePopup'){
      this.setState({addQuePopup: false})
    }

    if(data.action === 'setUser'){
      this.setState({user:data.user})
    }

    if(data.action === 'loadFeeds'){
    this.setState({feeds:data.feeds, loading:false})
    }

    if(data.action === 'reloadfeeds'){
      AppAction.loadFeeds();
    }
    
  }

  componentDidMount(){
    AppAction.showLogedInUser();
  }


  render() {
    return (
      <div className="App">
        <Login shouldShowLogin={this.state.loginPopup}/>
        <SignUp shouldShowSignUp={this.state.signUpPopup}/>
        <NavBar user={this.state.user}/>
        <Loader loading={this.state.loading}/>
        <Body feeds={this.state.feeds}/>
        <AddQue shouldShowAddQ={this.state.addQuePopup}/>
        <NotifictionComponent/>
      </div>
    );
  }
}

export default App;
