import * as React from 'react';
import {useState} from 'react';
import {R} from '../../src';

export default function Application(): JSX.Element {
  const [toggleFlag, setToggleFlag] = useState(true);

  return (
    <>
      <div className="parent">
        <div className="button" onClick={() => {
          setToggleFlag(!toggleFlag);
        }}>
          Click me
        </div>
        <R if={toggleFlag}>
          <div className="child">
            A
          </div>
        </R>
        <div className="child">
          B
        </div>

      </div>
    </>
  );
}
