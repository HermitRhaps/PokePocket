import React, { useRef } from "react";

const Control = ({ limit, offset, changeRequest }) => {
  const limitRef = useRef();
  const offsetRef = useRef();
  return (
    <div>
      <input
        ref={limitRef}
        type="number"
        placeholder="Enter limit..."
        defaultValue={0 || limit}
      />
      <input
        ref={offsetRef}
        type="number"
        placeholder="Enter offset..."
        defaultValue={0 || offset}
      />
      <button
        onClick={() =>
          changeRequest(
            Number(limitRef.current.value),
            Number(offsetRef.current.value)
          )
        }
      >
        Show
      </button>
    </div>
  );
};
export default Control;
