import React from 'react';

const AddUser = () => {
    const handleAddUser = event=> {
        event.preventDefault();
       const name =event.target.name.value;
       const email = event.target.email.value;

       const user = {name, email};
      // send data to server
      fetch('http://localhost:5000/user' ,{
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data => {
          console.log('success', data);
          alert('successfully sent')
          event.target.reset();
      })
    }
    return (
        <div>
            <h2>This is a new user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id=""  required/>
                <input type="email" name="email" id=""  required/>
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default AddUser;