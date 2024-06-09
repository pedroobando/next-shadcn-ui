'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { FC } from 'react';

const SimpleCard: FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-blue-600 text-xl">Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="flex justify-around">
        <Button variant={'info'} className="w-5/12">
          Info
        </Button>
        <Button variant={'outline'} className="w-5/12">
          Continue
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {'123456789'.split('').map((item, idx) => (
        <SimpleCard key={idx} />
      ))}

      <Card className="col-span-1 sm:col-span-3">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
