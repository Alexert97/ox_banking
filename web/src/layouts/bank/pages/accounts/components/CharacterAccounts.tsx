import React from 'react';
import { ChevronLeft, ChevronRight, CreditCard, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CreateAccountModal from '@/layouts/bank/pages/accounts/modals/CreateAccountModal';
import AccountCard from '@/layouts/bank/pages/accounts/components/AccountCard';
import BaseCard from '@/layouts/bank/components/BaseCard';
import { useModal } from '@/components/ModalsProvider';
import { useAccounts, useActiveAccountId } from '@/state/accounts/accounts';
import { cn } from '@/lib/utils';
import locales from '@/locales';

const CharacterAccounts: React.FC = () => {
  const modal = useModal();
  const activeAccountId = useActiveAccountId();
  const accountsData = useAccounts();
  const [page, setPage] = React.useState(0);

  const MAX_ITEMS = React.useMemo(() => (page === 0 ? 3 : 4), [page]);

  return (
    <BaseCard title={locales.accounts} icon={CreditCard} className="overflow-visible">
      <div className="flex w-full items-center justify-center gap-4">
        <Button size="icon" className="rounded-full" disabled={page === 0} onClick={() => setPage((prev) => --prev)}>
          <ChevronLeft />
        </Button>
        <div className="flex flex-1 justify-start gap-4">
          {page === 0 && (
            <div
              onClick={() =>
                modal.open({
                  title: locales.create_account,
                  children: <CreateAccountModal />,
                })
              }
              className="flex w-[250px] flex-col items-center justify-center rounded-lg border border-dashed bg-background p-4 shadow transition-all hover:-translate-y-1 hover:scale-105 hover:cursor-pointer hover:bg-secondary"
            >
              <Plus />
            </div>
          )}
          {accountsData.accounts
            .slice(page * (MAX_ITEMS === 3 ? MAX_ITEMS : MAX_ITEMS - 1), page * MAX_ITEMS + MAX_ITEMS)
            .map((account) => (
              <AccountCard key={account.id} account={account} active={account.id === activeAccountId} />
            ))}
        </div>
        <Button
          size="icon"
          className="rounded-full"
          disabled={page + 1 >= accountsData.numberOfPages}
          onClick={() => setPage((prev) => ++prev)}
        >
          <ChevronRight />
        </Button>
      </div>
      <div className="flex w-full items-center justify-center gap-2">
        {[...Array(accountsData.numberOfPages)].map((_, index) => (
          <div
            key={index}
            className={cn(
              'h-[5px] w-[5px] rounded-full bg-muted transition-colors duration-500',
              page === index && 'bg-primary'
            )}
          />
        ))}
      </div>
    </BaseCard>
  );
};

export default CharacterAccounts;
