import React,{ Component} from 'react';
import Tak from './Tak';
import PropTypes from 'prop-types';


class Taks extends Component{
    render(){
        return this.props.taks.map(tak => 
            <Tak 
                tak={tak} 
                key={tak.id} 
                deleteTaks={this.props.deleteTaks}
                checkDone= {this.props.checkDone}
            />)
        
        
    }
}

Taks.propTypes = {
    taks: PropTypes.array.isRequired
}


export default Taks;