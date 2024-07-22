'use client'

import Image from "next/image";
import React, { useEffect, useState } from 'react';
import { getSample } from '../services/api';

export default function Home() {
  const [submitT, setSubmitT] = useState('');
  const [submitTime, setSubmitTime] = useState(0);
  const [returnT, setReturnT] = useState('');
  const [returnTime, setReturnTime] = useState(0);
  const [currentHour, setCurrentHourTime] = useState<string>('');
  const [currentDate, setCurrentHourDate] = useState<string>('');

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: any) => {
    const value = event.target.value;

    // Validate if the input is a number (using regex)
    if (/^\d*$/.test(value)) {
      setInputValue(value); // Update state if it's a number
    }
  };

  const fetchData = async () => {
      try {
        debugger
        const data = await getSample();
        return data
      } catch (error) {
        console.error('Error fetching data', error);
        return null
      }
  };

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const result = await fetchData();
      if (result) {
        setSubmitT(result.submit);
        setSubmitTime(result.submitTime);
        setReturnT(result.return);
        setReturnTime(result.returnTime);
          onClickSearch();
      }
    }, 60000 * 3); // Call the API every 60 seconds

    // Fetch data immediately on component mount
    fetchData().then(result => {
      if (result) {
        setSubmitT(result.submit);
        setSubmitTime(result.submitTime);
        setReturnT(result.return);
        setReturnTime(result.returnTime);
          onClickSearch();
      }
    });

    return () => clearInterval(intervalId);
  }, []);

  const onClickSearch = () => {
    if(inputValue == null || inputValue == ''){
      return
    }
    let now = submitTime
    let res = isCurrentTimeInWorkTime()
    if (!res) {
      alert("Hệ thống không trong giờ làm việc vui lòng thử lại sau\n- Thời gian làm việc từ thứ 2 - thứ 6.\n(sáng: 7:30-12:00, chiều: 13:00-16:30)")
      return
    }
  
    if (inputValue.startsWith("1")) {
      let num = parseInt(inputValue) - parseInt(submitT)
      if (num >= 0) {
        let newTime = now + (num * 15 * 60000)
        let value = handleConvert(newTime)
        if(value == 'error') return;
        let value2 = handleConvertDate(newTime)
        setCurrentHourTime(value)
        setCurrentHourDate(value2)
      }else{
        alert("Vui lòng nhập số lớn hơn số Nợp Hồ Sơ")
      }
    }

    if (inputValue.startsWith("2")) {
      let num = parseInt(inputValue) - parseInt(returnT)
      if (num >= 0) {
        let newTime = now + (num * 15 * 60000)
        let value = handleConvert(newTime)
        if(value == 'error') return;
        let value2 = handleConvertDate(newTime)
        setCurrentHourTime(value)
        setCurrentHourDate(value2)
      }else{
        alert("Vui lòng nhập số lớn hơn số Trả Kết Quả")
      }
    }
  };

  function isCurrentTimeInWorkTime(): boolean {
    const now = new Date();

    // Define work start and end times (example: 8:00 AM to 5:00 PM)
    const startWorkTime = new Date();
    startWorkTime.setHours(7, 30, 0); // 8:00 AM
    const endWorkTime = new Date();
    endWorkTime.setHours(16, 30, 0); // 5:00 PM

    // Check if current time is within work hours
    return now >= startWorkTime && now <= endWorkTime;
  }


  const handleConvert = (intValue: number):string => {
    var now = new Date(intValue);
    // Output the date in UTC (optional step)

    var hour = now.getUTCHours();
    var min = now.getUTCMinutes()
    if(hour > 16 || (hour == 16 && min > 30)){
      alert("Số bạn nhập quá lớn vui lòng thử lại!")
      return 'error'
    }
    if(hour < 7 || (hour == 7 && min < 30)){
      alert("Số bạn nhập quá lớn vui lòng thử lại!")
      return 'error'
    }
    const minutesStr = String(min).padStart(2, '0');
    if (now.getUTCHours() == 12 && min > 0) {
      hour += 1
    }
    const hours = String(hour).padStart(2, '0');

    return hours + ":" + minutesStr;
  };

  const handleConvertDate = (intValue: number) => {
    var now = new Date(intValue);
    const dayOfWeek = now.getUTCDay() == 0 ? "Chủ Nhật" : "Thứ " + (now.getUTCDay() + 1)
    const month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so we add 1
    const day = String(now.getUTCDate()).padStart(2, '0');
    return dayOfWeek + ", " + day + " Tháng " + month;
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-white">
      <header className="z-10 w-full items-center bg-hero-pattern bg-center">
        <nav className="max-w-5xl mx-auto items-center justify-between py-3" aria-label="Global">
          <div className="px-2 flex lg:flex-1">
            <div className="flex">
              <img className="h-12 w-auto mr-4" src="/logo_white.svg" alt="" />
              <div>
                <p className="font-bold text-white">GIAO DỊCH ĐIỆN TỬ</p>
                <p className="font-bold text-xl text-white drop-shadow">BẢO HIỂM XÃ HỘI QUẬN 7</p>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="z-10 w-full items-center bg-gray-100">
        <div className="max-w-5xl mx-auto items-center">
          <button className="px-2 text-gray-400 text-xs py-1"> Tra cứu </button>
        </div>
      </div>

      <div className="bg-white w-full items-center justify-between mt-4 px-4">
        <div className="shadow-md mx-auto bg-gray-50 max-w-md rounded">
          <div className="grid grid-cols-2  divide-x text-white bg-gray-500 rounded-t">
            <div className="p-3 text-center">
              <span>Nợp hồ sơ: </span>
              <span className="font-bold ">{submitT}</span>
            </div>
            <div className="p-3 text-center">
              <span>Trả kết quả: </span>
              <span className="font-bold ">{returnT}</span>
            </div>

          </div>
          <div className="p-6">
            <input type="text" id="success" className="bg-gray-50 border-b text-green-900 block w-full py-2.5"
              placeholder="Nhập STT của bạn"
              value={inputValue}
              onChange={handleInputChange} />
            <button type="submit" className="w-full mt-2 text-white bg-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3"
              onClick={onClickSearch}>Tra cứu</button>
          </div>
          <div className="flex divide-x border-t border-gray-150">
            <div className="m-auto p-6">
              <p className="text-gray-500 font-bold">Thời gian ước tính</p>
              <p className="text-8xl font-bold text-sky-700">{currentHour}</p>
              <p className="text-xs text-gray-400">{currentDate}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full items-center justify-between mt-4 px-4">
        <div className="flex mx-auto max-w-md rounded text-xs italic text-gray-400">
          <div className="mr-1">* Lưu ý: </div>
          <div>
            <p>Thời gian làm việc từ thứ 2 - thứ 6.</p>
            <p>(sáng: 7:30-12:00, chiều: 13:00-16:30)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
