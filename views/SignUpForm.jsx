const react = require('react')

function SignUpForm() {
<html>
    <head>
    <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <div className='background'></div>
        <div className='card'>
            <img className='logo'></img>
            <h2>Create Account</h2>
            <form className='form'>
                <input type={text} placeholder= {Name}></input>
                <input type={email} placeholder= {Email}></input>
                <input type={password} placeholder = {Password}></input>

                <button type='submit' id='btn1'>SIGN UP</button>         
            </form>
            <footer>
                Existing users, sign in
                <a href='LoginForm.jsx'>here</a>
            </footer>
        </div>
    </body>
</html>
}

module.exports = SignUpForm