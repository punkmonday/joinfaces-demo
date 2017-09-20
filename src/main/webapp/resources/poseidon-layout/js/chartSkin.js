function skinChart() {
    this.cfg.shadow = false;
    this.cfg.title = '';
    this.cfg.seriesColors = ['#00acac', '#2f8ee5', '#efa64c', '#6c76af'];
    this.cfg.grid = {
        background: '#ffffff',
        borderColor: '#ffffff',
        gridLineColor: '#F5F5F5',
        shadow: false
    };
    this.cfg.axesDefaults = {
        borderWidth: 0.1,
        borderColor: 'bdbdbd',
        rendererOptions: {
            textColor: '#666F77'
        }
    };
    this.cfg.seriesDefaults = {
        shadow: false,
        lineWidth: 1,
        markerOptions: {
            shadow: false,
            size: 7,
            style: 'circle'
        }
    }
}

function skinBar() {
    this.cfg.shadow = false;
    this.cfg.title = '';
    this.cfg.seriesColors = ['#00acac', '#2f8ee5', '#efa64c', '#6c76af'];
    this.cfg.grid = {
        background: '#ffffff',
        borderColor: '#ffffff',
        gridLineColor: '#F5F5F5',
        shadow: false
    };
    this.cfg.axesDefaults = {
        borderWidth: 0.1,
        borderColor: 'bdbdbd',
        rendererOptions: {
            textColor: '#666F77'
        }
    };
    this.cfg.seriesDefaults = {
        shadow: false,
        lineWidth: 1,
        renderer: $.jqplot.BarRenderer,
        markerOptions: {
            shadow: false,
            size: 7,
            style: 'circle'
        }
    }
}

function skinArea() {
    this.cfg.shadow = false;
    this.cfg.title = '';
    this.cfg.seriesColors = ['#00acac', '#2f8ee5'];
    this.cfg.grid = {
        background: '#ffffff',
        borderColor: '#ffffff',
        gridLineColor: '#F5F5F5',
        shadow: false
    };
    this.cfg.axesDefaults = {
        borderWidth: 0.1,
        borderColor: 'bdbdbd',
        rendererOptions: {
            textColor: '#666F77'
        }
    };
    this.cfg.seriesDefaults = {
        shadow: false,
        lineWidth: 1,
        markerOptions: {
            shadow: false,
            size: 7,
            style: 'circle'
        }
    }
}

function skinBubble() {
    this.cfg.shadow = false;
    this.cfg.title = '';
    this.cfg.seriesColors = ['#00acac', '#2f8ee5'];
    this.cfg.grid = {
        background: '#ffffff',
        borderColor: '#ffffff',
        gridLineColor: '#F5F5F5',
        shadow: false
    };
    this.cfg.axesDefaults = {
        rendererOptions: {
            textColor: '#666F77'
        }
    };
    this.cfg.seriesDefaults = {
        shadow: false,
        lineWidth: 1,
        renderer: $.jqplot.BubbleRenderer,
        markerOptions: {
            shadow: false,
            size: 7,
            style: 'circle'
        }
    }
}

function skinZoom() {
    this.cfg.shadow = false;
    this.cfg.title = '';
    this.cfg.seriesColors = ['#00acac', '#2f8ee5'];
    this.cfg.grid = {
        background: '#ffffff',
        borderColor: '#ffffff',
        gridLineColor: '#F5F5F5',
        shadow: false
    };
    this.cfg.axesDefaults = {
        rendererOptions: {
            textColor: '#666F77'
        }
    };
    this.cfg.seriesDefaults = {
        shadow: false,
        lineWidth: 1,
        markerOptions: {
            shadow: false,
            size: 7,
            style: 'circle'
        }
    }
}

function skinPie() {
    this.cfg.shadow = false;
    this.cfg.title = '';
    this.cfg.seriesColors = ['#00acac', '#2f8ee5', '#efa64c', '#6c76af'];
    this.cfg.grid = {
        background: '#ffffff',
        borderColor: '#ffffff',
        gridLineColor: '#F5F5F5',
        shadow: false
    };
    this.cfg.axesDefaults = {
        rendererOptions: {
            textColor: '#666F77',
        }
    };
    this.cfg.seriesDefaults = {
        renderer: $.jqplot.PieRenderer,
        shadow: false,
        lineWidth: 1,
        markerOptions: {
            shadow: false,
            size: 7,
            style: 'circle'
        }
    }
}

function skinDonut() {
    this.cfg.shadow = false;
    this.cfg.title = '';
    this.cfg.seriesColors = ['#00acac', '#2f8ee5', '#efa64c', '#6c76af'];
    this.cfg.grid = {
        background: '#ffffff',
        borderColor: '#ffffff',
        gridLineColor: '#F5F5F5',
        shadow: false
    };
    this.cfg.axesDefaults = {
        rendererOptions: {
            textColor: '#666F77',
        }
    };
    this.cfg.seriesDefaults = {
        renderer: $.jqplot.DonutRenderer,
        shadow: false,
        lineWidth: 1,
        markerOptions: {
            shadow: false,
            size: 7,
            style: 'circle'
        }
    }
}

function skinBarAndLine() {
    this.cfg.shadow = false;
    this.cfg.title = '';
    this.cfg.seriesColors = ['#00acac', '#2f8ee5'];
    this.cfg.grid = {
        background: '#ffffff',
        borderColor: '#ffffff',
        gridLineColor: '#F5F5F5',
        shadow: false
    };
    this.cfg.axesDefaults = {
        borderWidth: 0.1,
        borderColor: 'bdbdbd',
        rendererOptions: {
            textColor: '#666F77'
        }
    };
    this.cfg.seriesDefaults = {
        shadow: false,
        lineWidth: 5,
        renderer: $.jqplot.BarRenderer,
        markerOptions: {
            shadow: false,
            size: 7,
            style: 'circle'
        }
    }
}

function skinMeterGauge() {
    this.cfg.title = '';
    this.cfg.seriesDefaults = {
        shadow: false,
        lineWidth: 5,
        renderer: $.jqplot.MeterGaugeRenderer,
        rendererOptions: {
            shadow: false,
            min: 100,
            max: 800,
            intervals: [200, 300, 400, 500, 600, 700, 800],
            intervalColors: ['#00acac', '#2f8ee5', '#efa64c', '#6c76af', '#f16383', '#63c9f1', '#2d353c']
        }
    }
}

function skinMultiAxis() {
    this.cfg.shadow = false;
    this.cfg.title = '';
    this.cfg.seriesColors = ['#00acac', '#2f8ee5'];
    this.cfg.grid = {
        background: '#ffffff',
        borderColor: '#ffffff',
        gridLineColor: '#F5F5F5',
        shadow: false
    };
    this.cfg.axesDefaults = {
        borderWidth: 0.1,
        borderColor: 'bdbdbd',
        rendererOptions: {
            textColor: '#666F77'
        }
    };
    this.cfg.seriesDefaults = {
        shadow: false,
        lineWidth: 1,
        renderer: $.jqplot.BarRenderer,
        markerOptions: {
            shadow: false,
            size: 7,
            style: 'circle'
        }
    }
}


