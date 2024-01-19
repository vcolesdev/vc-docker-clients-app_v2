const connString = `mongodb://root:example@${process.env.MONGO_HOST}:27017/test?authSource=admin`;

export { connString };