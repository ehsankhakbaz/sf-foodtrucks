import { connection } from 'mongoose';
import connectDB from '..';
import { Facility } from '../models';
const fs = require('fs')
const csv = require('csv-parser');

const toimport = async () => {
    console.log('Cleanning database');

    await connectDB();
    await connection.dropDatabase();

    console.log('Database clean');

    const getFileContents = async (filepath) => {
        const data = [];
      
        return new Promise(function(resolve, reject) {
            fs.createReadStream(filepath)
                .pipe(csv())
                .on('error', error => reject(error))
                .on('data', row => data.push(new Facility(row)))
                .on('end', () => {
                    console.log(data);
                    resolve(data);
                });
        });
    }
    const facilities = await getFileContents('./db/source/Mobile_Food_Facility_Permit.csv');

    const savings = [
    ...facilities.map((facility) => facility.save())
    ];
    await Promise.all(savings);

    console.log('Database imported');

    connection.close();
};

toimport();