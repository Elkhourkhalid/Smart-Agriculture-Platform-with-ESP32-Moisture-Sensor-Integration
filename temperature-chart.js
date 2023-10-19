FusionCharts.ready(function() {
    var temperatureChart = new FusionCharts({
        type: 'thermometer',
        renderAt: 'temperature-chart-container',
        width: '240',
        height: '310',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "مراقب درجة الحرارة",
                "lowerLimit": "-10",
                "upperLimit": "100", // Update upperLimit as needed
                "decimals": "1",
                "numberSuffix": "°C",
                "showhovereffect": "1",
                "thmFillColor": "#008ee4",
                "showGaugeBorder": "1",
                "gaugeBorderColor": "#008ee4",
                "gaugeBorderThickness": "2",
                "gaugeBorderAlpha": "30",
                "thmOriginX": "100",
                "chartBottomMargin": "20",
                "valueFontColor": "#000000",
                "theme": "fusion"
            },
            "value": "0" // Initial value
        }
    });
    temperatureChart.render();

    // Function to update the temperature chart with new data
    function updateTemperatureChart(newValue) {
        temperatureChart.feedData("&value=" + newValue);
    }
});
