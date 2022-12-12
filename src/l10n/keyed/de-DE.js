export default new Map([
  // Pages
  ["index", new Map([
    ["title", "Wer kann diese Farbkombination verwenden?"],
    ["situational-events", "Situationsbezogene Ereignisse"],
  ])],

  // Elements
  ["demo", new Map([
    ["placeholder", "Franz jagt im komplett verwahrlosten Taxi quer durch Bayern."],
    ["background", "Hintergrund"],
    ["foreground", "Text"],
    ["bold", "fett"],
    ["switch", "Hintergrund- und Textfarbe wechseln"]
  ])],

  ["vision", new Map([
    ["trichromatic.name", "Normale Sicht (Trichromatisch)"],
    ["trichromatic.desc", "Kann alle drei Grundfarben unterscheiden; wenig bis keine Unschärfe"],

    ["protanomaly.name", "Protanomalie"],
    ["protanomaly.desc", "Verminderte Empfindlichkeit gegenüber Rot - Schwierigkeiten bei der Unterscheidung von Rot- und Grüntönen"],

    ["protanopia.name", "Protanopie"],
    ["protanopia.desc", "Rotblind - kann Rot überhaupt nicht sehen."],

    ["deuteranomaly.name", "Deuteranomalie"],
    ["deuteranomaly.desc", "Reduzierte Empfindlichkeit für Grün - Schwierigkeiten bei der Unterscheidung von Rot- und Grüntönen"],

    ["deuteranopia.name", "Deuteranopie"],
    ["deuteranopia.desc", "Grünblind - Kann Grüntöne überhaupt nicht sehen"],

    ["tritanomaly.name", "Tritanomalie"],
    ["tritanomaly.desc", "Schwierigkeiten bei der Unterscheidung von Blau- und Grüntönen sowie von Gelb- und Rottönen"],

    ["tritanopia.name", "Tritanopia"],
    ["tritanopia.desc", "Unfähig zwischen Blau und Grün, Violett und Rot sowie Gelb und Rosa zu unterscheiden"],

    ["achromatomaly.name", "Achromatomie"],
    ["achromatomaly.desc", "Teilweise Farbenblindheit, sieht das Fehlen der meisten Farben"],

    ["achromatopsia.name", "Achromatopsie"],
    ["achromatopsia.desc", "Vollständige Farbenblindheit, sieht nur Schattierungen"],

    ["cataracts.name", "Grauer Star"],
    ["cataracts.desc", "Linsentrübung im Auge, die das Sehen beeinträchtigt"],

    ["glaucoma.name", "Grüner Star"],
    ["glaucoma.desc", "Leichter Sehverlust"],

    ["lowvision.name", "Niedriges Sehvermögen"],
    ["lowvision.desc", "Verminderte und/oder verschwommene Sicht (nicht durch übliche Mittel wie eine Brille zu beheben)"],

    ["sunlight.name", "Direktes Sonnenlicht"],
    ["sunlight.desc", "Simuliert die Wirkung von direktem Sonnenlicht auf ein Telefon oder einen Bildschirm"],

    ["nightshift.name", "Nachtmodus"],
    ["nightshift.desc", "Simuliert die Auswirkungen des Nachtmodus bei einem Telefon oder Bildschirm"],

    ["what-i-see", "Was ich sehe"],
    ["affected", "betroffen"],
    ["affected.tooltip", "Grobe Schätzung der weltweiten Bevölkerung mit dieser Sehbehinderung. Kann zwischen den Geschlechtern variieren."],
  ])],

  // Locales (for language switch)
  ["locale", new Map([
    ["de", "Deutsch"],
    ["en", "English"],
  ])],

  // Global
  ["global", new Map([
    ["contrast-ratio", "Kontrastverhältnis"],
    ["wcag-grading", "WCAG-Einstufung"],
    ["adblocker", "Wenn Sie helfen möchten, WhoCanUse aufrechtzuerhalten, ziehen Sie bitte in Erwägung, Ihren AdBlocker für uns abzuschalten (es ist in Ordnung, wenn Sie das nicht wollen, kein Druck)."],
    ["sponsor", "Unterstützen"],
    ["sponsor.aria-label", "Unterstützen Sie @coreyginnivan via GitHub"],
    ["github.aria-label", "coreyginnivan/whocanuse auf GitHub"],
    ["translations", "Übersetzungen"],
    ["createdby", "Erstellt & gepflegt von "],
  ])]
])