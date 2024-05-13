import React from 'react'; // Make sure to import React
import Signup from './Signup';
import LoginWithGoogle from './LoginWithGoogle';

export default function Page() { // Capitalize component name
  return (
    <div> {/* Wrap components in a parent element */}
      <Signup />
      <LoginWithGoogle />
    </div>
  );
}
