import mongoose from 'mongoose';
import config from 'config';

async function connect() {
    const dbUri = config.get<string>('dbUri');
   try {
        await mongoose.connect(dbUri);
        console.log('Connected to the database');
    
   } catch (error) {
        console.error('Error connecting to the database: ', error);
        
    
   }
}

export default connect;