# Unnecessary re-renders in React useEffect hook

This repository demonstrates a common React bug where the `useEffect` hook runs on every render due to a missing dependency array. This leads to unnecessary re-renders and can negatively impact performance.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides the corrected code.