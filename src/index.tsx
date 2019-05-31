import * as React from 'react';

interface IRIfProps {
  if: boolean;
  children?: React.ReactNode;
}

export function R(props: IRIfProps): JSX.Element {
  if (!props.children) {
    console.warn('Child components not found. This component is meant to be used with child components.');
  }
  return (
    <>
      {props.children && props.if ? props.children : null}
    </>
  );
}
