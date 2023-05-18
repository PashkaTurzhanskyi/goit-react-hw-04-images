import React from 'react';
import { Oval } from 'react-loader-spinner';

export const Loader = () => (
  <div>
    <Oval
      height={400}
      width={400}
      color="#4fa94d"
      wrapperStyle={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  </div>
);
