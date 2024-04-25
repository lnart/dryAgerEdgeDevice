import mqtt from 'mqtt'

export function connectMqtt(){
    const client = mqtt.connect(process.env.MQTT_STRING, {
        username: process.env.MQTT_USERNAME,
        password: process.env.MQTT_PASSWORD
    }); 
    client.on("connect", async () => {
        try {
          console.log("MQTT Broker connected");
        } catch (error) {
          console.error(error);
        }
      });
    
    client.on("error", ()=> console.log("error"))
      return client
}
