Here's a properly rewritten version of your file with highlighted text and organized sections:

```markdown
# JavaScript Interview Questions

## Core JavaScript Concepts

1. **What is Hoisting?**  
   Explanation of how variable and function declarations are moved to the top of their scope during compilation.

2. **Difference between Let, Var, and Const**  
   Comparison of scope, reassignment, and hoisting behavior between these variable declarations.

3. **Higher Order Functions (with 3 examples)**  
   ```javascript
   // Example 1: Map
   [1,2,3].map(x => x*2);
   
   // Example 2: Filter
   [1,2,3].filter(x => x > 1);
   
   // Example 3: Reduce
   [1,2,3].reduce((acc, val) => acc + val, 0);
   ```

4. **Debouncing vs Throttling**  
   Explanation of these performance optimization techniques for event handlers.

5. **Promises**  
   - Definition: Objects representing eventual completion/failure of async operations
   - Why needed: To handle async operations more elegantly than callbacks
   - Example:
     ```javascript
     fetch('url')
       .then(response => response.json())
       .catch(error => console.error(error));
     ```

6. **Async Code Execution**  
   How JavaScript handles non-blocking operations through the event loop.

7. **Event Delegation (with example)**  
   ```javascript
   // Instead of adding listeners to each button
   document.getElementById('parent').addEventListener('click', (e) => {
     if(e.target.matches('button')) {
       // Handle button click
     }
   });
   ```

8. **setTimeout vs setInterval**  
   ```javascript
   setTimeout(() => console.log("Runs once after delay"), 1000);
   setInterval(() => console.log("Runs repeatedly"), 1000);
   ```

9. **Closures (with example)**  
   ```javascript
   function outer() {
     let count = 0;
     return function inner() {
       return ++count;
     }
   }
   const counter = outer();
   counter(); // 1
   ```

10. **Prototypes and hasOwnProperty**  
    Explanation of prototype inheritance chain and object property checking.

11. **CallStack and EventLoop**  
    How JavaScript manages execution context and async operations.

12. **<mark>VERY IMPORTANT</mark>: Object Manipulation Practice**  
    Essential for working with complex data structures.

13. **Data Extraction from Objects/API Responses**  
    Techniques for destructuring and accessing nested data.

# React Interview Questions

## Core React Concepts

1. **Virtual DOM**  
   Explanation of React's lightweight representation of the actual DOM.

2. **Functional vs Class Components**  
   Comparison of syntax, lifecycle, and state management approaches.

3. **Component Communication**  
   - Parent to Child: Props
   - Child to Parent: Callback functions

4. **State, Props, and Hooks**  
   Fundamental React concepts for managing data and side effects.

5. **useState & useEffect Basics**  
   Core hooks for state management and side effects.

6. **React Router DOM**  
   Library for client-side routing (practice creating navigation apps).

7. **Error Boundaries**  
   Components that catch JavaScript errors in their child component tree.

8. **State Lifting**  
   Pattern for sharing state between components by moving it to their closest common ancestor.

9. **Prop Drilling**  
   The process of passing props through multiple layers of components.

10. **Diffing and Reconciliation**  
    How React efficiently updates the DOM by comparing virtual DOM snapshots.

11. **Redux**  
    Predictable state container for JavaScript apps.

12. **React Lifecycle Methods**  
    Mounting, updating, and unmounting phases in class components.

## TypeScript Recommendation (Bonus)

For production applications, consider using **TypeScript** with type-aware lint rules via [`typescript-eslint`](https://typescript-eslint.io). The [Vite TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) provides excellent starting point.
```

Key improvements made:
1. Organized into clear sections with headings
2. Added proper Markdown formatting
3. Highlighted critical items with `<mark>` tags
4. Included code examples where relevant
5. Added consistent spacing and structure
6. Maintained all original questions while improving readability
7. Added a bonus TypeScript section at the end as it was in the original
