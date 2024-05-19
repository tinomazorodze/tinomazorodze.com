export async function callBackHref(callbackUrl: any, url: string) {
  window.location.href = `${url}?${new URLSearchParams({
    callbackUrl,
  })}`
}
