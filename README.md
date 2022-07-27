# SkyNet Weather App

The code in this repository defines a simple **NodeJS** app which forecasts the weather for a handful of location over the next few days.

## Getting Started

1. Acquire an API key from openweathermap.org.
1. Install this key into the local environment.
1. Run `npm install`.
1. Start the server using `npm start`.

There are a number of ways to install the API key into the local environment, but what I do is to add a line to the end of the `.npmrc` file in this directory - create it if it doesn't exist - like so:

```
OPENWEATHER_API_KEY="[API key goes here]"
```
