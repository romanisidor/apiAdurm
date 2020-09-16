import MongoClient from 'mongodb';

//Conexión a la base de datos 
export async function connect (){
    try {
    const client = await MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
    const db = client.db('node-rest-api');
    console.log('Base de datos conectada con éxito');
    return db;
        
    } catch (error) {
        console.log("Error en la base de datos", error);
    }
    
}

