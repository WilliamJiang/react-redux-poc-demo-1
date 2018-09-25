import React from 'react';

class App extends React.Component {
    state = {data: 'Initial data...'}

    updateState = () => {
        this.setState({data: 'Data updated from the child component...'})
    };

    render() {
        return (
            <div>
                <Content myDataProp={this.state.data}
                         updateStateProp={this.updateState}></Content>
            </div>
        );
    }
}

const Content = (props) => (
    <div>
        <button onClick={this.props.updateStateProp}>CLICK</button>
        <h3>{this.props.myDataProp}</h3>
    </div>
);
