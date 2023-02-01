import classes from "./ErrorAlert.module.css";
import Button from "../ui/Button";
import { Fragment } from "react";

function ErrorAlert( props ){
    return(
        // <div className={ classes.alert } >{ props.children }</div>

        <Fragment>
        <div className={ classes.alert }>
          <p>{ props.message }</p>
        </div>
        <div className="center">
          <Button link="/events" >Show All Events</Button>
        </div>
      </Fragment>
    )
}

export default ErrorAlert;