import './App.css';
function App() {
  return (
    <div className='login-form'>
      <form className='form'>
      <h1>BHM Hackathon
      </h1>
      <div className='form-inputs'>
        <label htmlFor='username'
        className='form-label'>
        Username
        </label>
        <input
        id='username'
        type='text' name='username'
        className='form-input'
        placeholder="Username"/>
        </div>
          <div className='form-inputs'>
            <label htmlFor='Password'
            className='form-label'>
            Password
            </label>
            <input
            id='password'
            type='password' name='password'
            className='form-input'
            placeholder="Password"/>
            </div>
              <button className='form-input-btn' type='submit'>
              Login 
              </button>
      </form>
    </div>

  );
}

export default App;
