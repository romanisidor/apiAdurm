import MongoClient from 'mongodb';

//Conexión a la base de datos 
export async function connect (){
    try {
    const client = await MongoClient.connect('mongodb+srv://admin:admin@dsbd.tqx3u.mongodb.net/adurm?retryWrites=true&w=majority', {useUnifiedTopology: true})
    const db = client.db('adurm');
    console.log('Base de datos conectada con éxito');
    return db;
        
    } catch (error) {
        console.log("Error en la base de datos", error);
    }
    
}

