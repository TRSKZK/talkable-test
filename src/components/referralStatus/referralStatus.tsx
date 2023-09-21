import React from 'react';
import {ReferralStatus as Ref} from "../table/tableData";
import './referralStatus.css'

interface ReferralStatusProps {
  status: Ref
}

export const ReferralStatus: React.FC<ReferralStatusProps> = ({status}) => {
  const remarkToRender = (status: Ref) => {
    if (status === Ref.Pending || status === Ref.Approved) {
      return <div className='remark'>Passed fraud checks</div>
    }
    return <div className='remark fraud'>Marked as fraud</div>
  }
  return <div className='referral-container'>
    <div className='status'>{status}</div>
    {remarkToRender(status)}
  </div>
}