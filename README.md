<h1 align="center">Welcome to my <code>express-validation-error</code> 👋</h1>

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000) [![GitHub license](https://img.shields.io/badge/Mit-License-blue.svg?style=flat-square)](LICENSE) [![Joel Lesenne Homepage](https://img.shields.io/badge/joellesenne-HomePage-blue.svg?style=flat-square)](https//joellesenne.dev)

![Maintenance](https://img.shields.io/maintenance/yes/2020.svg?style=flat-square) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/joellesenne/express-validation-error#readme)  [![Codacy Badge](https://api.codacy.com/project/badge/Grade/554dbae558f245cd882888d0d415a482)](https://app.codacy.com/app/joellesenne/express-validation-error_2?utm_source=github.com&utm_medium=referral&utm_content=joellesenne/express-validation-error&utm_campaign=Badge_Grade_Dashboard)

[![Twitter: joellesenne](https://img.shields.io/twitter/follow/joellesenne.svg?style=social)](https://twitter.com/joellesenne)

## Table of Contents
+ [About](#about)
+ [Built with](#built)
+ [Getting Started](#started)
+ [Usage](#usage)
+ [Contributing](./CONTRIBUTING.md)

<a id="about"></a>

## About

>Simple Middleware to manage exceptions within express routes in asynchronous.

👀 [Looking at my work]

💡 [Inspiration]

📦 [Git project]

<a id="built"></a>

## 🛠 Built with
- [@joellesenne/express-async-handler](@joellesenne/express-async-handler) - Simple Middleware to manage exceptions for Express
- [Mocha](https://mochajs.org/) - Test framework running on Node.js

<a id="started"></a>

## 🖥 Good started

### Prerequisites

You will need [node.js](https://nodejs.org/en/) to run the software and see the instructions.

```bash
# Node version
~ $ node --version

# NPM version
~ $ npm --version

# Git version
~ $ git --version
```

### Installing

```bash
~ $ npm install --save-dev @joellesenne/express-async-handler @joellesenne/express-error-handler
```
or

```bash
~ $ yarn add @joellesenne/express-async-handler @joellesenne/express-validation-error -D
```

<a id="usage"></a>

## ⚙ Usage

```javascript
const asyncHandler = require('@joellesenne/express-async-handler')
const ErrorResponse = require('@joellesenne/express-validation-error')

express.get('/', asyncHandler(async (req, res, next) => {
  const bar = await foo.findAll();
	res.send(bar)
	// Create errorHandler
	if (!bar) {
    return next(new ErrorResponse("No bar valid", 404));
  }
}))
```

## Author

👤 **Joël Lesenne &lt;contact@joellesenne.dev&gt;**

- Twitter : [@joellesenne](https://twitter.com/joellesenne)
- Github : [@joellesenne](https://github.com/joellesenne)
- Codepen : [@joellesenne](https://codepen.io/joellesenne)

### 🏠 [Web Site](https://joellesenne.dev)!

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/joellesenne/express-validation-error/issues).

## Show your support

Give a ⭐️ if this project helped you!

[![support us](https://img.shields.io/badge/badge-become--a%20patreon-orange?style=flat-square)](https://www.patreon.com/joellesenne)

## 📝 License

Copyright © 2020 [Joël Lesenne](https://github.com/joellesenne).

This project is [MIT](LICENSE) licensed.

[Looking at my work]: https://joellesenne.github.io/express-validation-error

[Inspiration]: https://github.com/Kirbyasdf/NODE-2020/blob/master/utilities/ErrorResponse.js

[Git project]: https://github.com/joellesenne/express-validation-error
