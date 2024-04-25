import express from 'express'
import { connectMqtt } from './mqtt.js';
import { connectDb } from './db.js';

const app = express();
const port = 3000;

try {
    
const client = connectMqtt()


const Record = connectDb()


function generateData() {
    const newRecord = new Record({
        humidity: Math.random() * 100,
        temperature: Math.random() * 35 + 5,
        fanActivity: Math.random() > 0.5 ? 'on' : 'off', // Randomly turn the fan on or off
        lightActivity: Math.random() > 0.5 ? 'on' : 'off' // Randomly turn the light on or off
    });
    newRecord.save();
}


setInterval(generateData, 1000);

async function calculateAndPublish() {
    const results = await Record.aggregate([
        {
            $group: {
                _id: null,
                avgHumidity: { $avg: '$humidity' },
                avgTemperature: { $avg: '$temperature' }
            }
        },
        { $sort: { _id: -1 } },
        { $limit: 1 }
    ]);

    if (results.length > 0) {
        const { avgHumidity, avgTemperature } = results[0];
        const latestRecord = await Record.findOne().sort({ _id: -1 });

        const message = JSON.stringify({
            humidity: Math.round(avgHumidity),
            temperature: Math.round(avgTemperature),
            fanActivity: latestRecord.fanActivity,
            lightActivity: latestRecord.lightActivity
        });

        client.publish('Health_Among./66214a497372963463a87dce', message);
        console.log("published")
    }
}



setInterval(calculateAndPublish, 6000);


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

} catch (error) {
    console.error(error)
}
