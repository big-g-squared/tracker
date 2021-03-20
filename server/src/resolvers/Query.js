async function classes(parent, args, context, info) {
    return await context.prisma.class.findMany({
        skip: args.skip,
        take: args.take
    })
}

module.exports = {
    classes,
}