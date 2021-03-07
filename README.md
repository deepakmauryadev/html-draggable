# html-draggable
 Simple js script for draggable element in HTML

## Installation

Add following script into your HTML file.
```html
<script src="https://cdn.jsdelivr.net/gh/deepakmauryadev/html-draggable/index.js"></script>
```

## Setup
Add "draggable" class to the element you want to be draggable.
```html
<div class="drggable"></div>
```
If you do not want to trigger draggable element by whole element then add a header element with class "draggable-header". Now draggable action will only trigger if we start dragging from header element.
```html
<div class="draggable">
    <div class="draggable-header">
</div>
```

## Examples

1. Trigger by whole element.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Draggable</title>
    <style>
        div.draggable {
            height: 10rem;
            width: 10rem;
            background-color: lightblue;
            position: absolute;
            top: calc(50% - 5rem);
            left: calc(50% - 5rem);
        }
    </style>
</head>
<body>
    <div class="draggable"></div>

    <script src="https://cdn.jsdelivr.net/gh/deepakmauryadev/html-draggable/index.js"></script>
</body>
</html>
```
2. Trigger by header element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Draggable</title>
    <style>
        div.draggable {
            height: 10rem;
            width: 10rem;
            background-color: lightblue;
            position: absolute;
            top: calc(50% - 5rem);
            left: calc(50% - 5rem);
        }
        div.draggable-header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2rem;
            background-color: aqua;
        }
    </style>
</head>
<body>
    <div class="draggable">
        <div class="draggable-header"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/gh/deepakmauryadev/html-draggable/index.js"></script>
</body>
</html>
```