const UserProfile = () => {
  return (
    <div>
      {/* display info */}
      <div>
        <h1>User Profile</h1>

        <form>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>{" "}
          <div>
            <label>Age</label>
            <input type="number" />
          </div>{" "}
          <div>
            <label>Password</label>
            <input type="password" />
          </div>{" "}
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
