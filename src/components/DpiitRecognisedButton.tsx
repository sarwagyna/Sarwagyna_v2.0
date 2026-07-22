'use client';

import type { CSSProperties } from 'react';
import styled from 'styled-components';

const LABEL = 'DPIIT RECOGNISED ';
const CHAR_DEG = 360 / LABEL.length;

const DpiitRecognisedButton = () => {
  return (
    <StyledWrapper>
      <button type="button" className="button" aria-label="DPIIT Recognised">
        <p className="button__text" aria-hidden="true">
          {LABEL.split('').map((char, index) => (
            <span
              key={`${char}-${index}`}
              style={{ '--index': index } as CSSProperties}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>
        <div className="button__circle">
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon"
            width={14}
            aria-hidden="true"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 14 15"
            fill="none"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon button__icon--copy"
            aria-hidden="true"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    cursor: default;
    border: none;
    background: #0d1f1a;
    color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition:
      background 300ms,
      transform 200ms;
    font-weight: 600;
    font-size: 10px;
    letter-spacing: 0.02em;
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: text-rotation 8s linear infinite;
    margin: 0;

    > span {
      position: absolute;
      transform: rotate(calc(${CHAR_DEG}deg * var(--index)));
      inset: 7px;
    }
  }

  .button__circle {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: #fff;
    color: #0d1f1a;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  .button:hover {
    background: #000;
    transform: scale(1.05);
    cursor: pointer;
  }

  .button:hover .button__icon {
    color: #000;
  }

  .button:hover .button__icon:first-child {
    transition: transform 0.3s ease-in-out;
    transform: translate(150%, -150%);
  }

  .button:hover .button__icon--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }
`;

export default DpiitRecognisedButton;
