import React, { Component, createContext } from 'react'
import { IntlProvider } from 'react-intl'
import translations from 'i18n'
import { setCookie, getCookie } from 'common/cookieManager'
const LanguageContext = createContext({
  lang: 'cs',
  setLang: () => {},
})

const withLang = Component => props => (
  <LanguageContext.Consumer>
    {language => <Component {...props} language={language} />}
  </LanguageContext.Consumer>
)

class LanguageProvider extends Component {
  constructor(props) {
    super(props)
    let selectedLang = ''
    let navigatorLang = ''
    if (typeof document !== 'undefined') {
      selectedLang = getCookie('selected-language')
      navigatorLang = navigator.language.split('-')[0]
    }

    this.state = {
      lang: selectedLang
        ? selectedLang
        : navigatorLang && navigatorLang === 'en'
        ? 'en'
        : 'cs',
    }
  }

  setLang = data => {
    setCookie('selected-language', data)
    this.setState({ lang: data })
  }
  render() {
    const { lang } = this.state
    return (
      <LanguageContext.Provider value={{ lang, setLang: this.setLang }}>
        <IntlProvider
          locale={lang}
          defaultLocale="cs"
          messages={translations[lang].messages}
        >
          {this.props.children}
        </IntlProvider>
      </LanguageContext.Provider>
    )
  }
}

export { LanguageProvider, withLang, LanguageContext as default }
