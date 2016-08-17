/*
  Navigate to previous page when the Backspace key is pressed.
  Avoid this behavior when the focused element is an input field, textarea
  or has contenteditable attribute set to true.

  Not using `addEventListener` because the browser does not trigger the handler
  when the Backspace key is pressed.
*/
document.onkeydown = function(e) {
  if (e.key !== 'Backspace') {
    return;
  }

  // Overcomes issues with custom elements wrapping INPUT
  const target = event.path[0];

  // Do not handle user input on input and textarea elements.
  // In some scenarios tagName can be lowercase. Ensure we catch that.
  if (["input", "textarea"].indexOf(target.tagName.toLowerCase()) > -1) {
    return;
  }

  // Do not handle elements with contenteditable = true
  if (target.isContentEditable) {
    return;
  }

  // Do not handle alongside modifiers except Shift key
  if (e.ctrlKey || e.altKey || e.metaKey) {
    return;
  }

  e.preventDefault();

  if (e.shiftKey) {
    window.history.forward();
  } else {
    window.history.back();
  }
};
