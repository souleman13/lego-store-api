/**
 * Created by Douglas on 7/13/2017.
 */
import Monk from 'monk';

const connection = process.env.MONGO_CONNECTION || 'mongodb://localhost:27017/legos';


export const db = Monk(connection);

export const figures = db.get('figures');
