const fetchData = () => {
  let timeout;
  
  const input = document.querySelector('.form-control');
  
  input.addEventListener('input', function() {
    clearTimeout(timeout);
    
    const textfromuser = this.value;
    
    timeout = setTimeout(() => {
      if (textfromuser.trim() !== '') {
        alert(`Ищем: ${textfromuser}`);
      }
    }, 1000);
  });
};

export default fetchData;