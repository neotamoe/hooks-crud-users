import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
      setUser(props.currentUser)
  }, [props]);

  /*
    Note from the tutorial:
    In the Effect Hook, we create a callback function that updates the 
    user state with the new prop thats being sent through. Before, we 
    needed to compare if (prevProps.currentUser !== this.state.currentUser), 
    but with the Effect Hook we can just pass [props] through to let it 
    know we're watching props.

    Using the [props] array is similar to using componentDidUpdate. 
    If you're doing a one-time event like componentDidMount, 
    you can pass an empty array ([]) instead.
*/

    return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm