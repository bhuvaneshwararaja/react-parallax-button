# React Parallax Button

Bring your react buttons to next level with parallax effect.

Demo: https://react-prallex-button-dev.surge.sh/

## Preview
![Preview](https://raw.githubusercontent.com/bhuvaneshwararaja/react-parallax-button/master/demo.gif)

## Installation

Install module:

```js
 npm i -s react-parallax-button
```
Import it in your React project:
```js
import { ParallaxButton} from 'reactjs-parallax-button'
```

## Usage

### ParallaxButton

This is the most basic components. It allows you to create simple buttons with parallax effect.

All you have to do to create button:
```js
render() {
  return (
    <ParallaxButton text="Amazing button"/>
  )
}
```

Additionally you can pass few props for custom use:
```js
<ParallaxButton
  text="Custom Button"
  parallaxScale={0.5}
  backgroundStyle={{
    background: 'linear-gradient(right, #fc4a1a, #f7b733)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, .3)'
  }}
  textStyle={{
    padding: '1.5em 2.5em 1.5em 2.5em',
    color: 'white'
  }}
/>
```

## Props Overview

- **`text`** *(string)*: The text displayed on the button.
- **`parallaxScale`** *(number)*: Controls the intensity of the parallax effect. Default is `1`.
- **`backgroundStyle`** *(object)*: Custom styles for the button background.
- **`textStyle`** *(object)*: Custom styles for the button text.

## Summary

I hope you will like this simple component and use it in your website, also if you have any problems or questions please let me know, I will be more than happy to help you :)

My email:  [bhuvaneshraja113@gmail.com](mailto:bhuvaneshraja113@gmail.com)
