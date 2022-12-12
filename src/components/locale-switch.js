/**
 * IMPORTS
 **/

import { useRouter } from 'next/router'
import { Component } from 'react'
import { Menu, MenuButton, MenuList, Button, MenuItem } from '@chakra-ui/react'
import { getKeyedTranslations } from '../helpers/i18n'
const t = getKeyedTranslations()
const tLocale = getKeyedTranslations('locale')

/**
 * FUNCS
 **/

/**
 * Creates a list of supported locales excluding the currently active one.
 * @returns {Array<string>} Array of locales
 */
function getLocales() {
  const router = useRouter()
  const { locales, locale: currentLocale } = router

  return (locales || []).filter((locale) => locale !== currentLocale)
}

/**
 * Creates callback function for onclick-handler based on the target locale.
 * @param {string} locale Language identifier
 * @returns {() => void} Callback function for onclick-handler
 */

function onClickCallback(locale) {
  const router = useRouter()
  const { basePath, pathname, query } = router

  return () => {
    router.push({ basePath, pathname, query }, undefined, { locale })
  }
}

/**
 * Builds a list of listelements with links to the other available translations.
 * @param {Array<string>} locales Array of locales
 * @returns {Array<HTMLLiElement>} Array of Listelements with links to other locales
 */
function mapLocalsToLink(locales) {
  return locales.map((locale) => (
    <MenuItem key={locale} onClick={onClickCallback(locale)}>
      <span
        style={{
          fontFamily: 'monospace',
          textTransform: 'uppercase',
        }}
      >
        {locale.toUpperCase() + ' –'}
      </span>
      {tLocale(locale)}
    </MenuItem>
  ))
}

/**
 * @returns {Component} Component to switch between the different translations.
 */
function LocaleSwitcher() {
  const locales = getLocales()

  return (
    <Menu>
      <MenuButton as={Button} background="none">
        {t('translations')}
      </MenuButton>
      <MenuList padding=".5em">{mapLocalsToLink(locales.sort())}</MenuList>
    </Menu>
  )
}

/**
 * EXPORTS
 **/

export default LocaleSwitcher
