import React from "react";
import Axios from "axios";
import Footer from "./Footer";

class LiveApi extends React.Component {
  state = { newData: [] };
  componentDidMount() {
    const URL = "https://jsonplaceholder.typicode.com/comments";
    Axios.get(URL).then((res) => {
      this.setState({ newData: res.data });
      console.log(res.data);
    });
  }
  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Post Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          {this.state.newData.map((data) => {
            return (
              <tbody key={data.id}>
                <tr>
                  <th>{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
        <Footer />
      </>
    );
  }
}

export default LiveApi;

// import React, { useEffect, useState } from "react";

// function LiveApi() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:9200/login-users").then((result) => {
//       result.json().then((resp) => {
//         // console.log("result", resp);
//         setData(resp);
//       });
//     });
//   }, []);
//   console.log(data);
//   return (
//     <div className="Liveapi">
//       <table>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Email</th>
//             <th>Password</th>
//           </tr>
//         </thead>
//         {data.map((item) => {
//           return (
//             <tbody key={item.id}>
//               <tr>
//                 <th>{item.id}</th>
//                 <td>{item.email}</td>
//                 <td>{item.password}</td>
//               </tr>
//             </tbody>
//           );
//         })}
//       </table>
//     </div>
//   );
// }

// export default LiveApi;
