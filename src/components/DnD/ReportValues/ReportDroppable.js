import React from 'react';
import PropTypes from 'prop-types';


export default class ReportDroppable extends React.Component{
     drop =(e)=>{
         e.preventDefault();
         try {
            const data = e.dataTransfer.getData('reportvalue');
            e.target.appendChild(document.getElementById(data));
            console.log(data);
         } catch (error) {
             console.log(error)
         }

     }
     allowDrop=(e)=>{
         e.preventDefault();
     }
     render(){
         return(
             <div id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop} style={this.props.style}>
                 {this.props.children}

             </div>
         );
     }
}
ReportDroppable.propTypes={
    id:PropTypes.string,
    style:PropTypes.object,
    children:PropTypes.node,
}
