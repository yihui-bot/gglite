// Shiny custom message handlers for gglite / AntV G2 charts
(() => {
  'use strict';

  // Store chart instances keyed by container ID
  const charts = {};

  // Handler: render a full chart
  Shiny.addCustomMessageHandler('g2-render', (message) => {
    const id = message.id;
    const ctor = message.ctor || {};
    const spec = message.spec || {};

    // Destroy existing chart if present
    if (charts[id]) {
      charts[id].destroy();
      delete charts[id];
    }

    ctor.container = id;
    const chart = new G2.Chart(ctor);
    chart.options(spec);
    chart.render();
    charts[id] = chart;
  });

  // Handler: update data only
  Shiny.addCustomMessageHandler('g2-update-data', (message) => {
    const id = message.id;
    const data = message.data;
    if (charts[id]) {
      charts[id].changeData(data);
    }
  });

  // Handler: destroy a chart
  Shiny.addCustomMessageHandler('g2-destroy', (message) => {
    const id = message.id;
    if (charts[id]) {
      charts[id].destroy();
      delete charts[id];
    }
  });
})();
