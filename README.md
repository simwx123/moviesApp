# Movies App

An app for listing trending and popular movies from [moviedb](https://developers.themoviedb.org/3/getting-started/introduction) API.

### Screenshots
![popular](https://i.imgur.com/bd9Yroq.png?1)
![Details](https://i.imgur.com/lJnjHhr.png?1)
![Search](https://i.imgur.com/DiYnCKy.png?1)

## Getting started

First you'll have to clone the App:

```bash
git clone https://github.com/simwx123/moviesApp.git
```

Then, inside the project's folder, install it's dependencies.

With Yarn:

```bash
yarn
```

or npm:

```bash
npm install
```

## Settings

### API's and keys
open project movieApp/src/main/main.js and modify the variable name of "myApiKey" to your API KEY.

| Attribute       | Description                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| MOVIEDB_API_KEY | Moviedb api key generated [How do I get one?](https://developers.themoviedb.org/3/getting-started/introduction)                    |
| MOVIEDB_API_KEY | Moviedb base url to make requests. Defaults to: `https://api.themoviedb.org/3/`                                                    |

### Keystore(Android)

To run the app in dev mode you'll need to generate a `debug.keystore` key. [Show me how](https://coderwall.com/p/r09hoq/android-generate-release-debug-keystores).

## Running

Now you can run the App with `react-native run-android` or `react-native run-ios` depending on your platform.

or open moviesApp/ios/movieApp.xcworkspace in Xcode and click run button to run in ios simulator.

## Made with
- [React Native](https://facebook.github.io/react-native/)
- [React Redux](https://react-redux.js.org/)
- [React Navigation 3.x.x](https://reactnavigation.org/en/) (Navigation)
- [Styled Components](https://www.styled-components.com/) (Make things beautiful)
- [React Native Fast Image](https://github.com/DylanVann/react-native-fast-image)

## About Me

**Sim Wei Xiong**

- [GitHub](https://github.com/simwx123)
- [LinkedIn](https://www.linkedin.com/in/sim-wei-xiong-281876124/)
- Email: simweixiong@gmail.com
