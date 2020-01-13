function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds / 60) - (hours * 60));
  let sec = seconds % 60;
  
  return [
          hours.toString().padStart(2,'0'),
          minutes.toString().padStart(2,'0'),
          sec.toString().padStart(2,'0')
  ].join(':');
}

