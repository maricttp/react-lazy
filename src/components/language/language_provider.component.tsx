import React from "react";
import {IntlProvider} from "react-intl";
import {addLocaleData} from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import messages_de from "../../translations/de.json";
import messages_en from "../../translations/en.json";

const LanguageContext = React.createContext({});
const LanguageConsumer = LanguageContext.Consumer;


addLocaleData([...locale_en, ...locale_de]);

type ImassageProperty = 'de' | 'en';
type ImessagesObject = { [key: string]: string };

type Imessages = {
    [key in ImassageProperty]: ImessagesObject;
}

type IState = {
    language: ImassageProperty
}

const messages: Imessages = {
    'de': messages_de,
    'en': messages_en
};

const LanguageSwitcher = () => {
    return (
        <LanguageConsumer>
            {({updateLanguage}: any) => (
                <select style={{margin: "20px 0"}} onChange={updateLanguage}>
                    <option value="en">English</option>
                    <option value="de">Germany</option>
                </select>
            )}
        </LanguageConsumer>);
};


class LanguageProvider extends React.Component<{}, IState> {
    state: IState = {
        language: "de"
    };

    updateLanguage = (e: any) => this.setState({language: e.target.value});

    render() {
        return (
            <LanguageContext.Provider
                value={{
                    language: this.state.language,
                    updateLanguage: this.updateLanguage
                }}
            >

                <IntlProvider locale={this.state.language} messages={messages[this.state.language]}>
                    <div style={{margin: "20px 0", textAlign: "center"}}>
                        <LanguageSwitcher/>
                        {this.props.children}
                    </div>
                </IntlProvider>

            </LanguageContext.Provider>
        );
    }
}

export default LanguageProvider;
