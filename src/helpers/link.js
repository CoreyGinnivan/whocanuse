export function linkPath(background, foreground, fontSize, isBold) {
  return `?bg=${background}&fg=${foreground}&fs=${fontSize}&fw=${
    isBold ? 'b' : ''
  }`
}
