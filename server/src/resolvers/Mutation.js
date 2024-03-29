const { rangeToString, stringToRange } = require('../daterange');
const papa = require('papaparse');
const { Readable } = require("stream");
const { recompute } = require('../compute');


function addClass(parent, args, context) {
    const created = context.prisma.class.create({
        name: args.name,
        lecture: rangeToString(args.lecture),
        discussion: rangeToString(args.discussion),
        lab: rangeToString(args.lab), 
        officeHours: rangeToString(args.officeHours),
    });

    return created;
}

async function editClass(parent, args, context) {
    return await context.prisma.class.update({
        where: {
            id: args.id
        },
        data: {
            name: args.name,
            lecture: rangeToString(args.lecture),
            discussion: rangeToString(args.discussion),
            lab: rangeToString(args.lab),
            officeHours: rangeToString(args.officeHours),
            modules: {
                create: args.modules
            }
        }
    }) ;
}

async function deleteClass(parent, args, context) {
    const delClass = context.prisma.class.delete({
        where: {
            id: {
                equals: args.id
            }
        }
    });

    const delModules = context.prisma.module.delete({
        where: {
            classId: {
                equals: args.id
            }
        }
    });

    const tempModules = await constext.prisma.module.findMany({
        where: {
            classId: args.id
        }
    });

    const modIds = tempModules.map((elem) => {
        return elem.id
    });

    const delUnits = context.prisma.unit.delete({
        where: {
            moduleId: {
                in: modIds
            }
        }
    });

    return await context.prisma.$transaction([delClass, delModules, delUnits])
}

async function addModule(parent, args, context) {
    return await context.prisma.module.create({
        name: args.name,
        weekOf: rangeToString(args.weekOf),
        units: {
            create: args.units
        }
    });
}

async function editModule(parent, args, context) {
    return await context.prisma.module.update({
        where: {
            id: args.id
        },
        data: {
            name: args.name,
            weekOf: rangeToString(args.weekOf),
            units: {
                create: args.units
            }
        }
    });
}

async function deleteModule(parent, args, context) {
    const delModule = context.prisma.module.deleteMany({
        where: {
            id: {
                equals: args.id
            }
        }
    });

    const delUnits = context.prisma.unit.deleteMany({
        where: {
            moduleId: {
                equals: args.id
            }
        }
    });

    return await context.prisma.$transaction([delModule, delUnits]);
}

async function addUnit(parent, args, context) {
    return await context.prisma.unit.create({
        ...args
    })
}

async function editUnit(parent, args, context) {
    return await context.prisma.unit.update({
        where: {
            id: {
                equals: args.id
            }
        },
        data: {
            name: args.name,
            description: args.description,
            type: args.type
        }
    })
}

async function deleteUnit(parent, args, context) {
    return await context.prisma.unit.delete({
        where: {
            id: {
                equals: args.id
            }
        }
    })
}

async function uploadSchedule(data) {
    // TODO: Handle how to add data using CSV capabilities
    const { Readable } = require("stream");
    const readable = Readable.from(data);
    papa.parse(readable, {
        step: (row) => {
            /* TODO:  Finish handling row addition */
            context.prisma.class.create({
                name: row.name,
                lecture: rangeToString(row.lecture),
                discussion: rangeToString(row.discussion),
                lab: rangeToString(row.lab),
                officeHours: rangeToString(row.officeHours)
            });
        }
    });

    recompute();
}

module.exports = {
    addClass,
    editClass,
    deleteClass,
    addModule,
    editModule,
    deleteModule,
    addUnit,
    editUnit,
    deleteUnit,
    uploadSchedule
}