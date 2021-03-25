const { dateRangeStructure } = require('../daterange')

function weekOf(parent, args, context) {
    return dateRangeStructure(parent.weekOf)
}

async function units(parent, args, context) {
    return await context.prisma.unit.findMany({
        where: {
            moduleId: {
                equals: parent.id
            }
        }
    }) 
}

module.exports = {
    weekOf,
    units
}