var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
var close = document.getElementById("btn-close");

im.mask(selector);

const validation = new JustValidate('.contacts__form', {
  errorFieldCssClass: "is-invalid",
  errorFieldStyle: {
    border: '1px solid #FF6972',
  },
  errorLabelStyle: {
    fontSize: "12px",
    color: '#FF6972'
  },
  focusInvalidField: true,
  lockForm: true
});

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат'
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Недопустимый формат'
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат'
    },
  ])
  .onSuccess(() => {
    document.getElementById('popup').style.visibility = "visible";
    document.getElementById('popup').style.opacity = 1;
  })

tippy('.js-tultipe', {
  theme: 'black'
})