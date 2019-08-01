import React, { Component } from 'react'
import axios from '../config/axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Home extends Component {
    componentDidMount(){
        axios.get(
            '/tasks/' + this.props.id
        ).then(res => {
            console.log(res.data)
        })
    }


    render() {
        // Jika user sudah login
        if(this.props.id){
            return (
                <div className="container">
                        <h1 className="display-4 text-center animated bounce delay-1s">List Tasks</h1>
                        <ul className="list-group list-group-flush mb-5"></ul>
                        <form className="form-group mt-5">
                            <input type="text" className="form-control" placeholder="What do you want to do ?" ref={input => this.task = input}/>
                        </form>
                        <button type="submit" className="btn btn-block btn-primary mt-3" onClick={() => this.addTask(this.props.id)}>Up !</button>
                    </div>
            )
        }

        return <Redirect to='/login'/>
        
    }
}

const mps = state => {
    return {
        id: state.auth.id
    }
}

export default connect(mps)(Home)