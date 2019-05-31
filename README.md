# react-rif (aka rif or R)
React-rif (or R) is a simple React component that tries to kind of mimic AngularJS _ng-if_ functionality
. There are few similar components but aim here was to create as short component as possible. 

Typical use case would responsive web design with React since correct way to show/hide elements is to
use _conditional rendering_. This prevents components that are not supposed to be rendered to not be added to
the DOM tree at all. React-Rif does exactly this.

## Install

```
npm install react-rif
```

## Usage

Usage is pretty straight forward. Just import the hook and call the hook function in your component.
In the example below _mobile_ div is shown if hook says window size is below mobile limit. Otherwise we render
_tablet_ div.

```ts
import {R} from 'react-rif';

export function MyReactComponent(): JSX.Element {
  // this can be function call or e.g. value from react-window-info-hook
  // here we use just a flag to hide our component.
  const showMyComponent = false; 
  
  return (
    <>
      <R if={showMyComponent}>
        <MyFancyComponent />
      </R>
    </>
  );
}

```

## Props

Component takes in following properties:

```ts
interface IRIfProps {
  if: boolean;
  children?: React.ReactNode;
}
```

* **if** is the flag to render child components or not.
* **Children** are all the child components wrapped by this component. You don't need to pass it separately since
React will figure this out for you. If you don't wrap anything you will see a console warning.

## License 
Released under [MIT](https://opensource.org/licenses/MIT) license.

&copy; 2019 Janne Hämäläinen.
