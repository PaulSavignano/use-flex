import React, { useState } from "react";

import "./App.css";
import useFlex from "../lib";

const customMapping = {
  color: 'color',
  fontSize: {
    24: 'font-size-24'
  }
}

interface SectionProps {
  [name: string]: any
}

function Section({
  children,
  ...rest
}: SectionProps) {
  const { className, style } = useFlex(rest, customMapping)
  return <section className={className} style={style}>{children}</section>
}

function App() {
  const [flexFlow, setFlexFlow] = useState('row wrap')
  return (
    <div className="App">
      <Section
        color={true}
        fontSize={24}
        alignItems="center"
        flexFlow={flexFlow}
        justifyContent="center"
        margin={10}
      >
        <p>This</p>
        <p>Content</p>
        <p>Is</p>
        <p>Horizontal</p>
      </Section>
      <button
        onClick={() => setFlexFlow(flexFlow === 'row wrap' ? 'column' : 'row wrap')}
      >
        {flexFlow === 'row wrap' ? 'Set to column' : 'Set to row'}
      </button>
    </div>
  )
};

export default App;
