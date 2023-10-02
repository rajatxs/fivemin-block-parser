# Fivemin Block Parser

Simply converts [Editor.js](https://editorjs.io) block data to HTML format.

## Requirements

- [Node.js 18](https://nodejs.org/en/download)

### Installation

Add dependency in your existing project.

```shell
npm i @rxpm/fivemin-block-parser
```

## Usage

Create a new instance of `BlockParser` with built-in handlers.

```javascript
const parser = new BlockParser();
```

Parse block data using the `BlockParser.parse()` method and obtain the HTML output.

```javascript
// Replace the value with your Editor.js output
const blockdata = {
   time: 1696223716589,
   blocks: [
      {
         id: '1yKeXKxN7-',
         type: 'header',
         data: {
            text: 'Hola',
            level: 2
         }
      },
      {
         id: 'mhTl6ghSkV',
         type: 'paragraph',
         data: {
            text: '¡Bienvenido a fivemin.in!'
         }
      }
   ]
};

const html = parser.parse(blockdata);

console.log(html);
```

For more information or inquiries, please contact the project owner: Rajat (rxx256+github@outlook.com)
