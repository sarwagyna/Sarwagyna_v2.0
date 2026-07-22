import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const baseClasses =
  'uiverse-cta font-sans inline-flex justify-center gap-2 items-center w-full sm:w-fit min-w-0 shadow-md text-[15px] font-semibold relative z-10 px-5 py-2.5 overflow-hidden border rounded-full group no-underline whitespace-nowrap';

const variantClasses = {
  primary:
    'text-gray-50 bg-black border-white/90 backdrop-blur-md',
  secondary:
    'cta-secondary text-text bg-button-outline border-button-outline hover:border-[#CBD5D0] shadow-sm before:bg-black',
} as const;

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variantClasses;
};

type LinkProps = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export type CtaButtonProps = LinkProps | ButtonProps;

function ButtonInner({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: keyof typeof variantClasses;
}) {
  const iconClass =
    variant === 'primary'
      ? 'bg-gray-50 border-gray-700 group-hover:bg-gray-50'
      : 'bg-black border-black group-hover:bg-white';
  const pathClass =
    variant === 'primary'
      ? 'fill-gray-800 group-hover:fill-gray-800'
      : 'fill-white group-hover:fill-black';

  return (
    <>
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 19"
        className={cn(
          'w-6 h-6 shrink-0 justify-end text-gray-50 ease-linear duration-300 rounded-full border p-1.5 rotate-45 group-hover:rotate-90',
          iconClass
        )}
      >
        <path
          className={pathClass}
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
        />
      </svg>
    </>
  );
}

export default function CtaButton({
  children,
  className,
  variant = 'primary',
  ...props
}: CtaButtonProps) {
  const classes = cn(baseClasses, variantClasses[variant], className);
  const content = <ButtonInner variant={variant}>{children}</ButtonInner>;

  if ('href' in props && props.href) {
    const isExternal =
      props.href.startsWith('http') ||
      props.href.startsWith('mailto:') ||
      props.href.startsWith('tel:');

    if (isExternal) {
      const isHttp = props.href.startsWith('http');
      return (
        <a
          href={props.href}
          className={classes}
          {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={props.href} className={classes}>
        {content}
      </Link>
    );
  }

  const { onClick, type = 'button', disabled } = props as ButtonProps;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
