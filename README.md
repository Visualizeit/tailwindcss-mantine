<div align="center">
	<img src="public/logo.png" alt="tailwindcss-mantine logo" width=60" />
	<h1>tailwindcss-mantine</h1>
</div>

tailwindcss-mantine is a plugin that integrates Mantine's theme variables into
Tailwind CSS, enabling you to use Mantine's design system with Tailwind's
utility-first classes.

## Installation

Install the package from npm:

```sh
npm i -D tailwindcss-mantine
```

Add the plugin and theme override to `tailwind.config.js`:

```js
import mantinePlugin from 'tailwindcss-mantine'
import mantineTheme from 'your mantine theme override'

/** @type {import('tailwindcss').Config} */
export default {
	//...
	plugins: [mantinePlugin({ themeOverride: mantineTheme })],
}
```

## Usage

Add Mantine's utility classes to your HTML:

[check all the utility classes here](https://tailwindcss-mantine.pages.dev/#utilities)

```html
<h1 className="m-m-md text-m-heading1 text-m-primary-filled">Hello World</h1>
```
