# Case Converter

A simple, client-side text case conversion tool - convert your text to different cases directly from your browser.

## Features

- **Multiple Case Conversions**: Convert text to various cases:
  - **camelCase**: `helloWorld`
  - **PascalCase**: `HelloWorld`
  - **snake_case**: `hello_world`
  - **kebab-case**: `hello-world`
  - **UPPERCASE**: `HELLO WORLD`
  - **lowercase**: `hello world`
  - **Title Case**: `Hello World`
  - **Sentence case**: `Hello world`
  - **CONSTANT_CASE**: `HELLO_WORLD`
  - **dot.case**: `hello.world`
  - **path/case**: `hello/world`
  - **Header-Case**: `Hello-World`
  - **sWAP cASE**: `hELLO wORLD`
  - **aLtErNaTiNg CaSe**: `hElLo WoRlD`
  - **InVeRsE cAsE**: `hELLO wORLD`
- **Real-time Conversion**: Results update as you type
- **Copy to Clipboard**: One-click copy functionality
- **Dark/Light Mode**: Toggle between themes
- **100% Client-side**: All processing happens in your browser, no data sent to any server

## Usage

1. Enter or paste your text in the input field
2. Click on any case conversion button to convert your text
3. Click the copy button to copy the converted text to clipboard

## Features in Detail

### Input Text
- Multi-line text input
- Real-time conversion as you type
- Clear visual feedback

### Case Conversions
- **camelCase**: First word lowercase, subsequent words capitalized, no spaces
- **PascalCase**: All words capitalized, no spaces
- **snake_case**: All lowercase with underscores
- **kebab-case**: All lowercase with hyphens
- **UPPERCASE**: All letters uppercase
- **lowercase**: All letters lowercase
- **Title Case**: First letter of each word capitalized
- **Sentence case**: First letter of sentence capitalized
- **CONSTANT_CASE**: All uppercase with underscores
- **dot.case**: All lowercase with dots
- **path/case**: All lowercase with forward slashes
- **Header-Case**: First letter of each word capitalized with hyphens
- **sWAP cASE**: Swap case of each letter
- **aLtErNaTiNg CaSe**: Alternating case pattern
- **InVeRsE cAsE**: Inverse of original case

### Copy Functionality
- One-click copy to clipboard
- Visual feedback on successful copy

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (ES6+)
- Local Storage for theme persistence

## Browser Support

Works in all modern browsers that support:
- CSS Grid
- CSS Variables
- ES6 Classes
- Clipboard API

## License

MIT License

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## Demo

[https://herusdianto.github.io/case-converter/](https://herusdianto.github.io/case-converter/)
