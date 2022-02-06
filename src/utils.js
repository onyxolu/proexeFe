export const prefillFormInputValues = (formValues) => {
  for (var name in formValues) {
    var elem = document.getElementsByName(name);
    if (elem.length > 0) {
      console.log(name, elem);
      for (var i = 0; i < elem.length; i++) {
        console.log(elem[i]);
        if (elem[i].localName == "textarea") {
          elem[i].innerHTML = formValues[name];
        }
        elem[i].setAttribute("value", formValues[name]);
      }
    }
  }
};

export const onChangeInputImage = (e) => {
  const files = [];
  const reader = new FileReader();
  files.push(e.target.files[0]);
  reader.onloadend = () => {
    files[0].preview = reader.result;
    files[0].toUpload = true;
    this.setState({
      imageFiles: files,
    });
  };
  reader.readAsDataURL(e.target.files[0]);
};
