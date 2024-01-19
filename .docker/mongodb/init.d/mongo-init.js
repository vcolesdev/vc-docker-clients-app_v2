print("[Wave Emoji]: ]Hello from mongo-init.js! Initializing MongoDB...");
print("[Leaf Emoji]: Getting admin db and creating new user: mongo_admin");

db = db.getSiblingDB("admin");
db.createUser(
    {
        user: "mongo_admin",
        pwd: "mongopasspass",
        roles: [{
            role: 'root',
            db: 'admin'
        }],
    },
);

print("[Check Emoji]: Successfully created user: mongo_admin");
print("[Leaf Emoji]: Getting clients db and creating new user: clients_admin");

db = db.getSiblingDB('clients_db');
db.createUser(
    {
        user: "clients_admin",
        pwd: "clientspasspass",
        roles: [{
            role: 'readWrite',
            db: "clients_db"
        }],
    },
);

print("[Check Emoji]: Successfully created user: mongo_admin");
print("[Leaf Emoji]: Creating collection: clients");

db.createCollection("clients");

print("[Check Emoji]: Successfully created collection: clients");
print("[Shutdown Emoji]: Exiting mongo-init.js");