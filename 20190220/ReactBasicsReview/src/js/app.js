class AppComponent extends React.Component {

    //constructor
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <FormInput />
            </div>
        );
    };
}

var root = document.getElementById('root');
ReactDOM.render(<AppComponent />, root);