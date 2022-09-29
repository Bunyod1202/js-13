let elinputName = document.querySelector(".name")
let elinputRship = document.querySelector(".relotionship")
let elinputPhone = document.querySelector(".phone")
let ellist = document.querySelector(".list")
let elform = document.querySelector(".form")
let eltoast = document.querySelector(".toasts")
let eltoasta = document.querySelector(".toasta")

let array = JSON.parse(window.localStorage.getItem("lastname")) || [];

elform.addEventListener("submit", function (evt) {
  evt.preventDefault()
  let elinputNameValue = elinputName.value;
  let elinputRshipValue = elinputRship.value;
  let elinputPhoneValue = elinputPhone.value;
  setTimeout(() => {
    eltoast.classList.remove("show")
    eltoasta.classList.remove("show")
  }, 4000);
  let obj = {
    id: array.length + 1,
    name: elinputNameValue,
    relotionship: elinputRshipValue,
    phone: elinputPhoneValue,
  }
  let arrays = array.findIndex(function(item){
      
    if (item.phone === elinputPhoneValue) {
    return 1202;
    } 
  })
  console.log(arrays);
   if (arrays == 0) {
    array.push()
    eltoast.classList.add("show")
    
   }else if (elinputNameValue !== "" && elinputRshipValue !== "" && elinputPhoneValue !== "") {
    array.push(obj)
  } else if (elinputNameValue == "" && elinputRshipValue == "") {
    eltoasta.classList.add("show")
  }
 

  adds(array)
  window.localStorage.setItem("lastname", JSON.stringify(array));

  elinputName.value = ""
  elinputRship.value = ""
  elinputPhone.value = ""  
})

adds(array)

function adds(arr) {
  ellist.innerHTML = "";

  arr.forEach(function (item ) {
    let items = document.createElement("li")
    let name = document.createElement("p")
    let number = document.createElement("span")
    let Rships = document.createElement("p")
    let phone = document.createElement("a")
    
    items.classList.add("list-unstyled","text-center", "px-5", "py-3", "alert-success", "mt-3", "border", "border-success", "border-4", "border-start-0","w-100", "border-end-0", "rounded-pill","mx-auto")
    // tex.classList.add("ms-2","text-success")
    number.classList.add("text-success","mb-5","fw-bold", )
    
    
    number.textContent = item.id;
    name.textContent = item.name;
    Rships.textContent = item.relotionship;
    phone.textContent = item.phone;

    phone.href = `tel:${item.phone}`

    items.appendChild(number)
    items.appendChild(name)
    items.appendChild(Rships)
    items.appendChild(phone)
    ellist.appendChild(items)
    
 


  })
 
};






[].forEach.call(document.querySelectorAll('.phone'), function (input) {
  let keyCode;
  function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault();
    let matrix = "+998 (__) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          newValue = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
          });
          i = newValue.indexOf("_");
          if (i != -1) {
            i < 5 && (i = 3);
            newValue = newValue.slice(0, i);
          }
          let reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function (a) {
            return "\\d{1," + a.length + "}";
          }).replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
          if (event.type == "blur" && this.value.length < 5) this.value = "";
        }
        
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false);
      });
      
      
    
