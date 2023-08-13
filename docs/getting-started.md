# Getting Started

Install `blueprint` with npm:

```bash
npm install blueprint
```

with yarn:

```bash
yarn add blueprint
```

## Usage

Import the component and register it globally in your Vue instance:

```js
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app
    .component("blueprint", VueTypewriterEffect)
    .mount("#app");
```

or locally in your component:

```vue
import VueTypewriterEffect from "blueprint";
```

Use the component in your template:

```vue
<blueprint :strings="['hello', 'world']" />
```
