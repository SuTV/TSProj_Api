var loopback = require('loopback');

module.exports = function(Course) {
    Course.observe('before save', function(ctx, next) {
        if(ctx.isNewInstance) {
            var currentContext = loopback.getCurrentContext();
            var currentUser = currentContext && currentContext.get('currentUser');
            if(currentUser) {
                // add userId
                ctx.instance.userId = currentUser.id;
            }
        }
        
        // update time
        if (ctx.instance) {
            ctx.instance.lastUpdated = new Date();
        } else {
            ctx.data.lastUpdated = new Date();
        }
        
        next();
    });

    Course.observe('loaded', function(ctx, next) {
        var courseId = ctx.instance ? ctx.instance.id : ctx.data.id;
        if(ctx.instance) {
            ctx.instance.extra = {};
        } else {
            ctx.data.extra = {};
        }

        // get total like/join/favorite
        Course.app.models.Reaction.count({'courseId': courseId, 'type': 0, 'status': 1}, function(err, totalCount) {
            if (err) next(err);

            if(ctx.instance) {
                ctx.instance.extra.totalLikes = totalCount;
            } else {
                ctx.data.extra.totalLikes = totalCount;
            }

            Course.app.models.Reaction.count({'courseId': courseId, 'type': 1, 'status': 1}, function(err, totalCount) {
                if (err) next(err);

                if(ctx.instance) {
                    ctx.instance.extra.totalJoins = totalCount;
                } else {
                    ctx.data.extra.totalJoins = totalCount;
                }

                Course.app.models.Reaction.count({'courseId': courseId, 'type': 2, 'status': 1}, function(err, totalCount) {
                    if (err) next(err);

                    if(ctx.instance) {
                        ctx.instance.extra.totalFavorites = totalCount;
                    } else {
                        ctx.data.extra.totalFavorites = totalCount;
                    }

                    var currentContext = loopback.getCurrentContext();
                    var currentUser = currentContext && currentContext.get('currentUser');
                    if(currentUser) { // currentUser.id
                        // check status
                        Course.app.models.Reaction.findOne({where: {'courseId': courseId, 'userId': currentUser.id, 'type': 0}}, function(err, likedData) {
                            if (err) next(err);

                            var liked = likedData !== undefined && likedData !== null && likedData.id && likedData.status === 1;

                            if(ctx.instance) {
                                ctx.instance.extra.liked = liked;
                                if(likedData && likedData.id) {
                                    ctx.instance.extra.likedReaction = likedData;
                                }
                            } else {
                                ctx.data.extra.liked = liked;
                                if(likedData && likedData.id) {
                                    ctx.data.extra.likedReaction = likedData;
                                }
                            }

                            Course.app.models.Reaction.findOne({where: {'courseId': courseId, 'userId': currentUser.id, 'type': 1}}, function(err, joinedData) {
                                if (err) next(err);

                                var joined = joinedData !== undefined && joinedData !== null && joinedData.id && joinedData.status === 1;

                                if(ctx.instance) {
                                    ctx.instance.extra.joined = joined;
                                    if(joinedData && joinedData.id) {
                                        ctx.instance.extra.joinedReaction = joinedData;
                                    }
                                } else {
                                    ctx.data.extra.joined = joined;
                                    if(joinedData && joinedData.id) {
                                        ctx.data.extra.joinedReaction = joinedData;
                                    }
                                }

                                Course.app.models.Reaction.findOne({where: {'courseId': courseId, 'userId': currentUser.id, 'type': 2}}, function(err, favoredData) {
                                    if (err) next(err);

                                    var favored = favoredData !== undefined && favoredData !== null && favoredData.id && favoredData.status === 1;

                                    if(ctx.instance) {
                                        ctx.instance.extra.favored = favored;
                                        if(favoredData && favoredData.id) {
                                            ctx.instance.extra.favoredReaction = favoredData;
                                        }
                                    } else {
                                        ctx.data.extra.favored = favored;
                                        if(favoredData && favoredData.id) {
                                            ctx.data.extra.favoredReaction = favoredData;
                                        }
                                    }

                                    next();                
                                });                   
                            });             
                        });
                    } else {
                       next(); 
                    }                    
                });
            });
        });
    });
};