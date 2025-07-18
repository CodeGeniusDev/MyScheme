// import mongoose from "mongoose";

// interface MongooseCache {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// }

// declare global {
//   // eslint-disable-next-line no-var
//   var mongoose: MongooseCache;
// }

// // Initialize the global cache if it doesn't exist
// if (!global.mongoose) {
//   global.mongoose = { conn: null, promise: null };
// }

// const MONGODB_URI = process.env.MONGODB_URI || "";

// if (!MONGODB_URI) throw new Error("Please define MONGODB_URI in .env.local");

// const cached = global.mongoose;

// async function dbConnect() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       dbName: "your_db_name", // e.g., "codegenius"
//       bufferCommands: false,
//     }).then((mongoose) => mongoose);
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;

import mongoose from "mongoose";

declare global {
  var mongoose: {
    conn: typeof import('mongoose') | null;
    promise: Promise<typeof import('mongoose')> | null;
  } | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI || "";

if (!MONGODB_URI) throw new Error("Please define MONGODB_URI in .env.local");

const cached = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "your_db_name", // e.g., "codegenius"
      bufferCommands: false,
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
