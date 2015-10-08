# This is still WIP

It is still in a really primitive state. It's not published to NPM yet because there is some work and polish that needs to be done before that.

In the mean time you can import `src/Img.js` and `src/filters.js`

# React filters

Apply CSS filters to images

# How to use?

## Import it
```javascript
  import  { Img } from './Img'
```

## Examples

```javascript
  // 50% Grayscale image
  <Img grayscale='50%' src='path/to/img' />
  // Or without units
  <Img grayscale='50' src='path/to/img' />

  // 10px Blur and 20% sepia
  <Img blur='10' sepia='20%' src='path/to/img' />

  // Invert 50% and custom styles
  <Img invert='50%' src='path/to/img' style={{ border: 2px solid red; }} />

```
