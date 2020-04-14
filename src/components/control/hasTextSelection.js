export function hasTextSelection(input) {
  if (typeof input.selectionStart == 'number') {
    return input.selectionStart < input.selectionEnd
  } else if (typeof document.selection != 'undefined') {
    return document.selection.createRange().text.length > 0
  }
}
