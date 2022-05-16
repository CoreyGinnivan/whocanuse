export function linkPath(background, foreground, fontSize, bold) {
  return `?bg=${background}&fg=${foreground}&fs=${fontSize}&fw=${
    bold ? 'b' : ''
  }`
}
