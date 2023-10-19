FusionCharts.ready(function() {
    var humidityChart = new FusionCharts({
        type: 'thermometer',
        renderAt: 'humidity-chart-container',
        width: '240',
        height: '310',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "مراقب الرطوبة",
                "lowerLimit": "0",
                "upperLimit": "100", // Update upperLimit as needed
                "numberSuffix": "%",
                "showhovereffect": "1",
                "thmFillColor": "#FF5722",
                "showGaugeBorder": "1",
                "gaugeBorderColor": "#FF5722",
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
    humidityChart.render();

    // Function to update the humidity chart with new data
    function updateHumidityChart(newValue) {
        humidityChart.feedData("&value=" + newValue);
    }
});
