module.exports = function(app) {
    var User = app.models.user;
    var Role = app.models.Role;
    var RoleMapping = app.models.RoleMapping;
    var Category = app.models.Category;
    var Course = app.models.Course;
    
    User.create([
        {username: 'admin', email: 'admin@example.com', password: 'admin', isSystemAdmin: true}
    ], function(err, users) {
        if (err) throw err;
    
        //create the admin role
        Role.create({
            name: 'admin'
        }, function(err, role) {
            if (err) throw err;
        
            //make an admin
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: users[0].id
            }, function(err, principal) {
                if (err) throw err;
            });
        });

        Category.create([
            {name: 'Toán học', userId: users[0].id},
            {name: 'Văn học', userId: users[0].id},
            {name: 'Tiếng anh', userId: users[0].id},
            {name: 'Vật lý', userId: users[0].id},
            {name: 'Hoá học', userId: users[0].id},
            {name: 'Sinh học', userId: users[0].id},
            {name: 'Luyện thi THPT', userId: users[0].id},
            {name: 'Luyện thi đại học', userId: users[0].id}
        ], function(err, categories) {
            if (err) throw err;

            Course.create([
                {name: 'Khoá học 1: Toán học', categoryId: categories[0].id, userId: users[0].id, description: 'Long description Long description Long description Long description Long description Long description Long description Long description Long description Long description Long description '},
                {name: 'Khoá học 2: Văn học', categoryId: categories[1].id, userId: users[0].id, description: 'Short description 1'},
                {name: 'Khoá học 3: Tiếng anh', categoryId: categories[2].id, userId: users[0].id, description: 'Short description 2'},
                {name: 'Khoá học 4: Vật lý', categoryId: categories[3].id, userId: users[0].id, description: 'Short description 3'},
                {name: 'Khoá học 5: Hoá học', categoryId: categories[4].id, userId: users[0].id, description: 'Short description 4'},
                {name: 'Khoá học 6: Sinh học', categoryId: categories[5].id, userId: users[0].id, description: 'Short description 5'},
                {name: 'Khoá học 7: Luyện thi THPT', categoryId: categories[6].id, userId: users[0].id, description: 'Short description 6'},
                {name: 'Khoá học 8: Luyện thi đại học', categoryId: categories[7].id, userId: users[0].id, description: 'Short description 7'}
            ], function(err, users) {
                if (err) throw err;
            });
        });
    });
};