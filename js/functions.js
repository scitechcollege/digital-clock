$(function() {

  // ページが読込み時に時間を設定
  setTime();

  setInterval(function() {
    // 1秒ごとに時間を設定
    setTime();
  }, 1000)
  
  // 時間を更新する
  function setTime() {
    const now = new Date();
    const year = now.getFullYear();
    // const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthStr = monthList[now.getMonth()];
    const date = now.getDate().toString().padStart(2, "0");
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2, "0");
    const weekList = [ "Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const weekStr = weekList[now.getDay()];
    
    $("#day").text(weekStr + ",");
    $("#date").text(date);
    $("#month").text(monthStr);
    $("#year").text(year);
    $("#hour").text(hour);
    $("#minute").text(minute);
    $("#second").text(second);    
  }
});