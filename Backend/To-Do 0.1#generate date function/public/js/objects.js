document.addEventListener("DOMContentLoaded", function() {
    const addItemButton = document.querySelector(".addItem");
    const inputElement = document.querySelector(".input");
    const inputCont = document.querySelector(".inputField")
    const bottomContainer = document.querySelector(".bottomContainer")
    const sendToDoButton = document.querySelector(".sendTodo");
     
    sendToDoButton.addEventListener("click", function(){
        addTodo();       
     })

    addItemButton.addEventListener("click", function() {
            bottomContainer.classList.toggle("active");
            addItemButton.classList.toggle("clicked");
            inputCont.classList.toggle("active");
            inputElement.classList.toggle("active");
    
    });

      let textField = document.querySelector(".textArea");
      
      textField.addEventListener("keydown", function(e){
        
        let keyName = e.key;
        let inputValue = textField.value;
        let newLiItem = document.createElement("li");
        let liBox = document.querySelector(".items")
        newLiItem.classList.add("rightItems");
        newLiItem.innerHTML = `
        <div class="checkText">
            <div class="wrapper"><input class="check" type="checkbox"></div>
            <p>${inputValue}</p>
        </div>
        <div class="rightBtn">
            <button class="edit"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg></button>
            <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg></button>
        </div>`;
        if (keyName === "Enter"){
            console.log(inputValue);
            
            if (inputValue !== ""){
                liBox.appendChild(newLiItem);
                textField.value = "";
                e.preventDefault();
            }else{
              e.preventDefault();
              textField.value = "";
            }
        }

      })
    
});
