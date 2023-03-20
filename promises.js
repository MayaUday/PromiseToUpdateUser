const users = [
    { title: 'User one', body: 'This is user one', lastActivity: '2nd February 2023' },
    { title: 'User two', body: 'This is user two', lastActivity: '1st March 2023 03:15 PM (Indian Standard Time)' }
];

// Create new user function
function createUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push({ ...user, lastActivity: new Date().toString() });
            resolve();
        });
    });
}

// Creating function updateLastUserActivityTime
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.forEach((user) => {
                console.log('Before creating ' + user.title + ', User last Activiy time = ' + user.lastActivity);
                console.log('After creating >>>> ' + user.title);
            });
            console.log(users);
            console.log('User last activity time ' + new Date().getTime());
            resolve();
        }, 1000);
    });
}

function deletionPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.pop();
            resolve();
        }, 1000);
    });
}

async function main() {
    await Promise.all([createUser({ title: 'User three', body: 'This is user three' }), updateLastUserActivityTime()]);
    await Promise.all([createUser({ title: 'User four', body: 'This is user four' }), updateLastUserActivityTime()]);
    await deletionPromise();
    console.log(users);
}

main();
