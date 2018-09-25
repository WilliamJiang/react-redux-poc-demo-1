import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hits: []};
    }

    componentDidMount() {
        fetch('https://hn.algolia.com/api/v1/search?query=redux')
            .then(response => response.json())
            .then(data => this.setState({hits: data.hits}));
    }

    render() {
        const {hits} = this.state;
        return (
            <ul>
                {hits.map(hit =>
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
            </ul>
        );
    }
}

class Keys extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: false,
            error: null,
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://hn.algolia.com/api/v1/search?query=redux')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ hits: data.hits, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        const { hits, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <ul>
                {hits.map(hit =>
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.title}</a>
                    </li>
                )}
            </ul>
        );
    }
}

export default App;