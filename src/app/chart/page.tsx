"use client";
import { useSelector, useDispatch } from 'react-redux';
import { setData, resetData } from '@/lib/features/chartSlice';
import ReactECharts from 'echarts-for-react';

interface RootState {
  setData: {
    data: number[];
  };
}

export default function ChartPage() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.setData.data);
  const handleResetClick = () => {
    dispatch(resetData());
  };

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data,
        type: 'line',
        smooth: true,
      },
    ],
  };

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newData = event.target.value.split(',').map(Number);
    dispatch(setData(newData));
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1 1 0' }}>
        <ReactECharts option={option} />
      </div>
      <div style={{ flex: '1 1 0' }}>
        <form>
          <label>
            Data:
            <input type="text" value={data.join(',')} onChange={handleDataChange} />
          </label>
          <button type="button" onClick={handleResetClick}>Reset</button>
        </form>
      </div>
    </div>
  );
}