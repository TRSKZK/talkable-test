import {createColumnHelper} from "@tanstack/react-table";
import {Referral} from "./tableData";
import {ReferralEventRender} from "../referralEventsHelper";
import {AdvocateFriendHelper} from "../advocateFriendHelper";
import {ReferralStatus} from "../referralStatus";
import React from "react";

export const columnHelper = createColumnHelper<Referral>()
export const columns = [
  columnHelper.accessor(row => row.referralEvent, {
    header: 'Referral Event',
    cell: info => {
      const amount = info.getValue().amount
      const date = info.getValue().date
      return <ReferralEventRender amount={amount} date={date}/>
    },
  }),
  columnHelper.accessor('advocate', {
    header: 'Advocate',
    cell: info => <AdvocateFriendHelper email={info.getValue()} person={'Advocate'}/>,
  }),
  columnHelper.accessor('friend', {
    header: 'Friend',
    cell: info => <AdvocateFriendHelper email={info.getValue()} person={'Friend'}/>,

  }),
  columnHelper.accessor('referralStatus', {
    header: 'Referral Status',
    cell: info => <ReferralStatus status={info.getValue()}/>,
  }),
]