/* global

    $r,
    WToolbar: writable,
    game
*/

WToolbarIconContainer = React.createClass({
    componentDidMount: function(){
        if (this.props.getTooltip){
            this.attachToolbarTooltip();
        }
    },

    render: function(){
        return $r("div", {
            className:"toolbarIcon " + this.props.className,
            ref: "iconContainer"
        }, this.props.children);
    },

    attachToolbarTooltip: function(){
        var container = React.findDOMNode(this.refs.iconContainer);
        var getTooltip = this.props.getTooltip;
        var game = this.props.game;

		var tooltip = dojo.byId("tooltip");
		dojo.empty(tooltip);

		dojo.connect(container, "onmouseover", this, function(event){
			 game.tooltipUpdateFunc = function(){
				tooltip.innerHTML = getTooltip();
			 };
			 game.tooltipUpdateFunc();

			 var target = event.originalTarget || event.toElement;
			 var pos = $(target).offset();
			 if (!pos){
				 return;
			 }

			 dojo.style(tooltip, "left", pos.left + "px");
			 dojo.style(tooltip, "top",  pos.top + "px");

			 dojo.style(tooltip, "display", "");
			 dojo.style(container, "fontWeight", "bold");

	    });

		dojo.connect(container, "onmouseout", this, function(){
			 game.tooltipUpdateFunc = null;
			 dojo.style(tooltip, "display", "none");
			 dojo.style(container, "fontWeight", "normal");
		});

	}
})

WToolbarHappiness = React.createClass({
    render: function(){
        var game = this.props.game;
        if (game.village.getKittens() <= 5){
            return null;
        }
        return $r(WToolbarIconContainer, {
            game: this.props.game,
            getTooltip: this.getTooltip,
            className: "happiness"
        },
            $r("div", {
                dangerouslySetInnerHTML: {
                    __html: "(:3)&nbsp;" + Math.floor(game.village.happiness * 100) + "%"
                }
            })
        );
    },
    getTooltip: function(){
        this.game = this.props.game;    //hack

        var base = this.game.getEffect("happiness");
		//var population = this.game.village.getKittens() *  2;
		var tooltip = $I("village.happiness.base") + ": 100%<br>" +
			   $I("village.happiness.buildings") + ": +" + (Math.floor(base)) + "%<br>";

		//----------------------
		var resHappiness = 0;
		var resources = this.game.resPool.resources;
        var happinessPerLuxury = 10;
        //philosophy epicurianism effect
        happinessPerLuxury += this.game.getEffect("luxuryHappinessBonus");
		for (var i = resources.length - 1; i >= 0; i--) {
			if (resources[i].type != "common" && resources[i].value > 0){
				resHappiness += happinessPerLuxury;
				if(resources[i].name == "elderBox" && this.game.resPool.get("wrappingPaper").value){
					resHappiness -= happinessPerLuxury; // Present Boxes and Wrapping Paper do not stack.
				}
				if(resources[i].type == "uncommon"){
					resHappiness += this.game.getEffect("consumableLuxuryHappiness");
				}
			}
		}
		tooltip += $I("village.happiness.rare.resources") + ": +" + this.game.getDisplayValueExt(resHappiness, false, false, 0) + "%<br>";
		//---------------------
		var karma = this.game.resPool.get("karma");
		if (karma.value > 0){
			tooltip += $I("village.happiness.karma") + ": +" + this.game.getDisplayValueExt(karma.value, false, false, 0) + "%<br>";
		}

		if (this.game.calendar.festivalDays > 0){
			var festivalHappinessEffect = 30 * (1+this.game.getEffect("festivalRatio"));
			tooltip += $I("village.happiness.festival") + ": +" + this.game.getDisplayValueExt(festivalHappinessEffect, false, false, 0) + "%<br>";
		}

        var unhappiness = this.game.village.getUnhappiness() / (1 + this.game.getEffect("unhappinessRatio")),
			unhappinessReduction = unhappiness * this.game.getEffect("unhappinessRatio", true);
        var environmentEffect = this.game.village.getEnvironmentEffect();
		tooltip += $I("village.happiness.penalty") + ": -" + this.game.getDisplayValueExt(unhappiness + unhappinessReduction, false, false, 0) + "%<br>";

        tooltip += "* " + $I("village.happiness.penalty.base") + ": -" + this.game.getDisplayValueExt(unhappiness, false, false, 0) + "%<br>";
		tooltip += "* " + $I("village.happiness.penalty.mitigated") + ": " + this.game.getDisplayValueExt(-unhappinessReduction, false, false, 0) + "%<br>";
        tooltip += $I("village.happiness.environment") + ": " + this.game.getDisplayValueExt(environmentEffect, false, false, 0) + "%<br>";
        var overpopulation = this.game.village.getKittens() - this.game.village.maxKittens;
        if (overpopulation > 0){
            tooltip += $I("village.happiness.overpopulation") + ": -" + overpopulation * 2 + "%<br>";
        }

        return tooltip;
    }
});

WToolbarEnergy = React.createClass({
    render: function(){
        var game = this.props.game;

        if (!game.science.get("electricity").researched){
            return null;
        }

        var resPool = game.resPool;
        var className = "";
        if (resPool.energyProd < resPool.energyCons) {
            className = " warning";
        } else if (resPool.energyWinterProd < resPool.energyCons) {
            className = " warningWinter";
        }

        return $r(WToolbarIconContainer, {
            game: game,
            getTooltip: this.getTooltip,
            className: "energy" + className
        },
            $r("div", {
                dangerouslySetInnerHTML: {
                    __html: "&#9889;&nbsp;" + game.getDisplayValueExt(resPool.energyProd - resPool.energyCons) + $I("unit.watt")
				}
            })
        );
    },
    getTooltip: function(){
        this.game = this.props.game;    //hack

        var resPool = this.game.resPool;
		var energy = resPool.energyProd - resPool.energyCons;

        var delta = this.game.resPool.getEnergyDelta();
		var penalty = energy >= 0 ? "" : "<br><br>" + $I("navbar.energy.penalty") + "<span class='energyPenalty'>-" + Math.floor( (1 - delta) * 100) + "%</span>";

		return $I("navbar.energy.prod.short") + " <span class='energyProduction'>" +  this.game.getDisplayValueExt(resPool.energyProd, true, false) + $I("unit.watt") + "</span>" +
			   "<br>" + $I("navbar.energy.cons.short") + " <span class='energyConsumption'>-" +  this.game.getDisplayValueExt(resPool.energyCons) + $I("unit.watt") + "</span>" + penalty;
    }
});

WToolbarMOTD = React.createClass({
    render: function(){
        var game = this.props.game;

        var server = game.server;
		if (!server.showMotd || !server.motdTitle) {
			return null;
        }

        return $r(WToolbarIconContainer, {
            game: game,
            getTooltip: this.getTooltip,
            className: server.motdFreshMessage ? "freshMessage" : null
        },
            $r("div", {
                dangerouslySetInnerHTML: {
                    __html: "&nbsp;" + server.motdTitle + "&nbsp;"
                }
            })
        );
    },
    getTooltip: function(){
        this.game = this.props.game;    //hack

        var server = this.game.server;
		if (server.showMotd && server.motdContent) {
			server.motdFreshMessage = false;
			return "如有问题可以加猫国群找我<br />" + server.motdContent;
		}
    }
});
WToolbarPollution = React.createClass({
    freshMessage: false,
    message: "",

    render: function(){
        var game = this.props.game;

        if(game.bld.cathPollution > 100000 || game.science.get("ecology").researched){
            return $r(WToolbarIconContainer, {
                game: game,
                getTooltip: this.getTooltip,
                className: this.freshMessage ? "energy warning": null
            },
                $r("div", {},
                "🏭" + (game.science.get("ecology").researched ? (" " + this.getPollutionMod()) : ""))
            );
        }
        return null;
    },
    getTooltip: function(notUpdateFreshMessage){
        var game = this.props.game;

        var message = "";
        var eqPol = game.bld.getEquilibriumPollution();
        var eqPolLvl = game.bld.getPollutionLevel(eqPol);
        var pollution = game.bld.cathPollution;
        var polLvl = game.bld.getPollutionLevel();
        var polLvlShow = game.bld.getPollutionLevel(pollution * 2);
        if (polLvl >= 4){
            message += $I("pollution.level1") + "<br/>" + $I("pollution.level2") + "<br/>" + $I("pollution.level3", [game.getDisplayValueExt(game.villageTab.getVillageTitle(), false, false, 0)]) + "<br/>" + $I("pollution.level4");
        }
        else if (polLvlShow == 3 || polLvl == 3){
            message += $I("pollution.level1") + "<br/>" + $I("pollution.level2") + "<br/>" + $I("pollution.level3", [game.getDisplayValueExt(game.villageTab.getVillageTitle(), false, false, 0)]);
        }
        else if (polLvlShow == 2){
            message += $I("pollution.level1") + "<br/>" + $I("pollution.level2");
        }
        else if (polLvlShow == 1){
            message += $I("pollution.level1");
        } else {
            message = $I("pollution.level0");
        }

        var warnLvl = game.bld.getPollutionLevel(pollution * 4);
        if (warnLvl >= 1 && warnLvl <= 4 && warnLvl > polLvlShow && warnLvl <= eqPolLvl) {
            message += "<br/>" + $I("pollution.level" + warnLvl + ".warning");
        }
        if (pollution * 1.5 <= eqPol || eqPolLvl > polLvl){
            message += "<br/>" + $I("pollution.increasing");
        }
        else if (pollution >= 0 && game.bld.cathPollutionPerTick <= 0 && eqPolLvl <= polLvl){
            message += "<br/>" + $I("pollution.cleaning");
        }
        else if (eqPolLvl == polLvl && eqPol > 0){
            message += "<br/>" + $I("pollution.equilibrium");
        }
        else {
            message += "<br/>" + $I("pollution.pristine");
        }

        if (notUpdateFreshMessage){
            return message;
        }
        message +="<br/>二氧化碳: " + (game.science.get("ecology").researched ?
            this.getPollutionMod() : $I("pollution.unspecified"));
        this.freshMessage = false;

        return message;
    },

    getPollutionMod: function(){
        var game = this.props.game;
        return game.getDisplayValueExt((game.bld.cathPollution / game.bld.getPollutionLevelBase())*100) + "ppm";
    }
});

WToolbarFPS = React.createClass({
    render: function(){
        var game = this.props.game;

        if (!game.isLocalhost){
            return null;
        }

        return $r(WToolbarIconContainer, {
            game: game,
            getTooltip: this.getTooltip
        },
            $r("div", {},
                "fps: " + game.fps.ms + " ms"
            )
        );
    },

    getTooltip: function(){
        var fps = this.props.game.fps;

        return " avg: " + fps.avg.toFixed() +
				" ms [" + fps.avg0.toFixed() +
				"." + fps.avg1.toFixed() +
				"." + fps.avg2.toFixed() +
				"." + fps.avg3.toFixed() +
				"." + fps.avg4.toFixed() + "] (Cl. to res.)";
    }
});

WBLS = React.createClass({
    render: function(){
        var game = this.props.game;

        var sorrowRes = game.resPool.get("sorrow"),
            sorrow = sorrowRes.value;

        if (!sorrow){
            return null;
        }
		var isMax = (sorrowRes.value == sorrowRes.maxValue);

        return $r(WToolbarIconContainer, {
            game: game,
            getTooltip: this.getTooltip,
            className: "sorrow" + (isMax ? " max" : "")
        },
            $r("div", {},
                $I("resources.sorrow.short") + ": " + sorrow.toFixed() + "%"
            )
        );
    },

    getTooltip: function(){
        return $I("resources.sorrow.full");
    }
});


WToolbar = React.createClass({
    getInitialState: function(){
        return {game: this.props.game};
    },

    componentDidMount: function(){
        var self = this;
        this.onUpdateHandler = dojo.subscribe("ui/update", function(game){
            self.setState({game: game});
        });
    },

    componentWillUnmount(){
        dojo.unsubscribe(this.onUpdateHandler);
    },

    getIcons: function(){
        var icons = [];
        icons.push(
            $r(WToolbarFPS, {game: this.state.game}),
            $r(WToolbarPollution, {game: this.state.game}),
            $r(WToolbarHappiness, {game: this.state.game}),
            $r(WToolbarEnergy, {game: this.state.game}),
            $r(WBLS, {game: this.state.game}),
            $r(WToolbarMOTD, {game: this.state.game}),
            //$r(WLogin, {game: this.state.game})

        );
        return icons;
    },

    render: function(){
        var icons = this.getIcons();
        return $r("div", {className:"icons-container"}, icons);
    }
});
