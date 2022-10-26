export const getUrlWithParams = (
  url: string,
  params: { [key: string]: string | number },
): string => {
  let urlWithParams = url

  const paramsKeys = Object.keys(params)

  paramsKeys.forEach((param) => {
    const paramValueStringfied = String(params[param])
    urlWithParams = urlWithParams.replace(`:${param}`, paramValueStringfied)
  })

  return urlWithParams
}
