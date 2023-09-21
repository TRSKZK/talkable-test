import React from 'react';
import './advocateFriendHelper.css';

interface AdvocateFriendHelperProps {
  email: string
  person: string
}

const formatEmail = (email: string): string => {
  if (email.length > 18) {
    return email.slice(0, 18) + '...'
  }
  return email
}

export const AdvocateFriendHelper: React.FC<AdvocateFriendHelperProps> = ({email, person}) => <div
  className='advocate-container'>
  <div className='email'>{formatEmail(email)}</div>
  <div className='advocate'>{person}</div>
</div>