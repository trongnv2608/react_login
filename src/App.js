import React, { useState } from "react";
import LoginForm from './components/LoginForm';


function App() {
  const adminUser = {
    email: "trong@email.com",
    password: "a123"
    
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        email: details.email      
      });
    } else  {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    setUser({email: ""});
    
  }

  return (  
    <div className="App">
      {(user.email != "") ? (
        <div className="welcome">
        
          <h1>Danh sách động vật</h1>
          <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>image</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>cat</td>
                  <td>
                  <img src="data:image/jpeg;base64,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" alt="" />
                  </td>
                </tr>
                  <td>2</td>
                  <td>mouse</td>
                  <td>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8D4K7jd5Uhvm-PEhmDEoU2k3W6ZcUA-X0w&usqp=CAU" alt="" />
                  </td>
            </tbody>
        </table>
        
        <button onClick={Logout}>Logout</button>
        </div>     
      ) : (
        <LoginForm Login={Login} error={error} />      
      )}
    </div>
  );

}
export default App;
