
document.getElementById('sign-in-opt').addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('create-Account').style.display = 'none';
    document.getElementById('content-2').style.display = 'inline-block';
    document.getElementById('create-success').style.display = 'none';
    document.getElementById('confirm-login').style.display = 'none';
});
document.getElementById('btn-create-success').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('create-Account').style.display = 'none';
    document.getElementById('create-success').style.display = 'none';
    document.getElementById('confirm-login').style.display = 'none';
    document.getElementById('content-2').style.display = 'inline-block';
});



// document.addEventListener('DOMContentLoaded', () => {
//     const createAccount = document.querySelector('#create-Account');
//     const login = document.querySelector('#content-2');
// })



// fetching data from server
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => displayName(json))
//     .catch(error => console.log(error))

// function displayName(userArray) {
//     console.log('users:', userArray);
//     const arrayOfUserName = userArray.map(aNewArrayOfObjects => aNewArrayOfObjects.username)
//     console.log(arrayOfUserName);
// }

// // posting data in server
// const obj = { name: 'Esty', id: 1, home: 'Dhaka' };

// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     body: JSON.stringify(obj),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// })
//     .then(response => response.json())
//     .then(json => displayName(json))
//     .catch(error => console.log(error))


// way-2 to post in server----for continue button
document.getElementById('continue-btn').addEventListener('click', e => {
    e.preventDefault();

    var a = 1;
    const username = document.getElementById('username').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (a) {
        if (username == '' || name == '' || password == '' || confirmPassword == '') {
            alert('Please fill out all gaps');
        }
        else {
            if (password.length < 8 || password.length > 15) {
                alert('Password must be in between 9 and 15 characters');
            }
            if (password != confirmPassword) {
                alert('Passwords are not same. Please fill up again')
            }
            else {
                document.getElementById('create-Account').style.display = 'none';
                document.getElementById('content-2').style.display = 'none';
                document.getElementById('create-success').style.display = 'inline-block';
                var passText = document.getElementById('password-text').innerHTML = password;
                console.log(passText);
                const postInfo = { userName: username, name: name, password: password };
                console.log(postInfo);
                postToServer(postInfo);
                passPasswordToLogin(passText);
            }
        }
    }
});
function postToServer(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
}

function passPasswordToLogin(passText) {
    //password paoa gese
    console.log(passText);
    document.getElementById('login-btn').addEventListener('click', e => {
        e.preventDefault();
        var a = 1;

        const name2 = document.getElementById('name2').value;
        const password2 = document.getElementById('password2').value;


        if (name2 == '' || password2 == '') {
            alert('Please fill out all gaps');
        }
        else {
            if (password2.length < 9 || password2.length > 15) {
                alert('Password must be in between 9 and 15 characters');
            }
            if (password2 != passText) {
                alert('Wrong Password! Please fill up again');
            }
            else {
                console.log('password milse');
                document.getElementById('confirm-login').style.display = 'inline-block';
                document.getElementById('create-Account').style.display = 'none';
                document.getElementById('content-2').style.display = 'none';
                document.getElementById('create-success').style.display = 'none';
                document.getElementById('btn-create-success').style.display = 'none';
                const postInfo2 = { name: name2, password: password2 };
                // console.log(postInfo2);
                postToServer(postInfo2);
            }
        }

    });

}

// ----for login button


function postToServer(postInfo2) {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(postInfo2),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => response.json())
        .then(data => getLoginData(data));

    function getLoginData(dataFull) {
        console.log(dataFull);
    }

}



