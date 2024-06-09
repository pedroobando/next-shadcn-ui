import { Button } from '@/components/ui/button';
import { ChevronUpIcon, EnvelopeOpenIcon, ReloadIcon } from '@radix-ui/react-icons';
export default function Page() {
  return (
    <>
      <h2 className="text-emerald-500 font-semibold text-3xl">Button Page</h2>
      <div className="grid grid-cols-5 gap-2 mt-10">
        <Button>Default</Button>
        <Button capitalize variant="secondary">
          secondary
        </Button>
        <Button capitalize variant="destructive">
          destructive
        </Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
        <Button disabled>Disable</Button>
        <Button variant="icon">
          <ChevronUpIcon className="h-4 w-4" />
        </Button>
        <Button>
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button disabled>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div>
    </>
  );
}
