import { Dailie, DailieGroup } from "./types/Dailie";

export const SingleDaylies: {
    [key: string]: Dailie
} = {
    'wiseking': {
        url: 'https://www.neopets.com/medieval/wiseking.phtml',
        name: 'wiseking',
        timeOf: [{ start: 13, end: 14 }, { start: 18, end: 19 }, { start: 0, end: 1 }]
    },
    'grumpyking': {
        url: 'https://www.neopets.com/medieval/grumpyking.phtml',
        name: 'grumpyking',
        timeOf: [{ start: 13, end: 14 }, { start: 17, end: 18 }, { start: 0, end: 1 }]
    },
    'gravedanger': {
        name: 'gravedanger',
        url: 'https://www.neopets.com/halloween/gravedanger/',
        expiresIn: 8
    },
    'tombola': {
        url: 'https://www.neopets.com/island/tombola.phtml',
        name: 'tombola',
        timeOf: [{ start: 8, end: 9 }, { start: 18, end: 19 }, { start: 2, end: 5 }]
    },
    'desert_shrine': {
        url: 'https://www.neopets.com/desert/shrine.phtml',
        name: 'desert_shrine',
        expiresIn: 13
    },
    'deadly_dice': {
        url: 'https://www.neopets.com/worlds/deadlydice.phtml',
        name: 'deadly_dice',
        timeOf: [{ start: 0, end: 17 }, { start: 18, end: 24 }]
    },
    'snowager': {
        name: 'snowager',
        url: 'https://www.neopets.com/winter/snowager.phtml',
        timeOf: [{ start: 0, end: 3 }, { start: 4, end: 11 }, { start: 12, end: 19 }, { start: 20, end: 24 }]
    },
    'anchormanagement': {
        url: 'https://www.neopets.com/pirates/anchormanagement.phtml',
        name: 'anchormanagement'
    },
    'bank': {
        url: 'https://www.neopets.com/bank.phtml',
        name: 'bank'
    },
    'tomb': {
        url: 'https://www.neopets.com/worlds/geraptiku/tomb.phtml',
        name: 'tomb'
    },
    'fishing':
    {
        url: 'https://www.neopets.com/water/fishing.phtml',
        name: 'fishing'
    },
    'fairy_cavern': {
        url: 'http://www.neopets.com/faerieland/caverns/index.phtml',
        name: 'fairy_cavern'
    },
    'month_freebie': {
        url: 'https://www.neopets.com/freebies/',
        name: 'month_freebie',
        expiresIn: 24 * 30
    },
    'forgottenshore': {
        url: 'https://www.neopets.com/pirates/forgottenshore.phtml',
        name: 'forgottenshore'
    },
    'sad': {
        url: 'https://www.neopets.com/faerieland/tdmbgpop.phtml',
        name: 'sad'
    },
    'strenght_test': {
        url: 'https://www.neopets.com/halloween/strtest/index.phtml',
        name: 'strenght_test'
    },
    'fashion': {
        url: 'https://www.neopets.com/games/h5game.phtml?game_id=1391',
        name: 'fashion'
    },
    'slorg': {
        url: 'https://www.neopets.com/shop_of_offers.phtml?slorg_payout=yes',
        name: 'slorg'
    },
    'negg_cave': {
        url: ['https://thedailyneopets.com/articles/negg-solver',
            'https://www.neopets.com/shenkuu/neggcave/'],
        name: 'neggcave_resolution'
    },
    'quest_log': {
        url: 'https://www.neopets.com/questlog/',
        name: 'quest_log'
    },
    'magma': {
        url: ['https://www.neopets.com/magma/pool.phtml', 'https://www.jellyneo.net/?go=magma_pool_checklist'],
        name: 'magma',
        expiresIn: { minutes: 10, hour: 0 }
    },

    'fruit_machine': {
        url: 'https://www.neopets.com/desert/fruit/index.phtml',
        name: 'fruit_machine'
    },
    'fairy_wheel': {
        url: 'https://www.neopets.com/faerieland/wheel.phtml',
        name: 'fairy_wheel',
        expiresIn: 2
    },
    'misfortune_wheel': {
        url: 'https://www.neopets.com/halloween/wheel/index.phtml',
        name: 'misfortune_wheel',
        expiresIn: 2
    },
    'mediocrity_wheel': {
        url: 'https://www.neopets.com/prehistoric/mediocrity.phtml',
        name: 'mediocrity_wheel',
    },
    'edna_quest': {
        url: 'https://www.neopets.com/halloween/witchtower.phtml',
        name: 'edna_quest',
        expiresIn: 2
    },
    'esophagor_quest': {
        url: 'https://www.neopets.com/halloween/esophagor.phtml',
        name: 'esophagor_quest',
        expiresIn: 2
    },
    'kitchen_quest': {
        name: 'kitchen_quest',
        url: 'https://www.neopets.com/island/kitchen.phtml',
        expiresIn: { hour: 1, minutes: 30 }
    },
    'snow_faerie_quest': {
        url: 'https://www.neopets.com/winter/snowfaerie.phtml',
        name: 'snow_faerie_quest',
        expiresIn: 2
    },
    'coincidence_quest': {
        url: 'https://www.neopets.com/space/coincidence.phtml',
        name: 'coincidence_quest'
    },
    'donation_tree': {
        url: 'https://www.neopets.com/donations.phtml',
        name: 'donation_tree',
    },
    'rubbishdump': {
        url: 'https://www.neopets.com/medieval/rubbishdump.phtml',
        name: 'rubbishdump'
    },
    'thriftshoppe': {
        url: 'https://www.neopets.com/thriftshoppe/index.phtml',
        name: 'thriftshoppe',
    },
    'haiku':
    {
        url: 'https://www.neopets.com/island/haiku/haiku.phtml',
        name: 'haiku'
    },
    'strange_lever': {
        url: 'https://www.neopets.com/space/strangelever.phtml',
        name: 'strange_lever'
    },
    'jelly': {
        url: 'https://www.neopets.com/jelly/jelly.phtml',
        name: 'jelly'
    },
    'omelette': {
        url: 'https://www.neopets.com/prehistoric/omelette.phtml',
        name: 'omelette'
    },
    'mystic': {
        url: 'https://www.neopets.com/island/mystichut.phtml',
        name: 'mystic'
    },
    'turmaculus':{
        url: ['https://www.neopets.com/~Brownhownd', 'https://www.neopets.com/medieval/turmaculus.phtml'],
        name: 'turmaculus'
    },
    'wheel_conhecimento':{
        url: 'https://www.neopets.com/medieval/knowledge.phtml',
        name: 'wheel_conhecimento'
    },
    'marrow':{
        url: 'https://www.neopets.com/medieval/guessmarrow.phtml',
        name: 'marrow'
    },
    'lunar':{
        url: ['https://www.neopets.com/shenkuu/lunar/?show=puzzle','https://www.jellyneo.net/?go=lunartemple#calculation'],
        name: 'lunar'
    },
    'food_club':{
        url: ['https://www.reddit.com/r/neopets/?f=flair_name%3A%22Food%20Club%22','https://www.neopets.com/pirates/foodclub.phtml?type=collect'],
        name: 'food_club'
    },
    'daily_puzzle':{
        name:'daily_puzzle',
        url:['https://www.jellyneo.net/?go=dailypuzzle','https://www.neopets.com/community/index.phtml']
    }

}


export const DailieLinksThree: DailieGroup = {
    name: "three_effort",
    title: "Diffilcult Efford Dailies",
    links: [
        SingleDaylies['turmaculus'],
        SingleDaylies['tombola'],
        SingleDaylies['wheel_conhecimento'],
        SingleDaylies['snowager'],
        SingleDaylies['marrow'],
        SingleDaylies['wiseking'],
        SingleDaylies['grumpyking'],
        SingleDaylies['lunar'], 
        SingleDaylies['food_club']
    ]
}


export const DailieTrash: DailieGroup = {
    name: "neo_trash",
    title: "Trash Dailies",
    links: [
        SingleDaylies['haiku'],
        SingleDaylies['strange_lever'],
        SingleDaylies['jelly'],
        SingleDaylies['omelette'],
        SingleDaylies['mystic']
    ]
}


export const Poop: DailieGroup = {
    name: "poop",
    title: "The poop",
    links: [
        SingleDaylies['donation_tree'],
        SingleDaylies['rubbishdump'],
        SingleDaylies['thriftshoppe'],
    ],
    expiresDefault: { minutes: 10, hour: 0 }
}

export const DailieQuests: DailieGroup = {
    name: "quests",
    title: "Quests",
    links: [
        SingleDaylies['edna_quest'],
        SingleDaylies['esophagor_quest'],
        SingleDaylies['kitchen_quest'],
        SingleDaylies['snow_faerie_quest'],
        SingleDaylies['coincidence_quest']
    ],
    expiresDefault: 2
}

export const Wheels: DailieGroup = {
    name: "wheels",
    title: "Play Wheels",
    links: [
        SingleDaylies['fruit_machine'],
        SingleDaylies['fairy_wheel'],
        SingleDaylies['misfortune_wheel'],
        SingleDaylies['mediocrity_wheel'],
    ],
    expiresDefault: { minutes: 40, hour: 0 }
}

export const DailieLinksTwo: DailieGroup = {
    name: "two_effort",
    title: "Medium Efford Dailies",
    links: [
        SingleDaylies['quest_log'],
        SingleDaylies['negg_cave'],
        SingleDaylies['slorg'],
        SingleDaylies['fashion'],
        SingleDaylies['daily_puzzle'],
    ]
}


export const DailieLinksOne: DailieGroup = {
    name: "one_effort",
    title: "One Efford Dailies",
    links: [
        SingleDaylies['forgottenshore'],
        SingleDaylies['sad'],
        SingleDaylies['strenght_test'],
        SingleDaylies['desert_shrine'],
        SingleDaylies['tomb'],
    ]
}


export const DailieLinksZero: DailieGroup = {
    name: "zero_efford",
    title: "Zero Efford Dailies",
    links: [
        SingleDaylies['anchormanagement'],
        SingleDaylies['gravedanger'],
        SingleDaylies['fishing'],
        SingleDaylies['fairy_cavern'],
        SingleDaylies['month_freebie'],
        SingleDaylies['bank'],
    ]
}


//not worth:
//meteor, rewards to low
//querray, drop only one low cost item