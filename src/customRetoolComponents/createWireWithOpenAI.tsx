import React from 'react'; // we need this to make JSX compile
import Retool from 'react-retool'; // we need this to make JSX compile


export const HelloWorldComponent: FC = () => {
    // Allows the builder to specify a "name" property on each component they build with.
  
    const [showBorder, _setShowBorder] = Retool.useStateBoolean({
      name: "showBorder",
      initialValue: false,
      label: "Show Border",
      inspector: "checkbox",
    });

    const onClick = Retool.useEventCallback({ name: "click" });

    return (
      <div>
       <div style={{ border: showBorder ? "1px solid black" : "",  }}>
        Hello!
        </div>
        <div>
            <button onClick={onClick}> A button </button>
        </div>
      </div>
    );
  };