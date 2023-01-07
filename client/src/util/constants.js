const QUIZ_NAMES = {
    SPRITE: {
        name: "sprite",
    },
    POKEDEX_ENTRY: {
        name: "pokedex-entry",
    },
    CRY: {
        name: "cry",
    },
    STAT: {
        name: "stat",
    }
}

const MODE_NAMES = {
    DEFAULT: {
        name: "default",
    },
    ENDLESS: {
        name: "endless",
    }
}

const QUIZ_CONFIG = {
    [QUIZ_NAMES.SPRITE.name]: {
        "probability_json": "sprite_similarities.json",
    },
    [QUIZ_NAMES.POKEDEX_ENTRY.name]: {
        "probability_json": "pokedex_similarities.json",
    },
    [QUIZ_NAMES.CRY.name]: {
        "probability_json": "cry_similarities.json",
    },
    [QUIZ_NAMES.STAT.name]: {
        "probability_json": "stat_similarities.json",
    }
}

export { QUIZ_NAMES, MODE_NAMES, QUIZ_CONFIG }