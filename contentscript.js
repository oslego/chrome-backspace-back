/*
  Navigate to previous page when the Backspace key is pressed.
  Avoid this behavior when the focused element is an input field, textarea
  or has contenteditable attribute set to true.

  Not using `addEventListener` because the browser does not trigger the handler
  when the Backspace key is pressed.
*/
pressedKeys = {};

document.onkeydown = function(e) {

    var li = pressedKeys[e.key];
    if (!li) {
        pressedKeys[e.key] = true;
    }

    if (pressedKeys['Backspace']) {
        if (pressedKeys['Shift'] && Object.keys(pressedKeys).length == 2) {
            if (["INPUT", "TEXTAREA"].indexOf(document.activeElement.tagName) > -1) {
                return;
            }

            if (document.activeElement.isContentEditable) {
                return;
            }
            else {
                e.preventDefault();
                window.history.forward();
            }
        }
        else if (Object.keys(pressedKeys).length == 1) {
            if (["INPUT", "TEXTAREA"].indexOf(document.activeElement.tagName) > -1) {
                return;
            }

            if (document.activeElement.isContentEditable) {
                return;
            }
            else {
                e.preventDefault();
                window.history.back();
            }
        }
    }
    return;
};

document.onkeyup = function(e) {
    var li = pressedKeys[e.key];
    if (li) {
        delete pressedKeys[e.key];
    }
    return;
};
