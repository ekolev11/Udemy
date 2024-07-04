function printDate(){
      let currentDate = new Date();
      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
      let day = currentDate.getDay();
      let month = monthNames[currentDate.getMonth()]
      let year = currentDate.getFullYear();
      let formattedDate = day + " " + month + " " + year;
      return formattedDate
    }  
    export {printDate};