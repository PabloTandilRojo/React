import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
    //Tengo que moverme a esa página
    console.log(pageURL);
  };

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            {isLogueado === "S" ? (
              <>
                <Link to="/">
                  <Button color="inherit">Principal</Button>
                </Link>

                <Link to="/Edicion">
                  <Button color="inherit">Edicion</Button>
                </Link>

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

        <Switch>
          <Route path="/Edicion/:id">
            <FormEdit></FormEdit>
          </Route>
          <Route exact path="/">
            {isLogueado === "S" ? <FormGrid></FormGrid> : <Login></Login>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
