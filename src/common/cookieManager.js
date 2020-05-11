export const setCookie = (cname, cvalue, exdays = 100) => {
  var currentDate = new Date()
  currentDate.setTime(currentDate.getTime() + exdays * 24 * 60 * 60 * 1000)
  var expires = 'expires=' + currentDate.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

export const getCookie = cname => {
  var name = cname + '='
  var decodedCookie = decodeURIComponent(document.cookie)
  var ca = decodedCookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
