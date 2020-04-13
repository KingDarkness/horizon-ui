# Lumen Horizon
    Lumen Horizon is based on the official [Laravel Horizon](https://github.com/laravel/horizon) (v3.7.2) package.
    Lumen Horizon upgrade to manager mutiple laravel or lumen queues service via API

## Add services
On `src/screens/services.vue` add the services state like
```javascript
    services: [
        {
            name: 'Api', // Name of services
            path: 'horizon', // path horizon (in config horizon.php [path])
            host: 'http://api.horizon.lc' // host
        },
        {
            name: 'Foo', // Name of services
            path: 'horizon', // path horizon (in config horizon.php [path])
            host: 'http://foo.horizon.lc' // host
        },
    ]
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
