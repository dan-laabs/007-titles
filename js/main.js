;
var bond = bond || {};

bond.randomTitleGenerator = (function () {
    const timeFrame = [
        'Today',
        'Tomorrow',
        'Never',
        'Yesterday',
        'The Future',
        'Another Day',
        'Forever',
        'Twice',
        'No Time'
    ];

    const adverb = [
        'Only'
    ];

    const verbsPresent = [
        'Lives',
        'Dies',
        'Kills'
    ];

    const verbs = [
        'Live',
        'Die',
        'Kill'
    ];

    const dontUsePresentVerb = [
        'Diamonds'
    ];

    const nouns = [
        'The World',
        'GoldenEye',
        'Dr. No',
        'Diamonds',
        'Goldfinger',
        'Majesty’s Secret Service',
        'The Spy',
        'Casino Royale',
        'Golden Gun',
        'Octopussy',
        'Skyfall',
        'Thunderball'
    ];

    const sayings = [
        'Is Not Enough',
        'With Love',
        'Let Die',
        'To Die'
    ];

    const instaKeys = [
        '3y3lTEJBAJ',
        '0ao3wPpBCO',
        'zAj-wtpBDl',
        'B1Wfyirg4B5',
        'B1HJLcVg7UR',
        'B01Bs4bg7Wv',
        'B0EF80Cg7xE',
        'BzWNJYrAtoS',
        'ByS4GM6ALwP',
        'ByNfFBkAbmd',
        'ByIc2Nggy4_',
        'BxrVnOihoK4',
        'BxiMqw6hWiB',
        'Bxc0sZ5Bus6',
        'BxKzyy_luiZ',
        'Buoejbvg8sX',
        'BuZSi2XlB9e',
        'BuE8DzngIIG',
        'Bt45jQMAGKs',
        'BtrCduqF5rK',
        'BtL_p3NgGO_',
        'BsDxF0GDeIA',
        'Brp7QacApQX',
        'Bq2wFghgXF8',
        'BqpwyalgOMX',
        'BqXwVO8AZfj',
        'BqPyULZAGrc',
        'BqNSRXAg3bH',
        'Bp-Ac2GAaQ1',
        'Boi5cSoAisZ',
        'BoUjDMagood',
        'BnWibLIArQJ',
        'BnBke53A_iN',
        'Bm5T6pOgGD6',
        'Bm2_JeIgQ9T',
        'Bmv2d4hAz-A',
        'BmOVsQLgP2F',
        'BmJVYNbgdiw',
        'BltBwSIHIzY',
        'BklLSWjAvgJ',
        'BjPZEOjht5P',
        'Bi9NFb-hrGk',
        'BhKAQWdh0pE',
        'Bg9B6eLhQb3',
        'Bf9AfYyBP7E',
        'Bf07vvNBdTH',
        'BfMgqO4hCDh',
        'BedZdoKn_BD',
        'Bd-l7BpH6if',
        'By04Qezg4PH',
        'BdQGkQmHDN2',
        'BYON_aClKcV',
        'BDn6DSYJBOB',
        '9OzLfLpBOr',
        '0ao3wPpBCO',
        'zAj-wtpBDl'
    ];

    /**
     * output a random title
     */
    var exec = function () {
        $.get('https://api.instagram.com/oembed/?url=http://instagr.am/p/' + getRandomInstaKey() + '/').done(function (data) {
            let randomNumber = Math.floor((Math.random() * 4) + 1),
                randomNumberTextAlign = Math.floor((Math.random() * 3) + 1),
                $titleContainer = $('#title-inner-container'),
                $posterContainer = $('#poster-container');

            $titleContainer.empty().removeClass();

            $posterContainer.css({
                'background-image': 'url(' + data.thumbnail_url + ')',
                'background-position': 'center top',
                'background-size': '100% auto',
                'height': data.thumbnail_height + 'px',
                'width': data.thumbnail_width + 'px',
            });

            $titleContainer.addClass('text-align-' + randomNumberTextAlign);

            if (randomNumber == 4) {
                var randomNoun = getRandomNoun(),
                    randomVerb = getRandomVerb(randomNoun);

                $titleContainer
                    .append(titleDomHelper(randomNoun))
                    .append(titleDomHelper(randomVerb))
                    .append(titleDomHelper(getRandomTimeFrame()));
            } else if (randomNumber == 3) {
                $titleContainer
                    .append(titleDomHelper(getRandomTimeFrame()))
                    .append(titleDomHelper(getRandomVerb()))
                    .append(titleDomHelper(getRandomAdverb()))
                    .append(titleDomHelper(getRandomTimeFrame()));
            } else if (randomNumber == 2) {
                $titleContainer
                    .append(titleDomHelper(getRandomNoun()))
                    .append(titleDomHelper(getRandomSayings()));
            } else if (randomNumber == 1) {
                $titleContainer
                    .append(titleDomHelper(getRandomTimeFrame()))
                    .append(titleDomHelper(getRandomSayings()));
            }

            $('#credits-container').html(data.html);
        });
    };

    /**
     * given a string input create a div element
     * 
     * @param {string} text 
     */
    var titleDomHelper = function (text) {
        let d = document.createElement('div');

        return $(d).addClass('title').html(text);
    };

    /**
     * get random instagram resource key
     */
    var getRandomInstaKey = function () {
        return instaKeys[Math.floor(Math.random() * instaKeys.length)];
    };

    /**
     * return a random timeframe
     */
    var getRandomTimeFrame = function () {
        return timeFrame[Math.floor(Math.random() * timeFrame.length)];
    };

    /**
     * return a random verb
     */
    var getRandomVerb = function (previousWord) {
        if (dontUsePresentVerb.indexOf(previousWord) != -1) {
            return verbs[Math.floor(Math.random() * verbs.length)];
        }

        return verbsPresent[Math.floor(Math.random() * verbsPresent.length)];
    };

    /**
     * return a random adverb
     */
    var getRandomAdverb = function () {
        return adverb[Math.floor(Math.random() * adverb.length)];
    };

    /**
     * return a random noun
     */
    var getRandomNoun = function () {
        return nouns[Math.floor(Math.random() * nouns.length)];
    };

    /**
     * return a random saying
     */
    var getRandomSayings = function () {
        return sayings[Math.floor(Math.random() * sayings.length)];
    };

    // document ready
    $(function () {
        exec();
    });

    // public scope
    return {
        exec: function () {
            exec();
        }
    };
})();
