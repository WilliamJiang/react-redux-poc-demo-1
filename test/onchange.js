/**
 * The onChange handler for the DatePicker is not called with a standard browser
 * change event, but with value and formattedValue as arguments.
 * I would recommend to register different onChange handlers in your Child component
 * that transform the respective input field's event:
 */

class Parent extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    onChange(field, value) {
        // parent class change handler is always called with field name and value
        this.setState({[field]: value});
    }


    render () {
        return <Child onChange={this.onChange.bind(this)} />
    }
}

class Child extends React.Component {
    constructor (props) {
        super(props);
    }

    onFieldChange(event) {
        // for a regular input field, read field name and value from the event
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    onDateChange(dateValue) {
        // for a date field, the value is passed into the change handler
        this.props.onChange('dateCommenced', dateValue);
    }

    render () {
        return <form>
            <input type="text" name="jobNumber" onChange={this.onFieldChange.bind(this)} />
            <DatePicker onChange={this.onDateChange.bind(this)}  />
        </form>
    }
}