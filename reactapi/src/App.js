import React, { useState } from 'react'
import Machine from './Machine'
import InputCoin from './InputCoin'


export default function App() {
  const [coin, setCoin] = useState(0)

  const onCoinChanged = total => {
    setCoin(total);
  };

  const onOk = price => {
    setCoin(coin - price);
  };

  return (
    <div className="mt-5">
      <div className="card bg-primary m-auto text-center container border border-dark" style={{ width: "800px", height: "800px" }}>
        <div className="row">
          <div className="col">
            <Machine coin={coin} onOk={onOk} />
          </div>
          <div className="mt-4">
            <InputCoin coin={coin} onCoinChanged={onCoinChanged} />
          </div>
        </div>
      </div>
    </div>
  )
}

