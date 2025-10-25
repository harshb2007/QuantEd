"""
PROJECT-10 — Daily Returns & Volatility — minimal example snippet (placeholder)
Replace with your actual code or a distilled demo.
"""
import numpy as np
import pandas as pd

def demo_signal(returns, lookback=20):
    ma = returns.rolling(lookback).mean()
    signal = (ma > 0).astype(int) - (ma <= 0).astype(int)
    return signal.fillna(0)

if __name__ == "__main__":
    idx = pd.date_range('2020-01-01', periods=200)
    r = pd.Series(np.random.randn(200)/100, index=idx)
    sig = demo_signal(r)
    print(sig.tail())