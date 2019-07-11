var censoredwords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(inStr) {

    for (idx in censoredwords) {
        inStr = inStr.replace(censoredwords[idx], '****');
    }

    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[idx], '****');
    }

    return inStr;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredwords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;




