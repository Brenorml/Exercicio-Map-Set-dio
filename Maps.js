function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set('Breno', 'Admin');
users.set('Patricia', 'Admin');
users.set('Noemi', 'user');
users.set('Jabriel', 'Admin');

console.log(getAdmins(users));