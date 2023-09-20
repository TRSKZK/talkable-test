import React from "react";
import './referralEventsRender.css'

export interface ReferralEventProps {
  amount: string
  date: string
}

export const ReferralEventRender: React.FC<ReferralEventProps> = ({amount, date}) => {
  return <div className='referral-container'>
    <div className='purchase'>Purchase</div>
    <div className='date'>{date}</div>
    <div className='amount'>{amount}</div>
  </div>
}