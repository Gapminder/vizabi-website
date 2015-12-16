var container = document.getElementById('start-splash-bubbles');
var container_width = container.offsetWidth;
var container_height = container.offsetHeight;

var sketch = function(s) {

    var time, theta = 0;
    var frames = 2400,
        num = 100,
        num2 = 50;
    var rs;

    s.setup = function() {
        s.createCanvas(container_width, container_height);
        s.smooth(8);
        s.noStroke();
        rs = s.random(10000);

        window.onresize = function() {
            container_width = container.offsetWidth;
            container_height = container.offsetHeight;
            s.createCanvas(container_width, container_height);
        }
    }

    s.draw = function() {
        s.randomSeed(rs);
        s.background("#58A1CE");
        time = (s.frameCount % frames) / s.float(frames);

        for (var i = 0; i < num; i++) {
            drawBubble(i);
        }
        theta += s.TWO_PI / frames;
    }

    function drawBubble(i) {
        var x = s.random(s.width);
        var y = s.random(s.height);
        var sc = s.random(1, 3);
        var rotation = s.random(-.01, 0.1);
        var m = s.map(s.sin(theta + (s.TWO_PI / num) * i), -1, 1, .5, 1);
        var sz = s.random(20, 70) * m;
        s.push();
        s.scale(sc);
        s.translate((x + s.frameCount) % s.width, y % s.height);
        s.rotate(rotation);
        s.fill('rgba(255, 255, 255, 1)');
        if (s.random(1) > .7) s.fill('rgba(55,55,55, 1)');
        if (s.random(1) > .8) s.fill('rgba(0, 0, 0, 1)');
        s.ellipse(0, -time * s.height + s.height, sz, sz);
        s.ellipse(0, -time * s.height, sz, sz);
        s.pop();
    }

};

var bubbles = new p5(sketch, 'start-splash-bubbles');

//hotfix: prevent vizabi from loading on phone - initial screen
if(window && window.outerWidth && window.outerWidth > 700) {
    var viz = Vizabi('BubbleChart', document.getElementById('embeddable-container'), {
        state: {
            time: {
                dim: 'time',
                value: '1950',
                start: '1800',
                end: '2015',
                playable: true,
                playing: true,
                loop: false,
                round: 'round',
                delay: 250,
                delayAnimations: 250,
                delayStart: 1200,
                delayEnd: 75,
                delaySet: false,
                unit: 'year',
                step: 1,
                adaptMinMaxZoom: false,
                formatInput: '%Y',
                formatOutput: '%Y',
                xLogStops: [],
                yMaxMethod: 'latest',
                record: false,
                probeX: 0,
                tailFatX: 1,
                tailCutX: 0,
                tailFade: 1,
                xScaleFactor: 1,
                xScaleShift: 0,
                xPoints: 50,
                trails: true,
                lockNonSelected: 0
            },
            entities: {
                show: {
                    geo: [
                        '*'
                    ],
                    'geo.cat': [
                        'country'
                    ]
                },
                select: [],
                highlight: [],
                opacitySelectDim: 0.3,
                opacityRegular: 1,
                needUpdate: {},
                dim: 'geo'
            },
            marker: {
                space: [
                    'entities',
                    'time'
                ],
                type: 'geometry',
                shape: 'circle',
                label: {
                    use: 'property',
                    which: 'geo.name'
                },
                axis_y: {
                    use: 'indicator',
                    which: 'u5mr',
                    min: null,
                    max: null,
                    fakeMin: null,
                    fakeMax: null,
                    scaleType: 'linear',
                    allow: {
                        scales: [
                            'linear',
                            'log'
                        ]
                    }
                },
                axis_x: {
                    use: 'indicator',
                    which: 'gdp_pc',
                    min: null,
                    max: null,
                    fakeMin: null,
                    fakeMax: null,
                    scaleType: 'log',
                    allow: {
                        scales: [
                            'linear',
                            'log'
                        ]
                    }
                },
                color: {
                    use: 'property',
                    palette: {
                        asi: '#FF5872',
                        eur: '#FFE700',
                        ame: '#7FEB00',
                        afr: '#00D5E9',
                        _default: '#ffb600'
                    },
                    which: 'geo.name',
                    scaleType: 'ordinal',
                    allow: {
                        names: [
                            '!geo.name'
                        ]
                    }
                },
                size: {
                    use: 'indicator',
                    min: 0.04,
                    max: 0.9,
                    which: 'pop',
                    scaleType: 'linear',
                    allow: {
                        scales: [
                            'linear',
                            'log'
                        ]
                    }
                }
            }
        },
        data: {
            reader: 'csv',
            path: '/preview/data/waffles/dont-panic-poverty.csv'
        }
    });

    var embeddable = document.getElementById('embeddable-container');
    var close_btn = document.getElementById('close-embeddable');
    
    embeddable.addEventListener('click', function(e) {
        addClass(document.body, 'is-product-tour');
    });

    close_btn.addEventListener('click', function(e) {
        removeClass(document.body, 'is-product-tour');
        e.preventDefault();
    });
}