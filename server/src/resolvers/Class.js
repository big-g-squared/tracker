const { stringToRange, dateRangeStructure } = require('../daterange')

function lecture(parent, args, context) {
    return dateRangeStructure(parent.lecture)
}

function discussion(parent, args, context) {
    return dateRangeStructure(parent.discussion)
}

function lab(parent, args, context) {
    return dateRangeStructure(parent.lab)
}

function officeHours(parent, args, context) {
    return dateRangeStructure(parent.officeHours)
}

async function modules(parent, args, context) {
    return await context.prisma.module.findMany({
        where: {
            classId: {
                equals: parent.id
            }
        }
    })
}

module.exports = {
    lecture,
    discussion,
    lab,
    officeHours,
    modules
}