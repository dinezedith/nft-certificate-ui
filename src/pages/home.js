import React from "react";
import Menubar from "../components/nav-bar";
import Content from "../components/home-content";

export default function Home() {
      return (
    <div className="App">
      <Menubar/>
      <Content/>
    </div>
  );
}