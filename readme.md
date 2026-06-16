# React Learning Repository 🚀

This repository contains my React learning journey, covering React fundamentals, components, props, state management, and modern UI development using Tailwind CSS.

---

# React Fundamentals

## Virtual DOM

Virtual DOM (VDOM) is a lightweight JavaScript representation of the Real DOM.

### How it works

1. React creates a Virtual DOM.
2. When state or props change, React creates a new Virtual DOM.
3. React compares the old and new Virtual DOM (Diffing).
4. Only the changed elements are updated in the Real DOM (Reconciliation).

### Benefits

* Faster UI updates
* Better performance
* Reduced direct DOM manipulation
* Efficient rendering

```text
State Change
      ↓
New Virtual DOM
      ↓
Diffing
      ↓
Find Changes
      ↓
Update Real DOM
```

---

## React Fiber

React Fiber is the reconciliation engine introduced in React 16.

### Purpose

Fiber allows React to:

* Render UI more efficiently
* Pause and resume rendering work
* Prioritize important updates
* Improve application responsiveness

### Key Features

#### Incremental Rendering

Large rendering tasks are split into smaller units.

#### Priority Scheduling

Important tasks are rendered before less important ones.

Example:

```text
Button Click  → High Priority
Data Fetch    → Low Priority
```

#### Better User Experience

Prevents UI blocking and improves responsiveness.

### Interview Definition

React Fiber is React's internal rendering engine that breaks rendering work into smaller units and prioritizes updates for better performance.

---

## Props

Props (Properties) are used to pass data from a parent component to a child component.

### Parent Component

```jsx
<Card name="Tripti" age={24} />
```

### Child Component

```jsx
function Card(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.age}</p>
    </>
  );
}
```

### Using Destructuring

```jsx
function Card({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}
```

### Important Points

* Props are Read-Only.
* Data flows from Parent to Child.
* Props make components reusable.
* Child components cannot modify props.

### Example

```jsx
<Card name="Tripti" age={24} />
<Card name="Mayank" age={25} />
<Card name="Riya" age={22} />
```

---

## What I Am Learning

* JSX
* Components
* Props
* State
* Event Handling
* Conditional Rendering
* Lists & Keys
* React Hooks
* Tailwind CSS
* Reusable Components

---

## Tech Stack

* React
* Vite
* JavaScript (ES6+)
* Tailwind CSS

---

## Author

**Tripti Jha**

Learning React and building modern web applications one component at a time. 🚀
