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

  if (["INPUT", "TEXTAREA"].indexOf(target.tagName) > -1) {
    return;
  }

  if (document.activeElement.isContentEditable) {
    return;
  }

	e.preventDefault();
	window.history.back();
};
