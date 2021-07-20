// ==UserScript==
// @name        Kitten Scientists
// @namespace   http://www.reddit.com/r/kittensgame/comments/34gb2u/kitten_scientists_automation_script/
// @description Launch Kitten Scientists
// @include     *bloodrizer.ru/games/kittens/*
// @include     file:///*kitten-game*
// @include     *kittensgame.com/web/*
// @include     *likexia.gitee.io/cat-zh/*
// @version     1.4.2
// @grant       none
// @copyright   2015, cameroncondry
// ==/UserScript==

// ==========================================
// Begin Kitten Scientist's Automation Engine
// ==========================================
//汉化杂项
var cnItems = {
    _STYLE_: [
        '符号', '待归类', '地图', '防具', '武器', '道具', '属性', '敌人'
    ],
    _OTHER_: [],

    /*'village': '村庄',
    'forest': '森林',
    'friendly': '友好',
    'neutral': '中立',
    'hostile': '敌对',
    'Furs': '皮毛',
    'Unobtainium': '难得素',
    'Catnip': '猫薄荷',
    'Wood': '木材',
    'Minerals': '矿物',
    'Coal': '煤',
    'Iron': '铁',
    'Titanium': '钛',
    'Gold': '黄金',
    'Oil': '石油',
    'Uranium': '铀',
    'Manpower': '喵力',
    'Science': '科学点',
    'Culture': '文化点',
    'Faith': '信仰',
    'Kittens': '猫咪',
    'Starchart': '星图',
    'Antimatter': '反物质',
    'TemporalFlux': '时间通量',
    'Gflops': '浮点运算能力',
    'Hashrates': '哈希率',
    'Ivory': '象牙',
    'Spice': '香料',
    'Unicorns': '独角兽',
    'Alicorn': '翼角兽',
    'Necrocorn': '死灵兽',
    'Tears': '眼泪',
    'Karma': '业',
    'Paragon': '领导力',
    'BurnedParagon': '燃烧领导力',
    'TimeCrystal': '时间水晶',
    'Sorrow': '悲伤',
    'Relic': '圣遗物',
    'Void': '虚空',
    'ElderBox': '礼盒',
    'WrappingPaper': '包装纸',
    'Hut': '小屋',
    'LogHouse': '木屋',
    'Mansion': '宅邸',
    'Workshop': '工作台',
    'Factory': '工厂',
    'Field': '猫薄荷田',
    'Pasture': '牧场',
    'SolarFarm': '太阳能发电站',
    'Mine': '矿井',
    'LumberMill': '木材厂',
    'Aqueduct': '水渠',
    'HydroPlant': '水电站',
    'OilWell': '油井',
    'Quarry': '采石场',
    'Smelter': '熔炉',
    'Biolab': '生物实验室',
    'Calciner': '锻烧炉',
    'Reactor': '反应堆',
    'Accelerator': '加速器',
    'Steamworks': '蒸汽机',
    'Magneto': '磁发电机',
    'Library': '图书馆',
    'Academy': '研究院',
    'Observatory': '天文台',
    'Amphitheatre': '剧场',
    'BroadcastTower': '广播塔',
    'Tradepost': '交易站',
    'Chapel': '教堂',
    'Temple': '寺庙',
    'Mint': '铸物厂',
    'UnicornPasture': '独角兽牧场',
    'Ziggurat': '庙塔',
    'Chronosphere': '空间转移发生器',
    'Barn': '粮仓',
    'Harbor': '港口',
    'Warehouse': '仓库',
    'Brewery': '酿酒厂',
    'Solarchant': '阳光赞歌',
    'Scholasticism': '经院哲学',
    'GoldenSpire': '金色塔尖',
    'SunAltar': '太阳祭坛',
    'StainedGlass': '彩色玻璃',
    'SolarRevolution': '太阳革命',
    'Basilica': '大教堂',
    'Templars': '圣殿骑士',
    'Apocripha': '新约外传',
    'Transcendence': '超越',*/
    'Zebras': '斑马',
    'Dragons': '龙',
    'Lizards': '蜥蜴',
    'Sharks': '鲨鱼',
    'Griffins': '狮鹫',
    'Nagas': '娜迦',
    'Spiders': '蜘蛛',
    'Leviathans': '利维坦',
    'Spring': '春季',
    'Summer': '夏季',
    'Autumn': '秋季',
    'Winter': '冬季',
    'Wood': '木材',
    'Beam': '木梁',
    'Slab': '石板',
    'Plate': '金属板',
    'Steel': '钢',
    'Gear': '齿轮',
    'Alloy': '合金',
    'Eludium': 'E合金',
    'Scaffold': '脚手架',
    'Ship': '船',
    'Tanker': '油轮',
    'Kerosene': '煤油',
    'Parchment': '羊皮纸',
    'Manuscript': '手稿',
    'Compedium': '概要',
    'Blueprint': '蓝图',
    'Thorium': '钍',
    'Megalith': '巨石',
    'Enable Scientists': '启用科学家',
    'Building': '建筑',
    'Space': '太空',
    'Crafting': '工艺',
    'Trading': '贸易',
    'Hunting': '狩猎',
    'Festival': '节日',
    'Religion': '宗教',
    'Blackcoin': '黑币',
    'Bloodstone': '血石',
    'Concrate': '混凝土',
    'Buildings': '建筑',
    'Techs': '科技',
    'Upgrades': '升级',
    'Races': '探险队出发！',
    'Missions': '探索星球',
    'woodcutter': '伐木工',
    'farmer': '农民',
    'scholar': '学者',
    'hunter': '猎人',
    'miner': '矿工',
    'priest': '牧师',
    'geologist': '地质学家',
    'engineer': '工程师',
    'Policies': '政策',
    '': '',
    '': '',
    '': '',
    '': '',

};


//2.采集新词
//20190320@JAR
//2019051@Blue

var cnItem = function() {
    let checkEnglish = false;

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof(text) != "string")
        return text;
    else {
        for (
            let i = 0; i < text.length; i++
        ) {
            s = text.charCodeAt(i);

            if (
                (s >= 65 && s <= 90) || (s >= 97 && s <= 122)
            ) {
                checkEnglish = true;
                break;
            }
        }
    }

    //检验传参是否英文
    if (!checkEnglish) return text;
    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return cnItems[i];
    }

    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (text == cnItems._OTHER_[i])
            return text;
    }

    //未收录则保存
    /*cnItems._OTHER_.push(text);
    cnItems._OTHER_.sort(
        function(a, b) {
            return a.localeCompare(b)
        }
    );*/

    /*
    		//开启生词打印
    		console.log(
    	'有需要汉化的英文：', text
    		);
    */

    //返回生词字串
    return text;
};


var kg_version = '珂学家-Cheney';

// Game will be referenced in loadTest function
var game = this.game;

var run = function() {

    var options = {
        // When debug is enabled, messages that go to the game log are also logged using window.console.
        debug: false,

        // The interval at which the internal processing loop is run, in milliseconds.
        interval: 1000,

        // The default color for KS messages in the game log (like enabling and disabling items).
        msgcolor: '#aa50fe', // dark purple
        // The color for activity summaries.
        summarycolor: '#009933', // light green
        // The color for log messages that are about activities (like festivals and star observations).
        activitycolor: '#E65C00', // orange
        // The color for resources with stock counts higher than current resource max
        stockwarncolor: '#DD1E00',

        // The default consume rate.
        consume: 0.6,

        // The default settings for game automation.
        auto: {
            // Settings related to KS itself.
            engine: {
                // Should any automation run at all?
                enabled: false
            },
            autoparagon: {
                enabled: false,
                trigger: 6,
                items: {
                    infinite: {
                        enabled: false,
                        subTrigger: 1,
                        label: '无限流'
                    },
                    /*xfldc: {
                    	enabled: false,
                    	subTrigger: "0",
                    	label: '暂时没效果' //'建造冷冻仓(无限流专用)'
                    }*/
                }
            },
            autotime: {
                enabled: false,
                items: {
                    x1: {
                        enabled: false,
                        subTrigger: 1,
                        label: '燃烧水晶数量'
                    }
                }
            },
            faith: {
                // Should religion building be automated?
                enabled: true,
                // At what percentage of the storage capacity should KS build faith buildings?
                trigger: 0,
                // Which religious upgrades should be researched?
                items: {
                    // Variant denotes which category the building or upgrade falls within in the Religion tab.
                    // Ziggurats are variant z.
                    unicornTomb: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'z'
                    },
                    ivoryTower: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'z'
                    },
                    ivoryCitadel: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'z'
                    },
                    skyPalace: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'z'
                    },
                    unicornUtopia: {
                        require: 'gold',
                        limited: 9999,
                        enabled: false,
                        variant: 'z'
                    },
                    sunspire: {
                        require: 'gold',
                        limited: 9999,
                        enabled: false,
                        variant: 'z'
                    },
                    marker: {
                        require: 'unobtainium',
                        limited: 9999,
                        enabled: false,
                        variant: 'z'
                    },
                    unicornGraveyard: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'z'
                    },
                    unicornNecropolis: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'z'
                    },
                    blackPyramid: {
                        require: 'unobtainium',
                        limited: 9999,
                        enabled: false,
                        variant: 'z'
                    },
                    // Order of the Sun is variant s.
                    solarchant: {
                        require: 'faith',
                        limited: 10,
                        enabled: false,
                        variant: 's'
                    },
                    scholasticism: {
                        require: 'faith',
                        limited: 9999,
                        enabled: false,
                        variant: 's'
                    },
                    goldenSpire: {
                        require: 'faith',
                        limited: 7,
                        enabled: false,
                        variant: 's'
                    },
                    sunAltar: {
                        require: 'faith',
                        limited: 7,
                        enabled: false,
                        variant: 's'
                    },
                    stainedGlass: {
                        require: 'faith',
                        limited: 9999,
                        enabled: false,
                        variant: 's'
                    },
                    solarRevolution: {
                        require: 'faith',
                        limited: 9999,
                        enabled: true,
                        variant: 's'
                    },
                    basilica: {
                        require: 'faith',
                        limited: 6,
                        enabled: false,
                        variant: 's'
                    },
                    templars: {
                        require: 'faith',
                        limited: 5,
                        enabled: false,
                        variant: 's'
                    },
                    apocripha: {
                        require: 'faith',
                        limited: 9999,
                        enabled: false,
                        variant: 's'
                    },
                    transcendence: {
                        require: 'faith',
                        limited: 9999,
                        enabled: false,
                        variant: 's'
                    },
                    // Cryptotheology is variant c.
                    blackObelisk: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'c'
                    },
                    blackNexus: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'c'
                    },
                    blackCore: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'c'
                    },
                    singularity: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'c'
                    },
                    blackLibrary: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'c'
                    },
                    blackRadiance: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'c'
                    },
                    blazar: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'c'
                    },
                    darkNova: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'c'
                    },
                    holyGenocide: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'c'
                    },
                }
            },
            build: {
                // Should buildings be built automatically?
                enabled: true,
                // When a building requires a certain resource (this is what their *require* property refers to), then
                // this is the percentage of the storage capacity of that resource, that has to be met for the building
                // to be built.
                trigger: 0.75,
                // The items that be automatically built.
                // Every item can define a required resource. This resource has to be available at a certain capacity for
                // the building to be built. The capacity requirement is defined by the trigger value set for the section.
                //
                // Additionally, for upgradeable buildings, the item can define which upgrade stage it refers to.
                // For upgraded buildings, the ID (or internal name) of the building can be controlled through the *name*
                // property. For other buildings, the key of the item itself is used.
                items: {
                    // housing
                    hut: {
                        require: 'wood',
                        limited: 10,
                        enabled: true
                    },
                    logHouse: {
                        require: 'minerals',
                        limited: 1,
                        enabled: true
                    },
                    mansion: {
                        require: 'titanium',
                        limited: 45,
                        enabled: false
                    },

                    // craft bonuses
                    workshop: {
                        require: 'minerals',
                        limited: 311,
                        enabled: true
                    },
                    factory: {
                        require: 'titanium',
                        limited: 160,
                        enabled: true
                    },

                    // production
                    field: {
                        require: 'catnip',
                        limited: 9999,
                        enabled: true
                    },
                    pasture: {
                        require: 'catnip',
                        limited: 9999,
                        enabled: false,
                        stage: 0
                    },
                    solarFarm: {
                        require: 'titanium',
                        limited: 9999,
                        enabled: false,
                        stage: 1,
                        name: 'pasture'
                    },
                    mine: {
                        require: 'wood',
                        limited: 300,
                        enabled: true
                    },
                    lumberMill: {
                        require: 'minerals',
                        limited: 9999,
                        enabled: true
                    },
                    aqueduct: {
                        require: 'minerals',
                        limited: 9999,
                        enabled: false,
                        stage: 0
                    },
                    hydroPlant: {
                        require: 'titanium',
                        limited: 9999,
                        enabled: false,
                        stage: 1,
                        name: 'aqueduct'
                    },
                    oilWell: {
                        require: 'coal',
                        limited: 9999,
                        enabled: false
                    },
                    quarry: {
                        require: 'coal',
                        limited: 9999,
                        enabled: false
                    },

                    // conversion
                    smelter: {
                        require: 'minerals',
                        limited: 9999,
                        enabled: true
                    },
                    biolab: {
                        require: 'science',
                        limited: 430,
                        enabled: false
                    },
                    calciner: {
                        require: 'titanium',
                        limited: 9999,
                        enabled: false
                    },
                    reactor: {
                        require: 'titanium',
                        limited: 9999,
                        enabled: false
                    },
                    accelerator: {
                        require: 'titanium',
                        limited: 165,
                        enabled: false
                    },
                    steamworks: {
                        require: false,
                        limited: 9999,
                        enabled: false
                    },
                    magneto: {
                        require: false,
                        limited: 9999,
                        enabled: false
                    },

                    // science
                    library: {
                        require: 'wood',
                        limited: 270,
                        enabled: false,
                        stage: 0
                    },
                    dataCenter: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        stage: 1,
                        name: 'library'
                    },
                    academy: {
                        require: 'wood',
                        limited: 9999,
                        enabled: false
                    },
                    observatory: {
                        require: 'iron',
                        limited: 9999,
                        enabled: true
                    },

                    // other
                    amphitheatre: {
                        require: 'minerals',
                        limited: 9999,
                        enabled: false,
                        stage: 0
                    },
                    broadcastTower: {
                        require: 'titanium',
                        limited: 9999,
                        enabled: true,
                        stage: 1,
                        name: 'amphitheatre'
                    },
                    tradepost: {
                        require: 'gold',
                        limited: 240,
                        enabled: true
                    },
                    chapel: {
                        require: 'minerals',
                        limited: 75,
                        enabled: false
                    },
                    temple: {
                        require: 'gold',
                        limited: 9999,
                        enabled: true
                    },
                    mint: {
                        require: false,
                        limited: 9999,
                        enabled: false
                    },
                    unicornPasture: {
                        require: false,
                        limited: 9999,
                        enabled: false
                    },
                    ziggurat: {
                        require: false,
                        limited: 9999,
                        enabled: true
                    },
                    chronosphere: {
                        require: 'unobtainium',
                        limited: 9999,
                        enabled: false
                    },
                    aiCore: {
                        require: false,
                        limited: 9999,
                        enabled: false
                    },
                    brewery: {
                        require: false,
                        limited: 9999,
                        enabled: true
                    },

                    // storage
                    barn: {
                        require: 'wood',
                        limited: 9999,
                        enabled: true
                    },
                    harbor: {
                        require: false,
                        limited: 9999,
                        enabled: false
                    },
                    warehouse: {
                        require: false,
                        limited: 9999,
                        enabled: false
                    }
                }
            },
            space: {
                // Should space buildings be built automatically?
                enabled: false,
                // The functionality of the space section is identical to the build section. It just needs to be treated
                // seperately, because the game internals are slightly different.
                trigger: 0,
                items: {
                    // Cath
                    spaceElevator: {
                        require: 'unobtainium',
                        limited: 9999,
                        enabled: false
                    },
                    sattelite: {
                        require: 'titanium',
                        limited: 9999,
                        enabled: false
                    },
                    spaceStation: {
                        require: 'oil',
                        limited: 9999,
                        enabled: false
                    },

                    // Moon
                    moonOutpost: {
                        require: 'uranium',
                        limited: 60,
                        enabled: false
                    },
                    moonBase: {
                        require: 'unobtainium',
                        limited: 9999,
                        enabled: false
                    },

                    // Dune
                    planetCracker: {
                        require: 'science',
                        limited: 31,
                        enabled: false
                    },
                    hydrofracturer: {
                        require: 'science',
                        limited: 9999,
                        enabled: false
                    },
                    spiceRefinery: {
                        require: 'science',
                        limited: 1,
                        enabled: true
                    },

                    // Piscine
                    researchVessel: {
                        require: 'titanium',
                        limited: 50,
                        enabled: false
                    },
                    orbitalArray: {
                        require: 'eludium',
                        limited: 9999,
                        enabled: false
                    },

                    // Helios
                    sunlifter: {
                        require: 'eludium',
                        limited: 9999,
                        enabled: false
                    },
                    containmentChamber: {
                        require: 'science',
                        limited: 9999,
                        enabled: false
                    },
                    heatsink: {
                        require: 'thorium',
                        limited: 9999,
                        enabled: false
                    },
                    sunforge: {
                        require: false,
                        limited: 9999,
                        enabled: false
                    },

                    // T-Minus
                    cryostation: {
                        require: 'eludium',
                        limited: 9999,
                        enabled: false
                    },

                    // Kairo
                    spaceBeacon: {
                        require: 'antimatter',
                        limited: 9999,
                        enabled: false
                    },

                    // Yarn
                    terraformingStation: {
                        require: 'antimatter',
                        limited: 9999,
                        enabled: false
                    },
                    hydroponics: {
                        require: 'kerosene',
                        limited: 9999,
                        enabled: false
                    },

                    // Umbra
                    hrHarvester: {
                        require: 'antimatter',
                        limited: 9999,
                        enabled: false
                    },

                    // Charon
                    entangler: {
                        require: 'antimatter',
                        limited: 9999,
                        enabled: false
                    },

                    // Centaurus
                    tectonic: {
                        require: 'antimatter',
                        limited: 9999,
                        enabled: false
                    },
                    moltenCore: {
                        require: 'uranium',
                        limited: 9999,
                        enabled: false
                    }
                }
            },
            time: {
                // Should time upgrades be built automatically?
                enabled: false,
                trigger: 0,
                items: {
                    // Variants denote whether these buildings fall within the Chronoforge or Void categories.
                    // Chronoforge has variant chrono.
                    temporalBattery: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'chrono'
                    },
                    blastFurnace: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'chrono'
                    },
                    timeBoiler: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'chrono'
                    },
                    temporalAccelerator: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'chrono'
                    },
                    temporalImpedance: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'chrono'
                    },
                    ressourceRetrieval: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'chrono'
                    },

                    // Void Space has variant void.
                    cryochambers: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'void'
                    },
                    voidHoover: {
                        require: 'antimatter',
                        limited: 9999,
                        enabled: false,
                        variant: 'void'
                    },
                    voidRift: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'void'
                    },
                    chronocontrol: {
                        require: 'temporalFlux',
                        limited: 9999,
                        enabled: false,
                        variant: 'void'
                    },
                    voidResonator: {
                        require: false,
                        limited: 9999,
                        enabled: false,
                        variant: 'void'
                    }
                }
            },
            craft: {
                // Should resources be crafted automatically?
                enabled: false,
                // Every item can define a required resource with the *require* property.
                // At what percentage of the storage capacity of that required resource should the listed resource be crafted?
                trigger: 0.95,
                // The items that can be crafted.
                // In addition to the *require* property, which is explained above, items can also define a *max*. If they
                // do, no more than that resource will be automatically produced. This feature can not be controlled through
                // the UI and is not used for any resource by default.
                // The *limited* property tells KS to craft resources whenever the ratio of the component cost of the stored resources
                // to the number of stored components is greater than the limit ratio "limRat".
                // This means that if limRat is 0.5, then if you have 1000 beams and 500 beams worth of scaffolds, 250 of the beams
                // will be crafted into scaffolds. If instead limRat is 0.75, 625 of the beams will be crafted into scaffolds for a final result
                // of 1125 beams-worth of scaffolds and 375 remaining beams.
                // Currently, limRat is not modifiable through the UI, though if there is demand, perhaps this will be added in the future.
                // Limited has a few other effects like balancing plates and steel while minimizing iron waste

                // TLDR: The purpose of the limited property is to proportionally distribute raw materials
                // across all crafted resources without wasting raw materials.

                items: {
                    wood: {
                        require: 'catnip',
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: false
                    },
                    beam: {
                        require: 'wood',
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: true
                    },
                    slab: {
                        require: 'minerals',
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: true
                    },
                    steel: {
                        require: 'coal',
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: true
                    },
                    plate: {
                        require: 'iron',
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: true
                    },
                    alloy: {
                        require: 'titanium',
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: true
                    },
                    concrate: {
                        require: false,
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: false
                    },
                    gear: {
                        require: false,
                        max: 0,
                        limited: true,
                        limRat: 0.25,
                        enabled: false
                    },
                    scaffold: {
                        require: false,
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: false
                    },
                    ship: {
                        require: false,
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: false
                    },
                    tanker: {
                        require: false,
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: false
                    },
                    parchment: {
                        require: false,
                        max: 0,
                        limited: false,
                        limRat: 0.5,
                        enabled: true
                    },
                    manuscript: {
                        require: 'culture',
                        max: 0,
                        limited: false,
                        limRat: 0.5,
                        enabled: true
                    },
                    compedium: {
                        require: 'science',
                        max: 0,
                        limited: false,
                        limRat: 0.5,
                        enabled: true
                    },
                    blueprint: {
                        require: 'science',
                        max: 0,
                        limited: false,
                        limRat: 0.5,
                        enabled: true
                    },
                    kerosene: {
                        require: 'oil',
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: true
                    },
                    megalith: {
                        require: false,
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: false
                    },
                    eludium: {
                        require: 'unobtainium',
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: true
                    },
                    thorium: {
                        require: 'uranium',
                        max: 0,
                        limited: true,
                        limRat: 0.5,
                        enabled: true
                    }
                }
            },
            trade: {
                // Should KS automatically trade?
                enabled: true,
                // Every trade can define a required resource with the *require* property.
                // At what percentage of the storage capacity of that required resource should the trade happen?
                trigger: 0.98,
                // Trades can be limited to only happen during specific seasons. This is because trades with certain races
                // are more effective during specific seasons.
                // The *allowcapped* property allows us to trade even if the sold resources are at their cap.
                items: {
                    dragons: {
                        enabled: false,
                        require: 'titanium',
                        allowcapped: false,
                        limited: false,
                        summer: true,
                        autumn: true,
                        winter: true,
                        spring: true
                    },

                    zebras: {
                        enabled: true,
                        require: false,
                        allowcapped: false,
                        limited: true,
                        summer: true,
                        autumn: true,
                        winter: true,
                        spring: true
                    },

                    lizards: {
                        enabled: false,
                        require: 'minerals',
                        allowcapped: false,
                        limited: false,
                        summer: true,
                        autumn: false,
                        winter: false,
                        spring: false
                    },

                    sharks: {
                        enabled: false,
                        require: 'iron',
                        allowcapped: false,
                        limited: false,
                        summer: false,
                        autumn: false,
                        winter: true,
                        spring: false
                    },

                    griffins: {
                        enabled: false,
                        require: 'wood',
                        allowcapped: false,
                        limited: false,
                        summer: false,
                        autumn: true,
                        winter: false,
                        spring: false
                    },

                    nagas: {
                        enabled: false,
                        require: false,
                        allowcapped: false,
                        limited: false,
                        summer: false,
                        autumn: false,
                        winter: false,
                        spring: true
                    },

                    spiders: {
                        enabled: false,
                        require: false,
                        allowcapped: false,
                        limited: false,
                        summer: false,
                        autumn: true,
                        winter: false,
                        spring: false
                    },

                    leviathans: {
                        enabled: false,
                        require: 'unobtainium',
                        allowcapped: true,
                        limited: false,
                        summer: true,
                        autumn: true,
                        winter: true,
                        spring: true
                    }
                }
            },
            upgrade: {
                //Should KS automatically upgrade?
                enabled: false,
                items: {
                    upgrades: {
                        enabled: true
                    },
                    techs: {
                        enabled: true
                    },
                    races: {
                        enabled: true
                    },
                    missions: {
                        enabled: true,
                        subTrigger: 4,
                        misc: true
                    },
                    buildings: {
                        enabled: false
                    },
                    policies: {
                        enabled: true
                    }
                }
            },
            options: {
                //Which misc options should be enabled?
                enabled: true,
                items: {
                    observe: {
                        enabled: false,
                        misc: true,
                        label: '观测天文事件'
                    },
                    festival: {
                        enabled: true,
                        misc: true,
                        label: '举办节日'
                    },
                    autoTranscendence: {
                        enabled: false,
                        misc: true,
                        label: '自动超越'
                    },
                    openTempusFugit: {
                        enabled: false,
                        subTrigger: 10000,
                        misc: true,
                        label: '开启时间通量'
                    },
                    //shipOverride:       {enabled: true,                    misc: true, label: '强制 243 艘船'},
                    autofeed: {
                        enabled: false,
                        misc: true,
                        label: '献祭上古神'
                    },
                    hunt: {
                        enabled: true,
                        subTrigger: 0.8,
                        misc: true,
                        label: '狩猎'
                    },
                    catDistribution: {
                        enabled: true,
                        misc: true,
                        label: '分配空闲猫咪'
                    },
                    leaderPromote: {
                        enabled: true,
                        misc: true,
                        label: '提拔领袖'
                    },
                    // buildEmbassies:     {enabled: true, subTrigger: 0.9,   misc: true, label: '建造大使馆 (测试功能)'},
                }
            },
            distribute: {
                // Should KS automatically distribute free kittens
                enabled: true,
                items: {
                    // dynamic priority. distribute to the job which have lowest (job.val / job.max) value.
                    // if all jobs reach the max, then distribute kittens to unlimited job.
                    woodcutter: {
                        enabled: true,
                        max: 80,
                        limited: true
                    },
                    farmer: {
                        enabled: true,
                        max: 1,
                        limited: true
                    },
                    scholar: {
                        enabled: true,
                        max: 29,
                        limited: true
                    },
                    hunter: {
                        enabled: true,
                        max: 30,
                        limited: false
                    },
                    miner: {
                        enabled: true,
                        max: 75,
                        limited: true
                    },
                    priest: {
                        enabled: true,
                        max: 24,
                        limited: true
                    },
                    geologist: {
                        enabled: true,
                        max: 100,
                        limited: true
                    },
                    engineer: {
                        enabled: false,
                        max: 0,
                        limited: false
                    },
                }
            },
            filter: {
                //What log messages should be filtered?
                enabled: true,
                items: {
                    buildFilter: {
                        enabled: true,
                        filter: true,
                        label: '建筑',
                        variant: "ks-activity type_ks-build"
                    },
                    craftFilter: {
                        enabled: true,
                        filter: true,
                        label: '工艺',
                        variant: "ks-activity type_ks-craft"
                    },
                    upgradeFilter: {
                        enabled: true,
                        filter: true,
                        label: '升级',
                        variant: "ks-activity type_ks-upgrade"
                    },
                    researchFilter: {
                        enabled: true,
                        filter: true,
                        label: '研究',
                        variant: "ks-activity type_ks-research"
                    },
                    tradeFilter: {
                        enabled: true,
                        filter: true,
                        label: '贸易',
                        variant: "ks-activity type_ks-trade"
                    },
                    huntFilter: {
                        enabled: true,
                        filter: true,
                        label: '狩猎',
                        variant: "ks-activity type_ks-hunt"
                    },
                    faithFilter: {
                        enabled: true,
                        filter: true,
                        label: '太阳秩序',
                        variant: "ks-activity type_ks-faith"
                    },
                    festivalFilter: {
                        enabled: true,
                        filter: true,
                        label: '节日',
                        variant: "ks-activity type_ks-festival"
                    },
                    starFilter: {
                        enabled: true,
                        filter: true,
                        label: '天文事件',
                        variant: "ks-activity type_ks-star"
                    },
                    promoteFilter: {
                        enabled: true,
                        filter: true,
                        label: '提拔领袖',
                        variant: "ks-activity type_ks-promote"
                    },
                    transcendenceFilter: {
                        enabled: true,
                        filter: true,
                        label: '超越',
                        variant: "ks-activity type_ks-transcendence"
                    },
                    miscFilter: {
                        enabled: true,
                        filter: true,
                        label: '杂项',
                        variant: "ks-activity"
                    }
                }
            },
            resources: {
                furs: {
                    stock: 1000
                },
                unobtainium: {
                    consume: 1.0
                }
            },
            /*,
            cache: {
            		cache:    [],
            		cacheSum: {}
            }*/
           /* inoutdeploy: {
                trigger: ''
            }*/
        }
    };

    // GameLog Modification
    // ====================

    // Increase messages displayed in log
    game.console.maxMessages = 2000;
    var IincKAssign = 0;
    var craftPriority = [
        [],
        [], 0, []
    ];

    var printoutput = function(args) {
        if (options.auto.filter.enabled) {
            for (var filt in options.auto.filter.items) {
                var filter = options.auto.filter.items[filt]
                if (filter.enabled && filter.variant === args[1]) {
                    return;
                }
            }
        }
        var color = args.pop();
        args[1] = args[1] || 'ks-default';

        // update the color of the message immediately after adding
        var msg = game.msg.apply(game, args);
        $(msg.span).css('color', color);

        if (options.debug && console) console.log(args);
    };

    // Used for option change messages and other special notifications
    var message = function() {
        var args = Array.prototype.slice.call(arguments);
        args.push('ks-default');
        args.push(options.msgcolor);
        printoutput(args);
    };

    var activity = function() {
        var args = Array.prototype.slice.call(arguments);
        var activityClass = args.length > 1 ? ' type_' + args.pop() : '';
        args.push('ks-activity' + activityClass);
        args.push(options.activitycolor);
        printoutput(args);
    };

    var summary = function() {
        var args = Array.prototype.slice.call(arguments);
        args.push('ks-summary');
        args.push(options.summarycolor);
        printoutput(args);
    };

    var warning = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('Warning!');

    };

    // Core Engine for Kitten Scientists
    // =================================

    var Engine = function() {
        this.upgradeManager = new UpgradeManager();
        this.buildManager = new BuildManager();
        this.spaceManager = new SpaceManager();
        this.craftManager = new CraftManager();
        this.bulkManager = new BulkManager();
        this.tradeManager = new TradeManager();
        this.religionManager = new ReligionManager();
        this.timeManager = new TimeManager();
        //this.explorationManager = new ExplorationManager();
        this.villageManager = new TabManager('Village');
        //this.cacheManager = new CacheManager();
    };

    Engine.prototype = {
        upgradeManager: undefined,
        buildManager: undefined,
        spaceManager: undefined,
        craftManager: undefined,
        bulkManager: undefined,
        tradeManager: undefined,
        religionManager: undefined,
        timeManager: undefined,
        //explorationManager: undefined,
        villageManager: undefined,
        //cacheManager: undefined,
        loop: undefined,
        start: function() {
            if (game.isWebWorkerSupported() && game.useWorkers) {
                console.log('启用后台猫咪科学家！！喵~');
                var blob = new Blob([
                    "onmessage = function(e) { setInterval(function(){postMessage('miaowu')}, '" + options.interval + "' ); }"
                ]);
                var blobURL = window.URL.createObjectURL(blob);

                this.worker = new Worker(blobURL);
                this.worker.addEventListener('message', this.iterate.bind(this));
                this.worker.postMessage("miaowu");
                message('启用后台猫咪科学家！！喵~');
            } else {
                if (this.loop) return;
                this.loop = setInterval(this.iterate.bind(this), options.interval);
                message('启用猫咪科学家!');
            }
        },
        stop: function() {
            if (game.isWebWorkerSupported() && game.useWorkers) {
                this.worker.terminate();
            }
            if (!this.loop) return;
            clearInterval(this.loop);
            this.loop = undefined;
            message('禁用小猫珂学家！');
        },
        iterate: function() {
            var subOptions = options.auto.options;
            if (options.auto.autoparagon.enabled) this.reset();
            if (options.auto.upgrade.enabled) this.upgrade();
            if (subOptions.enabled && subOptions.items.festival.enabled) this.holdFestival();
            if (options.auto.trade.enabled) this.trade();
            if (subOptions.enabled && subOptions.items.observe.enabled) this.observeStars();
            if (options.auto.build.enabled) this.build();
            if (options.auto.space.enabled) this.space();
            if (options.auto.faith.enabled) this.worship();
            if (options.auto.craft.enabled) this.craft();
            if (subOptions.enabled && subOptions.items.hunt.enabled) this.hunt();
            if (options.auto.time.enabled) this.chrono();
            //if (subOptions.enabled && subOptions.items.crypto.enabled) this.crypto();
            if (options.auto.distribute.enabled) this.distribute();
            if (subOptions.enabled && subOptions.items.autofeed.enabled) this.autofeed();
            if (subOptions.enabled) this.miscOptions();
            if (options.auto.autotime.enabled) this.autotime();
        },
        reset: function() {
            if (game.resPool.get("catnip").value < 10) {
                game.bld.gatherCatnip();
                game.bld.gatherCatnip();
                game.bld.gatherCatnip();
                game.bld.gatherCatnip();
                game.bld.gatherCatnip();
            } //无转移猫薄荷

            if (game.religion.meta[1].meta[5].val) {
                if (game.bld.get("ziggurat").val <= 1 && game.resPool.get("megalith").value < 100) { //巨石不够点出庙塔
                    game.craft("megalith", 1);
                }

                if (game.bld.get("ziggurat").val != 0 && !game.workshop.get("chronoforge").researched && game.resPool.get("relic").value < 6) { //未升级时间锻造
                    game.religionTab.render();
                    game.religionTab.refineTCBtn.controller._transform(game.religionTab.refineTCBtn.model, 1);
                }

                if (game.diplomacyTab.visible && game.resPool.get("unobtainium").value >= 6000 && !game.science.getPolicy("necrocracy").researched) {
                    if (game.diplomacyTab.racePanels.length == 8) {
                        game.diplomacy.tradeMultiple(game.diplomacy.get("leviathans"), 1);
                        game.libraryTab.policyPanel.children[13].controller.onPurchase(game.libraryTab.policyPanel.children[13].model, {}, function() {});
                    }
                }

                if (game.resPool.get("timeCrystal").value < 1e4 && options.auto.build.items.chronosphere.limited) {
                    options.auto.build.items.chronosphere.limited = 0; //水晶低于保留值时关闭超时空传送仪
                }

                if (!options.auto.autoparagon.items.infinite.enabled && options.auto.autoparagon.enabled) {
                    var solarproduction = 1e4 * (10 + game.getEffect("solarRevolutionLimit") + (game.challenges.getChallenge("atheism").researched ? (game.religion.transcendenceTier) : 0)) * (1 + game.getLimitedDR(game.getEffect("faithSolarRevolutionBoost"), 4));
                    var productionRatio = solarproduction * (game.prestige.getParagonProductionRatio() + 1) / 3e6;
                    var steamworksVal = Math.log2(productionRatio) / Math.log2(game.bld.getBuildingExt("steamworks").meta.priceRatio + game.getEffect("priceRatio"));
                    var mineVal = Math.log2(productionRatio) / Math.log2(game.bld.getBuildingExt("mine").meta.priceRatio + game.getEffect("priceRatio"));
                    var lumberMillval  = Math.log2(productionRatio) / Math.log2(game.bld.getBuildingExt("lumberMill").meta.priceRatio + game.getEffect("priceRatio"));
                    var reactorVal = Math.log2(productionRatio) / Math.log2(game.bld.getBuildingExt("reactor").meta.priceRatio + game.getEffect("priceRatio")) ;
                    var reactorLim = options.auto.build.items.reactor.limited;
                    var lumberMillLim = options.auto.build.items.lumberMill.limited;
                    var mineLim = options.auto.build.items.mine.limited;
                    var steamworksLim = options.auto.build.items.steamworks.limited;
                    var magnetoLim = options.auto.build.items.magneto.limited;
                    if (productionRatio > 1.17 && reactorLim == 165 && steamworksLim == 90) {
                        options.auto.build.items.reactor.limited += Math.ceil(reactorVal);
                        options.auto.build.items.lumberMill.limited += Math.ceil(lumberMillval);
                        options.auto.build.items.mine.limited += Math.ceil(mineVal);
                        options.auto.build.items.steamworks.limited += Math.ceil(steamworksVal);
                        options.auto.build.items.magneto.limited += Math.ceil(steamworksVal);
                    }

                    if (options.auto.build.items.hut.limited == 10 && game.workshop.get("concreteHuts").researched) {
                        options.auto.build.items.hut.limited = 999;//小屋等混凝土小屋在造
                    }

                    if (game.bld.get("workshop").on > 0 && game.science.get("construction").researched) {
                        if (game.resPool.get("scaffold").value >= 2e8 && options.auto.craft.items.scaffold.limited) {
                            $("#toggle-beam")[0].click();
                            $("#toggle-limited-scaffold")[0].click();
                        }

                        if (game.bld.get("factory").on == 160 && game.resPool.get("concrate").value > 4e8 * Math.pow(1.17, reactorVal) && options.auto.craft.items.concrate.enabled) {
                            $("#toggle-concrate")[0].click();
                        }

                        if (game.bld.get("reactor").on == reactorLim && game.resPool.get("plate").value > 1e7 * Math.pow(1.17, reactorVal) && options.auto.craft.items.plate.enabled) {
                            $("#toggle-plate")[0].click();
                        }

                       if (game.bld.get("temple").on == 150 && options.auto.craft.items.blueprint.enabled) {
                           /*options.auto.resources[]
                               furs: {
                                   stock: 1000
                               },
                                $("#toggle-blueprint")[0].click();
                                $("#toggle-concrate")[0].click();
                                $("#toggle-concrate")[0].click();
                                options.auto.craft.items.compedium.enabled = false;
                                options.auto.craft.items.manuscript.enabled = false;*/
                        }

                        if (!options.auto.craft.items.slab.enabled && game.resPool.get("slab").value < game.bldTab.children[7].model.prices[1].val) {
                            $("#toggle-slab")[0].click();
                        }

                        if (!game.workshop.get("mWReactor").researched && game.resPool.get("unobtainium").value >= 1000 && game.space.meta[2].meta[0].on) {
                            game.craft("eludium", 1);
                        }

                        if (game.resPool.get("slab").value > 1e10 * productionRatio && options.auto.craft.items.slab.enabled && options.auto.craft.items.concrate.enabled) {
                            $("#toggle-slab")[0].click();
                            game.clearLog();
                        }
                    }

                    if (game.workshop.get("chronoforge").researched && game.space.meta[0].meta[3].val && gamePage.calendar.cycle != 5) {
                        var x = 5;
                        if (x > 4 && gamePage.calendar.cycleYear != 0) {
                            x = x - gamePage.calendar.cycleYear;
                        }
                        if (!game.timeTab.cfPanel.children[0].children[0]) {
                            game.timeTab.render();
                        }
                        gamePage.timeTab.cfPanel.children[0].children[0].controller.doShatterAmt(gamePage.timeTab.cfPanel.children[0].children[0].model, x);
                        gamePage.timeTab.cfPanel.children[0].children[0].update();
                    }

                    if (options.auto.build.items.mansion.limited < 999 &&game.science.meta[0].meta[41].researched && game.space.meta[1].meta[0].val > 12) {
                        options.auto.space.items.sattelite.limited = 50;
                        options.auto.space.items.planetCracker.enabled = true;
                        options.auto.build.items.mansion.limited = 999;
                        $("#toggle-spaceStation")[0].click();
                    }

                    if (game.resPool.get("spice").value && !game.science.getPolicy("carnivale").researched) {
                        if (game.console.filters["trade"].enabled) { //日志过滤
                            for (var i in game.console.filters) {
                                game.console.filters[i].enabled = false;
                            }
                            game.ui.renderFilters();
                        }
                        game.libraryTab.policyPanel.children[27].controller.onPurchase(game.libraryTab.policyPanel.children[27].model, {}, function() {});
                    }

                    if (game.bld.getBuildingExt('chronosphere').meta.val >= 8 && game.resPool.get("eludium").value > 720 && options.auto.craft.items.eludium.enabled) {
                        $("#toggle-eludium")[0].click();
                    }

                    if (game.resPool.get("antimatter").value && game.resPool.get("antimatter").value < 1) {
                        game.resPool.get("antimatter").value = 0;
                        game.resPool.get("antimatter").isHidden = true;
                    }

                    for (var i of game.resPool.resources) {
                        game.resPool.addRes(i.name, game.getResourcePerTick(i.name, false), false);
                    }
                    game.village.update();
                }
            }

            var kittens_check = false;
            if (options.auto.autoparagon.items.infinite.enabled) {
                //var data= "是否跳过猫口检查,小屋,木屋,宅邸,工厂,神殿,工坊,铸币,空间站,圣殿";
                //var retain_data= "0,10,210,65,55,100,180,70,0,10";
                var woodN = game.resPool.get("wood").value;
                var loghouseN = Math.min(woodN, game.resPool.get("minerals").value * 0.8);
                var ironN = game.resPool.get("iron").value;
                var coalN = Math.min(game.resPool.get("coal").value, game.resPool.get("titanium").value, game.resPool.get("minerals").value, ironN);
                var faithN = Math.min(game.resPool.get("gold").value, game.resPool.get("faith").value);
                var mintN = Math.min(game.resPool.get("minerals").value, game.resPool.get("gold").value, game.resPool.get("iron").value);
                var chronosphereN = Math.min(game.resPool.get("science").value, game.resPool.get("timeCrystal").value, game.resPool.get("unobtainium").value, game.resPool.get("manpower").value);
                /*function Math.floor(Math.max(Math.log10(number) {
                	var L = 0;
                	while (number > 1e12) {
                		if (number < Number.MAX_VALUE) {
                			number = number / 10;
                			L++;
                		}
                	}Math.floor(Math.max(Math.log10())
                	return L;
                }*/
                kittens_check = Boolean(options.auto.autoparagon.items.infinite.subTrigger);
                var hutPrice = game.bld.getPriceRatio("hut");
                options.auto.build.items.hut.limited = Math.floor(Math.max(Math.log2(woodN) - 18.5, 0) / Math.log2(game.bld.getPriceRatio("hut")));
                var retain_loghouse = 150 + (11 * Math.floor(Math.max(Math.log2(loghouseN) - 36.55, 0)));
                var retain_mansion = 101 + (36 * Math.floor(Math.max(Math.log10(coalN) - 11, 0)));
                var retain_factory = 100 +  Math.floor(11.25 * Math.max(Math.log2(coalN) - 36.54, 0));
                var retain_temple = Math.max(101, Number(options.auto.autoparagon.items.infinite.subTrigger));
                var retain_workshop = 170 + Math.floor(11.25 * Math.max(Math.log2(loghouseN) - 36.54, 0));
                var retain_mint = 161 + Math.floor(11.25 *Math.max(Math.log2(mintN) - 36.54, 0));
                //var retain_spaceStation = kittens_check ? parseFloat(retain_data[8]) : 0;
                var retain_templars = 7 + (2 * Math.floor(Math.max(Math.log10(faithN) - 11, 0)));
                var retain_chronosphere = options.auto.autoparagon.trigger % 1000;
                var retain_library = 250 + (36 * Math.floor(Math.max(Math.log10(woodN) - 11, 0)));
                if (options.auto.autoparagon.trigger % 1000 == 73) {
                    retain_chronosphere = 73 + (15 * Math.floor(Math.max(Math.log10(chronosphereN) - 11, 0)));
                }
                var xfldc_tradepost = 0;

                /*if (game.resPool.get("relic").value > 1e10) {
                	for (i in game.religion.meta[2].meta) {
                		if (game.religion.meta[2].meta[i].unlocked) {
                			var TuNumber = game.resPool.get("relic").value / game.religion.meta[2].meta[i].prices[0].val;
                			if (i == 8 || 9) {
                				voidNumber = 0;
                			}
                			=== Infinity ? 0 :
                			spaceModel.options.controller.build(spaceModel, spaceNumber);
                		}
                	}
                }*/
                
                if (game.bld.getPriceRatio("hut") < 2.4) {
                    options.auto.build.items.hut.enabled = true;
                }

                if (game.resPool.get("timeCrystal").value < 4e5 && !options.auto.build.items.tradepost.enabled) {
                    var postN = Math.min(game.resPool.get("wood").value,game.resPool.get("minerals").value,game.resPool.get("gold").value,0)
                    options.auto.build.items.tradepost.limited = 36 * Math.floor(Math.max(Math.log10(postN) - 11, 0));
                    options.auto.build.items.tradepost.enabled = true;
                }

                if (game.workshopTab.visible && game.science.get("construction").researched) { //工坊优化
                    let retain_limit = Math.pow(1.5 * options.auto.autoparagon.trigger % 1000, 2);
                    //let retain_maxlimit = Math.max(retain_limit, game.bld.getBuildingExt("temple").meta.prices[3].val * Math.pow(game.bld.getBuildingExt("temple").meta.priceRatio + game.getEffect("priceRatio"), retain_temple - 1), game.bld.getBuildingExt("chronosphere").meta.prices[3].val * Math.pow(game.bld.getBuildingExt("chronosphere").meta.priceRatio + game.getEffect("priceRatio"), options.auto.autoparagon.trigger % 1000)) * 2;

                    //计算材料
                    let ratio = game.getResCraftRatio({});
                    var BuildRatio = game.bld.getBuildingExt("factory").meta.priceRatio + game.getEffect("priceRatio");
                    var Sum = 1 / (BuildRatio - 1);
                    let retain_alloy = 10000; //game.space.getBuilding("spaceStation").val >= retain_spaceStation ? retain_limit : Math.max(retain_limit, game.space.getBuilding("spaceStation").prices[3].val * Math.pow(game.space.getBuilding("spaceStation").priceRatio, retain_spaceStation - 1) * 2);
                    let retain_concrate = game.bld.get("factory").val >= retain_factory ? retain_limit : Math.max(retain_limit, game.bld.getBuildingExt("factory").meta.prices[2].val * Sum * (Math.pow(BuildRatio, retain_factory + 1) - 1));
                    let retain_steel = (game.bld.get("factory").val >= retain_factory && game.bld.get("mansion").val >= retain_mansion) ? retain_limit : Math.max(retain_limit, (game.bld.getBuildingExt("mansion").meta.prices[2].val * Sum * (Math.pow(BuildRatio, retain_mansion) - 1)) + (Math.ceil(retain_alloy / ratio) * game.workshop.getCraft("alloy").prices[1].val) + (Math.ceil(retain_concrate / ratio) * game.workshop.getCraft("concrate").prices[1].val));
                    let retain_slab = (game.bld.get("mansion").val >= retain_mansion) ?
                        retain_limit : Math.max(retain_limit, (game.bld.getBuildingExt("mansion").meta.prices[1].val * Sum * (Math.pow(BuildRatio, retain_mansion) - 1)) + Math.floor(retain_concrate * 2500 / ratio) + (game.bld.getBuildingExt("temple").meta.prices[1].val * Sum * (Math.pow(BuildRatio, retain_temple) - 1)));
                    let retain_plate = (game.bld.get("mint").val >= retain_mint && game.bld.get("factory").val >= retain_factory && game.bld.get("temple").val >= retain_temple) ? retain_limit : Math.max(retain_limit, (game.bld.getBuildingExt("factory").meta.prices[1].val * Sum * (Math.pow(BuildRatio, retain_factory + 1) - 1)) + (game.bld.getBuildingExt("temple").meta.prices[2].val * Sum * (Math.pow(BuildRatio, retain_temple + 1) - 1)) + (game.bld.getBuildingExt("mint").meta.prices[2].val * Sum * (Math.pow(BuildRatio, retain_mint + 1) - 1)));
                    let retain_manuscript = game.bld.get("temple").val >= retain_temple ? retain_limit : Math.max(retain_limit, game.bld.getBuildingExt("temple").meta.prices[3].val * Sum * (Math.pow(BuildRatio, retain_temple + 1) - 1));

                    //生成材料
                    if (game.resPool.get("slab").value <= retain_slab)
                        game.craft("slab", Math.floor(retain_slab / ratio));
                    if (game.resPool.get("plate").value <= retain_plate && game.workshop.getCraft("plate").unlocked) //金属板
                        game.craft("plate", Math.floor(Math.min(Math.ceil(retain_plate / ratio) * game.workshop.getCraft("plate").prices[0].val, game.resPool.get("iron").value) / game.workshop.getCraft("plate").prices[0].val));
                    if (game.resPool.get("steel").value <= retain_steel && game.workshop.getCraft("steel").unlocked) //钢
                        game.craft("steel", Math.floor(Math.min(Math.ceil(retain_steel / ratio) * game.workshop.getCraft("steel").prices[0].val, game.resPool.get("iron").value, game.resPool.get("coal").value) / game.workshop.getCraft("steel").prices[0].val));
                    if (game.workshop.getCraft("alloy").unlocked && game.resPool.get("alloy").value <= retain_alloy) //合金
                        game.craft("alloy", Math.floor(Math.min(Math.ceil(retain_alloy / ratio) * game.workshop.getCraft("alloy").prices[1].val, game.resPool.get("steel").value) / game.workshop.getCraft("alloy").prices[1].val));
                    if (game.workshop.getCraft("concrate").unlocked && game.resPool.get("concrate").value <= retain_concrate) //混凝土
                        game.craft("concrate", 0.99 * Math.floor(Math.min(Math.min(Math.ceil(retain_concrate / ratio) * game.workshop.getCraft("concrate").prices[1].val, game.resPool.get("steel").value) / game.workshop.getCraft("concrate").prices[1].val, Math.min(Math.ceil(retain_concrate / ratio) * game.workshop.getCraft("concrate").prices[0].val, game.resPool.get("slab").value) / game.workshop.getCraft("concrate").prices[0].val)));
                    if (game.resPool.get("furs").value >= 175)
                        game.craft("parchment", Math.floor(game.resPool.get("furs").value / game.workshop.getCraft("parchment").prices[0].val)); //所有毛皮都进行转换
                    if (game.bld.getBuildingExt("chronosphere").meta.val < options.auto.autoparagon.trigger % 1000)
                        game.craft("manuscript", Math.floor(Math.min(game.resPool.get("parchment").value, game.resPool.get("culture").value / 400) * 0.01));
                    if (game.bld.getBuildingExt("chronosphere").meta.val < options.auto.autoparagon.trigger % 1000 && game.resPool.get("manuscript").value >= retain_limit) //手稿转概要
                        game.craft("compedium", Math.floor(Math.min(game.resPool.get("manuscript").value - 100, game.resPool.get("science").value / 10000) * 0.01));
                    if (game.bld.getBuildingExt("chronosphere").meta.val < options.auto.autoparagon.trigger % 1000 && game.workshop.getCraft("blueprint").unlocked  ) //概要转蓝图
                        game.craft("blueprint", Math.floor(Math.min(game.resPool.get("compedium").value - 100, game.resPool.get("science").value / 25000) * 0.01));
                    if (game.resPool.get("kerosene").value <= 1e5 && game.science.get("oilProcessing").researched) //石油转煤油
                        game.craft("kerosene", 1e5);
                }

                /*if (options.auto.autoparagon.items.xfldc.enabled) { //冷冻仓功能
                	var xfldc_data = (options.auto.autoparagon.items.xfldc.subTrigger != null && options.auto.autoparagon.items.xfldc
                		.subTrigger != NaN) ? (options.auto.autoparagon.items.xfldc.subTrigger).toString().split(',') : [];
                	//var data= "每次建造冷冻仓数量,每次燃烧水晶数量,是否跳过过热判断,交易站,时间电池,时机炉,时间锅炉";
                	//var retain_data= "10,10,0,400,36,50,17";
                	var xfldc_amount = (xfldc_data.length == 4 || xfldc_data.length == 7) ? parseFloat(xfldc_data[0]) : parseFloat(
                		options.auto.autoparagon.items.xfldc.subTrigger);
                	var xfldc_crystal = (xfldc_data.length == 4 || xfldc_data.length == 7) ? parseFloat(xfldc_data[1]) : 10;
                	var xfldc_overheat = (xfldc_data.length == 4 || xfldc_data.length == 7) ? parseFloat(xfldc_data[2]) : 0; //每次造冷冻仓的数量,每次获得通量时燃烧水晶的数量，是否跳过过热判断
                	var xfldc_tradepost = (xfldc_data.length == 4 || xfldc_data.length == 7) ? parseFloat(xfldc_data[3]) : 400;
                	var xfldc_temporalBattery = xfldc_data.length == 7 ? parseFloat(xfldc_data[4]) : 36;
                	var xfldc_blastFurnace = xfldc_data.length == 7 ? parseFloat(xfldc_data[5]) : 50;
                	var xfldc_timeBoiler = xfldc_data.length == 7 ? parseFloat(xfldc_data[6]) : 17;

                	if (xfldc_tradepost != 0 && game.tabs[4].visible && game.tabs[5].visible && gamePage.bld.meta[0].meta[
                			33].val >= options.auto.autoparagon.trigger % 1000 && game.bld.meta[0].meta[29].val >= retain_temple &&
                		game.resPool.get("unobtainium").value > Math.pow(10, 15)) { //冷冻仓没事做搞搞利维坦交易
                		if (!game.religion.getZU("blackPyramid").val && game.resPool.get("spice").value <= 150000 && game.diplomacy.races[
                				3].unlocked) { //无黑金字塔
                			game.diplomacy.tradeMultiple(game.diplomacy.races[4], 1000);
                		}
                	}
                	/*if (game.science.get("voidSpace").researched && game.workshop.get("chronoforge").researched && game
                		.bld.meta[0].meta[33].val >= options.auto.autoparagon.trigger % 1000) { //需要建造冷冻仓
                		var cfPanel = game.tabs[7].cfPanel.children[0].children;
                		var vsPanel = game.tabs[7].vsPanel.children[0].children;
                		if (game.time.getVSU("cryochambers").val < xfldc_amount && game.resPool.get("karma").value >= game.time.getVSU(
                				"cryochambers").prices[2].val && game.time.getVSU("cryochambers").val + game.time.getVSU("usedCryochambers")
                			.val < 16070) {
                			for (var i = 0; i < xfldc_amount; i++)
                				vsPanel[1].controller.buyItem(vsPanel[1].model, {}, function() {}); //建造冷冻仓
                		} else {
                			let factor = gamePage.challenges.getChallenge("1000Years").researched ? 5 : 10;
                			if (game.time.getVSU("usedCryochambers").val) { //存在需要修复的冷冻仓
                				options.auto.time.items.chronocontrol.limited = vsPanel[2].model.on ? 1 : 0;
                				options.auto.time.items.temporalBattery.limited = cfPanel[1].model.on < xfldc_temporalBattery ?
                					xfldc_temporalBattery : 0;
                				options.auto.time.items.blastFurnace.limited = cfPanel[2].model.on < xfldc_blastFurnace ? xfldc_blastFurnace :
                					0;
                				if (gamePage.getEffect("heatMax") - gamePage.time.heat < factor * xfldc_crystal * 1.02 && game.time.getCFU(
                						"timeBoiler").on < xfldc_timeBoiler && game.time.getVSU("usedCryochambers").val != 0) //过热了点点炉子
                					cfPanel[3].controller.buyItem(cfPanel[3].model, {}, function() {});
                				if (game.calendar.darkFutureYears(true) > 0) //黑暗未来
                					cfPanel[5].controller.buyItem(cfPanel[5].model, {}, function() {});
                				if (gamePage.workshop.get("turnSmoothly").researched && game.tabs[0].buttons[35].model.on >= options.auto.autoparagon
                					.trigger % 1000) { //解锁时空波动
                					game.timeTab.update();
                					var ldcx = Math.floor(game.resPool.get("temporalFlux").value / 3000);
                					for (var i = 0; i < ldcx; i++)
                						vsPanel[0].controller.buyItem(vsPanel[0].model, {}, function() {}); //修复冷冻仓
                				}
                			}
                			if (gamePage.workshop.get("turnSmoothly").researched && game.resPool.get("temporalFlux").value < game.resPool.get("temporalFlux").maxValue && (gamePage.getEffect("heatMax") - gamePage.time.heat > factor * xfldc_crystal || xfldc_overheat || game.time.getVSU("usedCryochambers").val == 0)) { //烧水晶
                				if (!game.time.getCFU("blastFurnace").isAutomationEnabled)
                					game.time.getCFU("blastFurnace").isAutomationEnabled = true;
                				cfPanel[0].controller.doShatterAmt(cfPanel[0].model, xfldc_crystal);
                				cfPanel[0].update();
                			}
                		}
                	}
                }*/
            }

            var oldautoparagonstep = localStorage['cbc.autoparagon.step'] || 1;
            if (game.religion.meta[1].meta[5].val > 0 && (localStorage['cbc.resetAutomatic.step'] == 1 || !localStorage['cbc.resetAutomatic.step'])) {
                localStorage['cbc.autoparagon.step'] = 2;
            }
            if (localStorage['cbc.autoparagon.step'] == 2 && oldautoparagonstep == 1) {
                var base_unobtainium = game.space.meta[2].meta[1].on ? game.resPool.get("unobtainium").maxValue / (game.space.meta[
                    2].meta[1].on + 1) : game.resPool.get("unobtainium").maxValue;
                let MoonBase_limit = Math.floor(2500 * Math.pow(1.25, options.auto.autoparagon.trigger % 1000) / 0.97 /
                    base_unobtainium);
                let cbcSave = JSON.parse(localStorage['cbc.kitten-scientists']);
                if (cbcSave) {
                    var upgradeFilter = cbcSave.items["toggle-upgradeFilter"] != null ? cbcSave.items["toggle-upgradeFilter"] : true;
                    var researchFilter = cbcSave.items["toggle-researchFilter"] != null ? cbcSave.items["toggle-researchFilter"] : true;
                    var buildFilter = cbcSave.items["toggle-buildFilter"] != null ? cbcSave.items["toggle-buildFilter"] : true;
                    var tradeFilter = cbcSave.items["toggle-tradeFilter"] != null ? cbcSave.items["toggle-tradeFilter"] : true;
                }
                if (!options.auto.autoparagon.items.infinite.enabled) {
                    localStorage['cbc.kitten-scientists'] =
                        '{"version":1,"toggles":{"build":true,"space":true,"craft":true,"upgrade":true,"trade":true,"faith":true,"time":false,"options":true,"autotime":false,"autoparagon":true},"items":{"toggle-solarchant":true,"toggle-scholasticism":false,"toggle-goldenSpire":true,"toggle-sunAltar":true,"toggle-stainedGlass":false,"toggle-basilica":true,"toggle-templars":true,"toggle-apocripha":true,"toggle-transcendence":true,"toggle-solarFarm":true,"toggle-mine":true,"toggle-lumberMill":true,"toggle-hydroPlant":true,"toggle-oilWell":true,"toggle-quarry":true,"toggle-smelter":true,"toggle-factory":true,"toggle-dataCenter":true,"toggle-academy":true,"toggle-observatory":true,"toggle-tradepost":true,"toggle-broadcastTower":true,"toggle-brewery":true,"toggle-unicornPasture":true,"toggle-chronosphere":true,"toggle-limited-chronosphere":' +
                        (options.auto.autoparagon.trigger % 1000 + 4) +
                        ',"toggle-ziggurat":true,"toggle-barn":true,"toggle-field":true,"toggle-hut":true,"toggle-logHouse":true,"toggle-mansion":true,"toggle-library":true,"toggle-biolab":true,"toggle-calciner":true,"toggle-reactor":true,"toggle-accelerator":true,"toggle-chapel":true,"toggle-steamworks":true,"toggle-magneto":true,"toggle-mint":true,"toggle-spaceStation":false,"toggle-sattelite":true,"toggle-spaceElevator":true,"toggle-moonOutpost":true,"toggle-moonBase":true,"toggle-planetCracker":false,"toggle-hydrofracturer":true,"toggle-researchVessel":true,"toggle-beam":true,"toggle-limited-beam":true,"toggle-slab":true,"toggle-limited-slab":true,"toggle-steel":true,"toggle-limited-steel":true,"toggle-plate":true,"toggle-limited-plate":true,"toggle-alloy":true,"toggle-limited-alloy":true,"toggle-concrate":true,"toggle-limited-concrate":true,"toggle-gear":true,"toggle-limited-gear":true,"toggle-scaffold":true,"toggle-limited-scaffold":true,"toggle-ship":true,"toggle-limited-ship":true,"toggle-tanker":false,"toggle-limited-tanker":true,"toggle-parchment":true,"toggle-limited-parchment":false,"toggle-manuscript":true,"toggle-limited-manuscript":true,"toggle-compedium":true,"toggle-limited-compedium":true,"toggle-blueprint":true,"toggle-limited-blueprint":true,"toggle-kerosene":true,"toggle-limited-kerosene":true,"toggle-megalith":false,"toggle-limited-megalith":true,"toggle-eludium":true,"toggle-limited-eludium":true,"toggle-thorium":false,"toggle-limited-thorium":false,"toggle-upgrades":true,"toggle-missions":true,"toggle-techs":true,"toggle-races":true,"toggle-buildings":true,"toggle-zebras":true,"toggle-limited-zebras":true,"toggle-zebras-autumn":true,"toggle-zebras-spring":true,"toggle-zebras-winter":true,"toggle-harbor":true,"toggle-warehouse":true,"toggle-limited-ziggurat":8,"toggle-limited-spaceElevator":' +
                        (2 * options.auto.autoparagon.trigger % 1000 + 1) +
                        ',"toggle-limited-library":270,"toggle-limited-temple":150,"toggle-limited-observatory":500,"toggle-limited-hydroPlant":35,"toggle-limited-warehouse":100,"toggle-limited-harbor":200,"toggle-limited-academy":210,"toggle-limited-smelter":298,"toggle-limited-broadcastTower":135,"toggle-limited-reactor":165,"toggle-limited-calciner":160,"toggle-limited-quarry":200,"toggle-limited-steamworks":90,"toggle-limited-magneto":92,"toggle-limited-oilWell":209,"toggle-limited-mint":150,"toggle-limited-barn":30,"toggle-limited-lumberMill":253,"toggle-limited-sattelite":16,"toggle-limited-planetCracker":8,"toggle-limited-hydrofracturer":24,"toggle-limited-moonBase":' +
                        MoonBase_limit +
                        ',"toggle-upgradeFilter":' + upgradeFilter + ',"toggle-researchFilter":' + researchFilter + ',"toggle-buildFilter":' + buildFilter + ',"toggle-tradeFilter":' + tradeFilter + ',"toggle-limited-hut":10,"toggle-limited-brewery":999,"toggle-limited-logHouse":999},"triggers":{"faith":0,"time":0,"build":0,"space":0,"craft":0.98,"trade":0.98,"autoparagon":500007}}';
                    if (game.resPool.get("faith").value > game.resPool.get("faith").maxValue) {
                        game.religion.praise();
                    }
                } else { //无限流
                    localStorage['cbc.kitten-scientists'] =
                        '{"version":1,"toggles":{"build":true,"craft":false,"upgrade":true, "trade":' + false /*(xfldc_tradepost != 0)*/ + ',"faith":true,"time":false,"options":true,"autotime":false,"autoparagon":true},"items":{"toggle-templars":true,"toggle-limited-templars":' +
                        retain_templars +
                        ',"toggle-field":false,"toggle-mine":false,"toggle-lumberMill":false,"toggle-quarry":false,"toggle-smelter":false,"toggle-biolab":false,"toggle-calciner":false,"toggle-reactor":false,"toggle-steamworks":false,"toggle-transcendence":true,"toggle-magneto":false,"toggle-library":true,"toggle-limited-library":' + 
                        retain_library + ',"toggle-observatory":false,"toggle-limited-workshop":' + 
                        retain_workshop + ',"toggle-factory":true,"toggle-limited-factory":' + 
                        retain_factory + ',"toggle-limited-temple":' +
                        retain_temple + ',"toggle-mint":true,"toggle-limited-mint":' + 
                        retain_mint + ',"toggle-limited-ziggurat":1,"toggle-chronosphere":true,"toggle-limited-chronosphere":' + retain_chronosphere +
                        ',"toggle-barn":false,"toggle-harbor":false,"toggle-warehouse":false,"toggle-hut":false,"toggle-logHouse":true,"toggle-limited-logHouse":' + 
                        retain_loghouse +
                        ',"toggle-mansion":true,"toggle-limited-mansion":' + 
                        retain_mansion +
                        ',"toggle-upgrades":true,"toggle-techs":true,"toggle-buildings":false,"toggle-zebras":false,"toggle-leviathans":true,"toggle-hunt":true,"toggle-infinite":' +
                        options.auto.autoparagon.items.infinite.enabled + ',"toggle-limited-chronocontrol":0},"resources":{},"triggers":{"faith":0,"time":0,"build":0,"space":0,"craft":0.85,"trade":0.98,"autoparagon":500007}}';
                }
                loadFromKittenStorage();
            }
            if ((game.resPool.get("kittens").value >= 500 || options.auto.autoparagon.items.infinite.enabled) && (game.resPool.get("kittens").value >= game.resPool.get("kittens").maxValue || kittens_check) && game.bld.getBuildingExt('chronosphere').meta.val >= options.auto.autoparagon.trigger % 1000 && game.resPool.get("gold").value >= 10000 && game.resPool.get("science").value >= 500000 / (0.015 * (options.auto.autoparagon.trigger % 1000)) && game.workshop.get("fluxCondensator").researched) {
                localStorage['cbc.autoparagon.step'] = 1;
                if (!options.auto.autoparagon.items.infinite.enabled) {
                    let cbcSave = JSON.parse(localStorage['cbc.kitten-scientists']);
                    if (cbcSave) {
                        var upgradeFilter = cbcSave.items["toggle-upgradeFilter"] != null ? cbcSave.items["toggle-upgradeFilter"] : true;
                        var researchFilter = cbcSave.items["toggle-researchFilter"] != null ? cbcSave.items["toggle-researchFilter"] : true;
                        var buildFilter = cbcSave.items["toggle-buildFilter"] != null ? cbcSave.items["toggle-buildFilter"] : true;
                        var tradeFilter = cbcSave.items["toggle-tradeFilter"] != null ? cbcSave.items["toggle-tradeFilter"] : true;
                    }
                    localStorage['cbc.kitten-scientists'] =
                        '{"version":1,"toggles":{"build":true,"craft":false,"upgrade":true,"trade":true,"faith":true,"time":false,"options":true,"autotime":false,"autoparagon":true},"items":{"toggle-upgrades":false,"toggle-techs":true,"toggle-mine":false,"toggle-upgradeFilter":' +
                        upgradeFilter + ',"toggle-researchFilter":' + researchFilter + ',"toggle-buildFilter":' + buildFilter + ',"toggle-tradeFilter":' + tradeFilter + ',"toggle-lumberMill":false,"toggle-smelter":false,"toggle-observatory":false,"toggle-tradepost":false,"toggle-broadcastTower":false,"toggle-unicornPasture":false,"toggle-ziggurat":false,"toggle-barn":false,"toggle-field":false,"toggle-library":true,"toggle-limited-library":25,"toggle-limited-temple":1,"toggle-limited-hut":5,"toggle-limited-logHouse":20,"toggle-logHouse":true,"toggle-factory":false,"toggle-mansion":false,"toggle-hut":true,"toggle-observe":true},"resources":{},"triggers":{"faith":0,"time":0,"build":0.5,"craft":0.95,"trade":0.98,"autoparagon":500007}}';
                } else { //无限流
                    localStorage['cbc.kitten-scientists'] =
                        '{"version":1,"toggles":{"build":true,"craft":false,"upgrade":true,"trade":false,"faith":true,"time":false,"options":true,"autotime":false,"autoparagon":true},"items":{"toggle-upgrades":true,"toggle-techs":true,"toggle-mine":false,"toggle-lumberMill":false,"toggle-smelter":false,"toggle-observatory":false,"toggle-tradepost":false,"toggle-ziggurat":false,"toggle-barn":false,"toggle-field":false,"toggle-infinite":' +
                        options.auto.autoparagon.items.infinite.enabled + ',"toggle-limited-library":50,"toggle-limited-temple":' + retain_temple + ',"toggle-limited-hut":10,"toggle-limited-logHouse":' + retain_loghouse + ',"toggle-logHouse":true,"toggle-hut":true,"toggle-limited-workshop":' + retain_workshop + ',"toggle-hunt":false,"toggle-transcendence":true, "toggle-templars":true,"toggle-races":true,"toggle-missions":true,"set-missions-subTrigger":5,"toggle-mint":true,"toggle-limited-mint":10,"toggle-factory":false,"toggle-xfldc":' + false /*options.auto.autoparagon.items.xfldc.enabled*/ + '},"resources":{},"triggers":{"faith":0,"time":0,"build":0.5,"space":0,"craft":0.95,"trade":0.98,"autoparagon":500007}}';
                }
                loadFromKittenStorage();
                if (localStorage['cbc.resetAutomatic.step'] == 1 || !localStorage['cbc.resetAutomatic.step']) {
                    localStorage['cbc.resetAutomatic.step'] = 2;
                    if (options.auto.autoparagon.items.infinite.enabled && gamePage.science.get("oilProcessing").researched) {
                        var defaultResLimited = 1e305;
                        var noup = ['catnip', 'wood', 'minerals', "coal", 'iron', 'titanium', 'manpower', 'void'];
                        for (var i = 0; i < 35; i++) {
                            var res = game.resPool.resources[i];
                            if ((noup.includes(res.name) && res.value > 1e305) || res.name == 'science' || res.name == 'oil' || res.name == 'culture') {
                                switch (res.name) {
                                    case 'catnip':
                                        game.craft("wood", Math.max(0, Math.floor((res.value - defaultResLimited) / game.workshop.getCraft("wood").prices[0].val) + 1));
                                        break;
                                    case 'wood':
                                        game.craft("beam", Math.max(0, Math.floor((res.value - defaultResLimited) / game.workshop.getCraft("beam").prices[0].val) + 1));
                                        break;
                                    case 'minerals':
                                        game.craft("slab", Math.max(0, Math.floor((res.value - defaultResLimited) / game.workshop.getCraft("slab").prices[0].val) + 1));
                                        break;
                                    case 'coal':
                                        game.craft("steel", Math.max(0, Math.floor((res.value - defaultResLimited) / game.workshop.getCraft("steel").prices[0].val) + 1));
                                        break;
                                    case 'iron':
                                        game.craft("plate", Math.max(0, Math.floor((res.value - defaultResLimited) / game.workshop.getCraft("plate").prices[0].val) + 1));
                                        break;
                                    case 'titanium':
                                        game.craft("steel", Math.max(0, ((res.value - defaultResLimited) / game.workshop.getCraft("alloy").prices[0].val + 1) * game.workshop.getCraft("alloy").prices[1].val / game.getResCraftRatio({})));
                                        game.craft("alloy", Math.max(0, Math.floor((res.value - defaultResLimited) / game.workshop.getCraft("alloy").prices[0].val) + 1));
                                        break;
                                    case 'manpower':
                                        var huntCount = Math.max(0, Math.floor((res.value - 10 * defaultResLimited) / 100));
                                        if (huntCount) {
                                            game.resPool.addResEvent("manpower", -huntCount * 100);
                                            game.village.gainHuntRes(huntCount);
                                        }
                                        break;
                                    case 'science':
                                        var scienceValue = Math.max(0, Math.floor(res.value - 1e290));
                                        if (scienceValue) {
                                            if (game.workshop.get("chronoforge").researched && gamePage.calendar.cycle != 4) {
                                                if(!game.timeTab.cfPanel) {game.timeTab.render();}
                                                game.timeTab.cfPanel.children[0].children[0].controller.doShatterAmt(gamePage.timeTab.cfPanel.children[0].children[0].model, 20);
                                                game.spaceTab.render();
                                                if(!game.spaceTab.planetPanels[4]) {
                                                    if (game.opts.autoSaveReset && game.resPool.resources[10].value < 1e4) {
                                                        game.saveToFile(true);
                                                    }
                                                    break;
                                                }
                                                var spaceModel = game.spaceTab.planetPanels[4].children[1].model;
                                                var buildingPrices = game.spaceTab.planetPanels[4].children[1].model.prices[1].val;
                                                var spaceNumber = Math.floor(Math.log(scienceValue / 5e5) / Math.log(1.125)) - 10;
                                                var spacePrices = buildingPrices * ((Math.pow(1.125, spaceNumber) - 1) / 0.125);
                                                game.craft("kerosene", Math.ceil((spacePrices / game.getResCraftRatio("kerosene")) / game.workshop.getCraft("kerosene").prices[0].val));
                                                spaceModel.options.controller.build(spaceModel, spaceNumber);
                                            }
                                        }
                                        break;
                                    case 'culture':
                                        var cultureValue = Math.max(0, Math.floor(res.value - 1e290));
                                        if (cultureValue) {
                                            var number = Math.floor(Math.log(0.15 * cultureValue + 100) * 7.1550236 - 32.95);
                                            if (!number) {break;}
                                            var levelPrices = 100 * ((Math.pow(1.15, number ) - 1) / 0.15);
                                            game.resPool.get("culture").value -= levelPrices;
                                            activity('建造 ' +number + '个蜥蜴的' + ' 大使馆 ', 'ks-build');
                                        }
                                        break;
                                    case 'oil':
                                        game.craft("kerosene", Math.max(0, Math.floor((res.value - 1e300) / game.workshop.getCraft("kerosene").prices[0].val) + 1));
                                        break;
                                    case 'void':
                                        if (gamePage.workshop.get("voidAspiration").researched) {
                                            var voidValue = Math.max(0, Math.floor((res.value - 510 * defaultResLimited)));
                                            if (voidValue) {
                                                var voidNumber = Math.floor(Math.log(voidValue / 75) / Math.log(1.3)) - 5;
                                                var voidRift = game.timeTab.vsPanel.children[0].children[4].model.prices[0].val;
                                                var voidPrices = voidRift * ((Math.pow(1.3, voidNumber) - 1) / 0.3);
                                                gamePage.resPool.get("void").value -= voidPrices;
                                                game.time.meta[1].meta[3].on += voidNumber;
                                                game.time.meta[1].meta[3].val += voidNumber;
                                            }
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    if (!options.auto.autoparagon.items.infinite.enabled) {
                        game.resPool.get("starchart").value += game.space.meta[1].meta[2].prices[2].val * 20;
                        game.resPool.resources[39].value += 1e5;
                        game.resPool.get("faith").value += 1e5;
                        game.resPool.get("gold").value = game.resPool.get("gold").maxValue;
                        game.resPool.get("minerals").value = game.resPool.get("minerals").maxValue;
                        game.resPool.get("manpower").value += game.resPool.get("manpower").maxValue;
                        game.resPool.get("uranium").value += game.resPool.get("uranium").maxValue;
                        game.resPool.resources[2].value = game.resPool.resources[2].maxValue;
                        game.resPool.get("science").value = game.resPool.get("science").maxValue;
                        if (game.opts.autoSaveReset != undefined && game.opts.autoSaveReset && Number.isInteger(game.stats.statGroups[0].group[3].val / 40)) {
                            game.saveToFile(true);
                        }
                    }
                    for (var i = 0; i < game.challenges.challenges.length; i++) {
                        game.challenges.challenges[i].pending = false;
                    }
                    game.resetAutomatic();
                }
            }
        },
        autofeed: function() {
            var levi = game.diplomacy.get("leviathans");
            var nCorn = game.resPool.get("necrocorn");
            if (!(levi.unlocked && nCorn.value > 0)) {
                return;
            }
            if (nCorn.value >= 1) {
                if (levi.energy < game.religion.getZU("marker").val * 5 + 5) {
                    game.diplomacy.feedElders();
                    activity('小猫向上古神献上祭品。 上古神很高兴');
                    storeForSummary('feed', 1);
                }
            } else {
                if (0.25 * (1 + game.getEffect("corruptionBoostRatio")) < 1) {
                    storeForSummary('feed', nCorn.value);
                    game.diplomacy.feedElders();
                    activity('小猫处理掉了影响效率的多余死灵兽。');
                }
            }
        },
        autotime: function() {
            if (game.workshop.get("chronoforge").researched && !game.challenges.anyChallengeActive() && !game.bld.get("steamworks").isAutomationEnabled && game.time.getCFU("ressourceRetrieval").on == 0) {
                if (game.resPool.get("burnedParagon").value + game.resPool.get("paragon").value > 2e9) {
                    return;
                }
                var autotime = options.auto.autotime.items;
                var factor = game.challenges.getChallenge("1000Years").researched ? 5 : 10;
                var skipTimeYear = Math.floor(options.auto.autotime.items.x1.subTrigger / 1000) * 1000;
                if (skipTimeYear > 0) {
                    skipTimeYear = Math.min(1e7, skipTimeYear);
                } else {
                    return;
                }
                var darkYears = game.calendar.darkFutureYears(true);
                var sumPrices = 0;
                var d1 = 1 + 0.00001 * darkYears;
                var h1 = 1 + 0.01 * game.time.heat - 0.01 * game.getEffect("heatMax");
                if (darkYears > 0 && game.time.heat > game.getEffect("heatMax")) {
                    sumPrices += d1 * h1 * skipTimeYear + h1 * 0.00001 * ((skipTimeYear * skipTimeYear + skipTimeYear) / 2) + 0.05 * ((skipTimeYear * skipTimeYear + skipTimeYear) * 0.5) * d1 + (0.0000005 * (skipTimeYear * (skipTimeYear + 1) * (2 * skipTimeYear + 1)) / 6);
                } else if (darkYears + skipTimeYear > 0 || game.time.heat + factor * skipTimeYear > game.getEffect("heatMax")) {
                    var heatYear2 = Math.ceil((game.getEffect("heatMax") - game.time.heat) * 0.2);
                    var darkYear1 = 1 + 0.00001 * darkYears + skipTimeYear;
                    if (d1 < 0) {
                        d1 = 1;
                    }
                    if (h1 < 0) {
                        h1 = 1;
                    }
                    var skipTimeYear1 = Math.max(Math.max(darkYear1, 0), Math.max(heatYear2, 0), skipTimeYear);
                    var skipTimeYear2 = skipTimeYear - skipTimeYear1;
                    sumPrices += skipTimeYear2;
                    sumPrices += d1 * h1 * skipTimeYear1 + h1 * 0.00001 * ((skipTimeYear1 * skipTimeYear1 + skipTimeYear1) / 2) + 0.05 * ((skipTimeYear1 * skipTimeYear1 + skipTimeYear1) / 2) * d1 + (0.0000005 * (skipTimeYear1 * (skipTimeYear1 + 1) * (2 * skipTimeYear1 + 1)) / 6);
                } else if (darkYears + skipTimeYear < 0 && game.time.heat + factor * skipTimeYear < game.getEffect("heatMax")) {
                    sumPrices += skipTimeYear;
                }
                sumPrices *= (1 + game.getLimitedDR(game.getEffect("shatterCostReduction"), 1) + game.getEffect("shatterCostIncreaseChallenge"));
                if (game.space.getBuilding("sunlifter").on == 0 && game.bld.get("aiCore").effects["aiLevel"] < 15 && game.resPool.get("timeCrystal").value > sumPrices && sumPrices) {
                    game.time.flux += skipTimeYear - 3 / 1600;
                    game.calendar.year += skipTimeYear;
                    if (game.workshop.get("turnSmoothly").researched) {
                        game.resPool.addResEvent("temporalFlux", game.bld.get("chronosphere").on * skipTimeYear);
                    }
                    game.diplomacy.unlockElders();
                    game.resPool.get("paragon").value += (skipTimeYear * 0.001);
                    game.resPool.get("timeCrystal").value -= sumPrices;
                    game.stats.getStat("totalParagon").val += skipTimeYear * 0.001;
                    game.stats.getStat("totalYears").val += skipTimeYear;
                    game.calendar.day = 0;
                    game.calendar.season = 0;
                    game.time.heat += skipTimeYear * factor;
                    game.ui.render();
                    game.msg($I("time.tc.shatter", [skipTimeYear]), "", "tcShatter");
                    activity('燃烧时间水晶, 跳过接下来的 ' + skipTimeYear + "年!", 'ks-timeSkip');
                }
            }
        },
        worship: function() {
            var builds = options.auto.faith.items;
            var buildManager = this.religionManager;
            var craftManager = this.craftManager;
            var bulkManager = this.bulkManager;
            var trigger = options.auto.faith.trigger;

            // Render the tab to make sure that the buttons actually exist in the DOM. Otherwise we can't click them.

            var refreshRequired = false;
            var metaData = {};
            for (var name in builds) {
                var build = builds[name];
                metaData[name] = buildManager.getBuild(name, build.variant);

                var button = buildManager.getBuildButton(name, build.variant);

                if (!button || !button.model.metadata) {
                    if (!game.bld.getBuildingExt("ziggurat").on && build.variant =="z") {continue;}
                    buildManager.manager.render();
                    continue;
                }
                if (!button) {
                    metaData[name].rHidden = true;
                } else {
                    var model = button.model;
                    var panel = (build.variant === 'c') ? game.science.techs[58].researched : true;
                    if (!model.enabled && panel) {
                        button.controller.updateEnabled(model);
                    }
                    /*if (!model.visible && panel) {
                        button.controller.updateVisible(model);
                    }*/
                    metaData[name].rHidden = !(model.enabled && panel);
                }
            }

            var buildList = bulkManager.bulk(builds, metaData, trigger, 'faith');

            for (var entry in buildList) {
                if (buildList[entry].count > 0) {
                    buildManager.build(buildList[entry].id, buildList[entry].variant, buildList[entry].count);
                }
            }

            /*if (refreshRequired) {
            	game.ui.render();
            }*/
        },
        chrono: function() {
            if (!game.timeTab.visible) {
                return;
            }
            var builds = options.auto.time.items;
            var buildManager = this.timeManager;
            var craftManager = this.craftManager;
            var bulkManager = this.bulkManager;
            var trigger = options.auto.time.trigger;

            // Render the tab to make sure that the buttons actually exist in the DOM. Otherwise we can't click them.
            buildManager.manager.render();

            var metaData = {};
            for (var name in builds) {
                var build = builds[name];
                metaData[name] = buildManager.getBuild(name, build.variant);
                var model = buildManager.getBuildButton(name, build.variant).model;
                var panel = (build.variant === 'chrono') ? game.tabs[7].cfPanel : game.tabs[7].vsPanel;
                metaData[name].tHidden = (!model.visible || !model.enabled || !panel.visible);
            }

            var buildList = bulkManager.bulk(builds, metaData, trigger, 'time');

            var refreshRequired = false;
            for (var entry in buildList) {
                if (buildList[entry].count > 0) {
                    buildManager.build(buildList[entry].id, buildList[entry].variant, buildList[entry].count);
                    refreshRequired = true;
                }
            }

            if (refreshRequired) {
                game.ui.render();
            }
        },
        upgrade: function() {
            var upgrades = options.auto.upgrade.items;
            var upgradeManager = this.upgradeManager;
            var craftManager = this.craftManager;
            var bulkManager = this.bulkManager;
            var buildManager = this.buildManager;

            if (upgrades.upgrades.enabled && game.bld.meta[0].meta[21].on) {
                if (!game.workshopTab.buttons) {game.workshopTab.render()}
                var work = game.workshop.upgrades;
                let noup = ["factoryOptimization", "factoryRobotics", "spaceEngineers", "chronoEngineers", "amFission",
                    "biofuel", "gmo", "factoryAutomation", "advancedAutomation", "pneumaticPress", "steelPlants",
                    "hydroPlantTurbines", "unobtainiumReflectors", "thoriumReactors", "thinFilm", "enrichedUranium"
                ];
                let autoparagonban = ["qdot", "cryocomputing", "machineLearning", "aiEngineers", "eludiumReflectors",
                    "coldFusion", "eludiumCracker"
                ];
                let infiniteban = ["mineralHoes", "distorsion", "tachyonAccelerators", "stoneBarns", "silos", "ironHoes", "mineralAxes", "ironAxes", "steelAxe", "reinforcedSaw", "titaniumAxe", "stasisChambers", "reinforcedBarns",
                    "cargoShips", "advancedRefinement", "goldOre", "coalFurnace", "deepMining", "printingPress",
                    "combustionEngine", "celestialMechanics", "astrolabe", "titaniumMirrors", "steelSaw", "pyrolysis",
                    "industrialization", "concreteWarehouses", "concreteBarns", "refrigeration", "seti", "internet", "barges", "alloyAxe", "alloyBarns", "alloyWarehouses", "reactorVessel", "nuclearSmelters",
                    "photovoltaic", "fluidizedReactors", "oilDistillation", "photolithography", "geodesy",
                    "orbitalGeodesy", "uplink", "hubbleTelescope", "astrophysicists", "solarSatellites", "starlink", "unobtainiumDrill", "storageBunkers", "mWReactor", "register",
                    "thoriumEngine", "pumpjack", "lhc", "satelliteRadio"
                ];
                if (options.auto.autoparagon.enabled)
                    noup = noup.concat(autoparagonban);
                if (options.auto.autoparagon.items.infinite.enabled)
                    noup = noup.concat(infiniteban);
                workLoop:
                    for (var upg = 0; upg < work.length; upg++) {
                        if (work[upg].researched || !work[upg].unlocked) {
                            continue;
                        }

                        var prices = work[upg].prices;
                        for (let workResource of prices) {
                            if (game.resPool.get(workResource.name) < workResource.val) {
                                continue workLoop;
                            }
                        }
                        for (let workName of noup) {
                            if (work[upg].name == workName) {
                                continue workLoop;
                            }
                        }
                        upgradeManager.build(game.workshop.upgrades[upg], 'workshop');
                    }
            }

            if (upgrades.techs.enabled && game.libraryTab.visible) {
                if (!game.libraryTab.buttons) {game.libraryTab.render();}
                var tech = game.science.techs;
                let noup = [];
                let autoparagonban = ["antimatter", "cryptotheology", "voidSpace", "paradoxalKnowledge", "quantumCryptography", "metaphysics"];
                let infiniteban = ["metaphysics", "biochemistry", "antimatter", "metalurgy", "combustion", "cryptotheology", "robotics",
                    "superconductors", "dimensionalPhysics", "quantumCryptography", "paradoxalKnowledge"
                ];
                if (options.auto.autoparagon.items.infinite.enabled) {
                    noup = noup.concat(infiniteban);
                } else {
                    noup = noup.concat(autoparagonban);
                }
                techLoop:
                    for (var upg = 0; upg < tech.length; upg++) {
                        if (tech[upg].researched || !tech[upg].unlocked) {
                            continue;
                        }

                        var prices = tech[upg].prices;
                        for (let techResource of prices) {
                            if (craftManager.getValueAvailable(techResource.name, true) < techResource.val) {
                                continue techLoop;
                            }
                        }
                        for (let techName of noup) {
                            if (tech[upg].name == techName) {
                                continue techLoop;
                            }
                        }
                        upgradeManager.build(game.science.techs[upg], 'science');
                    }
            }

            if (upgrades.policies.enabled && game.science.meta[0].meta[10].researched && options.auto.autoparagon.enabled) {
                if (!game.libraryTab.policyPanel || !game.libraryTab.policyPanel.children) {game.libraryTab.render();}
                var poli = game.science.policies;
                let noup = [];
                let autoparagon = [0, 3, 8, 11, 15, 20, 23, 26, 31, 34, 37];
                let infiniit = [1, 2, 8, 25, 30,34,37];
                if (!options.auto.autoparagon.items.infinite.enabled) {
                    noup = noup.concat(autoparagon);
                } else {//(options.auto.autoparagon.items.infinite.enabled) {
                    noup = noup.concat(infiniit);
                }
                for (var i = 0; i < noup.length; i++) {
                    var a = noup[i];
                    if (poli[a].researched || !poli[a].unlocked) {
                        continue;
                    }
                    if (game.resPool.get("culture").value < poli[a].prices[0].val) {
                        continue;
                    }
                    upgradeManager.build(game.science.policies[a], 'policy');
                }
            }

            if (upgrades.missions.enabled && game.science.meta[0].meta[41].researched) {
                var missions = game.space.meta[0].meta;
                let freshrequire = false;
                missionLoop:
                    for (var i = 0; i < options.auto.upgrade.items.missions.subTrigger; i++) {
                        if (!(missions[i].unlocked && missions[i].val < 1)) {
                            continue;
                        }
                        var Btn = game.spaceTab.GCPanel.children[i];
                        if (!Btn || !Btn.model.metadata) {
                            game.spaceTab.render();
                        }
                        if (Btn.model.metadata.val || Btn.model.metadata.on) {
                            continue;
                        }
                        if (!Btn.model.enabled) {
                            Btn.controller.updateEnabled(Btn.model);
                        }

                        var prices = Btn.model.prices;
                        for (let missResource of prices) {
                            if (craftManager.getValueAvailable(missResource.name, true) < missResource.val) {
                                continue missionLoop;
                            }
                        }
                        Btn.controller.build(Btn.model, 1);
                        if (i === 8 || i === 9 || i === 10) {
                            activity('小猫执行了 ' + missions[i].label, 'ks-upgrade');
                        } else if (i === 12) {
                            activity('小猫执行了 探索边界环 的任务', 'ks-upgrade');
                        } else {
                            activity('小猫执行了 ' + missions[i].label + ' 的任务', 'ks-upgrade');
                        }
                    }
            }
            let freshrequire = false;
            if (upgrades.races.enabled && game.diplomacy.hasUnlockedRaces()) {
                var maxRaces = (game.diplomacy.get('leviathans').unlocked) ? 8 : 7;
                if (game.diplomacyTab.racePanels.length < maxRaces) {
                    var manpower = craftManager.getValueAvailable('manpower', true);
                    if (!game.diplomacy.get('lizards').unlocked) {
                        if (manpower >= 1000) {
                            game.resPool.get('manpower').value -= 1000;
                            activity('小猫遇到了 ' + game.diplomacy.unlockRandomRace().title, 'ks-upgrade');
                            manpower -= 1000;
                            freshrequire = true;
                        }
                    }
                    if (!game.diplomacy.get('sharks').unlocked) {
                        if (manpower >= 1000) {
                            game.resPool.get('manpower').value -= 1000;
                            activity('小猫遇到了 ' + game.diplomacy.unlockRandomRace().title, 'ks-upgrade');
                            manpower -= 1000;
                            freshrequire = true;
                        }
                    }
                    if (!game.diplomacy.get('griffins').unlocked) {
                        if (manpower >= 1000) {
                            game.resPool.get('manpower').value -= 1000;
                            activity('小猫遇到了 ' + game.diplomacy.unlockRandomRace().title, 'ks-upgrade');
                            manpower -= 1000;
                            freshrequire = true;
                        }
                    }
                    if (!game.diplomacy.get('nagas').unlocked && game.resPool.get("culture").value >= 1500) {
                        if (manpower >= 1000) {
                            game.resPool.get('manpower').value -= 1000;
                            activity('小猫遇到了 ' + game.diplomacy.unlockRandomRace().title, 'ks-upgrade');
                            manpower -= 1000;
                            freshrequire = true;
                        }
                    }
                    if (!game.diplomacy.get('zebras').unlocked && game.resPool.get("ship").value >= 1) {
                        if (manpower >= 1000) {
                            game.resPool.get('manpower').value -= 1000;
                            activity('小猫遇到了 ' + game.diplomacy.unlockRandomRace().title, 'ks-upgrade');
                            manpower -= 1000;
                            freshrequire = true;
                        }
                    }
                    if (!game.diplomacy.get('spiders').unlocked && game.resPool.get("ship").value >= 100 && game.resPool.get(
                            "science").maxValue > 125000) {
                        if (manpower >= 1000) {
                            game.resPool.get('manpower').value -= 1000;
                            activity('小猫遇到了 ' + game.diplomacy.unlockRandomRace().title, 'ks-upgrade');
                            manpower -= 1000;
                            freshrequire = true;
                        }
                    }
                    if (!game.diplomacy.get('dragons').unlocked && game.science.get("nuclearFission").researched) {
                        if (manpower >= 1000) {
                            game.resPool.get('manpower').value -= 1000;
                            activity('小猫遇到了 ' + game.diplomacy.unlockRandomRace().title, 'ks-upgrade');
                            manpower -= 1000;
                            freshrequire = true;
                        }
                    }
                }
            }

            if (upgrades.buildings.enabled) {
                var pastures = (game.bld.getBuildingExt('pasture').meta.stage === 0) ? game.bld.getBuildingExt('pasture').meta.val : 0;
                var aqueducts = (game.bld.getBuildingExt('aqueduct').meta.stage === 0) ? game.bld.getBuildingExt('aqueduct').meta.val : 0;
                var pastureMeta = game.bld.getBuildingExt('pasture').meta;
                if (pastureMeta.stage === 0) {
                    if (pastureMeta.stages[1].stageUnlocked) {
                        if (craftManager.getPotentialCatnip(true, 0, aqueducts) > 0) {
                            var prices = pastureMeta.stages[1].prices;
                            var priceRatio = bulkManager.getPriceRatio(pastureMeta, true);
                            if (bulkManager.singleBuildPossible(pastureMeta, prices, 1)) {
                                var button = buildManager.getBuildButton('pasture', 0);
                                pastureMeta.on = 0;
                                pastureMeta.val = 0;
                                pastureMeta.stage = 1;
                                activity('将牧场升级为太阳能农场！', 'ks-upgrade');
                                buildManager.build('pasture', 1, 1);
                                freshrequire = true;
                            }
                        }
                    }
                }

                var aqueductMeta = game.bld.getBuildingExt('aqueduct').meta;
                if (aqueductMeta.stage === 0) {
                    if (aqueductMeta.stages[1].stageUnlocked) {
                        if (craftManager.getPotentialCatnip(true, pastures, 0) > 0) {
                            var prices = aqueductMeta.stages[1].prices;
                            var priceRatio = bulkManager.getPriceRatio(aqueductMeta, true);
                            if (bulkManager.singleBuildPossible(aqueductMeta, prices, 1)) {
                                var button = buildManager.getBuildButton('aqueduct', 0);
                                aqueductMeta.on = 0;
                                aqueductMeta.val = 0;
                                aqueductMeta.stage = 1;
                                aqueductMeta.calculateEffects(aqueductMeta, game)
                                activity('将水渠升级为水电站！', 'ks-upgrade');
                                buildManager.build('aqueduct', 1, 1);
                                freshrequire = true;
                            }
                        }
                    }
                }

                var amphitheatreMeta = game.bld.getBuildingExt('amphitheatre').meta;
                if (amphitheatreMeta.stage === 0) {
                    if (amphitheatreMeta.stages[1].stageUnlocked) {
                        var prices = amphitheatreMeta.stages[1].prices;
                        var priceRatio = bulkManager.getPriceRatio(amphitheatreMeta, true);
                        if (bulkManager.singleBuildPossible(amphitheatreMeta, prices, 1)) {
                            var button = buildManager.getBuildButton('amphitheatre', 0);
                            amphitheatreMeta.on = 0;
                            amphitheatreMeta.val = 0;
                            amphitheatreMeta.stage = 1;
                            activity('将剧场升级为广播塔！', 'ks-upgrade');
                            buildManager.build('amphitheatre', 1, 1);
                            freshrequire = true;
                        }
                    }
                }
            }
            if (freshrequire) {
                //game.render();
            }
        },
        build: function() {
            var builds = options.auto.build.items;
            var buildManager = this.buildManager;
            var craftManager = this.craftManager;
            var bulkManager = this.bulkManager;
            var trigger = options.auto.build.trigger;

            var refreshRequired = false;
            // Render the tab to make sure that the buttons actually exist in the DOM. Otherwise we can't click them.
            var metaData = {};
            for (var name in builds) {
                var build = builds[name];
                metaData[name] = buildManager.getBuild(build.name || name).meta;
            }

            var buildList = bulkManager.bulk(builds, metaData, trigger, 'bonfire');
            //var refreshRequired = false;
            for (var entry of buildList) {
                if (entry.count > 0) {
                    buildManager.build(entry.name || entry.id, entry.stage, entry.count);
                    //refreshRequired = true;
                }
            }
            /*if (refreshRequired) {
            	game.ui.render();
            }*/
        },
        space: function() {
            var builds = options.auto.space.items;
            var buildManager = this.spaceManager;
            var craftManager = this.craftManager;
            var bulkManager = this.bulkManager;
            var trigger = options.auto.space.trigger;

            // Render the tab to make sure that the buttons actually exist in the DOM. Otherwise we can't click them.

            var refreshRequired = false;
            var metaData = {};
            for (var name in builds) {
                var build = builds[name];
                metaData[name] = buildManager.getBuild(name);
            }
            if (refreshRequired) {
                buildManager.manager.render();
            }

            var buildList = bulkManager.bulk(builds, metaData, trigger, 'space');
            var refreshRequired = false;
            for (var entry in buildList) {
                if (buildList[entry].count > 0) {
                    buildManager.build(buildList[entry].id, buildList[entry].count);
                    refreshRequired = true;
                }
            }
            /*if (refreshRequired) {
            	game.ui.render();
            }*/
        },
        craft: function() {
            var crafts = options.auto.craft.items;
            var manager = this.craftManager;
            var trigger = options.auto.craft.trigger;

            for (var name in crafts) {
                var craft = crafts[name];
                var current = !craft.max ? false : manager.getResource(name);
                var require = !craft.require ? false : manager.getResource(craft.require);
                var season = game.calendar.season;
                var amount = 0;
                // Ensure that we have reached our cap
                if (current && current.value > craft.max) continue;
                if (!manager.singleCraftPossible(name)) {
                    continue;
                }
                // Craft the resource if we meet the trigger requirement
                if (!require || trigger <= require.value / require.maxValue) {
                    amount = manager.getLowestCraftAmount(name, craft.limited, craft.limRat, true);
                } else if (craft.limited) {
                    amount = manager.getLowestCraftAmount(name, craft.limited, craft.limRat, false);
                }
                if (amount > 0) {
                    manager.craft(name, amount);
                }
            }
        },
        holdFestival: function() {
            if (!(game.science.get('drama').researched && game.calendar.festivalDays < 400)) {
                return;
            }
            if (!game.prestige.getPerk('carnivals').researched && game.calendar.festivalDays > 0) {
                return;
            }

            var craftManager = this.craftManager;

            if (craftManager.getValueAvailable('manpower', true) < 1500 || craftManager.getValueAvailable('culture', true) < 5000) {
                return;
            }

            var catpowProf = 4000 * craftManager.getTickVal(craftManager.getResource('manpower')) > 1500;
            var cultureProf = 4000 * craftManager.getTickVal(craftManager.getResource('culture')) > 5000;
            var parchProf = 4000 * craftManager.getTickVal(craftManager.getResource('parchment')) > 2500;

            if (!(catpowProf && cultureProf && parchProf)) {
                return;
            }

            // Render the tab to make sure that the buttons actually exist in the DOM. Otherwise we can't click them.
            if (game.villageTab.festivalBtn == null) {
                game.villageTab.render();
            }

            if (!game.villageTab.festivalBtn.model.enabled) {
                game.villageTab.festivalBtn.controller.updateEnabled(game.villageTab.festivalBtn.model);
            }

            if (game.villageTab.festivalBtn.model.enabled) {
                var beforeDays = game.calendar.festivalDays;
                game.villageTab.festivalBtn.onClick();
                storeForSummary('festival');
                if (beforeDays > 0) {
                    activity('小猫延长了节日', 'ks-festival');
                } else {
                    activity('小猫开始举办节日', 'ks-festival');
                }
            }
        },
        observeStars: function() {
            if (game.calendar.observeBtn != null) {
                game.calendar.observeHandler();
                activity('小猫珂学家观察到一颗星星', 'ks-star');
                storeForSummary('stars', 1);
            }
        },
        hunt: function() {
            var manpower = this.craftManager.getResource('manpower');
            if (manpower.value < 100 || game.challenges.isActive("pacifism")) {
                return;
            }
            if (options.auto.options.items.hunt.subTrigger <= manpower.value / manpower.maxValue) {
                var huntCount = Math.floor(manpower.value * 0.01) - 1;
                var aveOutput = this.craftManager.getAverageHunt();
                var trueOutput = {};

                /*for (var out in aveOutput) {
                    var res = this.craftManager.getResource(out);
                    trueOutput[out] = (res.maxValue > 0) ? Math.min(aveOutput[out] * huntCount, Math.max(res.maxValue - res.value, 0)) : aveOutput[out] * huntCount;
                }*/
                if (manpower.value >= manpower.maxValue) {
                    var huntCount = Math.floor(manpower.value * 1e-9);
                    var chron = game.bld.getBuildingExt('chronosphere').meta.val;
                    if (chron && options.auto.autoparagon.items.infinite.enabled && chron < options.auto.build.items.chronosphere.limited) {
                        if (manpower.value > 4e10) {
                            huntCount *= Math.floor(Math.max(manpower.value * 1e-6, 1e3));
                        } else if (manpower.value > 1e9 && game.village.leader != null && game.village.leader.trait.name == "manager") {
                            huntCount *= Math.floor(Math.max(manpower.value * 1e-6, 5e3));
                        } 
                    }
                }
                if (huntCount) {
                    game.resPool.addResEvent("manpower", -huntCount * 100);
                    game.village.gainHuntRes(huntCount);
                    //storeForSummary('hunt', huntCount);
                    activity('派出 ' + huntCount + ' 波小猫去打猎', 'ks-hunt');
                }
            }
        },
        trade: function() {
            var craftManager = this.craftManager;
            var tradeManager = this.tradeManager;
            //var cacheManager = this.cacheManager;
            var gold = craftManager.getResource('gold');
            var trades = [];
            var requireTrigger = options.auto.trade.trigger;

            if (!tradeManager.singleTradePossible(undefined)) {
                return;
            }

            var season = game.calendar.getCurSeason().name;

            // Determine how many races we will trade this cycle
            for (var name in options.auto.trade.items) {
                var trade = options.auto.trade.items[name];

                // Check if the race is in season, enabled, unlocked, and can actually afford it
                if (!trade.enabled) continue;
                if (!trade[season]) continue;
                var race = tradeManager.getRace(name);
                if (!race.unlocked) {
                    continue;
                }
                var button = tradeManager.getTradeButton(race.name);
                if (!button) {
                    game.diplomacyTab.render();
                    continue;
                }
                if (!button.model.enabled) {
                    button.controller.updateEnabled(button.model)
                    continue;
                }
                if (!tradeManager.singleTradePossible(name)) {
                    continue;
                }

                var require = !trade.require ? false : craftManager.getResource(trade.require);
                // If we have enough to trigger the check, then attempt to trade
                var prof = tradeManager.getProfitability(name);
                if (trade.limited && prof) {
                    trades.push(name);
                } else if ((!require || requireTrigger <= require.value / require.maxValue) && requireTrigger <= gold.value /
                    gold.maxValue) {
                    trades.push(name);
                }
            }

            if (trades.length === 0) {
                return;
            }

            // Figure out how much we can currently trade
            var maxTrades = tradeManager.getLowestTradeAmount(undefined, true, false);
            // Distribute max trades without starving any race

            if (maxTrades < 1) {
                return;
            }

            var maxByRace = [];
            for (var i = 0; i < trades.length; i++) {
                var name = trades[i];
                var trade = options.auto.trade.items[name];
                var require = !trade.require ? false : craftManager.getResource(trade.require);
                var trigConditions = ((!require || requireTrigger <= require.value / require.maxValue) && requireTrigger <= gold
                    .value / gold.maxValue);
                var tradePos = tradeManager.getLowestTradeAmount(name, trade.limited, trigConditions);
                if (tradePos < 1) {
                    trades.splice(i, 1);
                    i--;
                    continue;
                }
                maxByRace[i] = tradePos;
            }

            if (trades.length === 0) {
                return;
            }

            var tradesDone = {};
            while (trades.length > 0 && maxTrades >= 1) {
                if (maxTrades < trades.length) {
                    var j = Math.floor(Math.random() * trades.length);
                    if (!tradesDone[trades[j]]) {
                        tradesDone[trades[j]] = 0;
                    }
                    tradesDone[trades[j]] += 1;
                    maxTrades -= 1;
                    trades.splice(j, 1);
                    maxByRace.splice(j, 1);
                    continue;
                }
                var minTrades = Math.floor(maxTrades / trades.length);
                var minTradePos = 0;
                for (var i = 0; i < trades.length; i++) {
                    if (maxByRace[i] < minTrades) {
                        minTrades = maxByRace[i];
                        minTradePos = i;
                    }
                }
                if (!tradesDone[trades[minTradePos]]) {
                    tradesDone[trades[minTradePos]] = 0;
                }
                tradesDone[trades[minTradePos]] += minTrades;
                maxTrades -= minTrades;
                trades.splice(minTradePos, 1);
                maxByRace.splice(minTradePos, 1);
            }
            if (tradesDone.length === 0) {
                return;
            }

            var tradeNet = {};
            for (var name in tradesDone) {
                var race = tradeManager.getRace(name);

                var materials = tradeManager.getMaterials(name);
                for (var mat in materials) {
                    if (!tradeNet[mat]) {
                        tradeNet[mat] = 0;
                    }
                    tradeNet[mat] -= materials[mat] * tradesDone[name];
                }

                var meanOutput = tradeManager.getAverageTrade(race);
                for (var out in meanOutput) {
                    var res = craftManager.getResource(out);
                    if (!tradeNet[out]) {
                        tradeNet[out] = 0;
                    }
                    tradeNet[out] += (res.maxValue > 0) ? Math.min(meanOutput[out] * tradesDone[name], Math.max(res.maxValue - res.value,
                        0)) : meanOutput[out] * tradesDone[name];
                }
            }

            //cacheManager.pushToCache({'materials': tradeNet, 'timeStamp': game.timer.ticksTotal});

            for (var name in tradesDone) {
                if (tradesDone[name] > 0) {
                    tradeManager.trade(name, tradesDone[name]);
                }
            }
        },
        miscOptions: function() {
            var craftManager = this.craftManager;
            var optionVals = options.auto.options.items;

            /*AutoEmbassy:
            		 if (optionVals.buildEmbassies.enabled) {
            	 var culture = craftManager.getResource('culture');
            	 if (optionVals.buildEmbassies.subTrigger <= culture.value / culture.maxValue) {
            			 var racePanels = game.diplomacyTab.racePanels;
            			 var cultureVal = craftManager.getValueAvailable('culture', true);

            			 var embassyBulk = {};
            			 var bulkTracker = [];

            			 for (var i = 0; i < racePanels.length; i++) {
            		 if (!racePanels[i].embassyButton) {continue;}
            		 var name = racePanels[i].race.name;
            		 var race = game.diplomacy.get(name);
            		 embassyBulk[name] = {'val': 0, 'basePrice': race.embassyPrices[0].val, 'currentEm': race.embassyLevel, 'priceSum': 0, 'race': race};
            		 bulkTracker.push(name);
            			 }

            			 if (bulkTracker.length === 0) {break AutoEmbassy;}

            			 var refreshRequired = false;

            			 while (bulkTracker.length > 0) {
            		 for (var i=0; i < bulkTracker.length; i++) {
            				 var name = bulkTracker[i];
            				 var emBulk = embassyBulk[name];
            				 var nextPrice = emBulk.basePrice * Math.pow(1.15, emBulk.currentEm + emBulk.val);
            				 if (nextPrice <= cultureVal) {
            			 cultureVal -= nextPrice;
            			 emBulk.priceSum += nextPrice;
            			 emBulk.val += 1;
            			 refreshRequired = true;
            				 } else {
            			 bulkTracker.splice(i, 1);
            			 i--;
            				 }
            		 }
            			 }

            			 for (var name in embassyBulk) {
            		 var emBulk = embassyBulk[name];
            		 if (emBulk.val === 0) {continue;}
            		 var cultureVal = craftManager.getValueAvailable('culture', true);
            		 if (emBulk.priceSum > cultureVal) {warning('Something has gone horribly wrong.' + [emBulk.priceSum, cultureVal]);}
            		 game.resPool.resources[13].value -= emBulk.priceSum;
            		 emBulk.race.embassyLevel += emBulk.val;
            		 storeForSummary('embassy', emBulk.val);
            		 if (emBulk.val !== 1) {
            				 activity('Built ' + emBulk.val + ' embassies for ' + name, 'ks-trade');
            		 } else {
            				 activity('Built ' + emBulk.val + ' embassy for ' + name, 'ks-trade');
            		 }
            			 }

            			 if (refreshRequired) {game.ui.render();}
            	 }
            		 }*/

            if (optionVals.leaderPromote.enabled && game.science.get('civil').researched) {
                //var gold = craftManager.getResource('gold');

                var leader = game.village.leader;
                var profession;
                //选择领袖
                if (leader === null || leader.trait.name == "engineer") {
                    for (var i = 0; i < game.village.traits.length; i++) {
                        if (!options.auto.autoparagon.items.infinite.enabled) {
                            if (game.village.traits[i].name == "merchant") {
                                profession = "merchant";
                                break;
                            }
                        } else {
                            if (game.resPool.get("manpower").value > 1e9 && game.village.traits[i].name == "manager") {
                                profession = "manager";
                                break;
                            }
                            if (game.village.traits[i].name == "engineer") {
                                profession = "engineer";
                                break;
                            }
                        }
                    }
                    if (profession != null) {
                        gamePage.villageTab.censusPanel.census.makeLeader(gamePage.village.sim.kittens.filter(kitten => kitten.trait.name ==
                            profession)[0]);
                    }
                }

                /*if (leader != null && options.auto.autoparagon.items.infinite.enabled && options.auto.autoparagon.items.xfldc.enabled &&
                	game.diplomacy.races[7].unlocked) { //无限流冷冻仓更改领袖
                	let prkitten = gamePage.village.sim.kittens.filter(kitten => kitten.trait.name == "merchant").sort(function(a,
                		b) {
                		return b.rank - a.rank;
                	});
                	let prkittenpos = -1;
                	if (prkitten.length != 0) {
                		prkittenpos = 0;
                		prkitten = prkitten[0];
                	}
                	if (prkitten && prkittenpos != -1)
                		gamePage.villageTab.censusPanel.census.makeLeader(prkitten);
                }*/
                if (leader != null) {
                    var rank = leader.rank;
                    if (game.village.sim.promote(leader, rank + 1) == 1) {
                        activity('你的领袖被提拔到了 ' + leader.rank + ' 级', 'ks-promote');
                        game.villageTab.censusPanel.census.renderGovernment(game.villageTab.censusPanel.census);
                        game.villageTab.censusPanel.census.update();
                    }
                }
            }

            if (optionVals.autoTranscendence.enabled && game.religion.getRU("transcendence").on) {
                var ratio = game.religion.faithRatio;
                var lv = game.religion.transcendenceTier;
                var k = (lv + 2) / (lv + 1);
                k *= k;
                var x1 = Math.exp(lv + 1) / 5 + 1;
                x1 *= x1;
                var x2 = Math.exp(lv) / 5 + 1;
                x2 *= x2;
                var x = (x1 - x2) / 80;
                var rec = (1 - k + Math.sqrt(80 * (k * k - 1) * x + (k - 1) * (k - 1))) * k / (40 * (k + 1) * (k + 1) * (k - 1)) +
                    x + x / (k * k - 1);
                //console.log('推荐值: ' + rec/x + ' ,当前值: ' + ratio/x);
                if (ratio > rec) {
                    game.religion.faithRatio -= x;
                    game.religion.tcratio += x;
                    ++game.religion.transcendenceTier;
                    activity('超越到了 ' + game.religion.transcendenceTier + ' 级', 'ks-transcendence');
                }
            }

            // 自动开启时间通量
            if (optionVals.openTempusFugit.enabled) {
                if (!game.time.isAccelerated && optionVals.openTempusFugit.subTrigger <= game.resPool.get("temporalFlux").value) {
                    game.time.isAccelerated = true;
                    activity('开启时间通量');
                } else if (game.time.isAccelerated && optionVals.openTempusFugit.subTrigger >= game.resPool.get("temporalFlux")
                    .value) {
                    game.time.isAccelerated = false;
                    activity('关闭时间通量');
                }
            }
        },
        distribute: function() {
            if (options.auto.options.items.catDistribution.enabled) {
                var freeKittens = game.village.getFreeKittens();
                if (!freeKittens) {
                    return;
                }
                if (options.auto.autoparagon.items.infinite.enabled && freeKittens >= 1) {
                    if (game.village.jobs[2].unlocked && game.resPool.get("science").value < 1e13){
                        game.village.assignJob(game.village.getJob("scholar"), freeKittens);
                        game.villageTab.updateTab();
                        return;
                    }
                    if (game.village.jobs[3].unlocked) {
                        game.village.assignJob(game.village.getJob("hunter"), freeKittens);
                        game.villageTab.updateTab();
                        return;
                    }
                }

                if (options.auto.autoparagon.enabled && freeKittens >= 1 && !game.village.jobs[4].value) {
                    let fresh = false;
                    if (game.village.jobs[3].unlocked && !game.village.jobs[3].value) {
                        game.village.assignJob(game.village.getJob("hunter"), 1);
                        fresh = true;
                    }

                    if (game.village.jobs[4].unlocked && !game.village.jobs[4].value) {
                        game.village.assignJob(game.village.getJob("miner"), 1);
                        fresh = true;
                    }

                    if (fresh) {
                        return game.villageTab.updateTab();
                    }
                }

                var jobName = '';
                var minRatio = Infinity;
                var currentRatio = 0;
                for (var i in game.village.jobs) {
                    var name = game.village.jobs[i].name;
                    var unlocked = game.village.jobs[i].unlocked;
                    var enabled = options.auto.distribute.items[name].enabled;
                    var maxGame = game.village.getJobLimit(name);
                    var maxKS = options.auto.distribute.items[name].max;
                    var val = game.village.jobs[i].value
                    var limited = options.auto.distribute.items[name].limited;
                    if (unlocked && enabled && val < maxGame && (!limited || val < maxKS)) {
                        currentRatio = val / maxKS;
                        if (currentRatio < minRatio) {
                            minRatio = currentRatio;
                            jobName = name;
                        }
                    }
                }
                if (jobName) {
                    if (game.village.getFreeKittens() == 1) {
                        game.village.assignJob(game.village.getJob(jobName), 1);
                    } else if (game.village.getFreeKittens() >= 2) {
                        game.village.assignJob(game.village.getJob(jobName), 2);
                    }
                    //game.villageTab.updateTab();
                }
            }
        }
    };

    // Tab Manager
    // ===========

    var TabManager = function(name) {
        this.setTab(name);
    };

    TabManager.prototype = {
        tab: undefined,
        render: function() {
            if (this.tab && game.ui.activeTabId !== this.tab.tabId) this.tab.render();

            return this;
        },
        setTab: function(name) {
            for (var tab in game.tabs) {
                if (game.tabs[tab].tabId === name) {
                    this.tab = game.tabs[tab];
                    break;
                }
            }

            this.tab ? this.render() : warning('无法找到标签 ' + name);
        }
    };

    // Exploration Manager
    // ===================



    // Religion manager
    // ================

    var ReligionManager = function() {
        this.manager = new TabManager('Religion');
        this.crafts = new CraftManager();
        this.bulkManager = new BulkManager();
    };

    var getButton = function(tab, buttonName) {
        for (var i of game.tabs[tab].children) {
            if (i.opts.building == buttonName)
                return i;
        }
    };

    var getBestUniBuilding = function(log = false) {
        var validBuildings = ["unicornTomb", "ivoryTower", "ivoryCitadel", "skyPalace", "unicornUtopia", "sunspire"];
        var pastureButton = getButton(0, "unicornPasture");
        var unicornsPerSecond = game.getEffect("unicornsPerTickBase") * game.getTicksPerSecondUI();
        var globalRatio = game.getEffect("unicornsGlobalRatio") + 1;
        var religionRatio = game.getEffect("unicornsRatioReligion") + 1;
        var paragonRatio = game.prestige.getParagonProductionRatio() + 1;
        var faithBonus = game.religion.getSolarRevolutionRatio() + 1;
        var cycle = 1;
        if (game.calendar.cycles[game.calendar.cycle].festivalEffects["unicorns"] != undefined)
            if (game.prestige.getPerk("numeromancy").researched && game.calendar.festivalDays)
                cycle = game.calendar.cycles[game.calendar.cycle].festivalEffects["unicorns"];
        var onZig = Math.max(game.bld.getBuildingExt("ziggurat").meta.on, 1);
        var total = unicornsPerSecond * globalRatio * religionRatio * paragonRatio * faithBonus * cycle;
        var baseUnicornsPerRift = 500 * (1 + game.getEffect("unicornsRatioReligion") * 0.1);
        var riftChanceRatio = 1;
        if (game.prestige.getPerk("unicornmancy").researched)
            riftChanceRatio *= 1.1;
        var baseRift = game.getEffect("riftChance") * riftChanceRatio / (10000 * 2) * baseUnicornsPerRift;
        if (log) {
            console.log("Unicorns per second: " + total);
            console.log("Base rift per second average: " + baseRift);
        }
        var bestAmoritization = Infinity;
        var bestBuilding = "";
        var pastureAmor = game.bld.getBuildingExt("unicornPasture").meta.effects["unicornsPerTickBase"] * game.getTicksPerSecondUI();
        pastureAmor = pastureAmor * globalRatio * religionRatio * paragonRatio * faithBonus * cycle;
        if (log) {
            console.log("unicornPasture");
            console.log("\tBonus unicorns per second: " + pastureAmor);
        }
        pastureAmor = game.tabs[0].children[pastureButton].model.prices[0].val / pastureAmor;
        if (log) {
            var baseWait = game.tabs[0].children[pastureButton].model.prices[0].val / total;
            var avgWait = game.tabs[0].children[pastureButton].model.prices[0].val / (total + baseRift);
            console.log("\tMaximum time to build: " + game.toDisplaySeconds(baseWait) + " | Average time to build: " +
                game.toDisplaySeconds(avgWait));
            console.log("\tPrice: " + game.tabs[0].children[pastureButton].model.prices[0].val + " | Amortization: " +
                game.toDisplaySeconds(pastureAmor));
        }
        if (pastureAmor < bestAmoritization) {
            bestAmoritization = pastureAmor;
            bestBuilding = "独角兽牧场";
        }
        for (var i in game.tabs[5].zgUpgradeButtons) {
            var btn = game.tabs[5].zgUpgradeButtons[i];
            if (validBuildings.indexOf(btn.id) != -1) {
                if (btn.model.visible) {
                    unicornPrice = 0;
                    for (var j in btn.model.prices) {
                        if (btn.model.prices[j].name == "unicorns")
                            unicornPrice += btn.model.prices[j].val;
                        if (btn.model.prices[j].name == "tears")
                            unicornPrice += btn.model.prices[j].val * 2500 / onZig;
                    }
                    var bld = game.religion.getZU(btn.id);
                    var relBonus = religionRatio;
                    var riftChance = game.getEffect("riftChance");
                    for (var j in bld.effects) {
                        if (j == "unicornsRatioReligion")
                            relBonus += bld.effects[j]
                        if (j == "riftChance")
                            riftChance += bld.effects[j];
                    }
                    var unicornsPerRift = 500 * ((relBonus - 1) * 0.1 + 1);
                    var riftBonus = riftChance * riftChanceRatio / (10000 * 2) * unicornsPerRift;
                    riftBonus -= baseRift;
                    var amor = unicornsPerSecond * globalRatio * relBonus * paragonRatio * faithBonus * cycle;
                    amor -= total;
                    amor = amor + riftBonus;
                    if (log) {
                        console.log(btn.id);
                        console.log("\tBonus unicorns per second: " + amor);
                    }
                    amor = unicornPrice / amor;
                    if (log) {
                        var baseWait = unicornPrice / total;
                        var avgWait = unicornPrice / (total + baseRift);
                        var amorSeconds = game.toDisplaySeconds(amor);
                        if (amorSeconds == "")
                            amorSeconds = "NA";
                        console.log("\tMaximum time to build: " + game.toDisplaySeconds(baseWait) +
                            " | Average time to build: " +
                            game.toDisplaySeconds(avgWait));
                        console.log("\tPrice: " + unicornPrice + " | Amortization: " + amorSeconds);
                    }
                    if (amor < bestAmoritization)
                        if (riftBonus > 0 || relBonus > religionRatio && unicornPrice > 0) {
                            bestAmoritization = amor;
                            switch (btn.id) {
                                case 'unicornTomb':
                                    bestBuilding = '0';
                                    break;
                                case 'ivoryTower':
                                    bestBuilding = '1';
                                    break;
                                case 'ivoryCitadel':
                                    bestBuilding = '2';
                                    break;
                                case 'skyPalace':
                                    bestBuilding = '3';
                                    break;
                                case 'unicornUtopia':
                                    bestBuilding = '4';
                                    break;
                                case 'sunspire':
                                    bestBuilding = '5';
                                    break;
                            }
                        }
                }
            }
        }
        return bestBuilding;
    };

    ReligionManager.prototype = {
        manager: undefined,
        crafts: undefined,
        bulkManager: undefined,
        build: function(name, variant, amount) {
            var build = this.getBuild(name, variant);
            var button = this.getBuildButton(name, variant);

            if (!button || !button.model.metadata) {
                return game.religionTab.render();
            }
            if (!button.model.enabled) {
                button.controller.updateEnabled(button.model);
            }

            var amountTemp = amount;
            var label = build.label;
            amount = this.bulkManager.construct(button.model, button, amount);
            if (amount !== amountTemp) {
                warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
            }

            if (variant === "s") {
                storeForSummary(label, amount, 'faith');
                if (amount === 1) {
                    activity('小猫发现了 ' + label, 'ks-faith');
                } else {
                    activity('小猫发现了 ' + label + ' ' + amount + ' 次。', 'ks-faith');
                }
            } else {
                storeForSummary(label, amount, 'build');
                if (amount === 1) {
                    activity('小猫建造了一个新的 ' + label, 'ks-build');
                } else {
                    activity('小猫建造了 ' + amount + ' 个新的 ' + label, 'ks-build');
                }
            }
        },
        getBuild: function(name, variant) {
            switch (variant) {
                case 'z':
                    return game.religion.getZU(name);
                case 's':
                    return game.religion.getRU(name);
                case 'c':
                    return game.religion.getTU(name);
            }
        },
        getBuildButton: function(name, variant) {
            switch (variant) {
                case 'z':
                    var buttons = this.manager.tab.zgUpgradeButtons;
                    break;
                case 's':
                    var buttons = this.manager.tab.rUpgradeButtons;
                    break;
                case 'c':
                    var buttons = this.manager.tab.children[0].children[0].children;
            }
            var build = this.getBuild(name, variant);
            var zdmt = options.auto.faith.items;
            for (var i in buttons) {
                //判断是否为庙塔
                if (variant === "z" && game.bld.get("unicornPasture").val > 0 && i <= 5) {
                    //设置庙塔升级ID
                    if (zdmt["unicornTomb"].enabled && zdmt["ivoryTower"].enabled && zdmt["ivoryCitadel"].enabled && zdmt[
                            "skyPalace"].enabled && zdmt["unicornUtopia"].enabled && zdmt["sunspire"].enabled) {
                        if (getBestUniBuilding() <= 5) {
                            i = getBestUniBuilding();
                        } else {
                            i = 9;
                        }
                    }
                    //检测升级所需眼泪
                    var btn = game.tabs[5].zgUpgradeButtons[i];
                    for (var j of btn.model.prices) {
                        if (j.name == "tears") {
                            var unicornPrice = j.val;
                        }
                    }
                    //自动献祭独角兽
                    if (game.bld.getBuildingExt("ziggurat").meta.on > 0) {
                        var maxSacrifice = Math.floor(game.resPool.get("unicorns").value / 2500);
                        var neededSacrifice = Math.ceil((unicornPrice - game.resPool.get("tears").value) / game.bld.getBuildingExt(
                            "ziggurat").meta.on);
                        if (neededSacrifice <= maxSacrifice && neededSacrifice > 0) {
                            game.religionTab.sacrificeBtn.controller._transform(game.religionTab.sacrificeBtn.model,
                                neededSacrifice);
                        }
                    }
                }
                var haystack = buttons[i].model.name;
                if (haystack.indexOf(build.label) !== -1) {
                    return buttons[i];
                }
            }
        }
    };

    // Time manager
    // ============

    var TimeManager = function() {
        this.manager = new TabManager('Time');
        this.crafts = new CraftManager();
        this.bulkManager = new BulkManager();
    };

    TimeManager.prototype = {
        manager: undefined,
        crafts: undefined,
        bulkManager: undefined,
        build: function(name, variant, amount) {
            var build = this.getBuild(name, variant);
            var button = this.getBuildButton(name, variant);

            if (!button || !button.model.metadata) {
                return game.timeTab.render();
            }
            if (!button.model.enabled) {
                return button.controller.updateEnabled(button.model);
            }

            var amountTemp = amount;
            var label = build.label;
            amount = this.bulkManager.construct(button.model, button, amount);
            if (amount !== amountTemp) {
                warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
            }
            storeForSummary(label, amount, 'build');


            if (amount === 1) {
                activity('小猫建造了一个新的 ' + label, 'ks-build');
            } else {
                activity('小猫建造了 ' + amount + ' 个新的 ' + label, 'ks-build');
            }
        },
        getBuild: function(name, variant) {
            if (variant === 'chrono') {
                return game.time.getCFU(name);
            } else {
                return game.time.getVSU(name);
            }
        },
        getBuildButton: function(name, variant) {
            if (variant === 'chrono') {
                var buttons = this.manager.tab.children[2].children[0].children;
            } else {
                var buttons = this.manager.tab.children[3].children[0].children;
            }
            var build = this.getBuild(name, variant);
            for (var i in buttons) {
                var haystack = buttons[i].model.name;
                if (haystack.indexOf(build.label) !== -1) {
                    return buttons[i];
                }
            }
        }
    };

    // Upgrade manager
    // ============

    var UpgradeManager = function() {
        this.workManager = new TabManager('Workshop');
        this.sciManager = new TabManager('Science');
        this.crafts = new CraftManager();
    };

    UpgradeManager.prototype = {
        manager: undefined,
        crafts: undefined,
        build: function(upgrade, variant) {

            var button = this.getBuildButton(upgrade, variant);

            if (!button || !button.model.metadata) {
                if (variant === 'workshop') {
                    game.workshopTab.render();
                } else {
                    game.libraryTab.render();
                }
                return;
            }
            if (!button.model.enabled) {
                button.controller.updateEnabled(button.model);
            }

            //need to simulate a click so the game updates everything properly
            var label = upgrade.label;
            //button.controller.payPrice(button.model, {}, function() {});
            button.controller.onPurchase(button.model, {}, function() {});

            if (variant === 'workshop') {
                storeForSummary(label, 1, 'upgrade');
                activity('小猫购买了 ' + label + ' 升级', 'ks-upgrade');
            } else if (variant === 'policy') {
                activity('小猫颁布了 ' + label + ' 政策', 'ks-upgrade');
            } else {
                storeForSummary(label, 1, 'research');
                activity('小猫研究了 ' + label + ' 科学', 'ks-research');
            }
        },
        getBuildButton: function(upgrade, variant) {
            if (variant === 'workshop') {
                var buttons = game.workshopTab.buttons;
            } else if (variant === 'science') {
                var buttons = game.libraryTab.buttons;
            } else if (variant === 'policy') {
                var buttons = game.libraryTab.policyPanel.children;
            }

            for (let i of buttons) {
                var haystack = i.model.name;
                if (haystack === upgrade.label) {
                    return i;
                }
            }
        }
    };

    // Building manager
    // ================

    var BuildManager = function() {
        this.manager = new TabManager('Bonfire');
        this.crafts = new CraftManager();
        this.bulkManager = new BulkManager();
    };

    BuildManager.prototype = {
        manager: undefined,
        crafts: undefined,
        bulkManager: undefined,
        build: function(name, stage, amount) {
            var build = this.getBuild(name);
            var button = this.getBuildButton(name, stage);

            if (!button || !button.model.metadata) {
                return game.bldTab.render();
            }
            if (!button.model.enabled) {
                return button.controller.updateEnabled(button.model);
            }

            var amountTemp = amount;
            var label = build.meta.label ? build.meta.label : build.meta.stages[stage].label;
            amount = this.bulkManager.construct(button.model, button, amount);
            if (amount !== amountTemp) {
                warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
            }
            storeForSummary(label, amount, 'build');

            if (amount === 0) {
                return;
            } else if (amount === 1) {
                activity('小猫建造了一个新的 ' + label, 'ks-build');
            } else {
                activity('小猫建造了 ' + amount + ' 个新的 ' + label, 'ks-build');
            }
        },
        getBuild: function(name) {
            return game.bld.getBuildingExt(name);
        },
        getBuildButton: function(name, stage) {
            var buttons = this.manager.tab.children;
            var build = this.getBuild(name);
            var label = typeof stage !== 'undefined' ? build.meta.stages[stage].label : build.meta.label;

            for (let i of buttons) {
                var haystack = i.model.name;
                if (haystack.indexOf(label) !== -1) {
                    return i;
                }
            }
        }
    };

    // Space manager
    // ================

    var SpaceManager = function() {
        this.manager = new TabManager('Space');
        this.crafts = new CraftManager();
        this.bulkManager = new BulkManager();
    };

    SpaceManager.prototype = {
        manager: undefined,
        crafts: undefined,
        bulkManager: undefined,
        build: function(name, amount) {
            var build = this.getBuild(name);
            var button = this.getBuildButton(name);

            if (!build.unlocked || !options.auto.space.items[name].enabled) {
                return;
            }
            if (!button || !button.model.metadata) {
                return game.spaceTab.render();
            }
            if (!button.model.enabled) {
                return button.controller.updateEnabled(button.model);
            }

            var amountTemp = amount;
            var label = build.label;
            amount = this.bulkManager.construct(button.model, button, amount);
            if (amount !== amountTemp) {
                warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
            }
            storeForSummary(label, amount, 'build');

            if (amount === 0) {
                return;
            } else if (amount === 1) {
                activity('小猫建造了一个新的 ' + label, 'ks-build');
            } else {
                activity('小猫建造了 ' + amount + ' 个新的 ' + label, 'ks-build');
            }
        },
        getBuild: function(name) {
            return game.space.getBuilding(name);
        },
        getBuildButton: function(name) {
            var panels = this.manager.tab.planetPanels;

            for (var panel of panels) {
                for (var child of panel.children) {
                    if (child.id === name) return child;
                }
            }
        }
    };

    // Crafting Manager
    // ================

    var CraftManager = function() {
        //this.cacheManager = new CacheManager();
    };

    CraftManager.prototype = {
        craft: function(name, amount) {
            amount = Math.floor(amount);

            if (!name || 1 > amount) return;
            if (!this.canCraft(name, amount)) {
                return;
            }

            var craft = this.getCraft(name);
            var ratio = game.getResCraftRatio(craft);

            game.craft(craft.name, amount);

            // determine actual amount after crafting upgrades
            amount = (amount * (1 + ratio)).toFixed(2);

            storeForSummary(ucfirst(name), amount, 'craft');
            activity('小猫制作了 ' + game.getDisplayValueExt(amount) + ' ' + cnItem(ucfirst(name)), 'ks-craft');
        },
        canCraft: function(name, amount) {
            var craft = this.getCraft(name);
            var enabled = options.auto.craft.items[name].enabled;
            var result = false;

            if (craft.unlocked && enabled) {
                result = true;

                for (var i in craft.prices) {
                    var price = craft.prices[i];
                    var value = this.getValueAvailable(price.name);

                    if (value < price.val * amount) {
                        result = false;
                    }
                }
            }

            return result;
        },
        getCraft: function(name) {
            return game.workshop.getCraft(name);
        },
        singleCraftPossible: function(name) {
            var materials = this.getMaterials(name);
            for (var mat in materials) {
                if (this.getValueAvailable(mat, true) < materials[mat]) {
                    return false;
                }
            }
            return true;
        },
        getLowestCraftAmount: function(name, limited, limRat, aboveTrigger) {
            var amount = Number.MAX_VALUE;
            var plateMax = Number.MAX_VALUE;
            var materials = this.getMaterials(name);

            var craft = this.getCraft(name);
            var ratio = game.getResCraftRatio(craft);
            var trigger = options.auto.craft.trigger;
            //var optionVal = options.auto.options.enabled && options.auto.options.items.shipOverride.enabled;

            // Safeguard if materials for craft cannot be determined.

            if (name === 'steel' && limited) {
                var plateRatio = game.getResCraftRatio(this.getCraft('plate'));
                if (this.getValueAvailable('plate') / this.getValueAvailable('steel') < ((plateRatio + 1) / 125) / ((ratio + 1) / 100)) {
                    return 0;
                }
            } else if (name === 'plate' && limited) {
                var steelRatio = game.getResCraftRatio(this.getCraft('steel'));
                if (game.getResourcePerTick('coal', true) > 0) {
                    if (this.getValueAvailable('plate') / this.getValueAvailable('steel') > ((ratio + 1) / 125) / ((steelRatio +
                                1) /
                            100)) {
                        var ironInTime = ((this.getResource('coal').maxValue * trigger - this.getValue('coal')) / game.getResourcePerTick(
                            'coal', true)) * Math.max(game.getResourcePerTick('iron', true), 0);
                        plateMax = (this.getValueAvailable('iron') - Math.max(this.getResource('coal').maxValue * trigger -
                            ironInTime, 0)) / 125;
                    }
                }
            }

            if (!materials) return 0;

            var res = this.getResource(name);

            for (var i in materials) {
                var delta = undefined;
                //if (!limited || (this.getResource(i).maxValue > 0 && aboveTrigger) || (name === 'ship' && optionVal && (this.getResource('ship').value < 243)) )
                if (!limited || (this.getResource(i).maxValue > 0 && aboveTrigger)) {
                    // If there is a storage limit, we can just use everything returned by getValueAvailable, since the regulation happens there
                    delta = this.getValueAvailable(i) / materials[i];
                } else {
                    // Take the currently present amount of material to craft into account
                    // Currently this determines the amount of resources that can be crafted such that base materials are proportionally distributed across limited resources.
                    // This base material distribution is governed by limRat "limited ratio" which defaults to 0.5, corresponding to half of the possible components being further crafted.
                    // If this were another value, such as 0.75, then if you had 10000 beams and 0 scaffolds, 7500 of the beams would be crafted into scaffolds.
                    delta = limRat * ((this.getValueAvailable(i, true) + (materials[i] / (1 + ratio)) * this.getValueAvailable(
                        res
                        .name, true)) / materials[i]) - (this.getValueAvailable(res.name, true) / (1 + ratio));
                }

                amount = Math.min(delta, amount, plateMax);
            }

            // If we have a maximum value, ensure that we don't produce more than
            // this value. This should currently only impact wood crafting, but is
            // written generically to ensure it works for any craft that produces a
            // good with a maximum value.
            if (res.maxValue > 0 && amount > (res.maxValue - res.value))
                amount = res.maxValue - res.value;

            return Math.floor(amount);
        },
        getMaterials: function(name) {
            var materials = {};
            var craft = this.getCraft(name);

            // Safeguard against craft items that aren't actually available yet.
            if (!craft) return;

            var prices = game.workshop.getCraftPrice(craft);

            for (var i of prices) {
                materials[i.name] = i.val;
            }

            return materials;
        },
        //getTickVal: function (res, preTrade)
        getTickVal: function(res) {
            var prod = game.getResourcePerTick(res.name, true);
            if (res.craftable) {
                var minProd = Number.MAX_VALUE;
                var materials = this.getMaterials(res.name);
                for (var mat in materials) {
                    var rat = (1 + game.getResCraftRatio(res.name)) / materials[mat];
                    //Currently preTrade is only true for the festival stuff, so including furs from hunting is ideal.
                    var addProd = this.getTickVal(this.getResource(mat));
                    minProd = Math.min(addProd * rat, minProd);
                }
                prod += (minProd !== Number.MAX_VALUE) ? minProd : 0;
            }
            if (prod <= 0 && (res.name === 'spice' || res.name === 'blueprint')) {
                return 'ignore';
            }
            //if (!preTrade) {prod += this.cacheManager.getResValue(res.name);}
            return prod;
        },
        getAverageHunt: function() {
            var output = {};
            var hunterRatio = game.getEffect('hunterRatio') + game.village.getEffectLeader('manager', 0);

            output['furs'] = 40 + 32.5 * hunterRatio;

            output['ivory'] = 50 * Math.min(0.225 + 0.01 * hunterRatio, 0.5) + 40 * hunterRatio * Math.min(0.225 + 0.01 *
                hunterRatio, 0.5);

            output['unicorns'] = 0.05;

            if (this.getValue('zebras') >= 10) {
                output['bloodstone'] = (this.getValue('bloodstone') === 0) ? 0.05 : 0.0005;
            }

            if (game.ironWill && game.workshop.get('goldOre').researched) {
                output['gold'] = 0.625 + 0.625 * hunterRatio;
            }

            return output;
        },
        getResource: function(name) {
            //KG BETA BUGFIX
            // for (var i in game.resPool.resources) {
            //     var res = game.resPool.resources[i];
            //     if (res.name === name) return res;
            // }
            var res = game.resPool.get(name);
            if (res) return res
            warning('unable to find resource ' + name);
            return null;
        },
        getValue: function(name) {
            return this.getResource(name).value;
        },
        getStock: function(name) {
            var res = options.auto.resources[name];
            var stock = (res && res.enabled) ? res.stock : 0;

            return !stock ? 0 : stock;
        },
        getValueAvailable: function(name, all, typeTrigger) {
            var value = this.getValue(name);
            var stock = this.getStock(name);

            if (!typeTrigger && typeTrigger !== 0) {
                var trigger = options.auto.craft.trigger;
            } else {
                var trigger = typeTrigger;
            }

            if ('catnip' === name) {
                var pastures = (game.bld.getBuildingExt('pasture').meta.stage === 0) ? game.bld.getBuildingExt('pasture').meta.val : 0;
                var aqueducts = (game.bld.getBuildingExt('aqueduct').meta.stage === 0) ? game.bld.getBuildingExt('aqueduct').meta.val : 0;
                var resPerTick = this.getPotentialCatnip(true, pastures, aqueducts);

                if (resPerTick < 0) stock -= resPerTick * 202 * 5;
            }

            value = Math.max(value - stock, 0);

            // If we have a maxValue, and user hasn't requested all, check
            // consumption rate
            if (!all && this.getResource(name).maxValue > 0) {
                var res = options.auto.resources[name];
                var consume = res && (res.consume != undefined) ? res.consume : options.consume;

                value -= Math.min(this.getResource(name).maxValue * trigger, value) * (1 - consume);
            }

            return value;
        },
        getPotentialCatnip: function(worstWeather, pastures, aqueducts) {
            var fieldProd = game.getEffect('catnipPerTickBase');
            if (worstWeather) {
                fieldProd *= 0.1;
            } else {
                fieldProd *= game.calendar.getWeatherMod() + game.calendar.getCurSeason().modifiers['catnip'];
            }
            var vilProd = (game.village.getResProduction().catnip) ? game.village.getResProduction().catnip * (1 + game.getEffect(
                'catnipJobRatio')) : 0;
            var baseProd = fieldProd + vilProd;

            var hydroponics = game.space.getBuilding('hydroponics').val;
            if (game.prestige.meta[0].meta[21].researched) {
                if (game.calendar.cycle === 2) {
                    hydroponics *= 2;
                }
                if (game.calendar.cycle === 7) {
                    hydroponics *= 0.5;
                }
            }
            baseProd *= 1 + 0.03 * aqueducts + 0.025 * hydroponics;

            var paragonBonus = (game.challenges.currentChallenge == "winterIsComing") ? 0 : game.prestige.getParagonProductionRatio();
            baseProd *= 1 + paragonBonus;

            baseProd *= 1 + game.religion.getSolarRevolutionRatio();

            if (!game.opts.disableCMBR) {
                baseProd *= (1 + game.getCMBRBonus());
            }

            baseProd = game.calendar.cycleEffectsFestival({
                catnip: baseProd
            })['catnip'];

            var baseDemand = game.village.getResConsumption()['catnip'];
            var uniPastures = game.bld.getBuildingExt('unicornPasture').meta.val;
            baseDemand *= 1 + (game.getLimitedDR(pastures * -0.005 + uniPastures * -0.0015, 1.0));
            if (game.village.sim.kittens.length > 0 && game.village.happiness > 1) {
                var happyCon = game.village.happiness - 1;
                if (game.challenges.currentChallenge == "anarchy") {
                    baseDemand *= 1 + happyCon * (1 + game.getEffect("catnipDemandWorkerRatioGlobal"));
                } else {
                    baseDemand *= 1 + happyCon * (1 + game.getEffect("catnipDemandWorkerRatioGlobal")) * (1 - game.village.getFreeKittens() / game.village.sim.kittens.length);
                }
            }
            baseProd += baseDemand;

            baseProd += game.getResourcePerTickConvertion('catnip');

            //Might need to eventually factor in time acceleration using game.timeAccelerationRatio().
            return baseProd;
        }
    };

    // Bulk Manager
    // ============

    var BulkManager = function() {
        this.craftManager = new CraftManager();
    };

    BulkManager.prototype = {
        craftManager: undefined,
        bulk: function(builds, metaData, trigger, source) {
            var bList = [];
            var countList = [];
            var counter = 0;
            for (var name in builds) {
                var build = builds[name];
                var data = metaData[name];
                if (!build.enabled) {
                    continue;
                }
                if (data.tHidden) {
                    continue;
                }
                if (data.rHidden) {
                    continue;
                }
                if ((data.rHidden === undefined) && !data.unlocked) {
                    continue;
                }
                if (name === 'cryochambers' && (game.time.getVSU('usedCryochambers').val > 0 ||
                        game.bld.getBuildingExt('chronosphere').meta.val <= data.val)) {
                    continue;
                }
                if (name === 'ressourceRetrieval' && data.val >= 100) {
                    continue;
                }
                var prices = (data.stages) ? data.stages[data.stage].prices : data.prices;
                var priceRatio = this.getPriceRatio(data, source);
                if (!this.singleBuildPossible(data, prices, priceRatio, source)) {
                    continue;
                }
                var require = !build.require ? false : this.craftManager.getResource(build.require);
                if (!require || trigger <= require.value / require.maxValue) {
                    if (typeof(build.stage) !== 'undefined' && build.stage !== data.stage) {
                        continue;
                    }
                    bList.push(new Object());
                    bList[counter].id = name;
                    bList[counter].label = build.label;
                    bList[counter].name = build.name;
                    bList[counter].stage = build.stage;
                    bList[counter].variant = build.variant;
                    countList.push(new Object());
                    countList[counter].id = name;
                    countList[counter].name = build.name;
                    countList[counter].count = 0;
                    countList[counter].spot = counter;

                    countList[counter].prices = [];
                    var pricesDiscount = game.getLimitedDR(game.getEffect(name + "CostReduction"), 1);
                    var priceModifier = 1 - pricesDiscount;
                    for (var i in prices) {
                        var resPriceDiscount = game.getLimitedDR(game.getEffect(prices[i].name + "CostReduction"), 1);
                        var resPriceModifier = 1 - resPriceDiscount;
                        countList[counter].prices.push({
                            val: prices[i].val * priceModifier * resPriceModifier,
                            name: prices[i].name
                        });
                    }

                    countList[counter].priceRatio = priceRatio;
                    countList[counter].source = source;
                    countList[counter].ISLAND = build.variant;
                    counter++;
                }
            }

            if (countList.length === 0) {
                return;
            }

            var tempPool = new Object();
            for (var res of game.resPool.resources) {
                tempPool[res.name] = res.value;
            }
            for (var res in tempPool) {
                tempPool[res] = this.craftManager.getValueAvailable(res, true);
            }

            var k = 0;
            while (countList.length !== 0) {
                bulkLoop: for (var j = 0; j < countList.length; j++) {
                    var nowNum;
                    var goalNum;
                    switch (countList[j].source) {
                        case 'bonfire':
                            nowNum = game.bld.get(countList[j].name || countList[j].id).val;
                            goalNum = options.auto.build.items[countList[j].id].limited;
                            break;
                        case 'space':
                            nowNum = game.space.getBuilding(countList[j].id).val;
                            goalNum = options.auto.space.items[countList[j].id].limited;
                            break;
                        case 'faith':
                            switch (countList[j].ISLAND) {
                                case 'z':
                                    nowNum = game.religion.getZU(countList[j].id).val;
                                    break;
                                case 's':
                                    nowNum = game.religion.getRU(countList[j].id).val;
                                    break;
                                case 'c':
                                    nowNum = game.religion.getTU(countList[j].id).val;
                                    break;
                            }
                            goalNum = options.auto.faith.items[countList[j].id].limited;
                            break;
                        case 'time':
                            if (countList[j].ISLAND == 'chrono') {
                                nowNum = game.time.getCFU(countList[j].id).val;
                            } else {
                                nowNum = game.time.getVSU(countList[j].id).val;
                            }
                            goalNum = options.auto.time.items[countList[j].id].limited;
                            break;
                    }
                    if (nowNum + countList[j].count >= goalNum) {
                        bList[countList[j].spot].count = countList[j].count;
                        countList.splice(j, 1);
                        j--;
                        continue bulkLoop;
                    }
                    var build = countList[j];
                    var data = metaData[build.id];
                    var prices = build.prices;
                    var priceRatio = build.priceRatio;
                    var source = build.source;
                    for (var p = 0; p < prices.length; p++) {

                        var spaceOil = false;
                        var cryoKarma = false;
                        if (source && source === 'space' && prices[p].name === 'oil') {
                            spaceOil = true;
                            var oilPrice = prices[p].val * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
                        } else if (build.id === 'cryochambers' && prices[p].name === 'karma') {
                            cryoKarma = true;
                            var karmaPrice = prices[p].val * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(),
                                1.0));
                        }

                        if (spaceOil) {
                            var nextPriceCheck = (tempPool['oil'] < oilPrice * Math.pow(1.05, k + data.val));
                        } else if (cryoKarma) {
                            var nextPriceCheck = (tempPool['karma'] < karmaPrice * Math.pow(priceRatio, k + data.val));
                        } else {
                            var nextPriceCheck = (tempPool[prices[p].name] < prices[p].val * Math.pow(priceRatio, k + data.val));
                        }
                        if (nextPriceCheck || (data.noStackable && (k + data.val) >= 1) || (build.id === 'ressourceRetrieval' &&
                                k +
                                data.val >= 100) ||
                            (build.id === 'cryochambers' && game.bld.getBuildingExt('chronosphere').meta.val <= k + data.val)) {
                            for (var p2 = 0; p2 < p; p2++) {
                                if (source && source === 'space' && prices[p2].name === 'oil') {
                                    var oilPriceRefund = prices[p2].val * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
                                    tempPool['oil'] += oilPriceRefund * Math.pow(1.05, k + data.val);
                                } else if (build.id === 'cryochambers' && prices[p2].name === 'karma') {
                                    var karmaPriceRefund = prices[p2].val * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(),
                                        1.0));
                                    tempPool['karma'] += karmaPriceRefund * Math.pow(priceRatio, k + data.val);
                                } else {
                                    var refundVal = prices[p2].val * Math.pow(priceRatio, k + data.val);
                                    tempPool[prices[p2].name] += (prices[p2].name === 'void') ? Math.ceil(refundVal) : refundVal;
                                }
                            }
                            if (build.limit && build.limit != -1) {
                                build.count = Math.max(0, Math.min(build.count, (build.limit - build.val)));
                            }
                            bList[countList[j].spot].count = countList[j].count;
                            countList.splice(j, 1);
                            j--;
                            continue bulkLoop;
                        }
                        if (spaceOil) {
                            tempPool['oil'] -= oilPrice * Math.pow(1.05, k + data.val);
                        } else if (cryoKarma) {
                            tempPool['karma'] -= karmaPrice * Math.pow(priceRatio, k + data.val);
                        } else {
                            var pVal = prices[p].val * Math.pow(priceRatio, k + data.val);
                            tempPool[prices[p].name] -= (prices[p].name === 'void') ? Math.ceil(pVal) : pVal;
                        }
                    }
                    countList[j].count++;
                }
                k++;
            }
            return bList;
        },
        construct: function(model, button, amount) {
            var meta = model.metadata;
            var counter = 0;
            if (typeof meta.limitBuild == "number" && meta.limitBuild - meta.val < amount) {
                amount = meta.limitBuild - meta.val;
            }
            if (!model.enabled) {
                button.controller.updateEnabled(model);
            }
            if (model.enabled && button.controller.hasResources(model) || game.devMode) {
                model.prices = button.controller.getPrices(model);
                while (button.controller.hasResources(model) && amount > 0) {
                    model.prices = button.controller.getPrices(model);
                    button.controller.incrementValue(model);
                    button.controller.payPrice(button.model);
                    counter++;
                    amount--;
                }
                if (meta.breakIronWill) {
                    game.ironWill = false;
                }
                if (meta.unlocks) {
                    game.unlock(meta.unlocks);
                }
                if (meta.upgrades) {
                    game.upgrade(meta.upgrades);
                }
            }
            return counter;
        },
        getPriceRatio: function(data, source) {
            var ratio = (!data.stages) ? data.priceRatio : (data.priceRatio || data.stages[data.stage].priceRatio);

            var ratioDiff = 0;
            if (source && source === 'bonfire') {
                ratioDiff = game.getEffect(data.name + "PriceRatio") +
                    game.getEffect("priceRatio") +
                    game.getEffect("mapPriceReduction");

                ratioDiff = game.getLimitedDR(ratioDiff, ratio - 1);
            }
            return ratio + ratioDiff;
        },
        singleBuildPossible: function(data, prices, priceRatio, source) {
            var pricesDiscount = game.getLimitedDR(game.getEffect(data.name + "CostReduction"), 1);
            var priceModifier = 1 - pricesDiscount;
            for (var price of prices) {
                var resPriceDiscount = game.getLimitedDR(game.getEffect(price.name + "CostReduction"), 1);
                var resPriceModifier = 1 - resPriceDiscount;
                var rightPrice = price.val * priceModifier * resPriceModifier;
                if (source && source === 'space' && price.name === 'oil') {
                    var oilPrice = rightPrice * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
                    if (this.craftManager.getValueAvailable('oil', true) < oilPrice * Math.pow(1.05, data.val)) {
                        return false;
                    }
                } else if (data.name === 'cryochambers' && price.name === 'karma') {
                    var karmaPrice = rightPrice * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
                    if (this.craftManager.getValueAvailable('karma', true) < karmaPrice * Math.pow(priceRatio, data.val)) {
                        return false;
                    }
                } else {
                    if (this.craftManager.getValueAvailable(price.name, true) < rightPrice * Math.pow(priceRatio, data.val)) {
                        return false;
                    }
                }
            }
            return true;
        }
    };

    // Trading Manager
    // ===============

    var TradeManager = function() {
        this.craftManager = new CraftManager();
        this.manager = new TabManager('Trade');
    };

    TradeManager.prototype = {
        craftManager: undefined,
        manager: undefined,
        trade: function(name, amount) {

            if (!name || 1 > amount) {
                warning('KS trade checks are not functioning properly, please create an issue on the github page.');
            }

            var race = this.getRace(name);

            var button = this.getTradeButton(race.name);

            if (!button.model.enabled || !options.auto.trade.items[name].enabled) {
                warning('KS trade checks are not functioning properly, please create an issue on the github page.');
            }

            game.diplomacy.tradeMultiple(race, amount);
            storeForSummary(race.title, amount, 'trade');
            activity('小猫和 ' + cnItem(ucfirst(name)) + ' 交易了 ' + amount + ' 次', 'ks-trade');
        },
        getProfitability: function(name) {
            var race = this.getRace(name);

            var materials = this.getMaterials(name);
            var cost = 0;
            for (var mat in materials) {
                var tick = this.craftManager.getTickVal(this.craftManager.getResource(mat));
                if (tick <= 0) {
                    return false;
                }
                cost += materials[mat] / tick;
            }
            var output = this.getAverageTrade(race);
            var profit = 0;
            for (var prod in output) {
                var res = this.craftManager.getResource(prod);
                var tick = this.craftManager.getTickVal(res);
                if (tick === 'ignore') {
                    continue;
                }
                if (tick <= 0) {
                    return true;
                }
                profit += (res.maxValue > 0) ? Math.min(output[prod], Math.max(res.maxValue - res.value, 0)) / tick : output[
                    prod] / tick;
            }
            return (cost <= profit);
        },
        getAverageTrade: function(race) {
            var standRat = game.getEffect("standingRatio") + game.diplomacy.calculateStandingFromPolicies(race.name, game);
            var rRatio = 1 + race.energy * 0.02;
            var tRatio = 1 + game.diplomacy.getTradeRatio() + game.diplomacy.calculateTradeBonusFromPolicies(race.name, game) + game.challenges.getChallenge("pacifism").getTradeBonusEffect(game);
            var failedRat = (race.standing < 0) ? (race.standing + standRat) : 0;
            var successRat = (failedRat < 0) ? (1 + failedRat) : 1;
            var bonusRat = (race.standing > 0) ? Math.min(race.standing + standRat / 2, 1) : 0;
            var output = {};
            for (var s in race.sells) {
                var item = race.sells[s];
                if (!this.isValidTrade(item, race)) {continue;}
                var resource = this.craftManager.getResource(item.name);
                var mean = 0;
                var tradeChance = (race.embassyPrices) ? item.chance * (1 + game.getLimitedDR(0.01 * race.embassyLevel, 0.75)) : item.chance;
                var sRatio = (!item.seasons) ? 1 : 1 + item.seasons[game.calendar.getCurSeason().name];
                var normBought = (successRat - bonusRat) * Math.min(tradeChance/100, 1);
                var normBonus = bonusRat * Math.min(tradeChance/100, 1);
                mean = (normBought + 1.25 * normBonus) * item.value * rRatio * sRatio * tRatio;
                output[item.name] = mean;
            }
            if (race.name == "zebras") {
                var shipCount = game.resPool.get("ship").value;
                var zebraRelationModifierTitanium = game.getEffect("zebraRelationModifier") * game.bld.getBuildingExt("tradepost").meta.effects["tradeRatio"];
                var titanProb = Math.min(0.15 + shipCount * 0.0035, 1);
                output["titanium"] = (1.5 + shipCount * 0.03) * (1 + zebraRelationModifierTitanium) * titanProb * successRat;
            }

            var spiceChance = (race.embassyPrices) ? 0.35 * (1 + 0.01 * race.embassyLevel) : 0.35;
            var spiceTradeAmount = successRat * Math.min(spiceChance, 1);
            output['spice'] = 25 * spiceTradeAmount + 50 * spiceTradeAmount * tRatio / 2;

            output['blueprint'] = 0.1 * successRat;

            return output;
        },
        isValidTrade: function(item, race) {
            return (!(item.minLevel && race.embassyLevel < item.minLevel) && (game.resPool.get(item.name).unlocked ||
                item.name ===
                'titanium' || item.name === 'uranium' || race.name === 'leviathans'));
        },
        getLowestTradeAmount: function(name, limited, trigConditions) {
            var amount = undefined;
            var highestCapacity = undefined;
            var materials = this.getMaterials(name);
            var race = this.getRace(name);

            for (var i in materials) {
                if (i === "manpower") {
                    var manpowerValue = Math.max(this.craftManager.getValueAvailable(i, true) - 100, 0);
                    var total = manpowerValue / materials[i];
                } else {
                    var total = this.craftManager.getValueAvailable(i, limited, options.auto.trade.trigger) / materials[i];
                }
                amount = (amount === undefined || total < amount) ? total : amount;
            }

            amount = Math.floor(amount);

            if (amount === 0) {
                return 0;
            }

            if (race === null || options.auto.trade.items[name].allowcapped) return amount;

            // Loop through the items obtained by the race, and determine
            // which good has the most space left. Once we've determined this,
            // reduce the amount by this capacity. This ensures that we continue to trade
            // as long as at least one resource has capacity, and we never over-trade.

            var tradeOutput = this.getAverageTrade(race);
            for (var s in race.sells) {
                var item = race.sells[s];
                var resource = this.craftManager.getResource(item.name);
                var max = 0;

                // No need to process resources that don't cap
                if (!resource.maxValue) continue;
                max = tradeOutput[item.name];
                var capacity = Math.max((resource.maxValue - resource.value) / max, 0);
                highestCapacity = (capacity < highestCapacity) ? highestCapacity : capacity;
            }

            // We must take the ceiling of capacity so that we will trade as long
            // as there is any room, even if it doesn't have exact space. Otherwise
            // we seem to starve trading altogether.
            highestCapacity = Math.ceil(highestCapacity * 2);

            if (highestCapacity === 0) {
                return 0;
            }

            // Now that we know the most we *should* trade for, check to ensure that
            // we trade for our max cost, or our max capacity, whichever is lower.
            // This helps us prevent trading for resources we can't store. Note that we
            // essentially ignore blueprints here. In addition, if highestCapacity was never set,
            // then we just

            amount = (highestCapacity < amount) ? Math.max(highestCapacity - 1, 1) : amount;

            return Math.floor(amount);
        },
        getMaterials: function(name) {
            var materials = {
                manpower: 50 - game.getEffect("tradeCatpowerDiscount"),
                gold: 15 - game.getEffect("tradeGoldDiscount")
            };

            if (name === undefined)
                return materials;
            var prices = this.getRace(name).buys;

            for (var i in prices) {
                var price = prices[i];

                materials[price.name] = price.val;
            }

            return materials;
        },
        getRace: function(name) {
            if (name === undefined)
                return null;
            else
                return game.diplomacy.get(name);
        },
        getTradeButton: function(race) {
            for (var i of this.manager.tab.racePanels) {
                var panel = i;

                if (panel.race.name === race) return panel.tradeBtn;
            }
        },
        singleTradePossible: function(name) {
            var materials = this.getMaterials(name);
            for (var mat in materials) {
                if (this.craftManager.getValueAvailable(mat, true) < materials[mat]) {
                    return false;
                }
            }
            return true;
        }
    };

    // Cache Manager
    // ===============

    /*var CacheManager = function () {};

    CacheManager.prototype = {
    		pushToCache: function (data) {
    	var cache = options.auto.cache.cache;
    	var cacheSum = options.auto.cache.cacheSum;
    	var materials = data['materials'];
    	var currentTick = game.timer.ticksTotal;

    	cache.push(data);
    	for (var mat in materials) {
    			if (!cacheSum[mat]) {cacheSum[mat] = 0;}
    			cacheSum[mat] += materials[mat];
    	}

    	for (var i = 0; i < cache.length; i++) {
    			var oldData = cache[i];
    			if (cache.length > 10000) {
    		var oldMaterials = oldData['materials'];
    		for (var mat in oldMaterials) {
    				if (!cacheSum[mat]) {cacheSum[mat] = 0;}
    				cacheSum[mat] -= oldMaterials[mat];
    		}
    		cache.shift;
    		i--;
    			} else {
    		return;
    			}
    	}
    		},
    		getResValue: function (res) {
    	var cache = options.auto.cache.cache;
    	if (cache.length === 0) {return 0;}
    	var cacheSum = options.auto.cache.cacheSum;
    	if (!cacheSum[res]) {return 0;}
    	var currentTick = game.timer.ticksTotal;
    	var startingTick = cache[0].timeStamp;

    	return (cacheSum[res] / (currentTick - startingTick));
    		}
    };*/

    // ==============================
    // Configure overall page display
    // ==============================

    var right = $('#rightColumn');

    var addRule = function(rule) {
        var sheets = document.styleSheets;
        sheets[0].insertRule(rule, 0);
    };

    var defaultSelector = 'body[data-ks-style]:not(.scheme_sleek)';

    addRule('body {' // low priority. make sure it can be covered by the theme
        +
        'font-family: inherit;' +
        'font-size: inherit;' +
        '}');

    addRule(defaultSelector + ' #game {'
        // + 'font-family: monospace;'
        // + 'font-size: 12px;'
        +
        'min-width: 1300px;' +
        'top: 32px;' +
        '}');

    // addRule(defaultSelector + ' {'
    //     + 'font-family: monospace;'
    //     + 'font-size: 12px;'
    //     + '}');

    addRule(defaultSelector + ' .column {' +
        'min-height: inherit;' +
        'max-width: inherit !important;' +
        'padding: 1%;' +
        'margin: 0;' +
        'overflow-y: auto;' +
        '}');

    addRule(defaultSelector + ' #leftColumn {' +
        'height: 92%;' +
        'width: 26%;' +
        '}');

    addRule(defaultSelector + ' #midColumn {' +
        'margin-top: 1% !important;' +
        'height: 90%;' +
        'width: 48%;' +
        '}');

    addRule(defaultSelector + ' #rightColumn {' +
        'overflow-y: auto;' +
        'height: 92%;' +
        'width: 19%;' +
        'font-size: 12px;' +
        '}');

    addRule('body #gamePageContainer #game #rightColumn {' +
        'overflow-y: auto;' +
        '}');

    // addRule(defaultSelector + ' #gameLog .msg {'
    //     + 'display: block;'
    //     + '}');

    addRule(defaultSelector + ' #gameLog {' +
        'overflow-y: hidden !important;' +
        'width: 100% !important;' +
        'padding-top: 5px !important;' +
        '}');

    addRule(defaultSelector + ' #resContainer .maxRes {' +
        'color: #676766;' +
        '}');

    addRule(defaultSelector + ' #game .btn {' +
        'border-radius: 0px;' +
        'font-family: monospace;' +
        'font-size: 12px !important;' +
        'margin: 0 5px 7px 0;' +
        'width: 290px;' +
        '}');

    addRule(defaultSelector + ' #game .map-viewport {' +
        'height: 340px;' +
        'max-width: 500px;' +
        'overflow: visible;' +
        '}');

    addRule(' #game .map-dashboard {' +
        'height: 120px;' +
        'width: 292px;' +
        '}');

    addRule('#ks-options ul {' +
        'list-style: none;' +
        'margin: 0 0 5px;' +
        'padding: 0;' +
        '}');

    addRule('#ks-options ul:after {' +
        'clear: both;' +
        'content: " ";' +
        'display: block;' +
        'height: 0;' +
        '}');

    addRule('#ks-options ul li {' +
        'display: block;' +
        'float: left;' +
        'width: 100%;' +
        '}');

    addRule('#ks-options #toggle-list-resources .stockWarn *,' +
        '#ks-options #toggle-reset-list-resources .stockWarn * {' +
        'color: ' + options.stockwarncolor + ';' +
        '}');

    addRule('.right-tab {' +
        'height: unset !important;' +
        '}');

    document.body.setAttribute("data-ks-style", "");

    // Local Storage
    // =============

    var kittenStorageVersion = 1;

    var kittenStorage = {
        version: kittenStorageVersion,
        toggles: {},
        items: {},
        resources: {},
        triggers: {}
    };

    var initializeKittenStorage = function() {
        $("#items-list-build, #items-list-craft, #items-list-trade").find("input[id^='toggle-']").each(function() {
            kittenStorage.items[$(this).attr("id")] = $(this).prop("checked");
        });

        saveToKittenStorage();
    };

    var saveToKittenStorage = function() {
        kittenStorage.toggles = {
            build: options.auto.build.enabled,
            space: options.auto.space.enabled,
            craft: options.auto.craft.enabled,
            upgrade: options.auto.upgrade.enabled,
            trade: options.auto.trade.enabled,
            faith: options.auto.faith.enabled,
            time: options.auto.time.enabled,
            options: options.auto.options.enabled,
            filter: options.auto.filter.enabled,
            autotime: options.auto.autotime.enabled,
            autoparagon: options.auto.autoparagon.enabled
        };
        kittenStorage.resources = options.auto.resources;
        kittenStorage.triggers = {
            faith: options.auto.faith.trigger,
            time: options.auto.time.trigger,
            build: options.auto.build.trigger,
            space: options.auto.space.trigger,
            craft: options.auto.craft.trigger,
            trade: options.auto.trade.trigger,
            autoparagon: options.auto.autoparagon.trigger
        };
        localStorage['cbc.kitten-scientists'] = JSON.stringify(kittenStorage);
        //localStorage['cbc.autoparagon.trigger'] = '5000100';
        localStorage['cbc.autoparagon.trigger'] = JSON.stringify(options.auto.autoparagon.trigger);
        localStorage['cbc.autoparagon.items.infinite.subTrigger'] = options.auto.autoparagon.items.infinite.subTrigger;
        /*localStorage['cbc.autoparagon.items.xfldc.subTrigger'] = JSON.stringify(options.auto.autoparagon.items.xfldc.subTrigger);*/
        //options.auto.inoutdeploy.trigger = localStorage['cbc.kitten-scientists'];
    };
    //保存珂学家配置到key
    var loadFromKittenStorage = function() {
        var saved = JSON.parse(localStorage['cbc.kitten-scientists'] || 'null');
        var ksautoparagon = JSON.parse(localStorage['cbc.autoparagon.trigger'] || 'null');
        /*var xfldcoptions = JSON.parse(localStorage['cbc.autoparagon.items.xfldc.subTrigger'] || 'null');*/
        if (saved && saved.version == kittenStorageVersion) {
            kittenStorage = saved;
            if (saved.toggles) {
                for (var toggle in saved.toggles) {
                    if (toggle !== 'engine' && options.auto[toggle]) {
                        options.auto[toggle].enabled = !!saved.toggles[toggle];
                        var el = $('#toggle-' + toggle);
                        el.prop('checked', options.auto[toggle].enabled);
                    }
                }
            }

            for (var item in kittenStorage.items) {
                var value = kittenStorage.items[item];
                var el = $('#' + item);
                var option = el.data('option');
                var name = item.split('-');

                if (option === undefined) {
                    delete kittenStorage.items[item];
                    continue;
                }

                if (name[0] == 'set') {
                    el[0].title = value;
                } else {
                    el.prop('checked', value);
                }

                if (name.length == 2) {
                    option.enabled = value;
                } else {
                    if (name[1] == 'limited') {
                        option.limited = value;
                    } else {
                        option[name[2]] = value;
                    }
                }
            }

            var list = $("#toggle-list-resources");
            for (var resource in kittenStorage.resources) {
                var res = kittenStorage.resources[resource];

                if ($('#resource-' + resource).length === 0) {
                    list.append(addNewResourceOption(resource));
                }
                if ('stock' in res) {
                    setStockValue(resource, res.stock);
                }
                if ('consume' in res) {
                    setConsumeRate(resource, res.consume);
                }
            }

            if (saved.triggers) {
                options.auto.faith.trigger = saved.triggers.faith;
                options.auto.time.trigger = saved.triggers.time;
                options.auto.build.trigger = saved.triggers.build;
                options.auto.space.trigger = saved.triggers.space;
                options.auto.craft.trigger = saved.triggers.craft;
                options.auto.trade.trigger = saved.triggers.trade;
                options.auto.autoparagon.trigger = saved.triggers.autoparagon;


                $('#trigger-faith')[0].title = options.auto.faith.trigger;
                $('#trigger-time')[0].title = options.auto.time.trigger;
                $('#trigger-build')[0].title = options.auto.build.trigger;
                $('#trigger-space')[0].title = options.auto.space.trigger;
                $('#trigger-craft')[0].title = options.auto.craft.trigger;
                $('#trigger-trade')[0].title = options.auto.trade.trigger;
                $('#trigger-autoparagon')[0].title = options.auto.autoparagon.trigger;
            }
            options.auto.autoparagon.trigger = ksautoparagon;
            options.auto.autoparagon.items.infinite.subTrigger = localStorage['cbc.autoparagon.items.infinite.subTrigger'];
            /*options.auto.autoparagon.items.xfldc.subTrigger = xfldcoptions;*/
        } else {
            initializeKittenStorage();
        }
    };

    // Add options element
    // ===================

    var ucfirst = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    var roundToTwo = function(n) {
        return +(Math.round(n + "e+2") + "e-2")
    };

    var setStockWarning = function(name, value) {
        // simplest way to ensure it doesn't stick around too often; always do
        // a remove first then re-add only if needed
        $("#resource-" + name).removeClass("stockWarn");

        var maxValue = game.resPool.resources.filter(i => i.name == name)[0].maxValue;
        if (value > maxValue && !(maxValue === 0)) $("#resource-" + name).addClass("stockWarn");
    }

    var setStockValue = function(name, value) {
        var n = Number(value);

        if (isNaN(n) || n < 0) {
            warning('忽略无效的库存值 ' + value);
            return;
        }

        if (!options.auto.resources[name]) options.auto.resources[name] = {};
        options.auto.resources[name].stock = n;
        $('#stock-value-' + name).text('库存： ' + game.getDisplayValueExt(n));

        setStockWarning(name, n);
    };

    var setConsumeRate = function(name, value) {
        var n = parseFloat(value);

        if (isNaN(n) || n < 0.0 || n > 1.0) {
            warning('忽略无效的消耗率 ' + value);
            return;
        }

        if (!options.auto.resources[name]) options.auto.resources[name] = {};
        options.auto.resources[name].consume = n;
        $('#consume-rate-' + name).text('消耗率： ' + n.toFixed(2));
    };

    var removeResourceControl = function(name) {
        delete options.auto.resources[name];
    };

    var addNewResourceOption = function(name, title) {
        var res = options.auto.resources[name];
        var stock = res && (res.stock != undefined) ? res.stock : 0;
        var consume = res && (res.consume != undefined) ? res.consume : options.consume;

        var container = $('<div/>', {
            id: 'resource-' + name,
            css: {
                display: 'inline-block',
                width: '100%'
            },
        });

        var label = $('<div/>', {
            id: 'resource-label-' + name,
            text: cnItem(ucfirst(name)),
            css: {
                display: 'inline-block',
                width: '95px'
            },
        });

        var stock = $('<div/>', {
            id: 'stock-value-' + name,
            text: '库存： ' + game.getDisplayValueExt(stock),
            css: {
                cursor: 'pointer',
                display: 'inline-block',
                width: '80px'
            },
        });

        var consume = $('<div/>', {
            id: 'consume-rate-' + name,
            text: '消耗率： ' + consume.toFixed(2),
            css: {
                cursor: 'pointer',
                display: 'inline-block'
            },
        });

        var del = $('<div/>', {
            id: 'resource-delete-' + name,
            text: '删除',
            css: {
                cursor: 'pointer',
                display: 'inline-block',
                float: 'right',
                paddingRight: '5px',
                textShadow: '3px 3px 4px gray'
            },
        });

        container.append(label, stock, consume, del);

        // once created, set color if relevant
        if (res != undefined && res.stock != undefined) setStockWarning(name, res.stock);

        stock.on('click', function() {
            var value = window.prompt('库存 ' + cnItem(ucfirst(name)));
            if (value !== null) {
                setStockValue(name, value);
                saveToKittenStorage();
            }
        });

        consume.on('click', function() {
            var value = window.prompt('消耗率 ' + cnItem(ucfirst(name)));
            if (value !== null) {
                setConsumeRate(name, value);
                saveToKittenStorage();
            }
        });

        del.on('click', function() {
            if (window.confirm('确定取消自动转换 ' + cnItem(ucfirst(name)) + ' ？')) {
                container.remove();
                removeResourceControl(name);
                saveToKittenStorage();
            }
        });

        return container;
    };

    var getAvailableResourceOptions = function() {
        var items = [];

        for (var i in game.resPool.resources) {
            var res = game.resPool.resources[i];

            // Show only new resources that we don't have in the list and that are
            // visible. This helps cut down on total size.
            if (res.name && $('#resource-' + res.name).length === 0) {
                var item = $('<div/>', {
                    id: 'resource-add-' + res.name,
                    text: cnItem(ucfirst(res.name)),
                    css: {
                        cursor: 'pointer',
                        textShadow: '3px 3px 4px gray'
                    },
                });

                // Wrapper function needed to make closure work
                (function(res, item) {
                    item.on('click', function() {
                        item.remove();
                        if (!options.auto.resources[res.name]) options.auto.resources[res.name] = {};
                        options.auto.resources[res.name].stock = 0;
                        options.auto.resources[res.name].consume = options.consume;
                        $('#toggle-list-resources').append(addNewResourceOption(res.name, res.title));
                    });
                })(res, item);

                items.push(item);
            }
        }

        return items;
    };

    var getResourceOptions = function() {
        var list = $('<ul/>', {
            id: 'toggle-list-resources',
            css: {
                display: 'none',
                paddingLeft: '20px'
            }
        });

        var add = $('<div/>', {
            id: 'resources-add',
            text: '添加资源',
            css: {
                cursor: 'pointer',
                display: 'inline-block',
                textShadow: '3px 3px 4px gray',
                borderBottom: '1px solid rgba(185, 185, 185, 0.7)'
            },
        });

        var clearunused = $('<div/>', {
            id: 'resources-clear-unused',
            text: '清除未使用项',
            css: {
                cursor: 'pointer',
                display: 'inline-block',
                float: 'right',
                paddingRight: '5px',
                textShadow: '3px 3px 4px gray'
            },
        });

        clearunused.on('click', function() {
            for (var name in options.auto.resources) {
                // Only delete resources with unmodified values. Require manual
                // removal of resources with non-standard values.
                if (!options.auto.resources[name].stock &&
                    options.auto.resources[name].consume == options.consume ||
                    options.auto.resources[name].consume == undefined) {
                    $('#resource-' + name).remove();
                }
            }
        });

        var allresources = $('<ul/>', {
            id: 'available-resources-list',
            css: {
                display: 'none',
                paddingLeft: '20px'
            }
        });

        add.on('click', function() {
            allresources.toggle();
            allresources.empty();
            allresources.append(getAvailableResourceOptions());
        });

        list.append(add, clearunused, allresources);

        // Add all the current resources
        for (var name in options.auto.resources) {
            list.append(addNewResourceOption(name));
        }

        return list;
    };

    var getToggle = function(toggleName, text) {
        var auto = options.auto[toggleName];
        var element = $('<li/>', {
            id: 'ks-' + toggleName
        });

        var label = $('<label/>', {
            'for': 'toggle-' + toggleName,
            text: text
        });

        var input = $('<input/>', {
            id: 'toggle-' + toggleName,
            type: 'checkbox'
        });
        if (toggleName != 'inoutdeploy')
            if (auto.enabled) {
                input.prop('checked', true);
            }

        // engine needs a custom toggle
        if (toggleName !== 'engine') {
            input.on('change', function() {
                if (input.is(':checked') && !auto.enabled) {
                    auto.enabled = true;
                    if (toggleName === 'filter' || toggleName === 'options') {
                        message('启用 ' + cnItem(ucfirst(text)));
                    } else {
                        message('启用自动化 ' + cnItem(ucfirst(text)));
                    }
                    saveToKittenStorage();
                } else if ((!input.is(':checked')) && auto.enabled) {
                    auto.enabled = false;
                    if (toggleName === 'filter' || toggleName === 'options') {
                        message('禁用 ' + cnItem(ucfirst(text)));
                    } else {
                        message('禁用自动化 ' + cnItem(ucfirst(text)));
                    }
                    saveToKittenStorage();
                }
            });
        }

        element.append(input, label);
        if (toggleName != 'inoutdeploy')
            if (auto.items) {
                // Add a border on the element
                element.css('borderBottom', '1px  solid rgba(185, 185, 185, 0.7)');

                var toggle = $('<div/>', {
                    css: {
                        display: 'inline-block',
                        float: 'right'
                    }
                });

                var button = $('<div/>', {
                    id: 'toggle-items-' + toggleName,
                    text: '项目',
                    css: {
                        cursor: 'pointer',
                        display: 'inline-block',
                        float: 'right',
                        paddingRight: '5px',
                        textShadow: '3px 3px 4px gray'
                    }
                });

                element.append(button);

                var list = $('<ul/>', {
                    id: 'items-list-' + toggleName,
                    css: {
                        display: 'none',
                        paddingLeft: '20px'
                    }
                });

                var disableall = $('<div/>', {
                    id: 'toggle-all-items-' + toggleName,
                    text: '全部禁用',
                    css: {
                        cursor: 'pointer',
                        display: 'inline-block',
                        textShadow: '3px 3px 4px gray',
                        marginRight: '8px'
                    }
                });

                disableall.on('click', function() {
                    // can't use find as we only want one layer of checkboxes
                    var items = list.children().children(':checkbox');
                    items.prop('checked', false);
                    items.change();
                    list.children().children(':checkbox').change();
                });

                list.append(disableall);

                var enableall = $('<div/>', {
                    id: 'toggle-all-items-' + toggleName,
                    text: '全部启用',
                    css: {
                        cursor: 'pointer',
                        display: 'inline-block',
                        textShadow: '3px 3px 4px gray'
                    }
                });

                enableall.on('click', function() {
                    // can't use find as we only want one layer of checkboxes
                    var items = list.children().children(':checkbox');
                    items.prop('checked', true);
                    items.change();
                    list.children().children(':checkbox').change();
                });

                list.append(enableall);

                // fill out list with toggle items
                for (var itemName in auto.items) {
                    switch (toggleName) {
                        case 'faith':
                            list.append(getlimitedOption(itemName, auto.items[itemName]));
                            break;
                        case 'build':
                            list.append(getlimitedOption(itemName, auto.items[itemName]));
                            break;
                        case 'space':
                            list.append(getlimitedOption(itemName, auto.items[itemName]));
                            break;
                        case 'time':
                            list.append(getlimitedOption(itemName, auto.items[itemName]));
                            break;
                        case 'trade':
                            list.append(getTradeOption(itemName, auto.items[itemName]));
                            break;
                        case 'craft':
                            list.append(getCraftOption(itemName, auto.items[itemName]));
                            break;
                        case 'autoparagon':
                            list.append(getOptionsOption(itemName, auto.items[itemName]));
                            break;
                        case 'upgrade':
                            list.append(getOptionsOption(itemName, auto.items[itemName]));
                            break;
                        case 'options':
                            list.append(getOptionsOption(itemName, auto.items[itemName]));
                            break;
                        case 'autotime':
                            list.append(getOptionsOption(itemName, auto.items[itemName]));
                            break;
                        default:
                            list.append(getOption(itemName, auto.items[itemName]));
                    }
                }

                button.on('click', function() {
                    list.toggle();
                });

                // Add resource controls for crafting, sort of a hack
                if (toggleName === 'craft') {
                    var resources = $('<div/>', {
                        id: 'toggle-resource-controls',
                        text: '资源',
                        css: {
                            cursor: 'pointer',
                            display: 'inline-block',
                            float: 'right',
                            paddingRight: '5px',
                            textShadow: '3px 3px 4px gray'
                        },
                    });

                    var resourcesList = getResourceOptions();

                    // When we click the items button, make sure we clear resources
                    button.on('click', function() {
                        resourcesList.toggle(false);
                    });

                    resources.on('click', function() {
                        list.toggle(false);
                        resourcesList.toggle();
                    });

                    element.append(resources);
                }

            }

        if (auto.trigger !== undefined) {
            var triggerButton = $('<div/>', {
                id: 'trigger-' + toggleName,
                text: '触发条件',
                title: auto.trigger,
                css: {
                    cursor: 'pointer',
                    display: 'inline-block',
                    float: 'right',
                    paddingRight: '5px',
                    textShadow: '3px 3px 4px gray'
                }
            });

            triggerButton.on('click', function() {
                var value;
                if (text == '自动刷领导力') {
                    value = window.prompt(
                        '输入重置时的传送仪数量，栗子：6\n达到指定传送仪且猫口上限后重置\n需要有6000%太阳革命加成和300k水晶后使用\n会默认保存500K水晶（可通过附加功能进行修改）\n可通过附加功能中燃烧到红月加快一定的效率\n若使用燃烧到红月功能会增加水晶消耗\n',
                        auto.trigger);
                } /*else if (text == '导出入配置') {
                    var kssave = localStorage['cbc.kitten-scientists'];
                    value = window.prompt('窗口内默认文本为当前配置,珂以直接复制,到qq窗口发送\n' + '尽量不按窗口内取消键，\n' + '按了需要更改珂学家的任意配置才珂以正常导出\n' +
                        '输入配置文本后按确定\n' + '导入配置（注意珂学家版本）在确定后需要刷新\n' + '请无视是否开启此选项\n', kssave);
                    localStorage['cbc.kitten-scientists'] = value;
                }*/ else {
                    value = window.prompt('输入新的触发值 ' + text + '。 取值范围为 0 到 1 之间的小数。', auto.trigger);
                }

                //if (value !== null && text != '导出入配置') {
                if (value !== null) {
                    auto.trigger = parseFloat(value);
                    saveToKittenStorage();
                    triggerButton[0].title = auto.trigger;
                }
            });

            element.append(triggerButton);
        }

        if (toggleName === 'craft') {
            element.append(resourcesList);
        }

        if (auto.items) {
            element.append(toggle, list);
        }

        return element;
    };

    var getTradeOption = function(name, option) {
        var element = getOption(name, option);
        element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

        //Limited Trading
        var label = $('<label/>', {
            'for': 'toggle-limited-' + name,
            text: '限制'
        });

        var input = $('<input/>', {
            id: 'toggle-limited-' + name,
            type: 'checkbox'
        }).data('option', option);

        if (option.limited) {
            input.prop('checked', true);
        }

        input.on('change', function() {
            if (input.is(':checked') && !option.limited) {
                option.limited = true;
                message('与 ' + cnItem(ucfirst(name)) + ' 的交易限制为比产量更优时才会触发');
            } else if ((!input.is(':checked')) && option.limited) {
                option.limited = false;
                message('取消与 ' + cnItem(ucfirst(name)) + ' 交易的限制');
            }
            kittenStorage.items[input.attr('id')] = option.limited;
            saveToKittenStorage();
        });

        element.append(input, label);
        //Limited Trading End

        var button = $('<div/>', {
            id: 'toggle-seasons-' + name,
            text: '季节',
            css: {
                cursor: 'pointer',
                display: 'inline-block',
                float: 'right',
                paddingRight: '5px',
                textShadow: '3px 3px 4px gray'
            },
        });

        var list = $('<ul/>', {
            id: 'seasons-list-' + name,
            css: {
                display: 'none',
                paddingLeft: '20px'
            }
        });

        // fill out the list with seasons
        list.append(getSeason(name, 'spring', option));
        list.append(getSeason(name, 'summer', option));
        list.append(getSeason(name, 'autumn', option));
        list.append(getSeason(name, 'winter', option));

        button.on('click', function() {
            list.toggle();
        });

        element.append(button, list);

        return element;
    };

    var getSeason = function(name, season, option) {
        var element = $('<li/>');

        var label = $('<label/>', {
            'for': 'toggle-' + name + '-' + season,
            text: cnItem(ucfirst(season))
        });

        var input = $('<input/>', {
            id: 'toggle-' + name + '-' + season,
            type: 'checkbox'
        }).data('option', option);

        if (option[season]) {
            input.prop('checked', true);
        }

        input.on('change', function() {
            if (input.is(':checked') && !option[season]) {
                option[season] = true;
                message('启用在 ' + cnItem(ucfirst(season)) + ' 与 ' + cnItem(ucfirst(name)) + ' 的交易');
            } else if ((!input.is(':checked')) && option[season]) {
                option[season] = false;
                message('停止在 ' + cnItem(ucfirst(season)) + ' 与 ' + cnItem(ucfirst(name)) + ' 交易');
            }
            kittenStorage.items[input.attr('id')] = option[season];
            saveToKittenStorage();
        });

        element.append(input, label);

        return element;
    };

    var getOption = function(name, option) {
        var element = $('<li/>');
        var elementLabel = option.label || cnItem(ucfirst(name));

        var label = $('<label/>', {
            'for': 'toggle-' + name,
            text: elementLabel,
            css: {
                display: 'inline-block',
                minWidth: '80px'
            }
        });

        var input = $('<input/>', {
            id: 'toggle-' + name,
            type: 'checkbox'
        }).data('option', option);

        if (option.enabled) {
            input.prop('checked', true);
        }

        input.on('change', function() {
            if (input.is(':checked') && !option.enabled) {
                option.enabled = true;
                if (option.filter) {
                    message('过滤 ' + elementLabel);
                } else if (option.misc) {
                    message('启用 ' + elementLabel);
                } else {
                    message('启用自动化 ' + elementLabel);
                }
            } else if ((!input.is(':checked')) && option.enabled) {
                option.enabled = false;
                if (option.filter) {
                    message('取消过滤 ' + elementLabel);
                } else if (option.misc) {
                    message('禁用 ' + elementLabel);
                } else {
                    message('禁用自动化 ' + elementLabel);
                }
            }
            kittenStorage.items[input.attr('id')] = option.enabled;
            saveToKittenStorage();
        });

        element.append(input, label);

        return element;
    };

    var getlimitedOption = function(name, option) {
        var element = getOption(name, option);

        if (option.limited !== undefined) {
            var limitedButton = $('<div/>', {
                id: 'toggle-limited-' + name,
                text: '限制数量',
                title: option.limited,
                css: {
                    cursor: 'pointer',
                    display: 'inline-block',
                    float: 'right',
                    paddingRight: '5px',
                    textShadow: '3px 3px 4px gray'
                }
            }).data('option', option);

            limitedButton.on('click', function() {
                var value = window.prompt('输入建造 ' + option.label + ' 的最大数量。 ', option.limited);

                if (value !== null) {
                    option.limited = parseFloat(value);
                    kittenStorage.items[limitedButton.attr('id')] = option.limited;
                    saveToKittenStorage();
                    limitedButton[0].title = option.limited;
                }
            });

            element.append(limitedButton);
        }

        return element;
    };

    var getCraftOption = function(name, option) {
        var element = getOption(name, option);

        var label = $('<label/>', {
            'for': 'toggle-limited-' + name,
            text: '限制'
        });

        var input = $('<input/>', {
            id: 'toggle-limited-' + name,
            type: 'checkbox'
        }).data('option', option);

        if (option.limited) {
            input.prop('checked', true);
        }

        input.on('change', function() {
            if (input.is(':checked') && !option.limited) {
                option.limited = true;
                message('每个季节只制作 ' + cnItem(ucfirst(name)) + ' 一次');
            } else if ((!input.is(':checked')) && option.limited) {
                option.limited = false;
                message('制作 ' + cnItem(ucfirst(name)) + ' 不受限制');
            }
            kittenStorage.items[input.attr('id')] = option.limited;
            saveToKittenStorage();
        });

        element.append(input, label);

        return element;
    };

    var getOptionsOption = function(name, option) {
        var element = getOption(name, option);

        if (option.subTrigger !== undefined) {
            var triggerButton = $('<div/>', {
                id: 'set-' + name + '-subTrigger',
                text: '触发条件',
                title: option.subTrigger,
                css: {
                    cursor: 'pointer',
                    display: 'inline-block',
                    float: 'right',
                    paddingRight: '5px',
                    textShadow: '3px 3px 4px gray'
                }
            }).data('option', option);

            triggerButton.on('click', function() {
                var value;
                if (name == 'missions') {
                    value = window.prompt('输入一个新的触发值 ' + option.label + '。\n取值范围为 0 到 ' + game.space.meta[0].meta.length +
                        ' 之间的整数，分别对应 ' + game.space.meta[0].meta.length + ' 颗星球。', option.subTrigger);
                } else if (name == 'x1') {
                    value = window.prompt('最少1000年的起跳，先提前做好阻抗、加速器、锅炉、时计炉，条件需要资源回复数量0，蒸汽工坊没开自动化，有足够时间水晶，输入每次燃烧水晶的数量。', option.subTrigger);
                } else if (name == 'infinite') {
                    value = window.prompt(
                        '使用本功能前请备份存档\n使用本功能前请备份存档\n使用本功能前请备份存档\n使用本功能请达到无限流要求后，手动进行重置\n设置每轮次制作的传送仪数量为自动领导力的触发值\n手动点出对应传送仪数量(科学家限制等级自动建造亦可)\n达成重置条件后将自动进行重置\n注1：所有非工艺受到传送仪影响的资源均为增量(信仰请提前挂出一定量)\n注2：本配置不检查输入的配置是否能进行增量发展，请自行检查\n注3：若不按照配置输入方式则会按照默认配置进行\n注4：0为不跳过喵口检查\n配置输入方式如下：\n是否跳过猫口检查,小屋,木屋,宅邸,工厂,神殿,工坊,铸币厂,空间站,圣殿骑士\n默认情况下配置为：\n0,10,210,65,55,100,180,70,0,10',
                        option.subTrigger);
                }
                /*else if (name == 'xfldc') {
                	value = window.prompt(
                		'本功能仅在无限流状态下可用\n格式如下：\n每回合建造冷冻仓数量,每次燃烧水晶的数量,是否跳过过热判断,交易站\n默认配置如下：10,10,0,400\n注：0为不跳过过热判断\n注2：若不进行特殊设置默认情况做50时机炉17锅炉。17为50时机炉热量/水晶性价比最高的？（大概吧）\n注3：跳过过热判断依旧建造一定数量的锅炉\n注4：可选参数：时间电池,时计炉数量,锅炉数量,对于时计炉的热量最优解请自行计算。',
                		option.subTrigger);
                }*/
                else {
                    value = window.prompt('输入一个新的触发值 ' + option.label + '。 取值范围为 0 到 1 之间的小数', option.subTrigger);
                }

                if (value !== null) {
                    if (name == 'infinite' /*|| name == 'xfldc'*/ )
                        option.subTrigger = value;
                    else
                        option.subTrigger = parseFloat(value);
                    kittenStorage.items[triggerButton.attr('id')] = option.subTrigger;
                    saveToKittenStorage();
                    triggerButton[0].title = option.subTrigger;
                }
            });

            element.append(triggerButton);
        }

        return element;
    };


    // Grab button labels for religion options
    var religionManager = new ReligionManager();
    for (var buildOption in options.auto.faith.items) {
        var buildItem = options.auto.faith.items[buildOption];
        var build = religionManager.getBuild(buildItem.name || buildOption, buildItem.variant);
        if (build) {
            options.auto.faith.items[buildOption].label = build.label;
        }
    }

    // Grab button labels for time options
    var timeManager = new TimeManager();
    for (var buildOption in options.auto.time.items) {
        var buildItem = options.auto.time.items[buildOption];
        var build = timeManager.getBuild(buildItem.name || buildOption, buildItem.variant);
        if (build) {
            options.auto.time.items[buildOption].label = build.label;
        }
    }

    // Grab button labels for build options
    var buildManager = new BuildManager();
    for (var buildOption in options.auto.build.items) {
        var buildItem = options.auto.build.items[buildOption];
        var build = buildManager.getBuild(buildItem.name || buildOption);
        if (build) {
            if ("stage" in buildItem) {
                options.auto.build.items[buildOption].label = build.meta.stages[buildItem.stage].label;
            } else {
                options.auto.build.items[buildOption].label = build.meta.label;
            }
        }
    }

    // Grab button labels for space options
    var spaceManager = new SpaceManager();
    for (var spaceOption in options.auto.space.items) {
        var build = spaceManager.getBuild(spaceOption);
        if (build) {
            // It's changed to label in 1.3.0.0
            var title = build.title ? build.title : build.label;
            options.auto.space.items[spaceOption].label = title;
        }
    }

    var optionsElement = $('<div/>', {
        id: 'ks-options',
        css: {
            marginBottom: '10px'
        }
    });
    var optionsListElement = $('<ul/>');
    var optionsTitleElement = $('<div/>', {
        css: {
            bottomBorder: '1px solid gray',
            marginBottom: '5px'
        },
        text: kg_version
    });

    optionsElement.append(optionsTitleElement);

    optionsListElement.append(getToggle('engine', '启用小猫珂学家'));
    optionsListElement.append(getToggle('autoparagon', '自动刷领导力'));
    optionsListElement.append(getToggle('build', '建筑'));
    optionsListElement.append(getToggle('space', '太空'));
    optionsListElement.append(getToggle('craft', '工艺'));
    optionsListElement.append(getToggle('upgrade', '升级'));
    optionsListElement.append(getToggle('trade', '贸易'));
    optionsListElement.append(getToggle('faith', '宗教'));
    optionsListElement.append(getToggle('time', '时间'));
    optionsListElement.append(getToggle('options', '选项'));
    optionsListElement.append(getToggle('autotime', '烧水晶领导力'));
    optionsListElement.append(getToggle('filter', '日志过滤'));
   // optionsListElement.append(getToggle('inoutdeploy', '导出入配置'));

    // add activity button
    // ===================

    var activitySummary = {};
    var resetActivitySummary = function() {
        activitySummary = {
            lastyear: game.calendar.year,
            lastday: game.calendar.day,
            craft: {},
            trade: {},
            build: {},
            other: {}
        };
    };

    var storeForSummary = function(name, amount, section) {
        if (amount === undefined) amount = 1;
        if (section === undefined) section = 'other';

        if (activitySummary[section] === undefined)
            activitySummary[section] = {};

        if (activitySummary[section][name] === undefined) {
            activitySummary[section][name] = parseFloat(amount);
        } else {
            activitySummary[section][name] += parseFloat(amount);
        }
    };

    var displayActivitySummary = function() {
        // Festivals
        if (activitySummary.other.festival) {
            summary('举办了 ' + game.getDisplayValueExt(activitySummary.other.festival) + ' 次节日');
        }

        // Observe stars
        if (activitySummary.other.stars) {
            summary('观察到 ' + game.getDisplayValueExt(activitySummary.other.stars) + ' 颗星星');
        }

        // Hunters
        if (activitySummary.other.hunt) {
            summary('派出了 ' + game.getDisplayValueExt(activitySummary.other.hunt) + ' 批可爱的小猫猎人');
        }

        // Embassies
        if (activitySummary.other.embassy) {
            summary('建造了 ' + game.getDisplayValueExt(activitySummary.other.embassy) + ' 栋大使馆');
        }

        // Necrocorns
        if (activitySummary.other.feed) {
            summary('献祭给上古神 ' + game.getDisplayValueExt(activitySummary.other.feed) + ' 只死灵兽');
        }

        // Techs
        for (var name in activitySummary.research) {
            summary('研究了 ' + cnItem(ucfirst(name)));
        }

        // Upgrades
        for (var name in activitySummary.upgrade) {
            summary('升级了 ' + cnItem(ucfirst(name)));
        }

        // Buildings
        for (var name in activitySummary.build) {
            summary('建造了 ' + game.getDisplayValueExt(activitySummary.build[name]) + ' 个 ' + cnItem(ucfirst(name)));
        }

        // Order of the Sun
        for (var name in activitySummary.faith) {
            summary('发现了 ' + game.getDisplayValueExt(activitySummary.faith[name]) + ' 次 ' + cnItem(ucfirst(name)));
        }

        // Crafts
        for (var name in activitySummary.craft) {
            summary('制作了 ' + game.getDisplayValueExt(activitySummary.craft[name]) + ' ' + cnItem(ucfirst(name)));
        }

        // Trading
        for (var name in activitySummary.trade) {
            summary('与 ' + cnItem(ucfirst(name)) + ' 贸易了 ' + game.getDisplayValueExt(activitySummary.trade[name]) + ' 次');
        }

        // Show time since last run. Assumes that the day and year are always higher.
        if (activitySummary.lastyear && activitySummary.lastday) {
            var years = game.calendar.year - activitySummary.lastyear;
            var days = game.calendar.day - activitySummary.lastday;

            if (days < 0) {
                years -= 1;
                days += 400;
            }

            var duration = '';
            if (years > 0) {
                duration += years + ' 年 ';
            }

            if (days >= 0) {
                duration += roundToTwo(days) + ' 天 ';
            }

            summary('过去 ' + duration + ' 里的总结：');
        }

        // Clear out the old activity
        resetActivitySummary()
    };

    resetActivitySummary();

    var activityBox = $('<div/>', {
        id: 'activity-box',
        css: {
            display: 'inline-block',
            verticalAlign: 'top'
        }
    });

    var showActivity = $('<a/>', {
        id: 'showActivityHref',
        text: '总结',
        href: '#',
        css: {
            verticalAlign: 'top'
        }
    });

    showActivity.on('click', displayActivitySummary);

    activityBox.append(showActivity);

    $('#clearLog').append(activityBox);

    // Donation Button
    // ===============


    // add the options above the game log
    right.prepend(optionsElement.append(optionsListElement));

    // Initialize and set toggles for Engine
    // =====================================

    var engine = new Engine();
    var toggleEngine = $('#toggle-engine');

    if (localStorage['cbc.kitten-scientists'] != undefined && localStorage['cbc.kitten-scientists'] != null && JSON.parse(
            localStorage['cbc.kitten-scientists']).toggles.autoparagon) {
        toggleEngine.prop('checked', true);
        localStorage['cbc.resetAutomatic.step'] = 1;
        engine.start();

    } //自动领导力

    toggleEngine.on('change', function() {
        if (toggleEngine.is(':checked')) {
            engine.start();
        } else {
            engine.stop();
        }
    });

    loadFromKittenStorage();

    if (console && console.log) console.log(kg_version + " 加载成功");
    game._publish("kitten_scientists/ready", kg_version);
}

var loadTest = function() {
    if (typeof gamePage === 'undefined') {
        // Test if kittens game is already loaded or wait 2s and try again
        setTimeout(function() {
            loadTest();
        }, 1000);
    } else {
        // Kittens loaded, run Kitten Scientist's Automation Engine
        game = gamePage;
        run();
    }
}

loadTest();
