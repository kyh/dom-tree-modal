# Exercise: DOM Tree as a File System

This exercise is to build something that represents the DOM tree of a website as a file and folder explorer.

Your implementation will be evaluated technically, but also by a designer, so CSS fidelity is important.

You can use any tools or libraries you'd like. (except an off-the-shelf tree control :)

## Requirements

### General
* Represent all the nodes in a DOM tree starting with `head` and `body` at the top level.
* Do not include comment tags in the output, only text nodes and elements
* Provided code should be runnable by a static web server without needing a build step.

### Appearance
* What you build should look like a modal (Doesn't need to function like one. eg: open/close and dragging it around are not necessary)
* Visually has the same colors, alignment, sizing, and shading as `mockup.png`
* Make the folder represented by the `head` tag "private", with a red icon appearance.

### Interaction
* Implement some sort of basic selection appearance, but complex single-select or multi-select rules aren't required.
* Both files and folders should be selectable.

### Folders
* DOM element nodes should be represented as "folders"
* Display the DOM element tag name next to folders
* Folders can be expanded and collapsed by clicking

### Files
* Text nodes should be represented as "files"
* Display a single line of text content next to "files"
* Text truncates with ellipsis if too wide

## Example

For clarity, here's an example DOM section:

```html
<body>
  <p>
    Some Text
    <!-- A Comment -->
    More Text
  </p>
</body>
```
    
This section of the DOM should be represented in the tree like this:

* body
  * p
    * Some Text
    * More Text

The two text nodes are represented as files, comments are not shown, and containing elements are represented as folders.

## Evaluation Criteria
1. Functional Requirements met
2. DRY, reusable, well-thought-out code
3. Pixel-perfectness of CSS matching `mockup.png` in Chrome
