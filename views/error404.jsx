const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>We can't find this page</p>
                <div>
                    <img src="" alt="picture" />
                </div>
            </main>
        </Def>
    )
}