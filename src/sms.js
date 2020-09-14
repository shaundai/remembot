require("dotenv").config();
const schedule = require('node-schedule');
const port = process.env.PORT || 3001;
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const phoneNumber = process.env.PHONE_NUMBER;
const myPhoneNumber = process.env.MY_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);



client.messages
  .create({
     body: 'Shaundai is so cool man',
     from: phoneNumber,
     to: myPhoneNumber
   })
  .then(message => console.log(message.sid));

  const tester = () => {
      console.log('hey')
  }

  const dailyText = schedule.scheduleJob('50 * * * *',
  tester()
  );
