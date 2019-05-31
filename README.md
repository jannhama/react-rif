# react-rif (aka rif or R)
React-rif is a simple React component that tries to kind of mimic AngularJS _ng-if_ functionality
. Main function to offer is conditional rendering. There are few similar components available but aim here was to
 create as short component as possible. 

_Conditional Rendering_ prevents components to be either added to the DOM or not. Those that aren't supposed to be 
rendered are therefore not in DOM and application should run faster as there are less elements to be diffed by React.

## Install

```
npm install react-rif
```

## Usage

Usage is really easy. Just import the component and wrap your elements with R. You should provide a boolean value
 to tell R whether to render children or not.

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
