'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';

export default function Page() {
  const [openState, setOpenState] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button variant={'outline'} onClick={() => setOpenState(true)}>
        Open
      </Button>
      <Sheet open={openState} onOpenChange={(value) => setOpenState(value)}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
