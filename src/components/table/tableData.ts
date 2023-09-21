interface ReferralEvent {
  date: string
  amount: string
}

export enum ReferralStatus {
  Pending = 'Pending',
  Approved = 'Approved',
  Flagged = 'Flagged',
  Blocked = 'Blocked',
  Voided = 'Voided',
}

export interface Referral {
  referralEvent: ReferralEvent
  advocate: string
  friend: string
  referralStatus: ReferralStatus
}

export const defaultData: Referral[] = [
  {
    referralEvent: {
      date: '06/17/2020 at 7:13 PM PDT',
      amount: '$120.00',
    },
    advocate: 'autouser23926@gmail.com',
    friend: 'fr58272@gmail.com',
    referralStatus: ReferralStatus.Pending,
  },
  {
    referralEvent: {
      date: '07/10/2020 at 4:05 AM PDT',
      amount: '$100.00',
    },
    advocate: 'ad0379118142@gmail.com',
    friend: 'fr0379118142@gmail.com',
    referralStatus: ReferralStatus.Flagged,
  },
  {
    referralEvent: {
      date: '06/09/2020 at 12:42 PM PDT',
      amount: '$28.00',
    },
    advocate: 'ad569991@gmail.com',
    friend: 'fr94250@gmail.com',
    referralStatus: ReferralStatus.Approved,
  },
  {
    referralEvent: {
      date: '08/07/2020 at 4:20 PM PDT',
      amount: '$100.00',
    },
    advocate: 'user.to.be.blocked92187@gmail.com',
    friend: 'user.to.be.blocked2682@gmail.com',
    referralStatus: ReferralStatus.Blocked,
  },

  {
    referralEvent: {
      date: '06/09/2020 at 2:08 PM PDT',
      amount: '$100.00',
    },
    advocate: 'ad0693677382@gmail.com',
    friend: 'fr0693677382@gmail.com',
    referralStatus: ReferralStatus.Voided,
  },
]

