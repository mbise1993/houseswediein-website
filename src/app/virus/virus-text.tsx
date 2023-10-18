'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface VirusTextProps {
  className?: string;
  children: React.ReactNode;
}

export const VirusText = ({ className, children }: VirusTextProps) => {
  const router = useRouter();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isFinished, setIsFinished] = React.useState(false);

  React.useEffect(() => {
    if (containerRef.current) {
      runVirus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Taken from http://www.mf2fm.com/rv/dhtmlvirus.php
   */
  function runVirus() {
    let delay = 1; // seconds until attack starts
    let seconds = 10; // seconds until attack complete (from start)

    /***************************\
  * Mock-Virus Text Effect  *
  * (c) 2005 mf2fm web-design *
  * http://www.mf2fm.com/rv  *
  * DON'T EDIT BELOW THIS BOX *
  \***************************/
    let colors = new Array('#0f0', '#090', '#6f6', '#cfc', 'transparent');
    let elems = new Array();
    let chars = new Array();
    let elmax = 0;
    let chmax = 0;
    let i, j, txt, parent, span, words;

    const rootEl = containerRef.current!;
    getAllText(rootEl);

    for (i = 0; i < elmax; i++) {
      txt = elems[i].nodeValue;
      parent = elems[i].parentNode;
      words = elems[i].nodeValue.split(' ');
      for (j = 0; j < words.length; j++) {
        span = document.createElement('span');
        span.appendChild(document.createTextNode(words[j]));
        parent.insertBefore(span, elems[i]);
        if (j != words.length - 1) {
          parent.insertBefore(document.createTextNode(' '), elems[i]);
        }

        chars[chmax++] = span;
      }
      parent.removeChild(elems[i]);
    }

    virus();

    function virus() {
      let t: number;
      for (let i = 0; i < chmax; i++) {
        t = 1000 * (delay + seconds * Math.random());
        for (let j = 0; j < colors.length; j++) {
          const colorIdx = j;
          setTimeout(
            () => {
              chars[i].style.backgroundColor = colors[colorIdx];
            },
            t + 100 * j,
          );
        }

        setTimeout(() => {
          chars[i].style.visibility = 'hidden';
        }, t + 100);
      }

      setTimeout(
        () => {
          rootEl.style.cursor = 'pointer';
          rootEl.addEventListener('click', () => {
            router.replace('/');
          });

          setIsFinished(true);
        },
        1000 * (delay + seconds),
      );
    }

    function getAllText(el: Node) {
      if (el.nodeType == 3 && !el.nodeValue?.match(/^\s+$/)) {
        elems[elmax++] = el;
      }

      if (!el.childNodes.length) {
        return;
      } else
        for (let i = 0; i < el.childNodes.length; i++) {
          getAllText(el.childNodes[i]);
        }
    }
  }

  return (
    <div ref={containerRef} className={className}>
      {isFinished ? (
        <div className="flex flex-col items-center justify-center gap-8">
          <img alt="Online now" src="/images/online-now.gif" />
          <img
            className="w-[120px]"
            alt="Dolphin"
            src="/images/black-cat.gif"
          />
          <img className="w-[150px]" alt="Turtle" src="/images/turtle.gif" />
        </div>
      ) : (
        children
      )}
    </div>
  );
};
