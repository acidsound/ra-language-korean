# Korean Messages for React-Admin
Korean Messages for React-Admin, the frontend framework for building admin applications on top of REST/GraphQL services.

# Installation
```
npm install --save ra-language-korean
```

# Usage
```
import koreanMessages from 'ra-language-korean';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
    'ko': koreanMessages,
};
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);

<Admin locale="ko" i18nProvider={i18nProvider}>
  ...
</Admin>
```

# License
This translation is licensed under the MIT License.