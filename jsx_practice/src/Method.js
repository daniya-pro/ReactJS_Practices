import React, {Component} from 'react';

class Method extends Component {
  MyFacebookLink() {
    return 'https://www.https://www.facebook.com/dania.haider.31'
  }
facebookUser(){return 'syeda daniya'}
  render() {

    return (

      <div>
        <p>My Facebook ID Is:
          <a href={this.MyFacebookLink()}>{this.facebookUser()}</a>
        </p>
      </div>
    )
  }

}

export default Method;