import React from "react";
import {connect} from "react-redux";
import store, {setUsersThunk, deleteUserThunk} from "../redux/store";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



class Users extends React.Component{

  async componentDidMount() {
    await store.dispatch(setUsersThunk());
    console.log("USERS CM ", this.props)
  }

    render(){
        console.log("USERS REN ", this.props.users)
        return(
            <div>
                
                <h1>USERS</h1>
                <ul>
                    {
                        this.props.users.map(user => <li key={user.id}>{user.username}</li>)
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users
  });

  const mapDispatchToProps = dispatch => {
    return {
      setUsers: () => dispatch(setUsersThunk()),
      deleteUser: () => dispatch(deleteUserThunk())
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Users);
  