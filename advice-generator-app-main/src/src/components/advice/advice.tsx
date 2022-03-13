import React, { ReactChild, useEffect, useState } from 'react';
import { ApiResponse, GetAdvice } from './apicall';
import styles from './advice.module.scss';
import { useMediaPredicate } from 'react-media-hook';
import { ReactComponent as DesktopDivider } from '../../images/pattern-divider-desktop.svg';
import { ReactComponent as MobileDivider } from '../../images/pattern-divider-mobile.svg';
import { ReactComponent as Dice } from '../../images/icon-dice.svg';

export const Advice = () => {
  const [advice, setAdivce] = useState<ApiResponse | null>(null);

  const desktop = useMediaPredicate('(min-width: 357px)');

  useEffect(() => {
    const callApi = async () => {
      const response = await GetAdvice();
      setAdivce(response);
    };
    callApi();
  }, []);

  return (
    <div className={styles.advice}>
      {advice && (
        <>
          <span>Advice #{advice.id}</span>
          <p>"{advice.message}"</p>
          {desktop ? (
            <DesktopDivider className={styles.divider} />
          ) : (
            <MobileDivider className={styles.divider} />
          )}
          <div className={styles.dice}>
            <Dice />
          </div>
        </>
      )}
    </div>
  );
};
