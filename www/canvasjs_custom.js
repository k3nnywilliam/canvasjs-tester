function loadCanvasJS(json_data) {
  let script = document.createElement('script');
  script.src = 'https://cdn.canvasjs.com/canvasjs.min.js';
  document.body.appendChild(script);
  // Construct options with R's json data
  const destructuredArray = json_data.map(({x, y}) => ({x, y}));
  
  script.onload = function() {
    //Better to pass options first
    let options = {
      zoomEnabled: true,
      animationEnabled: true,
      title: {
        text: 'Test Chart'
      },
      axisY: {
        lineThickness: 1
      },
      data: [{
        type: 'line',
        dataPoints: destructuredArray
      }]
    };
  
    // Render CanvasJS chart
    let chart = new CanvasJS.Chart('chartContainer', options);
    let startTime = new Date();
    chart.render();
    let endTime = new Date();
    $('#timeToRender').text('Time to Render: ' + (endTime - startTime) + 'ms');
  };
}
