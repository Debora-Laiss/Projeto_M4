import { MongoClient } from 'mongodb'
//nao sei
/*export const Mongo = {
    client: null,
    db: null,*/

    export const Mongo = {
        connect: async ({ mongoConnectionString, mongoDbName }) => {
            try {
                await mongoose.connect(mongoConnectionString, {
                    dbName: mongoDbName,
                    serverSelectionTimeoutMS: 5000, // 5 segundos
                    socketTimeoutMS: 45000, // 45 segundos
                });
                console.log('Connected to MongoDB!');
                return mongoose.connection;
            } catch (error) {
                console.error('Error connecting to MongoDB:', error);
                throw error;
            }
        },
    

    async connect({ mongoConnectionString, mongoDbName }) {
        try {
            console.log(mongoDbName)
            const client = new MongoClient(mongoConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
            await client.connect()
            const db = client.db(mongoDbName)

            this.client = client
            this.db = db

            return 'Connected to mongo!'
        } catch (error) {
            console.error('Error during mongo connection:', error)
            return { text: 'Error during mongo connection', error }
        }
    }, 

    async disconnect() {
        if (this.client) {
            await this.client.close()
            this.client = null
            this.db = null
            return 'Disconnected from mongo!'
        } else {
            return 'No client to disconnect!'
        }
    }
}



/*import { MongoClient } from 'mongodb'

export const Mongo = {
    async connect({ mongoConnectionString, mongoDbName }) {
        try {
            const client = new MongoClient(mongoConnectionString)
    
            await client.connect()
            const db = client.db(mongoDbName)

            this.client = client
            this.db = db

            return 'Connected to mongo!'
            
        } catch (error) {
            return { text: 'Error during mongo connection', error }
        }
    }
}*/