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

import { createCampaign, getIpAddress } from '@/data/campaign';
import { useParams } from 'next/navigation';

export function PromoModule() {
  const params = useParams();
  const contentRef = useRef<HTMLDivElement>(null);
  const { width, height } = useWindowSize();

  const [open, setOpen] = useState(false);
  const [uuid] = useState(() => uuidv4());

  const onCreateCampaign = async () => {
    window.anymindTS.dispose();

    const { ip } = await getIpAddress();
    const { slug } = await params;

    await createCampaign({ ip, uuid, url: `${slug}` });
  };

  useEffect(() => {
    const random = Math.floor(Math.random() * 10000);
    if (random === 0) {
      setTimeout(() => {
        onCreateCampaign();
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
