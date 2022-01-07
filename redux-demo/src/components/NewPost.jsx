import React, { Component } from 'react';

class NewPost extends Component {
    constructor(props){
        super(props)
        this.state = { // Khởi tạo 1 state content dùng để lưu dữ liệu người dùng nhập vào
          content: '',
        };
    }
    handleInputChange(e){
       this.setState({
          title: e.target.value // Thay đổi state khi người dùng nhập data vào textbox
       });
    };
    handleSubmit(){
    };
    render() {
        return (
          <div>
            <form onSubmit={ this.handleSubmit }> // Tạo form và gán cho sự kiện onSubmit 1 function là handleSubmit
              <div className="form-group">
                <input type="text" placeholder="Content" className="form-control"
                  onChange={ this.handleInputChange } value={ this.state.content } />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Add Post</button>
              </div>
            </form>
          </div>
        );
     }
  }