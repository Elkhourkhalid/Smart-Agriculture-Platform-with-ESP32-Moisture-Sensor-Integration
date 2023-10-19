// Initialize the humidity gauge
FusionCharts.ready(function () {
    var humidityGauge = new FusionCharts({
        type: 'angulargauge',
        renderAt: 'humidity-gauge',
        width: '200',
        height: '200',
        dataFormat: 'json',
        dataSource: {
            chart: {
                caption: 'Humidity',
                lowerLimit: '0',
                upperLimit: '100',
                showValue: '1',
            },
            colorRange: {
                color: [{
                    minValue: '0',
                    maxValue: '30',
                    code: '#FF4500'
                }, {
                    minValue: '30',
                    maxValue: '70',
                    code: '#F9C802'
                }, {
                    minValue: '70',
                    maxValue: '100',
                    code: '#8B0000'
                }]
            }
        }
    }).render();
});

// Initialize the temperature gauge
FusionCharts.ready(function () {
    var temperatureGauge = new FusionCharts({
        type: 'angulargauge',
        renderAt: 'temperature-gauge',
        width: '200',
        height: '200',
        dataFormat: 'json',
        dataSource: {
            chart: {
                caption: 'Temperature',
                lowerLimit: '0',
                upperLimit: '100',
                showValue: '1',
            },
            colorRange: {
                color: [{
                    minValue: '0',
                    maxValue: '30',
                    code: '#1aaf5d'
                }, {
                    minValue: '30',
                    maxValue: '70',
                    code: '#f2c500'
                }, {
                    minValue: '70',
                    maxValue: '100',
                    code: '#c02d00'
                }]
            }
        }
    }).render();
});

// Update the humidity gauge with the fetched data
function updateHumidityGauge(humidity) {
    FusionCharts.items['humidity-gauge'].feedData("&value=" + humidity);
}

// Update the temperature gauge with the fetched data
function updateTemperatureGauge(temperature) {
    FusionCharts.items['temperature-gauge'].feedData("&value=" + temperature);
}
