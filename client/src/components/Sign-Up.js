// import axios from 'axios'

// handleSubmit(event) {
//     event.preventDefault();
//     console.log("handleSubmit");
//     console.log("THis.State.Password  " + this.state.password);
//     console.log("THis.State.Email  " + this.state.email);
//     axios
//       .post("/user/login", {
//         username: this.state.username,
//         password: this.state.password,
//       })
//       .then((response) => {
//         console.log("login response: ");
//         console.log(response);
//         if (response.status === 200) {
//           // update App.js state
//           this.props.updateUser({
//             loggedIn: true,
//             username: response.data.username,
//           });
//           // update the state to redirect to home
//           this.setState({
//             redirectTo: "/",
//           });
//         }
//       })
//       .catch((error) => {
//         console.log("login error: ");
//         console.log(error);
//       });
//   }
