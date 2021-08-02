import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormGrid from "./FormGrid";
import Login from "./Login";
import FormEdit from "./FormEdit";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BarraNavApp(props) {
  const classes = useStyles();

  const { isLogueado = "S" } = props;

  const handleButtonClick = (pageURL) => {
    console.log(pageURL);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {isLogueado === "S" ? (
            <>
              <Button color="inherit" onClick={() => handleButtonClick("/")}>
                Principal
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick("/Edicion")}
              >
                Edicion
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick("/Logout")}
              >
                Salir
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" disabled>
                Principal
              </Button>
              <Button color="inherit" disabled>
                Edicion
              </Button>
              <Button color="inherit" disabled>
                Salir
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Router>
        <switch>
          <Route path="/Edicion">
            <FormEdit></FormEdit>
          </Route>
          <Route exact path="/">
            {isLogueado === "S" ? <FormGrid></FormGrid> : <Login></Login>}
          </Route>
        </switch>
      </Router>
    </div>
  );
}
