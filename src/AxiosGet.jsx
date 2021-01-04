import React from 'react';
import axios from 'axios';

class AxiosGet extends React.Component {
    constructor () {
        super()
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        const urlGet = 'https://jsonplaceholder.typicode.com/posts'
        axios.get(urlGet).then(response => {
            console.log(response)
            this.setState({
                user: response.data
            })
        })
    }

    // renderTableHeader() {
    //     let header = Object.keys(this.state.user[0])
    //     return header.map((key, index) => {
    //        return <th key={index}>{key}</th>
    //     })
    //  }

    renderTableData() {
        return this.state.user.map((user, index) => {
           const { id, title, userId, body } = user //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{title}</td>
                 <td>{userId}</td>
                 <td>{body}</td>
              </tr>
           )
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='title'>Table</h1>
              <table id='users'>
                 <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>User ID</th>
                        <th>Body</th>
                    </tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }

}
export default AxiosGet