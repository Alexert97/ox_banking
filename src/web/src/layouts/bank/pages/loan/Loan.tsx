import React from 'react';
import BaseCard from '@/layouts/bank/components/BaseCard';
import LoanButton from '@/layouts/bank/pages/loan/components/LoanButton';
import locales from '@/locales';
import { Landmark, ReceiptText, Repeat, ScanText, Wallet } from 'lucide-react';

interface Loan {
  amount: number;
  label: string;
  id: number;
  dueDate: number;
  paidAt?: number;
  status: 'paid' | 'unpaid' | 'overdue';
}

const loans: Loan[] = [
  { amount: 1000, label: 'Car Loan', id: 1, dueDate: Date.now(), status: 'unpaid' },
  { amount: 5000, label: 'Home Loan', id: 2, dueDate: Date.now(), paidAt: Date.now(), status: 'paid' },
  { amount: 2000, label: 'Personal Loan', id: 3, dueDate: Date.now(), status: 'overdue' },
];

const Loan: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col gap-2 p-2">
      <BaseCard title="Loan Management" icon={ScanText} className="flex w-full">
          <div className="flex h-full flex-col gap-2 w-full" >
              <LoanButton
              label={locales.loan1}
              icon={Wallet}
              /*disabled={!hasPermission('withdraw', account.role)}
              onClick={() =>
                  modal.open({
                  title: locales.withdraw,
                  children: <DepositWithdrawModal account={account} />,
                  })
              }*/
              />
              <LoanButton
              label={locales.loan2}
              icon={Landmark}
              /*disabled={!hasPermission('deposit', account.role)}
              onClick={() =>
                  modal.open({
                  title: locales.deposit,
                  //children: <DepositWithdrawModal account={account} isDeposit={true} />,
                  })
              }*/
              />
              <LoanButton
              label={locales.loan3}
              icon={Repeat}
              /*disabled={!hasPermission('withdraw', account.role)}
              onClick={() => modal.open({ title: locales.transfer, children: <TransferModal account={account} /> })}*/
              />
              <LoanButton
              /*onClick={() => navigate(`/accounts/invoices/${account.id}`)}
              //disabled={!hasPermission('manageAccount', account.role)}*/
              label={locales.loan4}
              icon={ReceiptText}
              />
          </div>
      </BaseCard>
    </div>
  );
};

export default Loan;