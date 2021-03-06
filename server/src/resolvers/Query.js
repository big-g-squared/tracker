async function classes(parent, args, context, info) {
    return await context.prisma.class.findMany({
        skip: args.skip,
        take: args.take
    })
}

async function singleClass(parent, args, context, info) {
    return await context.prisma.class.findUnique({
        where: {
            OR: [
                {
                    name: {
                        equals: args.name
                    }
                },
                {
                    id: {
                        equals: args.id
                    }
                }
            ]
        }
    })
}

async function schedule(parent, args, context, info) {
    
}

module.exports = {
    classes,
    singleClass
}