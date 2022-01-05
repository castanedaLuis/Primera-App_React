import React,{ Component} from 'react';
import PropTypes from 'prop-types';

class Tak extends Component{

    StyleCompleted(){
        return{
            fonSize:'20px',
            color:this.props.tak.done ? 'grey' : 'black',
            textDecoration:this.props.tak.done ? 'line-through':'none'
        }
    }
    render(){
        const {tak}= this.props;
        return <div style={this.StyleCompleted()}>
             {tak.title}-
             {tak.description}-
             {tak.done}-
             {tak.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this,tak.id)}/>
            <button style={btnDelate} onClick={this.props.deleteTaks.bind(this,tak.id)}>
                X
            </button>
        </div>
    }
}

Tak.propTypes = {
    tak: PropTypes.object.isRequired
}

const btnDelate = {
    fontSize:'18px',
    background:'#ea2027',
    color:'#fff',
    borde:'none',
    padding:'10px 15px',
    borderRadius:'50%',
    cursor:'pointer'
}

export default Tak;