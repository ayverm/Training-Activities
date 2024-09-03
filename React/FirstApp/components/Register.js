function Register() {
    return (
        <div>
            <h3 className="text-center">Register Form</h3>
          <div className="mb-3 row">
            <label for="staticEmail" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="staticName" />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="staticEmail" />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="inputPassword" />
            </div>
          </div>
            <button className="btn btn-primary">Register</button>
        </div>
      );
}

export default Register;
