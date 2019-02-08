class Choose extends React.Component {
    //constructor
    constructor(props){
        super(props);
    }    

    render() {
        return (
            <div className="card bg-light mb-3">
                <img src={"src/img/" + this.props.pizza_type + ".jpg"} className="card-img-top" alt={this.props.pizza_type + " Pizza"} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.pizza_type} Pizza</h5>
                    <p className="card-text">The freshest {this.props.pizza_type} Pizza from the cheapest place in town.</p>
                    <button type="button" className="btn btn-lg btn-block btn-primary">Choose {this.props.pizza_type} Pizza</button>
                </div>
            </div>
        );        
    }
}
class PizzaChoice extends React.Component{
    //constructor
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    };

    render() {
        return (
        <div id="pizzaform" className="row">
                <div className="col">
                    <form>
                        <div className="card-group">
                            <Choose pizza_type="Cheese" />
                            <Choose pizza_type="Pepperoni" />
                            <Choose pizza_type="Mushroom" />
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}
ReactDOM.render(
    <PizzaChoice />,
    document.getElementById('choose')
); 