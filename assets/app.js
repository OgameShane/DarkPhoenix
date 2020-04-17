async function loadData(allianceId) {
    var parser = new DOMParser(),
        playersData = await (fetch("api/players.xml").then(function(response) { return response.text() })),
        planetsData = await (fetch("api/universe.xml").then(function(response) { return response.text() })),
        playersDOM = parser.parseFromString(playersData, "text/xml").getElementsByTagName("player"),
        planetsDOM = parser.parseFromString(planetsData, "text/xml").getElementsByTagName("planet"),
        players = [];

    for (var i = 0; i < playersDOM.length; i++) {
        if (playersDOM[i].hasAttribute('alliance') && parseInt(playersDOM[i].getAttribute('alliance')) === parseInt(allianceId)) {
            players.push({
                id: playersDOM[i].getAttribute('id'),
                name: playersDOM[i].getAttribute('name'),
                planets: []
            })
        }
    }

    for (var i = 0; i < planetsDOM.length; i++) {
        for (var p = 0; p < players.length; p++) {
            if (players[p].id === planetsDOM[i].getAttribute('player')) {
                players[p].planets.push(planetsDOM[i].getAttribute('coords') + (planetsDOM[i].childNodes.length ? 'm' : ''));
            }
        }
    }

    return players;
}

Vue.component('Menu', {
    template: '#Menu',
    methods: {
        changeView: function(view) {
            this.$root.$data.activeView = view;
        },
        loadAlliance(event) {
            this.$root.loadDataByAlliance(event.target.value);
        }
    }
});


['UniverseView', 'GalaxyView', 'SystemView'].forEach(function(view) {
    Vue.component(view, {
        template: '#' + view
    });
});

window.vueData = {
    activeView: "galaxy",
    views: ['system', 'galaxy'],
    players: [],
    map: [],
    galaxyViewData: [],
    loaded: false
};

new Vue({
    el: "#universe",
    data: window.vueData,
    created() {
        this.loadDataByAlliance(500020)
    },
    methods: {
        loadDataByAlliance(allianceId) {
            var parent = this;
            loadData(allianceId).then(function (players) {
                var map = [];

                // first we build up a universe of empty planets
                for (var g = 1; g <= 6; g++) {
                    var galaxy = {
                        galaxy: g,
                        systems: []
                    };

                    for (var s = 0; s <= 499; s++) {
                        var system = {
                            system: s,
                            hasPlayer: false,
                            planets: []
                        };

                        for (var p = 1; p <= 15; p++) {
                            system.planets.push({
                                hasMoon: false,
                                planet: p,
                                player: null
                            });
                        }

                        galaxy.systems.push(system);
                    }

                    map.push(galaxy);
                }

                // Now we map our controlled planets
                players.forEach(function (player) {
                    player.planets.forEach(function (planet) {
                        var location = planet.split(":");

                        for (var g = 0; g < map.length; g++) {
                            if (parseInt(location[0]) === map[g].galaxy) {
                                for (var s = 0; s < map[g].systems.length; s++) {
                                    if (parseInt(location[1]) === map[g].systems[s].system) {
                                        for (var p = 0; p < map[g].systems[s].planets.length; p++) {
                                            if (parseInt(location[2]) === map[g].systems[s].planets[p].planet) {
                                                map[g].systems[s].planets[p].player = player;
                                                map[g].systems[s].planets[p].hasMoon = location[2].endsWith("m");
                                                map[g].systems[s].hasPlayer = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    });
                });

                var galaxyViewData = [];

                map.forEach(function (galaxy) {
                    var galaxyData = {};

                    galaxy.systems.forEach(function (system) {
                        system.planets.forEach(function (planet) {
                            if (planet.player === null) {
                                return;
                            }

                            if (!galaxyData.hasOwnProperty(planet.player.name)) {
                                galaxyData[planet.player.name] = {
                                    count: 0,
                                    player: planet.player,
                                    locations: planet.player.planets.filter(planet => planet.startsWith(galaxy.galaxy + ":"))
                                };

                                galaxyData[planet.player.name].count = galaxyData[planet.player.name].locations.length;
                                galaxyData[planet.player.name].moonCount = galaxyData[planet.player.name].locations.filter(planet => planet.endsWith("m")).length
                            }
                        });
                    });

                    galaxyViewData.push(galaxyData);
                });

                parent.map = map;
                parent.players = players;
                parent.galaxyViewData = galaxyViewData;
                parent.loaded = true;
            });
        }
    },
    template: `
            <div class="root">
                <Menu />
                <UniverseView v-if="loaded" />
            </div>
        `
});