export function linkPath(background, foreground, fontSize, bold, shadow) {
  return `?b=${background}&c=${foreground}&f=${fontSize}&s=${
    shadow ? "s" : ""
  }${bold ? "b" : ""}`;
}
