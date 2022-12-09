import React from 'react'
import { Text } from './typography'
import styled from '@emotion/styled'
import Image from 'next/image'
import avatar from '../images/avatar.png'
import { Link } from '@chakra-ui/react'
import { getKeyedTranslations, getTranslatedText } from '../helpers/i18n'
const t = getKeyedTranslations()

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const ButtonWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  span: {
    marginRight: '6px',
  },
})

const Author = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  margin: '14px 0',
  'p, a': {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    margin: '0 5px 0 10px',
  },
})

/*----------------------------------------------------------
   Actions and Sharing Bar
----------------------------------------------------------*/

export const About = () => (
  <div>
    { getTranslatedText("about") }
    <Author>
      <ButtonWrapper>
        <Link
          fontWeight="bold"
          href="https://github.com/coreyginnivan/whocanuse/"
          aria-label={t("github.aria-label")}
          isExternal
        >
          GitHub
        </Link>
        <Link
          fontWeight="bold"
          style={{ marginLeft: '10px' }}
          href="https://github.com/sponsors/coreyginnivan"
          isExternal
          aria-label={t("sponsor.aria-label")}
        >
          {t("sponsor")}
        </Link>
      </ButtonWrapper>
      <div style={{ display: 'flex' }}>
        <Text>{t("createdby")}</Text>
        <Link
          href="https://twitter.com/coreyginnivan"
          isExternal
          style={{ marginLeft: '10px' }}
          fontWeight="bold"
        >
          <Image
            alt="Corey"
            src={avatar}
            width="30"
            height="30"
            style={{
              borderRadius: '30px',
              overflow: 'hidden',
            }}
          />
          @CoreyGinnivan
        </Link>
      </div>
    </Author>
  </div>
)
