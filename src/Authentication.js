import React from 'react'
import Amplify from 'aws-amplify';
import awsconfi from './aws-exports';
import { AmplifySignOut,withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsgconfi)
const Authentication = () => {
  return (
    <div>
      <AmplifySignOut/>
      <h1>App content</h1>
    </div>
  )
}

export default withAuthenticator( Authentication);
