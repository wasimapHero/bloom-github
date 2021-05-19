document.getElementById('btn-plus').addEventListener('click', () => {
    let a = document.getElementById('input-value').innerHTML;
    a = parseInt(a);
    if (a >= 0) {
        a = a + 1;
    }
    document.getElementById('input-value').innerText = a;
    document.getElementById('item-no').innerText = a;
    let b = document.getElementById('product-price').innerHTML;
    b = parseFloat(b);
    b = parseFloat(b);
    if (b >= 0) {
        b = b + 490.00;
    }
    document.getElementById('product-price').innerText = b;
    let c = document.getElementById('shipping-cost').innerHTML;
    c = parseFloat(c);
    if (c >= 0) {
        c = c + 9.00;
    }
    document.getElementById('shipping-cost').innerText = c;
    let d = document.getElementById('tax-vat').innerHTML;
    d = parseFloat(d);
    if (d >= 0) {
        d = d + 55.00;
    }
    document.getElementById('tax-vat').innerText = d;
    let e = document.getElementById('total-price').innerHTML;
    e = parseFloat(e);
    if (e > 0) {
        e = e + 554.00;
    }
    if (e == 0) {
        e = 554.00;
    }
    document.getElementById('total-price').innerText = e;
})


document.getElementById('btn-minus').addEventListener('click', () => {
    let a = document.getElementById('input-value').innerHTML;
    a = parseInt(a);
    if (a > 0) {
        a = a - 1;
    }
    document.getElementById('input-value').innerText = a;
    document.getElementById('item-no').innerText = a;
    let b = document.getElementById('product-price').innerHTML;
    b = parseFloat(b);
    if (b > 1) {
        b = b - 490.00;
    }

    document.getElementById('product-price').innerText = b;
    let c = document.getElementById('shipping-cost').innerHTML;
    c = parseFloat(c);
    if (c > 1) {
        c = c - 9.00;
    }

    document.getElementById('shipping-cost').innerText = c;
    let d = document.getElementById('tax-vat').innerHTML;
    d = parseFloat(d);
    if (d > 1) {
        d = d - 55.00;
    }

    document.getElementById('tax-vat').innerText = d;
    let e = document.getElementById('total-price').innerHTML;
    e = parseFloat(e);
    if (e > 1) {
        e = e - 554.00;
    }
    if (e == 0 || e == 1) {
        e = 0;
    }
    document.getElementById('total-price').innerText = e;
});

//proceed btn
document.getElementById('proceed').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('abc').style.display = 'none';
    document.getElementById('cart-list').style.display = 'none';
    document.getElementById('foundation-part').style.display = 'none';
    document.getElementById('foundation-part-2').style.display = 'none';
    document.getElementById('form').style.display = 'inline-block';

});


//login js part

document.getElementById('sign-in-opt').addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('create-Account').style.display = 'none';
    document.getElementById('content-2').style.display = 'inline-block';
    document.getElementById('create-success').style.display = 'none';
    document.getElementById('confirm-login').style.display = 'none';
});
document.getElementById('btn-create-success').addEventListener('click', function () {
    document.getElementById('create-Account').style.display = 'none';
    document.getElementById('create-success').style.display = 'none';
    document.getElementById('confirm-login').style.display = 'none';
    document.getElementById('content-2').style.display = 'inline-block';
});


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

        const name2 = document.getElementById('name2').value;
        const password2 = document.getElementById('password2').value;


        if (name2 == '' || password2 == '') {
            alert('Please fill out all gaps');
        }
        else {
            if (password2.length > 8 || password2.length < 15) {
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
