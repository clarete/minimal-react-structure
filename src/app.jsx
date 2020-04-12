import * as React from "react";

function Header() {
  return (
    <h1>The Great Header</h1>
  );
}

export default function MainComponent() {
  return (
    <div>
      <Header/>
      <div>The simplest component ever.</div>
    </div>
  );
}
