const router = require('express').Router();
const profile_controller = require('../controllers/profile_controller');

router.route('/upload')
.get(profile_controller.upload_form)
.post(profile_controller.process_file)

router.route('/receive')
.get(profile_controller.receive_profiles)

module.exports = router;