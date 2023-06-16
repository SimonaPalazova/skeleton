// TODO: Require Controllers...
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

module.exports = (app) => {
    app.use(homeController);
    app.use('/users', userController);
    //TODO: ...

    app.get('*', (req, res) => {
        res.redirect('/404');
    })
}
