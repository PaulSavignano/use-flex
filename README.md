<h1 align="center">use-flex</h1>

<div align="center">

Use flex css with component props.

[![NPM Version](https://img.shields.io/npm/v/use-flex.svg?style=flat)](https://www.npmjs.com/package/use-flex)
[![NPM Downloads](https://img.shields.io/npm/dm/use-flex.svg?style=flat)](https://npmcharts.com/compare/use-flex?minimal=true)
[![CircleCI](https://img.shields.io/circleci/build/github/PaulSavignano/use-flex/master.svg)](https://circleci.com/gh/PaulSavignano/use-flex/tree/master)
[![codecov.io](https://codecov.io/gh/PaulSavignano/use-flex/branch/master/graph/badge.svg)](https://codecov.io/gh/PaulSavignano/use-flex)
[![BundleSize](https://img.shields.io/bundlephobia/minzip/use-flex.svg)](https://bundlephobia.com/result?p=use-flex)
[![Dependencies](https://david-dm.org/PaulSavignano/use-flex/master/status.svg)](https://david-dm.org/PaulSavignano/use-flex/master)
[![DevDependencies](https://david-dm.org/PaulSavignano/use-flex/master/dev-status.svg)](https://david-dm.org/PaulSavignano/use-flex/master?type=dev)
[![PeerDependencies](https://david-dm.org/PaulSavignano/use-flex/master/peer-status.svg)](https://david-dm.org/PaulSavignano/use-flex/master?type=peer)
[![Patreon](https://img.shields.io/badge/patreon-support%20the%20author-blue.svg)](https://www.patreon.com/PaulSavignano)

</div>

use-flex is a JavaScript library for styling user interfaces.

* **Declarative:** Define the styles you need and enjoy the benefit of cached css without the cost of inline style redefinition.
* **Flexible:** No pun intended.  Props that do not have css definitions will be inline styled.  You may also pass a style prop.  Have a className you'd like incorporated?  Pass in a className prop and have it concatenated.
<br />

## Installation
```
npm install @savignano/use-flex
```

## Usage
Here is an example to get you started:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import useFlex from '@savignano/use-flex';

function Section({ children, ...rest }) {
  const { className, style } = useFlex(rest)
  return (
    <section className={className} style={style}>
      {children}
    </section>
  )
}

function App() {
  return (
    <Section alignItems="center" flexFlow="row wrap" justifyContent="center">
      <p>This</p>
      <p>content</p>
      <p>is horizontal</p>
    </Section>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

## Examples
[Codesandbox](https://codesandbox.io/s/use-flex-m2ovj?fontsize=14)

## Contributing
- see CONTRIBUTING.md
# use-flex
