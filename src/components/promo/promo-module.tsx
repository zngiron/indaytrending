/*

- This will be a popup
- Show up 1 minute after the page loads.
- Winning rate is 1/5000
- This should trigger to save ip address and random uuid to database
- This should produce a qr code that will be read by the backend to verify the ip address and uuid
- This should have a button to close the popup
- Use Shadcn/UI and TailwindCSS for styling
- Instruct user to screenshot the qr code and send it to facebook message
- IP address should only win once per 30 days
- For Development purposes, show in 5 seconds 100% of the time
- I want a button to screenshot this component

*/

'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { QRCode } from 'react-qrcode-logo';
import { v4 as uuidv4 } from 'uuid';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { env } from '@/library/environment';
import { cn } from '@/library/utilities';

interface PromoModuleProps {
  onCallBack?: () => void;
}

export function PromoModule({ onCallBack }: PromoModuleProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();

  const [open, setOpen] = useState(false);
  const uuid = uuidv4();
  useEffect(() => {
    const random = Math.floor(Math.random() * 10000);
    if (random === 0) {
      setTimeout(() => {
        setOpen(true);
      }, 30000);
    }
  }, []);

  return (
    <>
      {open && <Confetti width={width} height={height} />}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent
          className={cn(
            'border-none rounded-3xl pb-12',
            'bg-background/90 backdrop-blur-lg',
            'sm:rounded-3xl',
          )}
        >
          <div
            className={cn(
              'absolute z-10 -top-20 left-1/2',
              'flex flex-col items-center',
              '-translate-x-1/2',
            )}
          >
            <Image
              src="/static/indaytrending-icon.png"
              width={160}
              height={160}
              draggable={false}
              alt="Inday Trending"
            />
            <Image
              className="dark:hidden"
              src="/static/indaytrending-logo-light.svg"
              width={160}
              height={80}
              alt="Inday Trending"
              draggable={false}
              priority
            />
            <Image
              className="hidden dark:inline"
              src="/static/indaytrending-logo-dark.svg"
              width={160}
              height={80}
              alt="Inday Trending"
              draggable={false}
              priority
            />
          </div>
          <AlertDialogHeader className="sm:text-center pt-32">
            <AlertDialogTitle className="text-2xl">
              Ikaw ang maswerteng nanalo!
            </AlertDialogTitle>
            <AlertDialogDescription className="font-semibold">
              I-save ang screenshot ng QR code na ito at i-send ito sa aking
              Facebook Page upang ma-claim ang iyong premyo!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex items-center justify-center" ref={contentRef}>
            <div className="overflow-hidden relative rounded-2xl">
              <QRCode
                value={`${env.DOMAIN}/campaign/${uuid}`}
                logoImage="/static/indaytrending-icon.png"
                logoWidth={80}
                logoHeight={80}
                size={240}
                eyeRadius={4}
                qrStyle="dots"
                fgColor="#0f172a"
              />
            </div>
          </div>
          <AlertDialogFooter
            className={cn('flex-row justify-center', 'sm:justify-center')}
          >
            <Button className="flex items-center gap-2 w-fit ">
              <Image
                src="/static/facebook-icon.svg"
                alt="Facebook"
                width={16}
                height={16}
              />
              <a href="https://m.me/indaytrending" target="_blank">
                Send To Inday Trending
              </a>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
