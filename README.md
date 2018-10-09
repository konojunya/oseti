# oseti
oseti is configuraton your program with NODE_ENV.

# Install

```
# with npm
npm install oseti

# or with yarn
yarn add oseti
```

# Usage

We will load the file first.

```js
const oseti = require("oseti");
oseti.load();
```

Next, specify the configuration key of the config file.

Make config.yml as follows.

```yaml
staging:
  api_base_url: https://staging.example.com
production:
  api_base_url: https://api.example.com
```

To get the value using key we write:

```js
oseti.get("api_base_url");
```

# Auther

[konojunya](https://twitter.com/konojunya)
