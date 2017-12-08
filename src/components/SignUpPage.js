import React from 'react';

import SignUp from './SignUp';

export default function SignUpPage({ onSignUp, userInfo, history, errorMsg }) {
  return (
    <div className="LogInPage">
      <SignUp
        userInfo={userInfo}
        onSignUp={onSignUp}
        history={history}
        errorMsg={errorMsg}
      />
    </div>
  );
}
