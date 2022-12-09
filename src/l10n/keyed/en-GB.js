export default new Map([
  // Pages
  ["index", new Map([
    ["title", "Who can use this color combination?"],
    ["situational-events", "Situational Events"],
  ])],

  // Elements
  ["demo", new Map([
    ["placeholder", "The quick brown fox jumps over the lazy dog"],
    ["background", "Background"],
    ["foreground", "Text"],
    ["bold", "Bold"],
    ["switch", "Switch background and text colors"]
  ])],

  ["vision", new Map([
    ["trichromatic.name", "Regular Vision (Trichromatic)"],
    ["trichromatic.desc", "Can distinguish all three primary color, little to no blurriness"],

    ["protanomaly.name", "Protanomaly"],
    ["protanomaly.desc", "Reduced sensitivity to red - trouble distinguishing reds and greens"],

    ["protanopia.name", "Protanopia"],
    ["protanopia.desc", "Red blind - Can’t see reds at all"],

    ["deuteranomaly.name", "Deuteranomaly"],
    ["deuteranomaly.desc", "Reduced sensitivity to green - trouble distinguishing reds and greens"],

    ["deuteranopia.name", "Deuteranopia"],
    ["deuteranopia.desc", "Green blind - Can’t see greens at all"],

    ["tritanomaly.name", "Tritanomaly"],
    ["tritanomaly.desc", "Trouble distinguishing blues and greens, and yellows and reds"],

    ["tritanopia.name", "Tritanopia"],
    ["tritanopia.desc", "Unable to distinguish between blues and greens, purples and reds, and yellows and pinks"],

    ["achromatomaly.name", "Achromatomaly"],
    ["achromatomaly.desc", "Partial color blindness, sees the absence of most colors"],

    ["achromatopsia.name", "Achromatopsia"],
    ["achromatopsia.desc", "Complete color blindness, can only see shades"],

    ["cataracts.name", "Cataracts"],
    ["cataracts.desc", "Clouding of the lens in the eye that affects vision"],

    ["glaucoma.name", "Glaucoma"],
    ["glaucoma.desc", "Slight vision loss"],

    ["lowvision.name", "Low Vision"],
    ["lowvision.desc", "Decreased and/or blurry vision (not fixable by usual means such as glasses)"],

    ["sunlight.name", "Direct Sunlight"],
    ["sunlight.desc", "Simulating the effect of direct sunlight on a phone or screen"],

    ["nightshift.name", "Night Shift Mode"],
    ["nightshift.desc", "Simulating the effect of night mode on a phone or screen"],

    ["what-i-see", "What I see"],
    ["affected", "affected"],
    ["affected.tooltip", "Rough estimation of worldwide population with this vision impairment. Can vary between genders."],

  ])],

  // Global
  ["global", new Map([
    ["contrast-ratio", "Contrast Ratio"],
    ["wcag-grading", "WCAG Grading"],
    ["adblocker", "If you'd like to help keep WhoCanUse maintained, please consider turning off your AdBlocker for us (it's cool if you don't want to, no pressure)"],
    ["sponsor", "Sponsor"],
    ["sponsor.aria-label", "Sponsor @coreyginnivan on GitHub"],
    ["github.aria-label", "coreyginnivan/whocanuse on GitHub"],
    ["createdby", "Created & maintained by"],
  ])]
])