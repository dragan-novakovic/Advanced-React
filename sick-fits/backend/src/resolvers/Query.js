const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //  const item = await ctx.db.query.items();
  //  return item;
  // }
};

module.exports = Query;
