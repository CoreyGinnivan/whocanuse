export function linkPath(background, foreground, fontSize, bold) {
  return `?b=${background}&c=${foreground}&f=${fontSize}&s=${bold ? 'b' : ''}`
}
