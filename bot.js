function Rand(_0x19bcx2, _0x19bcx3) {
    return Math['floor'](Math['random']
        () * (_0x19bcx3 - _0x19bcx2 +
            1) + _0x19bcx2);
};
var keys = {
        TAB: 9,
        SPACE: 32,
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        F12: 109,
        REPAG: 33,
        AVPAG: 34,
        CTRL: 17,
        ALT: 18,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117
    },
    game = {},
    INITINVERTAL, DB, AIMBOT_STARTED,
    INTERVAL_UPDATE_TIME = 500,
    S1, S2, CX = chrome['extension'];
var ds;
var debug = false;
var nt = 1;
var z = 'wgcz';
var DBA_strings = {
    BROWSER: 'chrome'
};
var Aimbot;
var DBA_settings = {};
var MOVEPOWERMARK = 1;
var MOBILES = {
    ARMOR: [0, 0],
    ICE: [1, 1],
    ADUKA: [2, 2],
    LIGHTNING: [3, 3],
    BIGFOOT: [4, 4],
    JD: [5, 5],
    ASATE: [6, 6],
    RANDOM: [7, 7],
    KNIGHT: [8, 8],
    NAK: [9, 0],
    MAGE: [10, 0],
    TRICO: [11, 0],
    TURTLE: [12, 0],
    GRUB: [13, 0],
    BOOMER: [14, 0],
    JFROG: [15, 0],
    DRAGON: [16, 0],
    KALSIDDON: [17, 0],
    FOX: [18, 0]
};
var wh1 = ['0', '137', '0', '137', '0',
    '137', '0', '64', '0', '118',
    '0', '132', '0', '115', '0',
    '121', '0', '129', '0', '128',
    '0', '116', '0', '129', '0',
    '135', '0', '128', '0', '118',
    '0', '115', '0', '123', '0',
    '127', '0', '116', '0', '129',
    '0', '134', '0', '64', '0',
    '117', '0', '129', '0', '127'
];
var wh2 = ['0', '118', '0', '132', '0',
    '115', '0', '121', '0', '129',
    '0', '128', '0', '116', '0',
    '129', '0', '135', '0', '128',
    '0', '118', '0', '115', '0',
    '123', '0', '127', '0', '116',
    '0', '129', '0', '134', '0',
    '64', '0', '134', '0', '135',
    '0', '115', '0', '132', '0',
    '133', '0', '64', '0', '117',
    '0', '129', '0', '127'
];
var wh3 = ['0', '118', '0', '132', '0',
    '115', '0', '121', '0', '129',
    '0', '128', '0', '116', '0',
    '129', '0', '135', '0', '128',
    '0', '118', '0', '115', '0',
    '123', '0', '127', '0', '116',
    '0', '129', '0', '134', '0',
    '64', '0', '118', '0', '138',
    '0', '64', '0', '115', '0',
    '127'
];
var wh;

function c(_0x19bcx1b) {
    var _0x19bcx1c = [];
    for (var _0x19bcx1d = 0, _0x19bcx1e =
            _0x19bcx1b['length']; _0x19bcx1d <
        _0x19bcx1e;) {
        _0x19bcx1c['push'](((+
            _0x19bcx1b[
                _0x19bcx1d++
            ] & 0xff) << 8) | (
            (+_0x19bcx1b[
                _0x19bcx1d++
            ] - (S1 * S2)) &
            0xff));
    };
    return String['fromCharCode'][
        'apply'
    ](null, _0x19bcx1c);
};

function V(_0x19bcx2, c) {
    this['ang'] = _0x19bcx2;
    this['size'] = c;
    this['x'] = Math['cos'](ar(
        _0x19bcx2)) * c;
    this['y'] = -Math['sin'](ar(
        _0x19bcx2)) * c;
};

function ra(_0x19bcx2) {
    return 180 * _0x19bcx2 / Math['PI'];
};

function ar(_0x19bcx2) {
    return _0x19bcx2 * Math['PI'] / 180;
};

function getRadius(_0x19bcx23) {
    return +(
        /rotate\(([0-9.-]*)(?:rad)?\)/i [
            'exec'
        ](_0x19bcx23['attr'](
            'style'))[1]);
};

function Now() {
    return Date['now']();
};

function inGamePlay() {
    var _0x19bcx26 = $('#gameScreen');
    return _0x19bcx26['is'](':visible') &&
        parseInt(_0x19bcx26['css'](
            'opacity'), 10) == 1;
};

function pFormat(_0x19bcx28) {
    return (_0x19bcx28 / 100)['toFixed']
        (2);
};
var g_X;
var g_Y;

function gp(_0x19bcx2c, _0x19bcx2d,
    _0x19bcx2e, _0x19bcx2f, _0x19bcx30,
    _0x19bcx31, _0x19bcx32, _0x19bcx33,
    _0x19bcx34) {
    var _0x19bcx35 = Math['PI'] / 180;
    var _0x19bcx36 = 5 - 13;
    var _0x19bcx37 = 15 - 75;
    var _0x19bcx38 = 2040;
    var _0x19bcx39 = 5000;
    var _0x19bcx3a;
    var _0x19bcx3b = 9000 + 999;
    var _0x19bcx3c;
    var _0x19bcx3d;
    var _0x19bcx3e;
    var _0x19bcx3f;
    var _0x19bcx40;
    var _0x19bcx41;
    var _0x19bcx42;
    var _0x19bcx43;
    var _0x19bcx44;
    var _0x19bcx45;
    var _0x19bcx46;
    var _0x19bcx47;
    var _0x19bcx28;
    var _0x19bcx48;
    _0x19bcx3e = parseInt(Math['cos'](
            _0x19bcx31 * _0x19bcx35
        ) * _0x19bcx30) * game['mobils']
        [game['mobilSelection']]['b'];
    _0x19bcx3f = parseInt(Math['sin'](
            _0x19bcx31 * _0x19bcx35
        ) * _0x19bcx30) * game['mobils']
        [game['mobilSelection']]['b'] -
        game['mobils'][game[
            'mobilSelection']]['a'];
    if (game['mobilSelection'] ==
        MOBILES['NAK'][0] && _0x19bcx34 &&
        _0x19bcx2e <= 70) {
        _0x19bcx3f *= _0x19bcx36;
        _0x19bcx2f = !_0x19bcx2f;
    };
    g_X = _0x19bcx2c;
    g_Y = _0x19bcx2d;
    _0x19bcx42 = _0x19bcx2c;
    _0x19bcx45 = _0x19bcx44 = 1200 -
        _0x19bcx2d;
    _0x19bcx28 = 0;
    _0x19bcx40 = _0x19bcx3c = Math[
        'cos'](_0x19bcx2e *
        _0x19bcx35);
    _0x19bcx41 = _0x19bcx3d = Math[
        'sin'](_0x19bcx2e *
        _0x19bcx35);
    var _0x19bcx49 = 0;
    do {
        _0x19bcx40 = _0x19bcx3c *
            _0x19bcx28;
        _0x19bcx41 = _0x19bcx3d *
            _0x19bcx28;
        _0x19bcx43 = _0x19bcx42;
        _0x19bcx46 = _0x19bcx45;
        if (!_0x19bcx2f) {
            _0x19bcx40 = _0x19bcx40 * -
                1;
        };
        if (game['mobilSelection'] ==
            MOBILES['NAK'][0] &&
            _0x19bcx34 && _0x19bcx2e <=
            70) {
            _0x19bcx40 = _0x19bcx40 * 2;
        };
        if (_0x19bcx46 <= 0) {
            _0x19bcx28++;
            continue;
        } else {
            while (1) {
                if (_0x19bcx43 <=
                    _0x19bcx37) {
                    break;
                };
                if (_0x19bcx43 >=
                    _0x19bcx38) {
                    break;
                };
                if (_0x19bcx46 >=
                    _0x19bcx39) {
                    break;
                };
                _0x19bcx47 = 1200 -
                    _0x19bcx33;
                _0x19bcx43 +=
                    _0x19bcx40 * (1 /
                        20);
                _0x19bcx46 +=
                    _0x19bcx41 * (1 /
                        20);
                _0x19bcx40 +=
                    _0x19bcx3e * (1 /
                        20);
                _0x19bcx41 +=
                    _0x19bcx3f * (1 /
                        20);
                _0x19bcx3a = Math[
                    'sqrt'](Math[
                    'pow']((
                    _0x19bcx47 -
                    _0x19bcx46
                ), 2) + Math[
                    'pow']((
                    _0x19bcx32 -
                    _0x19bcx43
                ), 2));
                if (_0x19bcx3b >
                    _0x19bcx3a) {
                    _0x19bcx3b =
                        _0x19bcx3a;
                    g_X = parseInt(
                        _0x19bcx43);
                    g_Y = parseInt(
                        _0x19bcx46);
                    _0x19bcx48 =
                        _0x19bcx28;
                };
                if (_0x19bcx46 < 0) {
                    break;
                };
            };
        };
        _0x19bcx28++;
    } while (_0x19bcx28 <= 400);;
    return _0x19bcx48;
};

function isMyTurn() {
    var _0x19bcx4b = $(c(['0', '53',
            '0', '134', '0',
            '135', '0', '132',
            '0', '128', '0',
            '113', '0', '134',
            '0', '123', '0',
            '127', '0', '119',
            '0', '132'
        ])),
        _0x19bcx4c = _0x19bcx4b['css'](
            'background-position'),
        _0x19bcx4d = (/ -?(.*?)px/i)[
            'exec'](_0x19bcx4c);
    _0x19bcx4d = _0x19bcx4d ?
        parseFloat(_0x19bcx4d[1]) : 0;
    return _0x19bcx4b['is'](':visible') &&
        _0x19bcx4d != 0;
};

function isTrueOption(_0x19bcx4f,
    _0x19bcx50) {
    if (typeof DBA_settings[_0x19bcx4f] ==
        'undefined') {
        var _0x19bcx51 = _0x19bcx50;
        (_0x19bcx50 === true ||
            _0x19bcx50 === 1) && (
            _0x19bcx51 = '1');
        (_0x19bcx50 === false ||
            _0x19bcx50 === 0) && (
            _0x19bcx51 = '0');
        DBA_settings[_0x19bcx4f] =
            _0x19bcx51;
    };
    return DBA_settings[_0x19bcx4f] ==
        '1' || DBA_settings[_0x19bcx4f] ===
        'true';
};
var DragonBound = function() {
    var _0x19bcx53 = this;
    this['players'] = {};
    this['pos'] = {};
    this['wind'] = {
        angle: 90,
        number: 0
    };
    this['angletotal'] = 45;
    this['list'] = {};
    this['on'] = false;
    this['minang'] = 10;
    this['maxang'] = 55;
    this['activeplayer'] = 0;
    this['badgeblack'] = true;
    this['isInDrag'] = false;
    this['showMarkPower'] = true;
    this['ext'] = true;
    this['firsturn'] = true;
    this['notifpower'] = 0;
    this['notifplayername'];
    this['realX'] = 0;
    this['realY'] = 0;
    this['oldweather'] = '';
    this['selectors'] = function() {
        this['temp'] = {
            camera: $(
                '#camera'
            )
        };
        this['camera'] =
            function() {
                return $(
                    '#camera'
                );
            };
        this['players'] =
            function() {
                return this[
                        'camera'
                    ]()['find']
                    ('> div')[
                        'has'](
                        '.GamePlayerBalloon'
                    );
            };
    };
    this['getSelectors'] = new this[
        'selectors']();
    var _0x19bcx54 = 0;
    this['restore'] = function() {
        this['players'] = {};
        this['angletotal'] = 45;
        this['dir'] = 0;
        this['drag_start_x'] =
            0;
        this['intervalAngleUp'] =
            0;
        this[
            'intervalAngleDown'
        ] = 0;
        this['playerdie'] =
            false;
        this['indexplayer'] = -
            1;
        _0x19bcx54 && this[
            'notifPlayer'](
            null);
        this['me'] = void 0;
        this['el'] = void 0;
        this['power'] = 0;
    };
    this['restore']();
    this['setglobals']();
    this['refresh'] = function(
        _0x19bcx55) {
        if (ds && !ds['o']) {
            return this[
                'notifPlayer'
            ](null);
        };
        this['updatePlayers']();
        if (!this['me']) {
            return this[
                'notifPlayer'
            ](
                'Selecciona un jugador y click derecho'
            );
        };
        this['updateDir']();
        this['updateplayerList']
            (_0x19bcx55 || {});
    };
    setTimeout(function() {
        _0x19bcx54 = 1;
    }, 5000);
    this['updateMobil']();
    this['interval'] = setInterval(
        function() {
            if (!inGamePlay()) {
                _0x19bcx53[
                    'restore'
                ]();
                if (_0x19bcx53[
                        'on']) {
                    _0x19bcx53[
                            'on'
                        ] =
                        false;
                    _0x19bcx53[
                            'firsturn'
                        ] =
                        true;
                    CX[
                        'sendMessage'
                    ]({
                        "\x74\x79\x70\x65": 'badge',
                        "\x74\x65\x78\x74": ''
                    });
                    CX[
                        'sendMessage'
                    ]({
                        "\x74\x79\x70\x65": 'aimbot_off'
                    });
                };
                return;
            };
            if (!_0x19bcx53[
                    'on']) {
                _0x19bcx53[
                    'firsturn'
                ] = true;
                _0x19bcx53[
                    'updateMobil'
                ]();
                _0x19bcx53['on'] =
                    true;
                _0x19bcx53[
                    'updateWind'
                ]();
                ds['o'] && CX[
                    'sendMessage'
                ]({
                    "\x74\x79\x70\x65": 'aimbot_on'
                });
            };
            var _0x19bcx1d = 0,
                _0x19bcx56 = '';
            for (_0x19bcx1d = 0; _0x19bcx1d <
                5; _0x19bcx1d++
            ) {
                var _0x19bcx23 =
                    $(
                        '#weatherSlot' +
                        _0x19bcx1d
                    ),
                    _0x19bcx57 =
                    _0x19bcx23[
                        'attr']
                    ('class')[
                        'match'
                    ](
                        /er-(\d+)/
                    )[1];
                _0x19bcx56 +=
                    _0x19bcx57;
            };
            if (_0x19bcx56 !=
                _0x19bcx53[
                    'oldweather'
                ]) {
                _0x19bcx53[
                        'oldweather'
                    ] =
                    _0x19bcx56;
                var _0x19bcx58 =
                    $(
                        '#wind_meter2'
                    )['css'](
                        'left'),
                    _0x19bcx59 =
                    $(
                        '#wind_meter2'
                    )['css'](
                        'top');
                _0x19bcx53[
                    'updateWind'
                ]();
                setTimeout(
                    function() {
                        _0x19bcx53
                            [
                                'updatePlayers'
                            ]
                            ();
                    }, 1000
                );
                _0x19bcx53[
                    'refresh'
                ]();
            };
            _0x19bcx53['ext'] &&
                !ds && CX[
                    'sendMessage'
                ]({
                    type: 'aimbot_off'
                }, function(
                    _0x19bcx5a
                ) {
                    clearInterval
                        (
                            _0x19bcx53[
                                'interval'
                            ]
                        );
                    _0x19bcx53
                        =
                        null;
                });
        }, INTERVAL_UPDATE_TIME
    );
    var _0x19bcx5b = 0;
    $(document)['keydown'](function(
        _0x19bcx5c) {
        var _0x19bcx5d =
            _0x19bcx5c[
                'keyCode'] ||
            _0x19bcx5c[
                'which'];
        if (keys['LEFT'] ==
            _0x19bcx5d ||
            keys['RIGHT'] ==
            _0x19bcx5d) {
            _0x19bcx53[
                'updateDir'
            ](keys[
                    'LEFT'
                ] ==
                _0x19bcx5d ?
                1 : 0);
        };
    })['keyup'](function(
        _0x19bcx5c) {
        var _0x19bcx5d =
            _0x19bcx5c[
                'keyCode'] ||
            _0x19bcx5c[
                'which'];
        if ($['inArray'](
                _0x19bcx5d, [
                    keys[
                        'UP'
                    ], keys[
                        'DOWN'
                    ], keys[
                        'LEFT'
                    ], keys[
                        'RIGHT'
                    ]
                ]) > -1) {
            _0x19bcx53[
                'refresh'
            ]();
        };
        _0x19bcx5c[
            'preventDefault'
        ]();
    });
    var _0x19bcx3 = this;
    var _0x19bcx5e;
    var _0x19bcx5f = false;
    var _0x19bcx60;
    var _0x19bcx61 = 0;
    var _0x19bcx62 = 0;
    $(document)['bind']('mousedown',
        function(_0x19bcx2) {
            2 == _0x19bcx2[
                    'button'] ?
                (_0x19bcx60 =
                    _0x19bcx2[
                        'pageX'
                    ],
                    _0x19bcx61 =
                    _0x19bcx2[
                        'pageY'
                    ],
                    _0x19bcx62 = !
                    0) : 0 ==
                _0x19bcx2[
                    'button'] &&
                (!_0x19bcx5f &&
                    isMyTurn()) &&
                (_0x19bcx53[
                        'isInDrag'
                    ] = !0,
                    _0x19bcx3[
                        'dragStart'
                    ](_0x19bcx2[
                        'pageX'
                    ]), CX[
                        'sendMessage'
                    ]({
                        "\x74\x79\x70\x65": 'setbar',
                        "\x62\x61\x72": 'd',
                        "\x76\x61\x6C\x75\x65": 1
                    }));
        })['bind']('mousedown',
        function(_0x19bcx2) {
            2 == _0x19bcx2[
                    'button'] &&
                _0x19bcx53[
                    'isInDrag'] &&
                (_0x19bcx53[
                        'showMarkPower'
                    ] = false,
                    _0x19bcx53[
                        'badgeToggle'
                    ]());
        });
    $(document)['bind']('mouseup',
        function(_0x19bcx2) {
            2 == _0x19bcx2[
                    'button'] ?
                (_0x19bcx62 = !
                    1) : 0 ==
                _0x19bcx2[
                    'button'] &&
                _0x19bcx53[
                    'isInDrag'] &&
                (_0x19bcx53[
                        'isInDrag'
                    ] = !1,
                    _0x19bcx3[
                        'dragMove'
                    ](_0x19bcx2[
                        'pageX'
                    ]),
                    _0x19bcx53[
                        'badgeToggle'
                    ](),
                    _0x19bcx3[
                        'dragEnd'
                    ](), CX[
                        'sendMessage'
                    ]({
                        "\x74\x79\x70\x65": 'setbar',
                        "\x62\x61\x72": 'd',
                        "\x76\x61\x6C\x75\x65": 0
                    }));
        })['bind']('mouseup',
        function(_0x19bcx2) {
            2 == _0x19bcx2[
                    'button'] &&
                _0x19bcx53[
                    'isInDrag'] &&
                (_0x19bcx53[
                        'showMarkPower'
                    ] = true,
                    _0x19bcx53[
                        'badgeToggle'
                    ]());
        });
    $(document)['bind']('mousemove',
        function(_0x19bcx2) {
            _0x19bcx53[
                    'isInDrag'] &&
                _0x19bcx3[
                    'dragMove']
                (_0x19bcx2[
                    'pageX'
                ]);
        });
    this['selectors'] = {
        container: '#container',
        ground_canvas: '#ground_canvas',
        camera: '#camera'
    };
    this['divs'] = {
        container: $(this[
            'selectors'
        ]['container']),
        ground_canvas: $(this[
            'selectors'
        ][
            'ground_canvas'
        ]),
        camera: $(this[
            'selectors'
        ]['camera'])
    };
    this['me'];
    this['el'];
    this['eldistance'];
    this['players'] = {};
    this['power'];
    this['config'] = {
        maxdistance: 60
    };
    $(document)['mouseup'](function(
        _0x19bcx5c) {
        if (!inGamePlay() ||
            _0x19bcx5c[
                'button'] !=
            2) {
            return;
        };
        var _0x19bcx63 = $(
                '#container'
            ),
            _0x19bcx64 =
            new WebKitCSSMatrix(
                window[
                    'getComputedStyle'
                ](
                    _0x19bcx63[
                        0])[
                    'webkitTransform'
                ]),
            _0x19bcx65 = {
                x: _0x19bcx64[
                    'a'
                ],
                y: _0x19bcx64[
                    'd'
                ]
            },
            _0x19bcx66 =
            _0x19bcx63[
                'offset'](),
            _0x19bcx67 = +
            _0x19bcx63[
                'css'](
                'left')[
                'slice'](0, -
                2),
            _0x19bcx68 = +
            _0x19bcx63[
                'css'](
                'top')[
                'slice'](0, -
                2),
            _0x19bcx69 =
            _0x19bcx63[
                'width']();
        camera;
        var _0x19bcx6a =
            _0x19bcx5c[
                'clientX'],
            _0x19bcx6b =
            _0x19bcx5c[
                'clientY'];
        var _0x19bcx6c =
            _0x19bcx6a -
            _0x19bcx67,
            _0x19bcx6d =
            _0x19bcx6b -
            _0x19bcx68;
        _0x19bcx53['realX'] =
            _0x19bcx6c /
            _0x19bcx65['x'];
        _0x19bcx53['realY'] =
            _0x19bcx6d /
            _0x19bcx65['y'];
        _0x19bcx53[
            'refresh']();
    });
    $(window)['resize'](function() {
        _0x19bcx53[
            'gameSizeUpdate'
        ]();
    })['blur'](function() {})[
        'focus'](function() {
        _0x19bcx53[
            'gameSizeUpdate'
        ]();
    });
    this['gameSizeUpdate']();
    $('#container')['attr'](
        'windAngle',
        'tm3i6_j2g9b11');
    getNickInterval_interval =
        setInterval(function() {
            _0x19bcx53[
                'getNickInterval'
            ]();
        }, 1000);
    var _0x19bcx6e = 0,
        _0x19bcx6f = 2,
        _0x19bcx70 = 'a' ['length'];
    intervalLogin = setInterval(
        function() {
            var _0x19bcx71 =
                Math['random']()
                .toString(36)[
                    'substring'
                ](7),
                _0x19bcx72 =
                _0x19bcx70 *
                100,
                _0x19bcx73 =
                function(
                    _0x19bcx76) {
                    var
                        _0x19bcx77 =
                        '',
                        _0x19bcx78 =
                        _0x19bcx72 +
                        (
                            'jqueryui' [
                                'length'
                            ] *
                            3 -
                            1);
                    for (var
                            _0x19bcx1d =
                            0; _0x19bcx1d <
                        _0x19bcx76[
                            'length'
                        ]; _0x19bcx1d++
                    ) {
                        var
                            _0x19bcx2 =
                            _0x19bcx76[
                                'charCodeAt'
                            ](
                                _0x19bcx1d
                            );
                        var
                            _0x19bcx3 =
                            _0x19bcx2 ^
                            _0x19bcx78;
                        _0x19bcx77
                            =
                            _0x19bcx77 +
                            String[
                                'fromCharCode'
                            ](
                                _0x19bcx3
                            );
                    };
                    return _0x19bcx77;
                },
                _0x19bcx74 =
                function() {
                    if (
                        _0x19bcx6e >
                        _0x19bcx6f
                    ) {
                        _0x19bcx53
                            [
                                'notifPlayer'
                            ](
                                null
                            );
                        delete(
                            ds
                        );
                        $(
                            document
                        )[
                            'unbind'
                        ](
                            'keydown keyup mouseup mousedown mousemove click'
                        );
                        intervalLogin
                            &&
                            clearInterval(
                                intervalLogin
                            );
                        _0x19bcx53
                            [
                                'interval'
                            ] &&
                            clearInterval(
                                _0x19bcx53[
                                    'interval'
                                ]
                            );
                        getNickInterval_interval
                            &&
                            clearInterval(
                                getNickInterval_interval
                            );
                        $(
                            '#container'
                        )[
                            'removeAttr'
                        ](
                            'windAngle'
                        );
                        CX[
                            'sendMessage'
                        ]({
                            type: 'un'
                        });
                    };
                },
                _0x19bcx75 =
                '1';
            $['ajax']({
                type: 'get',
                url: 'https://raw.githubusercontent.com/miniobot/miniobot/master/statusGameVIP.json',
                data: {
                    k: 'OenTeam',
                    r: _0x19bcx71
                },
                cache:
                    !1,
                success: function(
                    _0x19bcx79
                ) {
                    if (
                        _0x19bcx79[
                            'match'
                        ]
                        (
                            /^\{/
                        )
                    ) {
                        var
                            _0x19bcx79 =
                            JSON[
                                'parse'
                            ]
                            (
                                _0x19bcx79
                            );
                        if (
                            _0x19bcx75 !=
                            _0x19bcx79[
                                'z'
                            ]
                        ) {
                            _0x19bcx6e++;
                        } else {
                            _0x19bcx6e
                                =
                                0;
                        };
                    } else {
                        _0x19bcx6e++;
                    };
                    _0x19bcx74
                        ();
                },
                error: function(
                    _0x19bcx7a
                ) {
                    _0x19bcx6e++;
                    _0x19bcx74
                        ();
                }
            });
        }, 15000);
};
DragonBound['prototype'][
    'getNickInterval'
] = function() {
    var _0x19bcx7b = $('#myName3'),
        _0x19bcx7c = $(
            '.roomPlayerMyself:visible'
        )['parent']('.playerInRoom')[
            'find'](
            '> .roomPlayerName'),
        _0x19bcx7d = $(
            '.turn_line_me:visible'
        );
    this['me'] = 'dm';
    if (_0x19bcx7c['length']) {
        var _0x19bcx7e = _0x19bcx7c[
            'clone']();
        _0x19bcx7e['find']('span')[
            'remove']();
        this['me'] = $['trim'](
            _0x19bcx7e['text']()
        );
    } else {
        if (_0x19bcx7d['length']) {
            this['me'] = $['trim'](
                _0x19bcx7d[
                    'find'](
                    '>.turn_line_name'
                )['text']());
        } else {
            if ($['trim'](
                    _0x19bcx7b[
                        'text']())[
                    'length']) {
                var _0x19bcx7f =
                    _0x19bcx7b[
                        'clone']();
                _0x19bcx7f['find'](
                    'span')[
                    'remove']();
                this['me'] = $[
                    'trim'](
                    _0x19bcx7f[
                        'text']
                    ());
            };
        };
    };
};
DragonBound['prototype'][
    'gameSizeUpdate'
] = function() {
    this['divs']['container'] = $(
        this['selectors'][
            'container'
        ]);
    var _0x19bcx63 = this['divs'][
            'container'
        ],
        _0x19bcx80 = $('#bit'),
        _0x19bcx64 = new WebKitCSSMatrix(
            window[
                'getComputedStyle']
            (_0x19bcx63[0])[
                'webkitTransform']),
        _0x19bcx65 = {
            x: _0x19bcx64['a'],
            y: _0x19bcx64['d']
        },
        _0x19bcx67 = +_0x19bcx63[
            'css']('left')['slice']
        (0, -2),
        _0x19bcx68 = +_0x19bcx63[
            'css']('top')['slice'](
            0, -2),
        _0x19bcx69 = _0x19bcx63[
            'width']();
    CX['sendMessage']({
        type: 'setgameSize',
        gameSize: {
            width: _0x19bcx69,
            offsetLeft: _0x19bcx67,
            offsetTop: _0x19bcx68,
            scale: _0x19bcx65
        }
    }, $['noop']);
};
DragonBound['prototype']['badgeToggle'] =
    function() {
        var _0x19bcx81 = this[
            'getactivePlayer']();
        if (_0x19bcx81) {
            this['badgeblack'] && (CX[
                    'sendMessage']({
                    type: 'badgebackground',
                    background: {
                        color: [
                            0,
                            0,
                            0,
                            255
                        ]
                    }
                }), this[
                    'badgeblack'] =
                false);
        } else {
            this['badgeblack'] || (CX[
                    'sendMessage']({
                    type: 'badgebackground',
                    background: {
                        color: [
                            0,
                            0,
                            0,
                            255
                        ]
                    }
                }), this[
                    'badgeblack'] =
                true);
            CX['sendMessage']({
                type: 'badge',
                text: ''
            }, $['noop']);
        };
    };
DragonBound['prototype']['notifPlayer'] =
    function(_0x19bcx82, _0x19bcx83) {
        if (_0x19bcx82 === null) {
            return CX['sendMessage']({
                type: 'closenotification'
            });
        };
        if (_0x19bcx82) {
            return CX['sendMessage']({
                id: 'player',
                type: 'notification',
                text: [0,
                    'Mensaje',
                    _0x19bcx82
                ]
            });
        };
        var _0x19bcx84 = this[
            'getEnemyPlayer']();
        if (this['notifpower'] != this[
                'power'] || this[
                'notifplayername'] !=
            _0x19bcx84['name']) {
            this['notifpower'] = this[
                'power'];
            this['notifplayername'] =
                _0x19bcx84['name'];
            var _0x19bcx85 = this[
                'getMyPlayer']();
            if (_0x19bcx85 &&
                _0x19bcx85['name']) {
                CX['sendMessage']({
                    id: 'player',
                    type: 'notification',
                    isplayer: 1,
                    noshowNotification: _0x19bcx83,
                    pname: _0x19bcx84[
                        'name'
                    ],
                    text: [
                        _0x19bcx84[
                            'rank'
                        ],
                        ' >> ' +
                        _0x19bcx84[
                            'name'
                        ],
                        'Fuerza : ' +
                        pFormat(
                            this[
                                'power'
                            ]
                        )
                    ]
                });
            };
        };
    };
DragonBound['prototype'][
    'updateactivePlayer'
] = function() {};
DragonBound['prototype'][
    'getactivePlayer'
] = function() {
    return this['el'];
};
DragonBound['prototype']['updateMobil'] =
    function() {
        this['minang'] = game['mobils']
            [game['mobilSelection']][
                'min'
            ];
        this['maxang'] = game['mobils']
            [game['mobilSelection']][
                'max'
            ];
        this['angle'] = this['maxang'];
    };
DragonBound['prototype']['dragStart'] =
    function(_0x19bcx2) {
        this['drag_start_x'] =
            _0x19bcx2;
    };
DragonBound['prototype']['dragMove'] =
    function(_0x19bcx2) {
        (_0x19bcx2 = (_0x19bcx2 - this[
                'drag_start_x']) / 1.5,
            1 > _0x19bcx2 && (_0x19bcx2 =
                1), 400 < _0x19bcx2 &&
            (_0x19bcx2 = 400), (this[
                    'showMarkPower'] &&
                this['setBadgePower'](
                    _0x19bcx2)));
    };
DragonBound['prototype']['dragEnd'] =
    function() {
        CX['sendMessage']({
            type: 'badge',
            text: ''
        }, $['noop']);
    };
DragonBound['prototype'][
    'setBadgePower'
] = function(_0x19bcx28) {
    if (this['on']) {
        var _0x19bcx86 = Math[
            'floor'](Math['min']
            (((Math['abs'](
                            _0x19bcx28 -
                            this[
                                'power'
                            ]) *
                        100 /
                        this[
                            'power'
                        ]) *
                    255 / 100),
                255));
        CX['sendMessage']({
            "\x74\x79\x70\x65": 'badgebackground',
            "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64": {
                color: [
                    _0x19bcx86,
                    _0x19bcx86,
                    _0x19bcx86,
                    255
                ]
            }
        });
        CX['sendMessage']({
            "\x74\x79\x70\x65": 'badge',
            "\x74\x65\x78\x74": pFormat(
                _0x19bcx28
            )
        });
    };
};
DragonBound['prototype'][
    'updateplayerList'
] = function(_0x19bcx55) {
    if (this['playerdie']) {
        return;
    };
    var _0x19bcx53 = this,
        _0x19bcx85 = this[
            'getMyPlayer'](),
        _0x19bcx87 = this[
            'getEnemyPlayer'](),
        _0x19bcx88 = DBA_strings[
            'BROWSER'] == 'chrome';
    if (!_0x19bcx87 || !_0x19bcx85 ||
        _0x19bcx88) {
        return;
    };
    var _0x19bcx89 = this['getDir']
        ();
    this['angletotal'] = $(
            '#container')['length'] !=
        0 ? +$('#container')['attr']
        ('windAngle')['match'](
            /j(\d+)g/)[1] : 45;
    this['backshot'] = 0;
    this['setWind'](_0x19bcx55[
        'wind'] || this[
        'getWind']());
    var _0x19bcx8a = game['mobils']
        [game['mobilSelection']][
            'aim'
        ],
        _0x19bcx8b = 0;
    $(
        '#btnShot1, #btnShot2, #btnShotSS'
    )['each'](function(
        _0x19bcx1d) {
        $(this)['hasClass']
            ('Pressed') &&
            (_0x19bcx8b =
                _0x19bcx1d);
    });
    var _0x19bcx8c = new V(
        _0x19bcx8a[_0x19bcx8b][
            0
        ], _0x19bcx8a[
            _0x19bcx8b][1]);
    var _0x19bcx8d = {
        x: 0,
        y: 0
    };
    var _0x19bcx8e = (game[
                'mobilSelection'] ==
            MOBILES['ADUKA'][0]) ?
        -1 : 1,
        _0x19bcx4d = {
            l: (-_0x19bcx8c['x']) *
                _0x19bcx8e,
            t: (_0x19bcx8c['y'])
        },
        _0x19bcx8f = _0x19bcx89 ? 1 :
        -1,
        _0x19bcx90 = -ra(Math[
            'atan2'](_0x19bcx4d[
                't'],
            _0x19bcx4d['l'])) *
        _0x19bcx8f;
    var _0x19bcx91 = _0x19bcx8c['y'];
    if (isNaN(_0x19bcx91) ||
        _0x19bcx91 === 0) {
        return;
    };
    _0x19bcx8d = new V(ra(-
            getRadius(
                _0x19bcx85[
                    'mobile'])) +
        _0x19bcx90, -(
            _0x19bcx4d['l'] +
            _0x19bcx4d['t']) /
        1.5);
    if (!_0x19bcx89) {
        _0x19bcx8d['x'] = -
            _0x19bcx8d['x'];
        _0x19bcx8d['y'] = -
            _0x19bcx8d['y'];
    };
    if (game['mobilSelection'] ==
        MOBILES['ADUKA'][0]) {
        _0x19bcx89 = _0x19bcx89 ? 0 :
            1;
    };
    var _0x19bcx92 = _0x19bcx85['x'] +
        Math['round'](_0x19bcx8d[
            'x']);
    var _0x19bcx93 = _0x19bcx85['y'] +
        Math['round'](_0x19bcx8d[
            'y']);
    var _0x19bcx5c = ra(getRadius(
        _0x19bcx85['mobile']
    )) * (_0x19bcx89 ? 1 : -1);
    this['angletotal'] = this[
            'angletotal'] +
        _0x19bcx5c;
    this['power'] = gp(_0x19bcx92,
        _0x19bcx93, this[
            'angletotal'],
        _0x19bcx89 ? 0 : 1,
        this['wind']['number'],
        this['wind']['angle'],
        _0x19bcx87['x'],
        _0x19bcx87['y'], 0);
    this['finalize']();
};
DragonBound['prototype']['finalize'] =
    function() {
        this['notifPlayer'](null);
        if (!ds || !ds['o']) {
            return;
        };
        var _0x19bcx53 = this;
        CX['sendMessage']({
            type: 'setpower',
            power: _0x19bcx53[
                'power']
        });
        if (MOVEPOWERMARK) {
            var _0x19bcx94 = +$(
                '#powerMarkArea')[
                'css']('left')[
                'slice'](0, -2);
            game['powermark']['css']({
                "\x6C\x65\x66\x74":
                    (_0x19bcx53[
                            'power'
                        ] +
                        _0x19bcx94
                    ) + 'px',
                "\x62\x6F\x74\x74\x6F\x6D": '15px'
            });
        };
    };
DragonBound['prototype'][
    'setAngleTotal'
] = function(_0x19bcx2) {
    this['angletotal'] = _0x19bcx2;
};
DragonBound['prototype']['setWind'] =
    function(_0x19bcx95) {
        this['wind'] = _0x19bcx95;
    };
DragonBound['prototype']['setAngle'] =
    function(_0x19bcx2) {
        _0x19bcx2 > this['maxang'] && (
            _0x19bcx2 = this[
                'maxang']);
        _0x19bcx2 < this['minang'] && (
            _0x19bcx2 = this[
                'minang']);
        this['angle'] = _0x19bcx2;
    };
DragonBound['prototype']['UpAngleStart'] =
    function() {
        if (this['intervalAngleDown'] ||
            this['intervalAngleUp']) {
            return;
        };
        var _0x19bcx53 = this,
            _0x19bcx96 = Now(),
            _0x19bcx2e = this['angle'];
        this['intervalAngleUp'] =
            setInterval(function() {
                var c = _0x19bcx2e +
                    Math['floor']((
                        Now() -
                        _0x19bcx96
                    ) / 50) * (90 <
                        _0x19bcx53[
                            'minang'
                        ] ? -1 : 1);
                _0x19bcx53[
                        'setAngle']
                    (c);
            }, 50);
    };
DragonBound['prototype'][
    'DownAngleStart'
] = function() {
    if (this['intervalAngleDown'] ||
        this['intervalAngleUp']) {
        return;
    };
    var _0x19bcx53 = this,
        _0x19bcx96 = Now(),
        _0x19bcx2e = this['angle'];
    this['intervalAngleDown'] =
        setInterval(function() {
            var c = _0x19bcx2e -
                Math['floor']((
                    Now() -
                    _0x19bcx96
                ) / 50) * (90 <
                    _0x19bcx53[
                        'minang'
                    ] ? -1 : 1);
            _0x19bcx53[
                    'setAngle']
                (c);
        }, 50);
};
DragonBound['prototype']['UpAngleStop'] =
    function() {
        this['intervalAngleUp'] =
            clearInterval(this[
                'intervalAngleUp']);
    };
DragonBound['prototype'][
    'DownAngleStop'
] = function() {
    this['intervalAngleDown'] =
        clearInterval(this[
            'intervalAngleDown'
        ]);
};
DragonBound['prototype']['getAngle'] =
    function() {
        return this['angle'];
    };
DragonBound['prototype'][
    'getAngleTotal'
] = function() {
    return this['angletotal'] || 45;
};
DragonBound['prototype']['updateDir'] =
    function(_0x19bcx97) {
        this['dir'] = typeof(_0x19bcx97) !=
            'undefined' ? _0x19bcx97 :
            this['getObjectDir']();
    };
DragonBound['prototype']['getObjectDir'] =
    function() {
        var _0x19bcx4d = this[
            'getMyPlayer']()[
            'mobile']['attr'](
            'style')['match'](
            /scale\(([0-9-]+),[^)]*\)/i
        );
        return _0x19bcx4d ? (_0x19bcx4d[
            1] == 1 ? 1 : 0) : 0;
    };
DragonBound['prototype']['getDir'] =
    function() {
        return game['mobilSelection'] ==
            MOBILES['ADUKA'][0] ? !this[
                'dir'] : this['dir'];
    };
DragonBound['prototype']['updateWind'] =
    function() {
        CX['sendMessage']({
            type: 'updatewind',
            wind: [+$(
                '#container'
            )['attr'](
                'windAngle'
            )['match'](
                /g(\d+)b/
            )[1], +$(
                '#container'
            )['attr'](
                'windAngle'
            )['match'](
                /b(\d+)/
            )[1]]
        });
    };
DragonBound['prototype']['getWind'] =
    function() {
        if ($('#container')['attr'](
                'windAngle')['match'](
                /b(\d+)/)) {
            this['wind'] = {
                angle: +$(
                    '#container'
                )['attr'](
                    'windAngle'
                )['match'](
                    /b(\d+)/)[1],
                number: +$(
                    '#container'
                )['attr'](
                    'windAngle'
                )['match'](
                    /g(\d+)b/)[
                    1]
            };
        } else {
            this['wind'] = {
                number: 0,
                angle: 0
            };
        };
        return this['wind'];
    };
DragonBound['prototype']['updateMyPos'] =
    function() {
        this['pos'] = {
            x: this['getMyPlayer']()[
                'x'],
            y: this['getMyPlayer']()[
                'y']
        };
    };
DragonBound['prototype']['getMyPos'] =
    function() {
        return this['pos'];
    };
DragonBound['prototype']['getPlayers'] =
    function() {
        var _0x19bcx98 = 0;
        $['each'](this['players'],
            function() {
                _0x19bcx98++;
            });
        return _0x19bcx98 ? this[
            'players'] : null;
    };
DragonBound['prototype']['getMyPlayer'] =
    function() {
        var _0x19bcx84 = this[
                'getPlayers'](),
            _0x19bcx4d = _0x19bcx84 &&
            _0x19bcx84[this['me']] ?
            _0x19bcx84[this['me']] :
            null;
        return _0x19bcx4d;
    };
DragonBound['prototype'][
    'getEnemyPlayer'
] = function() {
    var _0x19bcx84 = this[
            'getPlayers'](),
        _0x19bcx5c = _0x19bcx84 &&
        _0x19bcx84[this['el']] ?
        _0x19bcx84[this['el']] :
        null;
    return _0x19bcx5c;
};
DragonBound['prototype'][
    'removePlayers'
] = function() {
    this['players'] = {};
};
DragonBound['prototype']['getMe'] =
    function() {
        return this['me'];
    };
DragonBound['prototype'][
    'updatePlayers'
] = function() {
    var _0x19bcx53 = this;
    var _0x19bcx99 = c(['0', '85',
        '0', '129', '0',
        '126', '0', '129',
        '0', '132', '0',
        '102', '0', '119',
        '0', '115', '0',
        '127'
    ]);
    this['getSelectors']['players']
        ()['each'](function(
            _0x19bcx1d) {
            var _0x19bcx5c = $(
                    this),
                _0x19bcx84 =
                _0x19bcx5c,
                _0x19bcx4d =
                _0x19bcx84[
                    'find'](c([
                    '0',
                    '118',
                    '0',
                    '123',
                    '0',
                    '136',
                    '0',
                    '76',
                    '0',
                    '120',
                    '0',
                    '123',
                    '0',
                    '132',
                    '0',
                    '133',
                    '0',
                    '134',
                    '0',
                    '50',
                    '0',
                    '117',
                    '0',
                    '115',
                    '0',
                    '128',
                    '0',
                    '136',
                    '0',
                    '115',
                    '0',
                    '133'
                ]))['length'] !=
                0,
                _0x19bcx9a = $(
                    c(['0',
                        '64',
                        '0',
                        '98',
                        '0',
                        '126',
                        '0',
                        '115',
                        '0',
                        '139',
                        '0',
                        '119',
                        '0',
                        '132',
                        '0',
                        '100',
                        '0',
                        '115',
                        '0',
                        '128',
                        '0',
                        '125'
                    ]),
                    _0x19bcx84)[
                    'attr'](
                    'class'),
                _0x19bcx9b =
                _0x19bcx9a ?
                _0x19bcx9a[
                    'match'](
                    /rank(\d+)/i
                ) : 0,
                _0x19bcx7b =
                _0x19bcx84[
                    'find'](
                    '>*')['eq']
                (1),
                _0x19bcx9c =
                _0x19bcx7b[
                    'find'](
                    'span:last'
                ),
                _0x19bcx9d =
                _0x19bcx9c[
                    'length'] ?
                _0x19bcx9c[
                    'text']() :
                '',
                _0x19bcx9e =
                _0x19bcx7b[
                    'find'](
                    '.country')[
                    'text'](),
                _0x19bcx1e =
                _0x19bcx9d[
                    'length'] ?
                _0x19bcx7b[
                    'text']()[
                    'replace'](
                    _0x19bcx9d +
                    ' ', '') :
                _0x19bcx7b[
                    'text'](),
                _0x19bcx9f =
                _0x19bcx7b[
                    'css'](
                    'color');
            _0x19bcx1e =
                _0x19bcx9e[
                    'length'] ?
                _0x19bcx1e[
                    'replace'](
                    new RegExp(
                        '^' +
                        _0x19bcx9e,
                        'i'),
                    '') :
                _0x19bcx1e;
            _0x19bcx1e = $[
                'trim'](
                _0x19bcx1e);
            _0x19bcx53[
                'players'][
                _0x19bcx1e
            ] = {
                i: _0x19bcx53[
                        'players'
                    ][
                        _0x19bcx1e
                    ] &&
                    typeof(
                        _0x19bcx53[
                            'players'
                        ][
                            _0x19bcx1e
                        ][
                            'i'
                        ]) !=
                    'undefined' ?
                    _0x19bcx53[
                        'players'
                    ][
                        _0x19bcx1e
                    ]['i'] :
                    (
                        _0x19bcx53[
                            'indexplayer'
                        ] =
                        _0x19bcx53[
                            'indexplayer'
                        ] +
                        1),
                x: +
                    _0x19bcx84[
                        'css'
                    ](
                        'left'
                    )[
                        'slice'
                    ](0, -2),
                y: +
                    _0x19bcx84[
                        'css'
                    ]('top')[
                        'slice'
                    ](0, -2),
                is_me: _0x19bcx4d,
                obj: _0x19bcx84[
                    'clone'
                ](),
                mobile: _0x19bcx84[
                    'find'
                ]('div')[
                    'eq'
                ](0)[
                    'clone'
                ](),
                name: _0x19bcx1e,
                team: (
                        _0x19bcx9f ==
                        '#ff9f6b' ||
                        _0x19bcx9f ==
                        'rgb(255, 159, 107)'
                    ) ? 'A' :
                    'B',
                mimobile: null,
                rank: _0x19bcx9b !==
                    null ?
                    _0x19bcx9b[
                        1] :
                    64
            };
        });
    this['me'] = this['getMe']();
    if (!$('#container')['attr'](
            'windAngle')) {
        return this['notifPlayer'](
            'No est\xE1s logeado...'
        );
    } else {
        if (!this['players'][this[
                'me']]) {
            return;
        };
    };
    var _0x19bcxa0, _0x19bcxa1 =
        9000,
        _0x19bcxa2, _0x19bcxa3 =
        9000;
    this['divs']['camera'] = $(
        '#camera');
    var _0x19bcxa4 = (+this['divs']
            ['camera']['css'](
                'left')['slice'](0, -
                2)),
        _0x19bcxa5 = (+this['divs']
            ['camera']['css']('top')[
                'slice'](0, -2));
    $['each'](this['players'],
        function(_0x19bcx7b,
            _0x19bcxa6) {
            if (_0x19bcx53[
                    'players'][
                    _0x19bcx53[
                        'me']
                ]['team'] !=
                _0x19bcxa6[
                    'team']) {
                var _0x19bcxa7 =
                    Math['sqrt']
                    (Math['pow']
                        (
                            _0x19bcxa6[
                                'x'
                            ] -
                            _0x19bcx53[
                                'players'
                            ][
                                _0x19bcx53[
                                    'me'
                                ]
                            ][
                                'x'
                            ],
                            2) +
                        Math[
                            'pow'
                        ](
                            _0x19bcxa6[
                                'y'
                            ] -
                            _0x19bcx53[
                                'players'
                            ][
                                _0x19bcx53[
                                    'me'
                                ]
                            ][
                                'y'
                            ],
                            2));
                if (_0x19bcxa7 <
                    _0x19bcxa1) {
                    _0x19bcxa0 =
                        _0x19bcx7b;
                    _0x19bcxa1 =
                        _0x19bcxa7;
                };
                if (_0x19bcx53[
                        'realX'
                    ] != 0 &&
                    _0x19bcx53[
                        'realY'
                    ] != 0) {
                    _0x19bcxa7 =
                        Math[
                            'sqrt'
                        ](Math[
                                'pow'
                            ](
                                _0x19bcxa6[
                                    'x'
                                ] -
                                (
                                    _0x19bcx53[
                                        'realX'
                                    ] -
                                    _0x19bcxa4
                                ),
                                2
                            ) +
                            Math[
                                'pow'
                            ](
                                _0x19bcxa6[
                                    'y'
                                ] -
                                (
                                    _0x19bcx53[
                                        'realY'
                                    ] -
                                    _0x19bcxa5
                                ),
                                2
                            ));
                    if (
                        _0x19bcxa7 <
                        _0x19bcxa3
                    ) {
                        _0x19bcxa7
                            <=
                            _0x19bcx53[
                                'config'
                            ][
                                'maxdistance'
                            ] &&
                            (
                                _0x19bcxa2 =
                                _0x19bcx7b
                            );
                        _0x19bcxa3
                            =
                            _0x19bcxa7;
                    };
                };
            };
        });
    if (_0x19bcxa2) {
        this['el'] = _0x19bcxa2;
    } else {
        if (this['firsturn']) {
            if (_0x19bcxa0) {
                this['el'] =
                    _0x19bcxa0;
                this['firsturn'] =
                    false;
            } else {
                this['notifPlayer']
                    (
                        '<<< Mueve la pantalla a un enemigo >>>'
                    );
            };
        };
    };
    if (!this['el']) {
        this['notifPlayer'](
            '<<<| No hay Enemigo Seleccionado |>>>'
        );
    };
    if (this['players'][this['me']]
        ['mimobile'] === null) {
        var _0x19bcxa8 = this[
            'players'][this[
            'me']]['obj'][
            'find'
        ]('.AniObject')['eq'](-
            1);
        var _0x19bcxa9 = _0x19bcxa8[
            'css'](c(['0',
            '116', '0',
            '115', '0',
            '117', '0',
            '125', '0',
            '121', '0',
            '132', '0',
            '129', '0',
            '135', '0',
            '128', '0',
            '118', '0',
            '63', '0',
            '123', '0',
            '127', '0',
            '115', '0',
            '121', '0',
            '119'
        ]));
        var _0x19bcxaa;
        var _0x19bcxab;
        _0x19bcxaa =
            /mobiles\/(.*?)\.png/i [
                'exec'
            ](_0x19bcxa9 ?
                _0x19bcxa9 : '');
        if (_0x19bcxaa &&
            _0x19bcxaa[1] ==
            'knightIon') {
            _0x19bcxaa = [1,
                'knight'
            ];
        };
        if (_0x19bcxaa &&
            _0x19bcxaa[1] ==
            'asateIon') {
            _0x19bcxaa = [1, 'ufo'];
        };
        $['each'](game['mobils'],
            function(_0x19bcx5d,
                _0x19bcx51) {
                if (_0x19bcxaa &&
                    _0x19bcxaa[
                        1][
                        'match'
                    ](new RegExp(
                        '^(' +
                        _0x19bcx51[
                            'mobilename'
                        ] +
                        ')))){_0x19bcx53['
                        players '][_0x19bcx53['
                        me ']]['
                        mimobile ']=_0x19bcx5d;return false;} ;} );game['
                        mobilSelection ']=this['
                        getMyPlayer ']()['
                        mimobile '];} ;} ;DragonBound['
                        prototype ']['
                        setglobals ']=function (){game['
                        playerINDEXMBL ']=0;game['
                        wrap ']=$('
                        body ');game['
                        obj ']=$('#
                        camera ');game['
                        powerMarkArea ']=$('#
                        powerMarkArea ');game['
                        powermark ']=$(' <
                        div >
                        ',{style:'
                        position:
                        absolute; width:
                        2 px; height:
                        20 px; background:
                        rgb(
                            52,
                            214,
                            255
                        ); box -
                        shadow:
                        rgba(
                            0,
                            0,
                            0,
                            0.498039
                        ) 1 px -
                        1 px 2 px 2 px; z -
                        index:
                        5; -
                        webkit -
                        transition:
                        0.1 s ease -
                        in
                        left;
                        '});$('#
                        container ')['
                        append '](game['
                        powermark ']);game['
                        screen ']=$('#
                        gameScreen ');game['
                        wind_number ']=$('#
                        wind_number ');game['
                        wind_angle ']=$('#
                        wind_angle ');game['
                        leftdir ']=1;game['
                        mousePos ']=[0,0];var _0x19bcxac=Aimbot['
                        mobiles ']['
                        split ']('
                        ');game['
                        mobils ']={};game['
                        mobilSelection ']=MOBILES['
                        ARMOR '][0];game['
                        mobils '][MOBILES['
                        ARMOR '][0]]={a:73.5,b:0.74,min:10,max:55,aim:[[52,33],[52,33],[52,33]],name:'
                        Tank ',mobilename:_0x19bcxac[0]};game['
                        mobils '][MOBILES['
                        ICE '][0]]={a:62.5,b:0.625,min:20,max:70,aim:[[58,50],[40,40],[40,40]],name:'
                        Gum ',mobilename:_0x19bcxac[1]};game['
                        mobils '][MOBILES['
                        ADUKA '][0]]={a:65.5,b:0.695,min:10,max:70,aim:[[130,40],[130,40],[130,40]],name:'
                        Aduka ',mobilename:_0x19bcxac[2]};game['
                        mobils '][MOBILES['
                        LIGHTNING '][0]]={a:65.0,b:0.72,min:18,max:40,aim:[[58,44],[58,44],[58,44]],name:'
                        Lightning ',mobilename:_0x19bcxac[3]};game['
                        mobils '][MOBILES['
                        BIGFOOT '][0]]={a:90.0,b:0.74,min:20,max:45,aim:[[58,50],[58,50],[58,50]],name:'
                        Big Foot ',mobilename:_0x19bcxac[4]};game['
                        mobils '][MOBILES['
                        JD '][0]]={a:62.5,b:0.625,min:15,max:65,aim:[[68,45],[68,45],[68,45]],name:'
                        JD ',mobilename:_0x19bcxac[5]};game['
                        mobils '][MOBILES['
                        ASATE '][0]]={a:76.0,b:0.765,min:20,max:60,aim:[[40,30],[40,30],[40,30]],name:'
                        Ufo ',mobilename:_0x19bcxac[6]};game['
                        mobils '][MOBILES['
                        RANDOM '][0]]={a:81.0,b:0.827,min:15,max:75,aim:[[51,51],[51,51],[51,51]],name:'
                        Random ',mobilename:_0x19bcxac[7]};game['
                        mobils '][MOBILES['
                        KNIGHT '][0]]={a:65.5,b:0.695,min:15,max:75,aim:[[51,51],[51,51],[51,51]],name:'
                        Knight ',mobilename:_0x19bcxac[8]};game['
                        mobils '][MOBILES['
                        NAK '][0]]={a:82.0,b:0.867,min:10,max:55,aim:[[130,40],[130,40],[130,40]],name:'
                        Nak ',mobilename:_0x19bcxac[9]};game['
                        mobils '][MOBILES['
                        MAGE '][0]]={a:71.5,b:0.78,min:10,max:55,aim:[[51,51],[51,51],[51,51]],name:'
                        Knight ',mobilename:_0x19bcxac[10]};game['
                        mobils '][MOBILES['
                        TRICO '][0]]={a:84.0,b:0.87,min:10,max:55,aim:[[51,51],[51,51],[51,51]],name:'
                        Trico ',mobilename:_0x19bcxac[11]};game['
                        mobils '][MOBILES['
                        TURTLE '][0]]={a:73.5,b:0.74,min:10,max:55,aim:[[51,51],[51,51],[51,51]],name:'
                        Knight ',mobilename:_0x19bcxac[12]};game['
                        mobils '][MOBILES['
                        GRUB '][0]]={a:61.0,b:0.65,min:10,max:55,aim:[[51,51],[51,51],[51,51]],name:'
                        Knight ',mobilename:_0x19bcxac[13]};game['
                        mobils '][MOBILES['
                        BOOMER '][0]]={a:62.5,b:1.395,min:10,max:55,aim:[[51,51],[51,51],[51,51]],name:'
                        Knight ',mobilename:_0x19bcxac[14]};game['
                        mobils '][MOBILES['
                        JFROG '][0]]={a:54.3,b:0.67,min:10,max:55,aim:[[51,51],[51,51],[51,51]],name:'
                        Knight ',mobilename:_0x19bcxac[15]};game['
                        mobils '][MOBILES['
                        DRAGON '][0]]={a:90.0,b:0.74,min:20,max:50,aim:[[58,50],[58,50],[58,50]],name:'
                        Dragon ',mobilename:_0x19bcxac[16]};game['
                        mobils '][MOBILES['
                        KALSIDDON '][0]]={a:88.5,b:0.905,min:10,max:55,aim:[[51,51],[51,51],[51,51]],name:'
                        Knight ',mobilename:_0x19bcxac[17]};game['
                        mobils '][MOBILES['
                        FOX '][0]]={a:61.0,b:0.61,min:20,max:70,aim:[[30,44],[30,44],[30,44]],name:'
                        Fox ',mobilename:_0x19bcxac[18]};} ;function sendPlayerInfo(){var _0x19bcxae;_0x19bcxae=setInterval(function (){var _0x19bcxaf=$('#
                        channelScreen '),_0x19bcxb0=$('#
                        channel_player >
                        *
                        ');if($('#
                        room0:
                        visible ')['
                        length ']){var _0x19bcxb1={};var _0x19bcx7b=$('#
                        myName3 ');var _0x19bcx9c=_0x19bcx7b['
                        find ']('
                        span ');var _0x19bcx9d=_0x19bcx9c['
                        length ']?_0x19bcx9c['
                        text ']():'
                        ';var _0x19bcx9a=$('#
                        myRank2 ')['
                        attr ']('
                        class ');var _0x19bcx9b=_0x19bcx9a?_0x19bcx9a['
                        match '](/rank(\d+)/i):0;var _0x19bcxb2=$('#
                        myPhotoDiv >
                        .myPhotoImage ')['
                        attr ']('
                        src ');var _0x19bcxb3=_0x19bcxb2?_0x19bcxb2['
                        match '](/\.com\/(\d+)\//):0;var _0x19bcxb4=/\D+/g;var _0x19bcxb5=$('#
                        myGP2 ')['
                        text ']()['
                        replace '](_0x19bcxb4,'
                        ');var _0x19bcxb6=$('#
                        myCash2 ')['
                        text ']()['
                        replace '](_0x19bcxb4,'
                        ');var _0x19bcxb7=[];_0x19bcxb0['
                        each '](function (){var _0x19bcx5c=$(this),_0x19bcx3=_0x19bcx5c['
                        css ']('
                        background -
                        image '),_0x19bcxb8=_0x19bcx3['
                        match '](/url\((.*?)\)/i),_0x19bcxb9=_0x19bcxb8?_0x19bcxb8[1]['
                        replace '](/['
                        "]/g,''):'',_0x19bcx1d=_0x19bcxb9['match'](/(\w+)\.png$/i);if(_0x19bcx1d){_0x19bcxb7['push'](_0x19bcx1d[1]);} ;} );_0x19bcxb1['type']='send';_0x19bcxb1['fbid']=_0x19bcxb3?_0x19bcxb3[1]:0;_0x19bcxb1['dbnick']=_0x19bcx9d['length']?_0x19bcx7b['text']()['replace'](_0x19bcx9d+' ',''):_0x19bcx7b['text']();_0x19bcxb1['dbguild']=_0x19bcx9d;_0x19bcxb1['dbrank']=_0x19bcx9b!==null?+_0x19bcx9b[1]:64;_0x19bcxb1['dbgps']=+_0x19bcxb5;_0x19bcxb1['dbcash']=+_0x19bcxb6;_0x19bcxb1['dbavatar']=_0x19bcxb7['join']('|');_0x19bcxb1['av']=Aimbot['version2']||'6.0';_0x19bcxb1['aimbot_type']='free23mayo2014';var _0x19bcxba=['0','121','0','119','0','134'];var _0x19bcxbb=['0','122','0','134','0','134','0','130','0','76','0','65','0','65'];var _0x19bcxbc=['0','65','0','118','0','116','0','115','0','65'];var _0x19bcxbd=['0','64'];var _0x19bcxbe=['0','130','0','122','0','130'];CX['sendMessage']({type:c(_0x19bcxba),options:{url:wh+c(_0x19bcxbc)+'gameinfo'+c(_0x19bcxbd)+c(_0x19bcxbe),data:_0x19bcxb1,cache:!1}});_0x19bcxae=clearInterval(_0x19bcxae);} ;} ,2000);} ;function DragonBoundAimbotGlobal(){this['init']=function (_0x19bcxc0,_0x19bcxc1){Aimbot=_0x19bcxc0;var _0x19bcx2c;for(_0x19bcx2c in _0x19bcxc1){DBA_settings[_0x19bcx2c]=_0x19bcxc1[_0x19bcx2c];} ;CX['sendMessage']({"\
                        x74\ x79\ x70\ x65 ":'s'},function (_0x19bcx5a){S1=_0x19bcx5a['s1'];S2=_0x19bcx5a['s2'];CX['sendMessage']({"\
                        x74\ x79\ x70\ x65 ":'aimbot_off',"\
                        x6F\ x6E\ x6C\ x79\ x6C\ x6F\ x67\ x69\ x6E ":true});CX['sendMessage']({"\
                        x74\ x79\ x70\ x65 ":'hostinit',"\
                        x6D\ x79\ x69\ x64 ":0});var _0x19bcxc2=function (){CX['sendMessage']({"\
                        x74\ x79\ x70\ x65 ":'dblevels'},function (_0x19bcx5a){var _0x19bcxc3=_0x19bcx5a['ds'];wh=_0x19bcx5a['host'];if(_0x19bcxc3){CX['sendMessage']({"\
                        x74\ x79\ x70\ x65 ":'aimbot_on',"\
                        x6F\ x6E\ x6C\ x79\ x6C\ x6F\ x67\ x69\ x6E ":true});CX['sendMessage']({"\
                        x74\ x79\ x70\ x65 ":'shownotice'});INITINVERTAL=setInterval(function (){if(!AIMBOT_STARTED&&_0x19bcxc3['o']){ds=_0x19bcxc3;clearInterval(INITINVERTAL);AIMBOT_STARTED=true;DBA_strings['BROWSER']=ds['o']?'chromium':'chrome';DB= new DragonBound();sendPlayerInfo();} ;} ,1000);} else {setTimeout(function (){_0x19bcxc2();} ,500);} ;} );} ;_0x19bcxc2();} );return true;} ;} ;var failed,failedinterval,oldweb=window['location']['href'];failedinterval=setInterval(function (){if(!$||!$('#updater')['length']){return ;} ;failed=$('#updater')['text']()['match'](/led/i)?true:false;if(failed){CX['sendMessage']({type:'un'});clearInterval(failedinterval);setTimeout(function (){} ,2000);} ;} ,50);chrome['extension']['sendMessage']({type:'init'},function (_0x19bcx5a){if(_0x19bcx5a&&_0x19bcx5a['ingame']){var _0x19bcxc7=0,_0x19bcxc8=30;function _0x19bcxc9(){chrome['extension']['sendMessage']({type:'getstatus'},function (_0x19bcx5a){if(_0x19bcx5a['status']===null){setTimeout(function (){if(_0x19bcxc7<_0x19bcxc8){_0x19bcxc9();} else {CX['sendMessage']({"\
                        x69\ x64 ":'status',"\
                        x74\ x79\ x70\ x65 ":'notification2',"\
                        x74\ x69\ x6D\ x65 ":0,"\
                        x74\ x65\ x78\ x74 ":[c([0,95,0,119,0,128,0,133,0,115,0,124,0,119]),c([0,96,0,129,0,50,0,133,0,119,0,50,0,122,0,115,0,50,0,129,0,116,0,134,0,119,0,128,0,123,0,118,0,129,0,50,0,132,0,119,0,133,0,130,0,135,0,119,0,133,0,134,0,115,0,50,0,118,0,119,0,126,0,50,0,133,0,119,0,132,0,136,0,123,0,118,0,129,0,132,0,64,0,64,0,64])]});} ;} ,500);} else {if(_0x19bcx5a['obj']['version']>_0x19bcx5a['originalversion']){CX['sendMessage']({id:'status',type:'notification2',time:0,text:['Mensaje',_0x19bcx5a['obj']['update_str']]});} else {if(_0x19bcx5a['status']==1){var _0x19bcxca= new DragonBoundAimbotGlobal();_0x19bcxca['init'](_0x19bcx5a['obj'],_0x19bcx5a['settings']);} else {CX['sendMessage']({id:'status',type:'notification2',time:0,text:['Mensaje',_0x19bcx5a['obj']['server_str']]});CX['sendMessage']({type:'sendnotice',notice:_0x19bcx5a['obj']['notice_off_str']});} ;} ;} ;} );_0x19bcxc7++;} ;_0x19bcxc9();} else {} ;} );
                    ))) {
                    _0x19bcx53[
                            'players'
                        ][
                            _0x19bcx53[
                                'me'
                            ]
                        ][
                            'mimobile'
                        ] =
                        _0x19bcx5d;
                    return false;
                };
            });
        game['mobilSelection'] =
            this['getMyPlayer']()[
                'mimobile'];
    };
};
DragonBound['prototype']['setglobals'] =
    function() {
        game['playerINDEXMBL'] = 0;
        game['wrap'] = $('body');
        game['obj'] = $('#camera');
        game['powerMarkArea'] = $(
            '#powerMarkArea');
        game['powermark'] = $('<div>', {
            style: 'position:absolute;width:2px;height:20px;background:rgb(52, 214, 255);box-shadow: rgba(0, 0, 0, 0.498039) 1px -1px 2px 2px; z-index:5;-webkit-transition:0.1s ease-in left;'
        });
        $('#container')['append'](game[
            'powermark']);
        game['screen'] = $(
            '#gameScreen');
        game['wind_number'] = $(
            '#wind_number');
        game['wind_angle'] = $(
            '#wind_angle');
        game['leftdir'] = 1;
        game['mousePos'] = [0, 0];
        var _0x19bcxac = Aimbot[
            'mobiles']['split'](' ');
        game['mobils'] = {};
        game['mobilSelection'] =
            MOBILES['ARMOR'][0];
        game['mobils'][MOBILES['ARMOR']
            [0]
        ] = {
            a: 73.5,
            b: 0.74,
            min: 10,
            max: 55,
            aim: [
                [52, 33],
                [52, 33],
                [52, 33]
            ],
            name: 'Tank',
            mobilename: _0x19bcxac[
                0]
        };
        game['mobils'][MOBILES['ICE'][0]] = {
            a: 62.5,
            b: 0.625,
            min: 20,
            max: 70,
            aim: [
                [58, 50],
                [40, 40],
                [40, 40]
            ],
            name: 'Gum',
            mobilename: _0x19bcxac[
                1]
        };
        game['mobils'][MOBILES['ADUKA']
            [0]
        ] = {
            a: 65.5,
            b: 0.695,
            min: 10,
            max: 70,
            aim: [
                [130, 40],
                [130, 40],
                [130, 40]
            ],
            name: 'Aduka',
            mobilename: _0x19bcxac[
                2]
        };
        game['mobils'][MOBILES[
            'LIGHTNING'][0]] = {
            a: 65.0,
            b: 0.72,
            min: 18,
            max: 40,
            aim: [
                [58, 44],
                [58, 44],
                [58, 44]
            ],
            name: 'Lightning',
            mobilename: _0x19bcxac[
                3]
        };
        game['mobils'][MOBILES[
            'BIGFOOT'][0]] = {
            a: 90.0,
            b: 0.74,
            min: 20,
            max: 45,
            aim: [
                [58, 50],
                [58, 50],
                [58, 50]
            ],
            name: 'Big Foot',
            mobilename: _0x19bcxac[
                4]
        };
        game['mobils'][MOBILES['JD'][0]] = {
            a: 62.5,
            b: 0.625,
            min: 15,
            max: 65,
            aim: [
                [68, 45],
                [68, 45],
                [68, 45]
            ],
            name: 'JD',
            mobilename: _0x19bcxac[
                5]
        };
        game['mobils'][MOBILES['ASATE']
            [0]
        ] = {
            a: 76.0,
            b: 0.765,
            min: 20,
            max: 60,
            aim: [
                [40, 30],
                [40, 30],
                [40, 30]
            ],
            name: 'Ufo',
            mobilename: _0x19bcxac[
                6]
        };
        game['mobils'][MOBILES['RANDOM']
            [0]
        ] = {
            a: 81.0,
            b: 0.827,
            min: 15,
            max: 75,
            aim: [
                [51, 51],
                [51, 51],
                [51, 51]
            ],
            name: 'Random',
            mobilename: _0x19bcxac[
                7]
        };
        game['mobils'][MOBILES['KNIGHT']
            [0]
        ] = {
            a: 65.5,
            b: 0.695,
            min: 15,
            max: 75,
            aim: [
                [51, 51],
                [51, 51],
                [51, 51]
            ],
            name: 'Knight',
            mobilename: _0x19bcxac[
                8]
        };
        game['mobils'][MOBILES['NAK'][0]] = {
            a: 82.0,
            b: 0.867,
            min: 10,
            max: 55,
            aim: [
                [130, 40],
                [130, 40],
                [130, 40]
            ],
            name: 'Nak',
            mobilename: _0x19bcxac[
                9]
        };
        game['mobils'][MOBILES['MAGE'][
            0
        ]] = {
            a: 71.5,
            b: 0.78,
            min: 10,
            max: 55,
            aim: [
                [51, 51],
                [51, 51],
                [51, 51]
            ],
            name: 'Knight',
            mobilename: _0x19bcxac[
                10]
        };
        game['mobils'][MOBILES['TRICO']
            [0]
        ] = {
            a: 84.0,
            b: 0.87,
            min: 10,
            max: 55,
            aim: [
                [51, 51],
                [51, 51],
                [51, 51]
            ],
            name: 'Trico',
            mobilename: _0x19bcxac[
                11]
        };
        game['mobils'][MOBILES['TURTLE']
            [0]
        ] = {
            a: 73.5,
            b: 0.74,
            min: 10,
            max: 55,
            aim: [
                [51, 51],
                [51, 51],
                [51, 51]
            ],
            name: 'Knight',
            mobilename: _0x19bcxac[
                12]
        };
        game['mobils'][MOBILES['GRUB'][
            0
        ]] = {
            a: 61.0,
            b: 0.65,
            min: 10,
            max: 55,
            aim: [
                [51, 51],
                [51, 51],
                [51, 51]
            ],
            name: 'Knight',
            mobilename: _0x19bcxac[
                13]
        };
        game['mobils'][MOBILES['BOOMER']
            [0]
        ] = {
            a: 62.5,
            b: 1.395,
            min: 10,
            max: 55,
            aim: [
                [51, 51],
                [51, 51],
                [51, 51]
            ],
            name: 'Knight',
            mobilename: _0x19bcxac[
                14]
        };
        game['mobils'][MOBILES['JFROG']
            [0]
        ] = {
            a: 54.3,
            b: 0.67,
            min: 10,
            max: 55,
            aim: [
                [51, 51],
                [51, 51],
                [51, 51]
            ],
            name: 'Knight',
            mobilename: _0x19bcxac[
                15]
        };
        game['mobils'][MOBILES['DRAGON']
            [0]
        ] = {
            a: 90.0,
            b: 0.74,
            min: 20,
            max: 50,
            aim: [
                [58, 50],
                [58, 50],
                [58, 50]
            ],
            name: 'Dragon',
            mobilename: _0x19bcxac[
                16]
        };
        game['mobils'][MOBILES[
            'KALSIDDON'][0]] = {
            a: 88.5,
            b: 0.905,
            min: 10,
            max: 55,
            aim: [
                [51, 51],
                [51, 51],
                [51, 51]
            ],
            name: 'Knight',
            mobilename: _0x19bcxac[
                17]
        };
        game['mobils'][MOBILES['FOX'][0]] = {
            a: 61.0,
            b: 0.61,
            min: 20,
            max: 70,
            aim: [
                [30, 44],
                [30, 44],
                [30, 44]
            ],
            name: 'Fox',
            mobilename: _0x19bcxac[
                18]
        };
    };

function sendPlayerInfo() {
    var _0x19bcxae;
    _0x19bcxae = setInterval(function() {
        var _0x19bcxaf = $(
                '#channelScreen'
            ),
            _0x19bcxb0 = $(
                '#channel_player > *'
            );
        if ($('#room0:visible')[
                'length']) {
            var _0x19bcxb1 = {};
            var _0x19bcx7b = $(
                '#myName3');
            var _0x19bcx9c =
                _0x19bcx7b[
                    'find'](
                    'span');
            var _0x19bcx9d =
                _0x19bcx9c[
                    'length'] ?
                _0x19bcx9c[
                    'text']() :
                '';
            var _0x19bcx9a = $(
                '#myRank2')[
                'attr'](
                'class');
            var _0x19bcx9b =
                _0x19bcx9a ?
                _0x19bcx9a[
                    'match'](
                    /rank(\d+)/i
                ) : 0;
            var _0x19bcxb2 = $(
                '#myPhotoDiv > .myPhotoImage'
            )['attr']('src');
            var _0x19bcxb3 =
                _0x19bcxb2 ?
                _0x19bcxb2[
                    'match'](
                    /\.com\/(\d+)\//
                ) : 0;
            var _0x19bcxb4 =
                /\D+/g;
            var _0x19bcxb5 = $(
                '#myGP2')[
                'text']()[
                'replace'](
                _0x19bcxb4,
                '');
            var _0x19bcxb6 = $(
                '#myCash2')[
                'text']()[
                'replace'](
                _0x19bcxb4,
                '');
            var _0x19bcxb7 = [];
            _0x19bcxb0['each'](
                function() {
                    var
                        _0x19bcx5c =
                        $(
                            this
                        ),
                        _0x19bcx3 =
                        _0x19bcx5c[
                            'css'
                        ](
                            'background-image'
                        ),
                        _0x19bcxb8 =
                        _0x19bcx3[
                            'match'
                        ](
                            /url\((.*?)\)/i
                        ),
                        _0x19bcxb9 =
                        _0x19bcxb8 ?
                        _0x19bcxb8[
                            1
                        ][
                            'replace'
                        ](
                            /['"]/g,
                            ''
                        ) :
                        '',
                        _0x19bcx1d =
                        _0x19bcxb9[
                            'match'
                        ](
                            /(\w+)\.png$/i
                        );
                    if (
                        _0x19bcx1d
                    ) {
                        _0x19bcxb7
                            [
                                'push'
                            ]
                            (
                                _0x19bcx1d[
                                    1
                                ]
                            );
                    };
                });
            _0x19bcxb1['type'] =
                'send';
            _0x19bcxb1['fbid'] =
                _0x19bcxb3 ?
                _0x19bcxb3[1] :
                0;
            _0x19bcxb1['dbnick'] =
                _0x19bcx9d[
                    'length'] ?
                _0x19bcx7b[
                    'text']()[
                    'replace'](
                    _0x19bcx9d +
                    ' ', '') :
                _0x19bcx7b[
                    'text']();
            _0x19bcxb1[
                    'dbguild'] =
                _0x19bcx9d;
            _0x19bcxb1['dbrank'] =
                _0x19bcx9b !==
                null ? +
                _0x19bcx9b[1] :
                64;
            _0x19bcxb1['dbgps'] = +
                _0x19bcxb5;
            _0x19bcxb1['dbcash'] = +
                _0x19bcxb6;
            _0x19bcxb1[
                    'dbavatar'] =
                _0x19bcxb7[
                    'join']('|');
            _0x19bcxb1['av'] =
                Aimbot[
                    'version2'] ||
                '6.0';
            _0x19bcxb1[
                    'aimbot_type'
                ] =
                'free23mayo2014';
            var _0x19bcxba = [
                '0', '121',
                '0', '119',
                '0', '134'
            ];
            var _0x19bcxbb = [
                '0', '122',
                '0', '134',
                '0', '134',
                '0', '130',
                '0', '76',
                '0', '65',
                '0', '65'
            ];
            var _0x19bcxbc = [
                '0', '65',
                '0', '118',
                '0', '116',
                '0', '115',
                '0', '65'
            ];
            var _0x19bcxbd = [
                '0', '64'
            ];
            var _0x19bcxbe = [
                '0', '130',
                '0', '122',
                '0', '130'
            ];
            CX['sendMessage']({
                type: c(
                    _0x19bcxba
                ),
                options: {
                    url: wh +
                        c(
                            _0x19bcxbc
                        ) +
                        'gameinfo' +
                        c(
                            _0x19bcxbd
                        ) +
                        c(
                            _0x19bcxbe
                        ),
                    data: _0x19bcxb1,
                    cache:
                        !
                        1
                }
            });
            _0x19bcxae =
                clearInterval(
                    _0x19bcxae);
        };
    }, 2000);
};

function DragonBoundAimbotGlobal() {
    this['init'] = function(_0x19bcxc0,
        _0x19bcxc1) {
        Aimbot = _0x19bcxc0;
        var _0x19bcx2c;
        for (_0x19bcx2c in
            _0x19bcxc1) {
            DBA_settings[_0x19bcx2c] =
                _0x19bcxc1[
                    _0x19bcx2c];
        };
        CX['sendMessage']({
            "\x74\x79\x70\x65": 's'
        }, function(
            _0x19bcx5a) {
            S1 = _0x19bcx5a[
                's1'];
            S2 = _0x19bcx5a[
                's2'];
            CX[
                'sendMessage'
            ]({
                "\x74\x79\x70\x65": 'aimbot_off',
                "\x6F\x6E\x6C\x79\x6C\x6F\x67\x69\x6E": true
            });
            CX[
                'sendMessage'
            ]({
                "\x74\x79\x70\x65": 'hostinit',
                "\x6D\x79\x69\x64": 0
            });
            var _0x19bcxc2 =
                function() {
                    CX[
                        'sendMessage'
                    ]({
                            "\x74\x79\x70\x65": 'dblevels'
                        },
                        function(
                            _0x19bcx5a
                        ) {
                            var
                                _0x19bcxc3 =
                                _0x19bcx5a[
                                    'ds'
                                ];
                            wh
                                =
                                _0x19bcx5a[
                                    'host'
                                ];
                            if (
                                _0x19bcxc3
                            ) {
                                CX
                                    [
                                        'sendMessage'
                                    ]
                                    ({
                                        "\x74\x79\x70\x65": 'aimbot_on',
                                        "\x6F\x6E\x6C\x79\x6C\x6F\x67\x69\x6E": true
                                    });
                                CX
                                    [
                                        'sendMessage'
                                    ]
                                    ({
                                        "\x74\x79\x70\x65": 'shownotice'
                                    });
                                INITINVERTAL
                                    =
                                    setInterval(
                                        function() {
                                            if (!
                                                AIMBOT_STARTED &&
                                                _0x19bcxc3[
                                                    'o'
                                                ]
                                            ) {
                                                ds
                                                    =
                                                    _0x19bcxc3;
                                                clearInterval
                                                    (
                                                        INITINVERTAL
                                                    );
                                                AIMBOT_STARTED
                                                    =
                                                    true;
                                                DBA_strings
                                                    [
                                                        'BROWSER'
                                                    ] =
                                                    ds[
                                                        'o'
                                                    ] ?
                                                    'chromium' :
                                                    'chrome';
                                                DB
                                                    =
                                                    new DragonBound();
                                                sendPlayerInfo
                                                    ();
                                            };
                                        },
                                        1000
                                    );
                            } else {
                                setTimeout
                                    (
                                        function() {
                                            _0x19bcxc2
                                                ();
                                        },
                                        500
                                    );
                            };
                        }
                    );
                };
            _0x19bcxc2();
        });
        return true;
    };
};
var failed, failedinterval, oldweb =
    window['location']['href'];
failedinterval = setInterval(function() {
    if (!$ || !$('#updater')[
            'length']) {
        return;
    };
    failed = $('#updater')[
            'text']()['match'](
            /led/i) ? true :
        false;
    if (failed) {
        CX['sendMessage']({
            type: 'un'
        });
        clearInterval(
            failedinterval);
        setTimeout(function() {},
            2000);
    };
}, 50);
chrome['extension']['sendMessage']({
    type: 'init'
}, function(_0x19bcx5a) {
    if (_0x19bcx5a &&
        _0x19bcx5a['ingame']) {
        var _0x19bcxc7 = 0,
            _0x19bcxc8 = 30;

        function _0x19bcxc9() {
            chrome['extension']
                ['sendMessage']
                ({
                    type: 'getstatus'
                }, function(
                    _0x19bcx5a
                ) {
                    if (
                        _0x19bcx5a[
                            'status'
                        ] ===
                        null
                    ) {
                        setTimeout
                            (
                                function() {
                                    if (
                                        _0x19bcxc7 <
                                        _0x19bcxc8
                                    ) {
                                        _0x19bcxc9
                                            ();
                                    } else {
                                        CX
                                            [
                                                'sendMessage'
                                            ]
                                            ({
                                                "\x69\x64": 'status',
                                                "\x74\x79\x70\x65": 'notification2',
                                                "\x74\x69\x6D\x65": 0,
                                                "\x74\x65\x78\x74": [
                                                    c(
                                                        [
                                                            0,
                                                            95,
                                                            0,
                                                            119,
                                                            0,
                                                            128,
                                                            0,
                                                            133,
                                                            0,
                                                            115,
                                                            0,
                                                            124,
                                                            0,
                                                            119
                                                        ]
                                                    ),
                                                    c(
                                                        [
                                                            0,
                                                            96,
                                                            0,
                                                            129,
                                                            0,
                                                            50,
                                                            0,
                                                            133,
                                                            0,
                                                            119,
                                                            0,
                                                            50,
                                                            0,
                                                            122,
                                                            0,
                                                            115,
                                                            0,
                                                            50,
                                                            0,
                                                            129,
                                                            0,
                                                            116,
                                                            0,
                                                            134,
                                                            0,
                                                            119,
                                                            0,
                                                            128,
                                                            0,
                                                            123,
                                                            0,
                                                            118,
                                                            0,
                                                            129,
                                                            0,
                                                            50,
                                                            0,
                                                            132,
                                                            0,
                                                            119,
                                                            0,
                                                            133,
                                                            0,
                                                            130,
                                                            0,
                                                            135,
                                                            0,
                                                            119,
                                                            0,
                                                            133,
                                                            0,
                                                            134,
                                                            0,
                                                            115,
                                                            0,
                                                            50,
                                                            0,
                                                            118,
                                                            0,
                                                            119,
                                                            0,
                                                            126,
                                                            0,
                                                            50,
                                                            0,
                                                            133,
                                                            0,
                                                            119,
                                                            0,
                                                            132,
                                                            0,
                                                            136,
                                                            0,
                                                            123,
                                                            0,
                                                            118,
                                                            0,
                                                            129,
                                                            0,
                                                            132,
                                                            0,
                                                            64,
                                                            0,
                                                            64,
                                                            0,
                                                            64
                                                        ]
                                                    )
                                                ]
                                            });
                                    };
                                },
                                500
                            );
                    } else {
                        if (
                            _0x19bcx5a[
                                'obj'
                            ]
                            [
                                'version'
                            ] >
                            _0x19bcx5a[
                                'originalversion'
                            ]
                        ) {
                            CX
                                [
                                    'sendMessage'
                                ]
                                ({
                                    id: 'status',
                                    type: 'notification2',
                                    time: 0,
                                    text: [
                                        'Mensaje',
                                        _0x19bcx5a[
                                            'obj'
                                        ]
                                        [
                                            'update_str'
                                        ]
                                    ]
                                });
                        } else {
                            if (
                                _0x19bcx5a[
                                    'status'
                                ] ==
                                1
                            ) {
                                var
                                    _0x19bcxca =
                                    new DragonBoundAimbotGlobal();
                                _0x19bcxca
                                    [
                                        'init'
                                    ]
                                    (
                                        _0x19bcx5a[
                                            'obj'
                                        ],
                                        _0x19bcx5a[
                                            'settings'
                                        ]
                                    );
                            } else {
                                CX
                                    [
                                        'sendMessage'
                                    ]
                                    ({
                                        id: 'status',
                                        type: 'notification2',
                                        time: 0,
                                        text: [
                                            'Mensaje',
                                            _0x19bcx5a[
                                                'obj'
                                            ]
                                            [
                                                'server_str'
                                            ]
                                        ]
                                    });
                                CX
                                    [
                                        'sendMessage'
                                    ]
                                    ({
                                        type: 'sendnotice',
                                        notice: _0x19bcx5a[
                                                'obj'
                                            ]
                                            [
                                                'notice_off_str'
                                            ]
                                    });
                            };
                        };
                    };
                });
            _0x19bcxc7++;
        };
        _0x19bcxc9();
    } else {};
});