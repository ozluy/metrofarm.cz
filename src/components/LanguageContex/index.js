import React, { Component, createContext } from 'react'
import { IntlProvider } from 'react-intl'
import translations from 'i18n'
const LanguageContext = createContext({
  lang: {},
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
    this.state = {
      lang: 'cs',
    }
  }

  setLang = data => {
    this.setState({ lang: data })
  }
  render() {
    const { lang } = this.state
    return (
      <LanguageContext.Provider value={{ lang, setLang: this.setLang }}>
        <IntlProvider
          locale={lang}
          defaultLocale="en"
          messages={translations[lang].messages}
        >
          {this.props.children}
        </IntlProvider>
      </LanguageContext.Provider>
    )
  }
}

export { LanguageProvider, withLang, LanguageContext as default }
