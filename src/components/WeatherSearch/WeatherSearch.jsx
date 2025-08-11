
const handleSubmit = (e) => {
  e.preventDefault();
  props.fetchData(city); // Don't forget to pass city state!
  setCity('');
};


