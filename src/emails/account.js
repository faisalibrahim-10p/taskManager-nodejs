const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'faisal.ibrahim@10pearls.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app, ${name}`
    });
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'faisal.ibrahim@10pearls.com',
        subject: 'Sad to see you leave!',
        text: `What we could have done to make ${name} stay?`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
