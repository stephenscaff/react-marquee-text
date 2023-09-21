# React Marquee Text

MarqueeText is a React component that takes it back to the internet of days gone by. Paying homage to the vintage (and beloved) Marquee element, MarqueeText inserts areas of continuous scrolling text, empowering your retro or brutalist-inspired designs.

[Docs / Demo](https://stephenscaff.github.io/react-marquee-text/)

<br/>

## Contents

1. [📌 Features](#-features)
2. [🎯 Quickstart](#-quickstart)
3. [🤖 Commands](#-commands)
4. [🧬 Options](#-options)
5. [🕹️ Usage](#-usage)
6. [📓 Notes](#-notes)
7. [📅 To Dos](#-to-dos)

<br/>

## 📌 Features

- Built in Typescript.
- Creates continous scrolling animations of text.
- Creates continous loop effect by cloning text to ensure it fills container.
- Uses CSS animation.
- Scrolling animation starts / stops when text is in viewport (by default), via Intersection Observer
- Options to control scrolling direction and duration.

[Live Demo→](https://stephenscaff.github.io/react-marquee-text/)

<br/>

## 🎯 Quickstart

### Install package from npm

`npm i react-marquee-text`

### Use that thing

```
import MarqueeText from "react-marquee-text"
import "MarqueeText/styles.css"

function SomeComponent() {
  return (
    <MarqueeText>
      Let's bring it on back to days of yore
    </MarqueeText>
  )
}
```

Depending on your CSS bundling configuration, you may have to also import MarqueeText's CSS file (which houses the simple @keyframe aniamtion)

```

```

<br>

## 🤖 Commands

**Install** `npm i react-marquee-text` <br/>
**Build**: `npm run build` <br/>
**Dev**: `npm run dev` <br/>
**Demo Run**: `npm run demo:start` <br/>
**Demo Build**: `npm run demo:build` <br/>
**Demo Clean**: `npm run demo:clean` <br/>

### Dev

Runing `dev` fires up the docs/demo and begins watching `src`.

The docs/demo app is bundled with [`Parcel.js`](https://parceljs.org/) and served at [http://localhost:1234/](http://localhost:1234/).

### Dist

On build, `src` populates `dist` with commonjs, es, umd versions of the component.

<br/>

## 🧬 Options

<!-- prettier-ignore -->
| Option | Type | Description      | Default |
| ----   | ---- | -------- | -------|
| `children` | `sring` | React children for providing text as string  | `null` |
| `className`    | `string`  | Defines a parent class name | `null` |
| `direction`    | `'left' \| 'right'`  | Direction of scroll animation | `left` |
| `duration`      | `number` | Amount of time it takes for original text to complete animation  | `50` |
| `textSpacing` | `string` | Spacing between cloned text items | `0.15em` |
| `pauseOnHover`  | `boolean` | Pauses scroll animation on hover | `false` |
| `playOnlyInView` | `string` | Only run play animation when component is visible in viewport  | `true` |
| `treshold` | `number` | Intersection Observer value between 0 and 1 representing the percentage component must be visible before stagger animation starts. | `0.1` |
| `willChange` | `boolean` | Adds `will-change` to animation to potential enhance animation performance | `false` |

<br/>

## 🕹️ Usage

###

```
<MarqueeText
  duration={30}
  pauseOnHover={true}
  direction="right"
>
  This be some right scroll text
</MarqueeText>
```

## 📓 Notes

### Mostly inlined CSS

The package largely uses inlined CSS. Currently, the `@keyframes` animation is the only declaration housed in an external CSS file. `styles.css` is imported into the `tsx` file, but given your bundle setup, you may, or may not, have to handle that import. If the animation doesn't run immediately, try importing `react-marquee-text/styles.css` directly in your project.

### Supports HTML tags

MarqueeText supports HTML elements, so you can wrap your text in spans or divs to style specific words.

<br/>

## 📅 To Dos

- Add option to control animation based on scroll position.
- Maybe add some callbacks?
- Maybe add vertical scrolling option?
- Run more robust perf tests. Would js / RAF animation or WAAPI be better, esp for multiple instances?
- Add some proper tests

<br/>

Have fun ya'll.
