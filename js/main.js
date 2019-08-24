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

    /**
     * output a random title
     */
    var exec = function () {
        let randomNumber = Math.floor((Math.random() * 4) + 1),
            $app = $('#app');

        $app.empty();

        if (randomNumber == 4) {
            var randomNoun = getRandomNoun(),
                randomVerb = getRandomVerb(randomNoun);

            $app.append(titleDomHelper(randomNoun)).append(titleDomHelper(randomVerb)).append(titleDomHelper(getRandomTimeFrame()));
        } else if (randomNumber == 3) {
            $app.append(titleDomHelper(getRandomTimeFrame())).append(titleDomHelper(getRandomVerb())).append(titleDomHelper(getRandomAdverb())).append(titleDomHelper(getRandomTimeFrame()));
        } else if (randomNumber == 2) {
            $app.append(titleDomHelper(getRandomNoun())).append(titleDomHelper(getRandomSayings()));
        } else if (randomNumber == 1) {
            $app.append(titleDomHelper(getRandomTimeFrame())).append(titleDomHelper(getRandomSayings()));
        }
    };

    /**
     * given a string input create a div element
     * 
     * @param {string} text 
     */
    var titleDomHelper = function (text) {
        let d = document.createElement('div'),
            randomNumber = Math.floor((Math.random() * 100) + 1);

        $(d).css({
            'padding-left': randomNumber + 'px'
        });

        return $(d).addClass('title').html(text);
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
