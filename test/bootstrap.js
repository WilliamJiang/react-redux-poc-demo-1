//$ npm install --save react-bootstrap

import Button from 'react-bootstrap/lib/Button';
// or
import {Button} from 'react-bootstrap';


const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

const buttonsInstance = (
    <div className="well" style={wellStyles}>
        <Button bsStyle="primary" bsSize="large" block>
            Block level button
        </Button>
        <Button bsSize="large" block>
            Block level button
        </Button>
    </div>
);

const ResponsiveReact = () => ({buttonsInstance})