import React from "react";

class FormPassWord extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return  (
            <div>
                <input type="password" name={this.props.name} id={this.props.name}/>
            </div>
        );
    }
}

export default FormPassWord;