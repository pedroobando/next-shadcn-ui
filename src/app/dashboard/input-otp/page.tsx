'use client';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useState } from 'react';

export default function Page() {
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-col items-center  space-y-4">
      <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>

      <div className="text-center text-sm">
        {value === '' ? <>Enter your one-time password.</> : <>You entered: {value}</>}
      </div>
    </div>
  );
}
