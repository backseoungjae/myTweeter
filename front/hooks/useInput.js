import React, { useCallback, useState } from "react";

export default function useInput(initailState = null) {
  const [value, setValue] = useState(initailState);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handleChange, setValue];
}
