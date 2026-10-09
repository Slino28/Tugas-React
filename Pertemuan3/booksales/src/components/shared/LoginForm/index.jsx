import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ mode = 'login', onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLogin = mode === 'login';
  const title = isLogin ? 'Login' : 'Register';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <div
        className="card shadow-lg p-4 border-0 rounded-4"
        style={{ maxWidth: '400px', width: '100%', backgroundColor: '#f8f9fa' }}
      >
        <h2 className="text-center fw-bold mb-4">{title}</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control form-control-lg fs-6"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg fs-6"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 fs-6 fw-semibold mb-3"
          >
            {title}
          </button>
        </form>

        <hr className="my-3 text-secondary opacity-25" />

        <div className="text-start">
          <p className="fw-bold mb-3 fs-6">Or use a third-party</p>
          <div className="d-grid gap-2 mb-3">
            <button
              className="btn btn-outline-secondary text-secondary bg-white text-center py-2 fs-6"
              type="button"
            >
              {title} with Twitter
            </button>
            <button
              className="btn btn-outline-primary text-primary bg-white text-center py-2 fs-6"
              type="button"
            >
              {title} with Facebook
            </button>
            <button
              className="btn btn-outline-secondary text-secondary bg-white text-center py-2 fs-6"
              type="button"
            >
              {title} with GitHub
            </button>
          </div>

          <p className="small text-secondary mb-0">
            {isLogin ? (
              <>
                Don't have an account yet?{' '}
                <Link
                  to="/register"
                  className="text-primary text-decoration-none fw-semibold"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-primary text-decoration-none fw-semibold"
                >
                  Login
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;