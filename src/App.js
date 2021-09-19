import React from "react";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import ShopPage from "./pages/ShopPage/ShopPage.jsx";
import SignInSignUp from "./pages/SignInSignUp/SignInSignUp.jsx";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/User/userActions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../src/redux/User/userSelectors";
import GlobalStyle from './global.styles';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
