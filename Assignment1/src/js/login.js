class LoginComponent extends React.Component 
{
    //constructor
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    };

    render() 
    {
        return (
            <div>
                <img class="mb-4" src="src/img/Icon.png" alt="" width="72" height="72"></img>
                <h1 classname="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label classname="sr-only">
                    Email address
                    <input type="email" class="form-control" placeholder="Email address" required autofocus/>    
                </label>
                
                <label>
                    Password
                    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                </label>
                <div>
                    <label>
                        Remember Me?
                        <input type="checkbox" value="remember-me"/>
                    </label>
                </div>
            </div>

             
           

        );
    };
}
class FastPizza4U extends React.Component{
    //constructor
    constructor(props) {
        super(props);
        this.state = "";
    };

    render() {
        return (
            <div classname="container">
                <form classname="form-signin">            
                <LoginComponent />
                </form>
            </div>
        );
    };
}
ReactDOM.render(
    <FastPizza4U />,
    document.getElementById('login')
); 