---
layout: "default"
title: About
---



The `display: flow-root;` property is a relatively newer value in CSS, and it has an interesting effect on the layout of a container. Here's a breakdown of what it does:

### `display: flow-root;`
- **Creates a new block formatting context (BFC)**: When you set `display: flow-root` on an element, it establishes a **block formatting context** (BFC). A BFC is a part of the visual rendering of a web page and affects how elements interact with each other in the layout.
  
- **Clears floated elements**: One of the key behaviors of a BFC is that it **contains floats** within the element. Normally, when you float elements inside a container, the container might collapse or not "contain" the floats. By setting `display: flow-root`, the container will automatically clear any floats inside it, meaning the container will grow to accommodate the floated elements.

- **Normal flow behavior with block-level behavior**: Elements inside a `flow-root` behave as if they are in a normal block-level layout, but with the added benefit of float containment and other BFC-related properties.

### Practical Example:
Consider the following scenario:
```css
.container {
  display: flow-root;
}

.floated-item {
  float: left;
}
```
Without `display: flow-root`, the `.container` might collapse in height if there are floated elements inside it. With `display: flow-root`, the `.container` will automatically expand to contain the floated `.floated-item`, even though it's floating.

### Why Use `flow-root`?
- It's a simple way to clear floats without having to manually add a clearfix.
- It provides better control over how elements are laid out within the container and ensures that floated children do not affect the layout of the parent container.

### Your Usage:
```css
body.dark {
  display: flow-root;
  background-color: #1a202c; /* Dark background */
  color: white;
}
```

In this case, the `body.dark` element will behave like a normal block-level element, but with the added benefit of automatically clearing any floats inside it. It also helps ensure that the content will stay within the body and not overflow when there are floated child elements.

Let me know if you need further clarification!