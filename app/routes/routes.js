module.exports = (app) => {
    const taskRoute = require('./taskRoute');
    const userRoute = require('./userRoute');

    app.use('/api', taskRoute);
    app.use('/api', userRoute);
    
}
