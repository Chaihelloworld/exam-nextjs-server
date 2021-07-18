const router = require('express-promise-router')();
const UserController = require('../controller/users');


router.route('v1').get(UserController.Getall)
router.route('/').get(UserController.index)
router.route('/pageginate').get(UserController.getpage)


// router.route('/add')
    // .get(UserController.indexallcows);

// router.route('/add')

//user/:id
// router.route('/getall')
// .get(UserController.Getstatusall);
// router.route('/getstatus1')
// .get(UserController.Getstatus01)
// router.route('/getstatus2')
// .get(UserController.Getstatus02);
// router.route('/getstatus3')
// .get(UserController.Getstatus03);



    module.exports = router;
