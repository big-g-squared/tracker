function rangeToString(range) {
    // TODO: Handle DateRange conversion to string here
}

function stringToRange(range) {
    // TODO: Handle interval string to DateRange conversion here
}

function dateRangeStructure(rangeString) {
    const range = stringToRange(rangeString)
    return {
        start: range.start,
        end: range.end
    }
}

module.exports = {
    rangeToString,
    stringToRange,
    dateRangeStructure
}