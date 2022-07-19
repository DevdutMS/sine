const readCountryCodesAndList = async () => {
  const loadJson = async () => {
    const res = await fetch("CountryCodes.json").then((response) =>
      response.json()
    );
    return res;
  };
  const dropdown = document.getElementById("code-dropdown");
  dropdown.length = 0;

  const defaultOption = document.createElement("option");
  defaultOption.text = "Choose Country Code";
  defaultOption.disabled = true;

  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;
  const res = await loadJson();
  for (let i = 0; i < res.length; i++) {
    option = document.createElement("option");
    option.text = res[i].dial_code + " - " + res[i].code;
    option.value = res[i].dial_code;
    if (res[i].code === "IN") option.selected = true;
    dropdown.add(option);
  }
};
readCountryCodesAndList();
