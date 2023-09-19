# React Marquee Text

MarqueeText is a React component that brings it on back to the days of internet yore, paying homage to the fanciful Marquee element. Writen in TypeScript, MarqueeText inserts areas of continous scrolling text, empowering your vintage or brutalist-inspried materpieces.

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

- Built in Typescript
- Creates continous scrolling animations of text.
- Clones text based on it's size and width of screen to ensure continous effect.
- Uses CSS animation
- By default, scrolling animations are triggered when text is in viewport, via Intersection Observer
- Options exist for duration and direction

[Live Demo→](https://stephenscaff.github.io/react-marquee-text/)

<br/>

## 🎯 Quickstart

### Install package from npm

`npm i react-marquee-text`

### Use that thing

```
import MarqueeText from "react-marquee-text"

function SomeComponent() {
  return (
    <MarqueeText>
      Let's bring it on back to days of yore
    </MarqueeText>
  )
}
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

### Smooth transitions

TBD

<br/>

## 📅 To Dos

- Maybe add some callbacks?
- Explore js animation?
- Maybe add vertical scrolling option?
- Add some proper tests

<br/>

Have fun ya'll.
