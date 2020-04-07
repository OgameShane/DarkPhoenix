var players = [
    { name: "ARMADILLO", planets: ["1:77:2","1:125:7m","1:188:9m","2:153:1","2:153:9m","2:302:9m","3:140:8","3:357:9m","4:420:2m","4:421:11m"] },
    { name: "Arthas Menethil", planets: ["1:355:9m","2:305:9m","3:145:9m","4:135:9m","4:350:9m","5:350:8m","6:3:10m","6:3:12m"] },
    { name: "Assilem143", planets: ["1:9:5m","1:239:7m","1:366:7m","1:371:6m","2:198:7m","2:373:8m","3:191:1m","3:191:8m","3:346:8m","4:239:8m"] },
    { name: "beitzy", planets: ["1:58:7m","1:58:12m","2:58:7m","2:358:7m","2:359:1m","3:57:7m","3:357:7m","4:155:7m","5:58:7m"] },
    { name: "BRONTOLO", planets: ["1:71:9","1:171:8m","1:286:4","1:398:8","2:284:8","3:286:8m","4:291:8","5:278:8"] },
    { name: "capn", planets: ["1:236:1","1:366:12m","2:151:1","2:453:1","3:419:1","4:59:8"] },
    { name: "Captain Prod", planets: ["1:9:1m","1:131:12m","1:236:9m","1:420:7m","2:151:11m","2:453:7m","3:11:9","4:239:7","5:227:1"] },
    { name: "Crowley", planets: ["2:237:4","3:237:4","3:237:5","4:237:4","4:237:7","5:154:6","5:154:7","5:154:9"] },
    { name: "Dark Lord Phoenix", planets: ["1:155:6m","1:155:9m","2:454:9m","3:155:9m","4:155:8m","5:155:8m","6:155:2m","6:155:15m"] },
    { name: "Douggw", planets: ["4:298:7m","4:298:9m","5:190:6m","5:190:7","5:190:8","5:190:9m","5:190:10m","6:190:7"] },
    { name: "DownInSmoke", planets: ["1:464:7m","2:462:7m","3:462:1m","3:462:11m","3:462:12m","4:462:6m","5:350:7m","6:462:7m"] },
    { name: "Engineer Serpentis", planets: ["1:111:15m","2:437:7","2:438:1m","2:438:7m","2:438:10","2:438:15","2:463:15m","4:142:6m"] },
    { name: "Faded", planets: ["4:276:8m","4:295:7","4:295:9m","4:295:10","4:295:12m","5:190:5m","5:190:11m","6:344:8m","6:344:9m"] },
    { name: "Guth", planets: ["4:128:7","4:130:6","4:130:7","4:133:5","6:155:6"] },
    { name: "Hax N Flames", planets: ["1:435:1","1:436:6m","1:436:11m","1:443:5m","2:265:6m","3:399:10m","4:239:6","5:436:6"] },
    { name: "hellfire", planets: ["1:152:9m","1:152:10m","2:152:9m","2:203:9m","2:497:8m","3:12:9m","3:419:8m","4:193:8m","4:240:8m"] },
    { name: "HyKage", planets: ["1:144:6","2:453:6","4:68:10","5:227:7"] },
    { name: "iamNemesis", planets: ["1:148:7m","2:266:8m","2:266:14","3:319:10","3:325:9m","3:343:9","4:176:15"] },
    { name: "Jakrir", planets: ["4:152:9","4:154:7","4:155:5","4:155:6","4:156:5","4:156:10","4:158:9"] },
    { name: "jonnyta", planets: ["4:293:5","4:293:6","4:293:7","4:293:15","5:190:2","6:262:1"] },
    { name: "Kdotdiddy", planets: ["1:38:7m","2:39:8m","3:39:7m","3:289:7","4:38:4m","4:38:7","4:38:8"] },
    { name: "Nozdormu", planets: ["1:86:7m","1:155:7m","1:290:7m","2:60:7m","2:149:7m","2:352:7m","3:140:7m","4:420:7m","4:421:1m","4:422:1m"] },
    { name: "OmniEvil", planets: ["1:9:9m","1:131:11m","1:236:7m","1:366:1m","1:496:9m","2:151:9m","2:302:7m","2:453:9m","3:420:8m","4:240:1m"] },
    { name: "Preatorion", planets: ["1:87:7","1:87:8","3:86:8","3:87:8","4:87:8","5:147:8","5:154:8m","5:157:8"] },
    { name: "pun1sh3r", planets: ["3:427:5","3:427:7","3:427:8","4:305:6m","4:305:7m","4:355:7"] },
    { name: "shane", planets: ["1:148:8m","2:203:10m","2:265:3m","4:112:4m","4:112:7","4:112:9","4:176:9","5:227:8"] },
    { name: "SinonPHB", planets: ["1:206:6","2:180:5","2:400:6","3:120:5","3:180:5m","3:239:11m","3:239:12","3:418:6"] },
    { name: "Sovereign Nova", planets: ["1:394:12","1:394:13","2:238:6","2:238:7","2:238:8m"] },
    { name: "sylja", planets: ["1:148:6m","1:148:9","1:148:11","3:156:9m","5:413:7","5:413:8m","5:413:9"] },
    { name: "Syn Nickel", planets: ["4:297:7","4:297:9","4:297:10m","5:193:7","5:193:8","5:193:9"] },
    { name: "Tezza02", planets: ["1:236:8m","2:225:8","3:235:7","3:235:8m","3:236:7","3:236:8","3:237:8","3:238:7","3:238:8","4:241:8m"] },
    { name: "UKClimber", planets: ["1:266:8m","1:457:8m","1:496:5m","2:203:7m","2:453:8m","3:208:1m","3:458:8m","4:239:9","5:155:7m","5:370:8m"] },
    { name: "Weafyr", planets: ["1:461:6","2:25:8","5:219:7m","5:219:10","6:316:2","6:316:13"] },
    { name: "xTHA_user1", planets: ["1:152:7","1:172:12m"] },
    { name: "Zyfox", planets: ["5:39:8","5:203:10"] }
];

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
players.forEach(function(player) {
    player.planets.forEach(function(planet) {
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

map.forEach(function(galaxy) {
    var galaxyData = {};

    galaxy.systems.forEach(function(system) {
        system.planets.forEach(function(planet) {
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

// By making these object immutable, we improve Vue's iteration performance when rendering all the systems
Object.freeze(map);
Object.freeze(players);

Vue.component('Menu', {
    template: '#Menu',
    methods: {
        changeView: function(view) {
            this.$root.$data.activeView = view;
        }
    }
});


['UniverseView', 'GalaxyView', 'SystemView'].forEach(function(view) {
    Vue.component(view, {
        template: '#' + view,
    });
});

new Vue({
    el: "#universe",
    data: {
        activeView: "galaxy",
        views: ['system', 'galaxy']
    },
    template: `
                <div class="root">
                    <Menu />
                    <UniverseView />
                </div>
            `
});