import queryString from 'query-string'

export function linkPath(background, foreground, fontSize, bold, shadow) {
  let query = {
    b: background,
    c: foreground,
    f: fontSize,
  }

  if (bold || shadow) {
    query.s = `${shadow ? 's' : ''}${bold ? 'b' : ''}`
  }

  return '?' + queryString.stringify(query)
}
