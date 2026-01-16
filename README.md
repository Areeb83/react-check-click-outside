# react-check-click-outside

A lightweight and reusable React hook to detect clicks or touches **outside** a specified element.  
Perfect for dropdowns, modals, tooltips, popovers, and menus.

---

## ✨ Features

- ✅ Simple and minimal API
- ⚡ Lightweight with zero dependencies
- 🧠 Uses native `mousedown` and `touchstart` events
- 🔁 Automatically cleans up event listeners
- ⚛️ Works with React Hooks (`>=16.8`)
- 📦 Supports ESM & CommonJS builds
- 🛡️ Fully typed with TypeScript

---

## 📦 Installation

### Using npm

```bash
npm install react-check-click-outside
```

### Using yarn

```bash
yarn add react-check-click-outside
```

### Using pnpm

```bash
pnpm add react-check-click-outside
```

---

## 🚀 Usage

### Basic Example

```tsx
import { useRef, useState } from "react";
import { useClickOutside } from "react-check-click-outside";

function Dropdown() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  return (
    <div ref={ref}>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      {open && <div className="menu">Dropdown Content</div>}
    </div>
  );
}
```

---

## 🧩 API Reference

### `useClickOutside(ref, handler)`

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| `ref` | `RefObject<HTMLElement \| null>` | React ref of the element to monitor |
| `handler` | `(event: MouseEvent \| TouchEvent) => void` | Function called when a click occurs outside |

#### Returns

- `void`

---

## 🛠️ How It Works

- Attaches `mousedown` and `touchstart` listeners to the `document`
- Checks whether the event target is outside the referenced element
- Executes the provided handler when an outside interaction is detected
- Automatically removes event listeners on component unmount

---

## 📋 Requirements

- React `>=16.8.0`
- Supports **React 17, 18, and 19**

---

## 🧪 TypeScript Support

This package ships with built-in TypeScript definitions:

```json
types: "./dist/index.d.ts"
```

No additional setup required.

---

## 🌳 Tree-Shaking

The package is fully tree-shakable:

```json
"sideEffects": false
```

---

## 📄 License

MIT © Areeb Abbas

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open a pull request or issue on GitHub.

---

## ⭐ Support

If you find this library useful, please consider giving it a ⭐ on npm or GitHub ❤️
