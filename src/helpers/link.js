/**
 * FUNCS
 **/
function getUpdatePathFunc(router) {
  const { basePath, pathname, query, asPath, locale } = router

  return (background, foreground, fontSize, bold) => {
    Object.assign(query, {
      bg: background,
      fg: foreground,
      fs: fontSize,
      fw: bold ? 'b' : '',
    })

    router.replace(
      {
        basePath,
        pathname,
        query,
      },
      asPath,
      {
        locale,
        scroll: false,
        shallow: false,
      },
    )
  }
}

/**
 * EXPORTS
 **/

export { getUpdatePathFunc }
