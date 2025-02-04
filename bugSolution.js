```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Add dependency array to only run on changes to count 
    console.log('Component rendered!');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```