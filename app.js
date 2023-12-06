// iteration 1
let container = document.getElementById("react-container")
// container.innerText = "BYE! please suffer in react"

// ReactDOM.render("Hello! welcome to react", container)

// let h1_tag = React.createElement(
//     'h1',
//     {id:"h1-tag"},
//     React.createElement('div', null , "welcome back to react")
// )
// ReactDOM.render(h1_tag , container)

// Iteration 2
function ReactContainer() {
    let div_tag = React.createElement(
        'div',
        { id: "h1-tag" },
        "Hello",
        React.createElement("div", null, "welcome again back to react")
    );
    return div_tag;
}
ReactDOM.render(ReactContainer(), container);

// Iteration 3
class KalvianContainer extends React.Component {
    render() {
        return React.createElement(
            'div',
            { id: "h1-tag" },
            'hello!',
            React.createElement("div", null, "welcome again with me back to react")
        );
    }
}
ReactDOM.render(React.createElement(KalvianContainer), container);