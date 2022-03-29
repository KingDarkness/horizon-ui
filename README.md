# Lumen Horizon

Lumen Horizon UI is based on the official [Laravel Horizon](https://github.com/laravel/horizon) (v5.9.3) package.

It provides the same features as original package only the UI.

Lumen Horizon UI upgrade to manager mutiple laravel or lumen queues service via API

<p align="center">
    <img src="https://raw.githubusercontent.com/KingDarkness/horizon-ui/v3/demo/light.png" width="430">
    <img src="https://raw.githubusercontent.com/KingDarkness/horizon-ui/v3/demo/dark.png" width="430">
</p>

[Lumen Horizon](https://packagist.org/packages/kingdarkness/lumen-horizon) is based on the official [Laravel Horizon](https://github.com/laravel/horizon) (v5.9.3) package.

It provides the same features as original package except the UI.

Tested with **Lumen 5.8**

## Add services

On `src/screens/services.vue` add the services state like

```javascript
services: [
  {
    name: "Api", // Name of services
    path: "horizon", // path horizon (in config horizon.php [path])
    host: "http://api.horizon.lc", // host
  },
  {
    name: "Foo", // Name of services
    path: "horizon", // path horizon (in config horizon.php [path])
    host: "http://foo.horizon.lc", // host
  },
];
```

## Change dark, light theme

On `src/main.js`

dark: import './assets/sass/app-dark.scss'

light: import './assets/sass/app.scss'

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
