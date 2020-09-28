import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import "react-big-calendar/lib/css/react-big-calendar.css";
import theme from "./theme";
import Routes from "./Routes";
import store from "./store";
import SnackBar from "./components/Snackbar";
const browserHistory = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SnackBar />
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
