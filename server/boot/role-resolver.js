var loopback = require('loopback');

module.exports = function(app) {
  var Role = app.models.Role;
  
  Role.registerResolver('systemAdmin', function(role, context, cb) {
    function reject() {
      process.nextTick(function() {
        cb(null, false);
      });
    }

    // do not allow anonymous users
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }
    
    var ctx = loopback.getCurrentContext();
    var currentUser = ctx && ctx.get('currentUser');
    if(currentUser && currentUser.isSystemAdmin) {
      cb(null, true);
    } else {
      return reject();
    }
    
  });

//   Role.registerResolver('classmate', function(role, context, cb) {
//     function reject() {
//       process.nextTick(function() {
//         cb(null, false);
//       });
//     }

//     // if the target model is not course
//     if (context.modelName !== 'course') {
//       return reject();
//     }

//     // do not allow anonymous users
//     var userId = context.accessToken.userId;
//     if (!userId) {
//       return reject();
//     }

//     // check if userId is in class table for the given course id
//     context.model.findById(context.modelId, function(err, course) {
//       if (err || !course)
//         return reject();

//       var Class = app.models.Class;
//       Class.count({
//         ownerId: course.ownerId,
//         memberId: userId
//       }, function(err, count) {
//         if (err) {
//           console.log(err);
//           return cb(null, false);
//         }

//         cb(null, count > 0); // true = is a classmate
//       });
//     });
//   });
};
