# React filters

Apply CSS filters to images

# How to use?

```
  import  { Img } from './Img'
  //...

  // 50% Grayscale image
  <Img grayscale='50%' src='path/to/img' />
  // Or without units
  <Img grayscale='50' src='path/to/img' />

  // 10px Blur and 20% sepia
  <Img blur='10' sepia='20%' src='path/to/img' />

  // Invert 50% and custom styles
  <Img invert='50%' src='path/to/img' style={{ border: 2px solid red; }} />

```

