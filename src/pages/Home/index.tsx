import React from "react";
import { Link } from "react-router-dom";
import classes from "./styles.module.scss";
export default function Home() {
  return (
    <>
      <div>Home</div>
      <div className={classes.btn}>
        <Link to={"/stream"}>Stream</Link>
      </div>
      <div className={classes.btn}>
        <Link to={"/archive"}>Archive</Link>
      </div>
    </>
  );
}
