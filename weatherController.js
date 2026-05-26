exports.getWeatherForecast = (req, res) => {
  const forecast = {
    current: {
      temperature: '24°C',
      humidity: '72%',
      wind: '14 km/h',
      condition: 'Partly cloudy',
      uvIndex: 'Moderate'
    },
    rainPrediction: {
      chance: '65%',
      expectedIn: '3 hours',
      recommendation: 'Delay pesticide spraying and schedule irrigation after the rain.'
    },
    stormAlert: {
      active: false,
      message: 'No storm warnings at this time.'
    },
    droughtRisk: {
      level: 'Low',
      advice: 'Soil moisture is healthy; maintain regular irrigation checks.'
    },
    irrigationSuggestion: 'Irrigate after the forecasted rain if soil moisture drops below 35%.'
  };

  res.json(forecast);
};
