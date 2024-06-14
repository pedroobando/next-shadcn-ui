import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

import React from 'react';

const loading = () => {
  const data = '123456789'.split('');

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex-row">
            <Skeleton className="rounded-full mr-2 w-10 h-10" />

            <div className="flex flex-col flex-grow">
              <Skeleton className="h-4 w-1/2 mb-2 " />
              <Skeleton className="h-3 w-full" />
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
            <Skeleton className="h-8 w-1/5 mb-2" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default loading;
