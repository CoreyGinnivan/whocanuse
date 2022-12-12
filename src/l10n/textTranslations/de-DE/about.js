import styled from '@emotion/styled'
import { Text, MediumText, Heading } from '../../../components/typography'
import { Link } from '@chakra-ui/react'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const AboutWrapper = styled('div')({
  marginTop: '60px',
  background: '#f6f8fa',
  padding: '40px',
  borderRadius: '10px',
  h2: {
    marginTop: '3ex',
    marginBottom: '1ex',
  },
})

export default (
  <AboutWrapper>
    <Heading margin="0 0 20px 0">Was ist whocanuse.com?</Heading>
    <Text>
      Es ist ein Tool, das Aufmerksamkeit und Verständnis dafür weckt, welche
      Auswirkungen Farbkontraste auf Menschen mit Sehbehinderungen haben können.
    </Text>

    <Text>
      Die „
      <Link fontWeight="bold" href="https://www.w3.org/TR/WCAG21/" isExternal>
        <span lang="en">Web Content Accessibility Guidelines (WCAG)</span>
      </Link>
      “ umfassen eine breite Palette von Empfehlungen, um Webinhalte
      zugänglicher zu machen. Ein kleiner Teil dieser Empfehlungen sind
      Anpassungen für Menschen mit einer Form von Blindheit oder Sehschwäche.
    </Text>
    <Text>
      Dieses Standard-Bewertungssystem ist ein guter Anfang. Aber ich wollte
      versuchen, greifbar zu machen, wie Menschen von den verschiedenen Formen
      der Blindheit oder Sehschwäche betroffen sind.
    </Text>

    <MediumText>Woher haben Sie die Informationen?</MediumText>
    <Text>
      Die Prozentsätze stammen sowohl von{' '}
      <Link
        fontWeight="bold"
        href="https://www.colour-blindness.com"
        isExternal
      >
        colour-blindness.com
      </Link>{' '}
      als auch von{' '}
      <Link
        fontWeight="bold"
        href="https://www.visionaustralia.org/"
        isExternal
      >
        Vision Australia
      </Link>
      . PS: Ihr seid die Besten, vielen Dank! ✌️
    </Text>
    {/* eslint-disable-next-line no-irregular-whitespace */}
    <MediumText>
      Sie haben sich verrechnet: Die Summe ergibt nicht 100 % …?
    </MediumText>
    <Text>
      Gute Augen! (haha) Die angegebenen Bevölkerungsdaten sind Schätzungen für
      einzelne Beeinträchtigungen und decken die große Zahl der Sehbehinderungen
      in der Welt nicht komplett ab. Diese sollen nicht nur ein Verständnis
      dafür vermitteln, <strong>wie</strong> sich der Farbkontrast auf
      verschiedene Menschen auswirkt, sondern auch auf <strong>wen</strong> er
      sich auswirkt.
    </Text>

    <MediumText>
      Ich bin fasziniert davon, wie das funktioniert. Können Sie mir mehr
      darüber erzählen?
    </MediumText>

    <Text>
      Ja, natürlich! Es gibt ein paar Stufen, um zu diesem Punkt zu gelangen.
      Zuerst ermitteln wir den Kontrast zwischen zwei HEX-Werten. Hierfür
      verwenden wir ein Plug-in namens{' '}
      <Link fontWeight="bold" href="https://vis4.net/chromajs/" isExternal>
        Chroma.js
      </Link>
      {' '}– dieses übernimmt die schwere Arbeit für uns. Sobald wir das
      Kontrastverhältnis haben (zusammen mit Schriftgröße und -schnitt), können
      wir eine Bewertung für diese spezifischen Farbkombination ermitteln.
    </Text>
    <Text>
      Für die unterschiedlichen Formen der Farbenblindheit nutzen wir ein
      anderes Plug-in mit dem treffenden Namen{' '}
      <Link
        fontWeight="bold"
        href="https://github.com/skratchdot/color-blind"
        isExternal
      >
        <span lang="en">Color-blind</span>
      </Link>
      . Dieses wandelt das Farbverhältnis so um, wie es Menschen mit den
      unterschiedlichen Sehbeeinträchtigungen wahrnehmen würden. Nun können wir
      wieder denselben Prozess nutzen, um die ermittelte Farbkombination zu
      bewerten.
    </Text>
    <Text>
      Für den Grauen Star, das Grünen Star, die Sehschwäche und die
      situationsbedingten Ereignisse habe ich eigene Simulationen entwickelt, um
      die Bewertung zu ermitteln.
    </Text>

    <MediumText>
      Was bedeutet die Einstufung als „<span lang="en">FAIL</span>“?
    </MediumText>
    <Text>
      Die Einstufung erfolgt anhand einer Kombination aus Farbkontrast,
      Textgröße und Schriftschnitt. Eine Einstufung als „
      <span lang="en">FAIL</span>“ bedeutet, dass die Farbkombination eine
      visuelle Barriere für den Betrachter darstellt und nach Möglichkeit
      vermieden werden sollte.
    </Text>

    <MediumText>Kann ich einen Beitrag leisten?</MediumText>
    <Text>
      Unbedingt! Forken Sie das Repo und reichen Sie einen PR mit hilfreichen
      Ergänzungen oder Änderungen ein.
    </Text>
  </AboutWrapper>
)
